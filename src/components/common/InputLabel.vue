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
      v-if="data.inputType == 'date'"
    />

    <input
      v-else
      class="focus"
      :id="data.inputId"
      :type="data.inputType"
      :style="styleObject"
      :class="{ notValidControl: !validation.isValid }"
      @focus="focus"
      @blur="blur"
      v-model="cloneModel"
      v-mask="data.mask"
    />
  </div>
</template>

<script>
import moment from "moment";
import validate from "../../store/validator.js";

export default {
  name: "InputLabel",
  components: {},
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
      validation: {
        isValid: true,
        error: "",
      },
      tooltipScale: 0,
      cloneModel: JSON.parse(JSON.stringify(this.model)),
    };
  },
  methods: {
    /**
     * Focus input
     * DVHAI 14/06/2021
     */
    focus() {
      this.tooltipScale = 0;
      this.validation.isValid = true;
    },

    /**
     * Blur input
     * DVHAI 14/06/2021
     */
    blur() {
      this.validate();
    },

    /**
     * Validate
     * DVHAI 14/06/2021
     */
    validate() {
      for (const x of this.data.validation) {
        var cons = x.split(":"),
          validateResult =
            cons.length > 1
              ? validate[cons[0]](this.cloneModel)(cons[1])
              : validate[x](this.cloneModel);

        this.validation.isValid = validateResult.isValid;
        this.validation.error =
          '"' + this.data.labelText + " " + validateResult.msg + '"';
        this.tooltipScale = validateResult.isValid == false ? 1 : 0;

        if (!validateResult.isValid) {
          this.$bus.emit("allInputValid", validateResult.isValid);
          break;
        }
      }
    },
  },
  computed: {},
  watch: {
    /**
     * Change model value outside
     * DVHAI 14/06/2021
     */
    cloneModel() {
      this.$emit("changeValueInput", this.data.inputId, this.cloneModel);
    },

    /**
     * Clone new data
     * DVHAI 14/06/2021
     */
    model() {
      this.cloneModel = JSON.parse(JSON.stringify(this.model));
      if (this.data.dataType == "Date") {
        this.cloneModel = moment(this.cloneModel).format("YYYY-MM-DD");
      }
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
