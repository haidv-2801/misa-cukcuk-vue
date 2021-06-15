<template>
  <div class="row__item">
    <label :for="data.inputId" v-if="data.isRequired"
      >{{ data.labelText }}(<span class="color-red">*</span>)</label
    >
    <label v-else>{{ data.labelText }}</label>
    <input
      class="focus"
      :type="data.inputType"
      :style="styleObject"
      v-model="data.model"
      @blur="validateRequired()"
      @focus="isValid = true"
      :class="{'notValidControl': !isValid}"
    />
  </div>
</template>

<script>
// import Enumeration from ".././../scripts/common/enumeration";
import Resource from ".././../scripts/common/resource";
// import CommonFn from ".././../scripts/common/common";

export default {
  name: "InputLabel",
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
    return {
      isValid: true,
      errors: "",
    };
  },
  methods: {
    validate() {
      this.validateRequired();

      this.validateType();
    },

    validateType() {
      if (this.data.dataType) {
        switch (this.data.dataType) {
          case Resource.DataTypeColumn.Number:
            if(this.data.model.trim() === '' || isNaN(this.data.model)) {
              this.isValid = false;
              this.errors = 'Nhập đúng định dạng';
            }
            break;
          case Resource.DataTypeColumn.Date:

            break;
          case Resource.DataTypeColumn.Enum:

            break;
        }
      }
    },

    validateRequired() {
      if (this.data.isRequired == true) {
        if (this.data.model.trim() === "") {
          this.isValid = false;
          this.errors = this.data.labelText + "không được trống";
          alert(this.errors);
        }
      } else {
        //
      }
    },

    
  },
};
</script>

<style scoped>
input {
  width: 100%;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  color: #000000;
  height: 36px;
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
