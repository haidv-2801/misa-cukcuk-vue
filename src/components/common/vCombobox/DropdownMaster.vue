<template>
  <DxSelectBox
    class="dxdatebox"
    :noDataText="'Không tìm thấy'"
    :placeholder="data.data.placeHolder"
    :searchEnabled="true"
    :showClearButton="true"
    :width="data.style.width"
    :height="data.style.height"
    :data-source="data.data.items"
    v-model="cloneModel"
  />
</template>

<script>
import DxSelectBox from "devextreme-vue/select-box";

export default {
  name: "DropdownMaster",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    model: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      cloneModel: -1,
    };
  },
  components: {
    DxSelectBox,
  },
  methods: {},
  watch: {
    /**
     * Track cloneModel and change model value outside
     * the component
     * DVHAI 19/06/2021
     */
    cloneModel() {
      let value = this.data.data.items.indexOf(this.cloneModel);
      if (value == -1) value = null;
      this.$emit("changeValueInput", this.data.data.inputId, value);
    },

    model() {
      this.cloneModel = this.data.data.items[this.model];
    },
  },
};
</script>

<style>
.dx-texteditor {
  border: 1px solid #bbbbbb;
}

.dxdatebox.dx-state-focused .dx-texteditor {
  border: 1px solid #019160;
}

.dxdatebox .dx-icon-clear::before {
  content: "";
}

.dxdatebox span.dx-icon.x-icon-clear {
  background-image: url("../../../assets/icon/x.svg");
}

.dx-scrollview-content .dx-state-hover {
  background-color: #e9ebee !important;
}

.dx-scrollview-content .dx-state-active {
  border-color: #e9ebee;
  background-color: #019160 !important;
}

.dxdatebox .dx-placeholder::before {
  text-indent: 7px;
  font-size: 11px !important;
  color: #bbbbbb;
  color: var(--color-hint);
}

.dxdatebox .dx-button-normal {
  width: 38px;
  padding: 0;
}

.dxdatebox .dx-dropdowneditor-icon {
  border: none;
  padding: 0;
  width: 100%;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  font-size: 0px;
  background-image: url("../../../assets/icon/arrow-down.svg");
  background-size: 13px;
}

.dxdatebox .dx-dropdowneditor-button.dx-state-active .dx-dropdowneditor-icon,
.dx-dropdowneditor.dx-dropdowneditor-active .dx-dropdowneditor-icon {
  background-color: #e9ebee;
}

.dxdatebox .dx-texteditor-input-container {
  color: #000000;
  font-family: "GoogleRegular";
  font-size: 13px;
  padding-left: 7px;
}

.dxdatebox .dx-texteditor-input {
  font-weight: 550;
}

.dx-texteditor.dx-editor-outlined {
  border: 1px solid #bbbbbb;
}

.dx-show-clear-button .dx-icon-clear {
  position: relative;
  top: 0;
  margin-top: 0;
  color: rgb(201, 201, 201);
}

.dx-scrollable-container {
  color: #000000;
  font-family: "GoogleRegular";
  font-size: 13px;
}

.dx-dropdownlist-popup-wrapper
  .dx-list:not(.dx-list-select-decorator-enabled)
  .dx-list-item-content {
  padding: 0px;
  line-height: 40px;
  height: 40px;
}

.dx-list:not(.dx-list-select-decorator-enabled)
  .dx-list-item.dx-list-item-selected {
  color: #ffffff !important;
  background-color: #019160 !important;
}

.dx-list .dx-list-item {
  background-image: url("../../../assets/icon/check-lg.svg");
  background-repeat: no-repeat;
  background-size: 0;
  background-position-x: 10px;
  background-position-y: center;
  padding-left: 33px;
}

.dx-list .dx-list-item.dx-list-item-selected {
  background-size: 13px;
}

.dx-list:not(.dx-list-select-decorator-enabled) .dx-list-item.dx-state-focused {
  color: #000000;
  background-color: #e9ebee;
  border: none !important;
  outline: none !important;
}

.dxdatebox .dx-popup-wrapper > .dx-overlay-content {
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
  border-radius: 4px;
}

.dx-scrollview-content {
  max-height: 166px;
}

.dxdatebox span.dx-icon.dx-icon-clear {
  background-image: url("../../../assets/icon/x.svg");
  background-color: #e9ebee;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-position: center;
}

.dxdatebox span.dx-icon.dx-icon-clear:hover {
  background-color: rgb(233, 235, 238, 0.5);
}

span.dx-clear-button-area {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dxdatebox .dx-button-content {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: 1px solid#bbbbbb;
}

.dxdatebox.dx-dropdowneditor-active .dx-button-content {
  background-color: #e9ebee;
  border-left: none;
}

.dxdatebox.dx-dropdowneditor-active .dx-dropdowneditor-icon {
  transform: rotateX(180deg);
  background-color: unset;
}
</style>
