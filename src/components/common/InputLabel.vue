<template>
  <div
    class="row__item tooltip"
    :style="{ '--scale': tooltipScale, '--tooltip-message': validation.error }"
  >
    <label :for="data.inputId" v-if="data.isRequired"
      >{{ data.labelText }}(<span class="color-red">*</span>)</label
    >
    <label v-else>{{ data.labelText }}</label>

    <DxDateBox
      class="focus"
      :displayFormat="'dd/MM/yyyy'"
      :placeholder="'dd/MM/yyyy'"
      :useMaskBehavior="true"
      :min="'01/01/1900'"
      :height="40"
      :showClearButton="true"
      :onFocusIn="focus"
      :onFocusOut="blur"
      v-model="cloneModel"
      v-if="data.inputType == 'date'"
    />

    <!-- money mask -->
    <input
      v-else-if="data.dataType == 'money'"
      class="focus"
      :id="data.inputId"
      :type="data.inputType"
      :style="styleObject"
      :class="{
        notValidControl: !validation.isValid,
        'align-right': data.dataType == 'money',
      }"
      :placeholder="data.mask"
      @focus="focus"
      @blur="blur"
      v-model="cloneModel"
      v-money="money"
      v-mask="data.mask"
      :masked="false"
    />
    <!-- no money mask -->
    <input
      v-else
      class="focus"
      :id="data.inputId"
      :type="data.inputType"
      :style="styleObject"
      :class="{
        notValidControl: !validation.isValid,
        'align-right': data.dataType == 'money',
      }"
      :placeholder="data.mask"
      @focus="focus"
      @blur="blur"
      @mouseover="raiseErrorMsg()"
      @mouseleave="hideErrorMsg()"
      v-model="cloneModel"
      v-mask="data.mask"
    />
  </div>
</template>

<script>
import validate from "../../scripts/common/validator.js";
import CommonFn from "../../scripts/common/common.js";

// dx datebox
import "devextreme/dist/css/dx.light.css";
import DxDateBox from "devextreme-vue/date-box";

export default {
  name: "InputLabel",
  components: {
    DxDateBox,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    model: {
      default: "",
    },
    styleObject: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    this.cloneModel = this.model;
  },
  data() {
    return {
      //validation state
      validation: {
        isValid: true,
        error: "",
      },

      //(1-show error, 0-hide error)
      tooltipScale: 0,

      //clone data model in prop
      cloneModel: JSON.parse(JSON.stringify(this.model)),

      //v-money format
      money: {
        decimal: "",
        thousands: ".",
        prefix: "",
        suffix: " (VNĐ)",
        precision: 0,
        masked: false,
      },

      isUniqueValue: true,
    };
  },
  methods: {
    /**
     * Raise error when hover
     * DVHAI 14/06/2021
     */
    raiseErrorMsg() {
      if(!this.validation.isValid) {
        this.tooltipScale = 1;
      }
    },

     /**
     * Hide error when lost hover
     * DVHAI 14/06/2021
     */
    hideErrorMsg() {
      this.tooltipScale = 0;
    },

    /**
     * Chang unique state refered by parent component
     * DVHAI 14/06/2021
     */
    changeUniqueState(isUnique) {
      this.isUniqueValue = isUnique;
    },

    /**
     * Focus input
     * DVHAI 14/06/2021
     */
    focus() {
      this.tooltipScale = 0;
      this.validation.isValid = true;

      this.changeUniqueState(true);
    },

    /**
     * Blur input
     * DVHAI 14/06/2021
     */
    blur() {
      //validate custom
      this.validate();

      //validate unique
      if (this.data.isUnique == true)
        this.validateUnique(this.data.inputId, this.cloneModel);
    },

    /**
     * Validate unique
     * DVHAI 14/06/2021
     */
    validateUnique(key, value) {
      this.$emit("checkUnique", key, value);
    },

    /**
     * Validate custom
     * DVHAI 14/06/2021
     */
    validate() {
      for (const x of this.data.validation) {
        var cons = x.split(":"),
          validateResult =
            cons.length > 1
              ? validate[cons[0]](this.cloneModel)(cons[1])
              : validate[x](this.cloneModel);

        let errMsg = '"' + this.data.labelText + " " + validateResult.msg + '"';

        //raise error
        this.setValidateError(validateResult.isValid, errMsg);

        //error fire
        if (!validateResult.isValid) {
          this.$bus.emit("allInputValid", validateResult.isValid);
          break;
        }
      }
    },

    /**
     * Set validate error
     * DVHAI 14/06/2021
     */
    setValidateError(isValid, errorMsg) {
      this.validation.isValid = isValid;
      this.validation.error = errorMsg;
      // this.tooltipScale = isValid == false ? 1 : 0;
    },
  },
  computed: {},
  watch: {
    /**
     * Change model value outside
     * DVHAI 14/06/2021
     */
    cloneModel() {
      //if is money convert to number format
      let moneyNumber = this.cloneModel || "";

      if (this.data.dataType == "money")
        moneyNumber = CommonFn.onlyNumber(moneyNumber);

      //change real value in parent component
      this.$emit("changeValueInput", this.data.inputId, moneyNumber);
    },

    /**
     * Clone new data
     * DVHAI 14/06/2021
     */
    model() {
      this.cloneModel = JSON.parse(JSON.stringify(this.model));
    },

    /**
     * Tracking unique value, if false raise error
     * DVHAI 14/06/2021
     */
    isUniqueValue: function(val) {
      let errMsg = "'" + this.data.labelText + " đã tồn tại" + "'";
      this.setValidateError(val, errMsg);
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/common/tooltip.css");

input {
  width: 100%;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  color: #000000;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
}

.color-red {
  color: red;
}

.row__item label {
  margin-bottom: 4px;
  font-family: GoogleMedium;
  font-size: 13px;
  display: block;
}

.row__item {
  flex: 1;
  margin-right: 10px;
}
</style>
