<template>
  <div
    class="row__item tooltip"
    :style="{ '--scale': tooltipScale, '--tooltip-message': validation.error }"
  >
    <label :for="data.inputId" v-if="data.isRequired"
      >{{ data.labelText }}(<span class="color-red">*</span>)</label
    >
    <label v-else>{{ data.labelText }}</label>
    <input
      :id="data.inputId"
      class="focus"
      :type="data.inputType"
      :style="styleObject"
      v-model="data.model"
      @focus="focus"
      @blur="blur"
      :class="{ notValidControl: !validation.isValid }"
    />
  </div>
</template>

<script>
// import Enumeration from ".././../scripts/common/enumeration";
// import Resource from ".././../scripts/common/resource";
// import CommonFn from ".././../scripts/common/common";

function initState() {
  return {
    validation: {
      isValid: true,
      error: "",
    },
    tooltipScale: 0,
  };
}

export default {
  name: "InputLabel",
  components: {},
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    styleObject: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return initState();
  },

  methods: {
    focus() {
      this.resetComponent();
    },

    blur() {
      this.validate();
    },

    validate() {
      this.validateRequired();
    },

    validateRequired() {
      if (this.data.isRequired == true) {
        if (!this.data.model || this.data.model.toString().trim() == "") {
          this.validation.isValid = false;
          this.tooltipScale = 1;
          this.validation.error =
            '"' + this.data.labelText + " không được trống" + '"';
        } else {
          this.validation.isValid = true;
        }
      }
    },

    resetComponent() {
      Object.assign(this.$data, initState());
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
