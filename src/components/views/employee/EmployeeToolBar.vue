<template>
  <div class="main__toolbar">
    <div class="toolbar__left title">
      Danh sách nhân viên
    </div>
    <div class="toolbar__right">
      <button
        @click="openFormEmployeeDetail()"
        class="btn btn__add"
        commandtype="Add"
        title="Thêm mới"
        tabindex="3"
      >
        <span>Thêm nhân viên</span>
      </button>
      <button
        class="btn btn__delete"
        title="Xóa nhân viên"
        tabindex="3"
        @click="openPopup()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          class="icon-delete bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>

        <span>Xóa nhân viên</span>
      </button>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "ToolBar",
  data() {
    return {};
  },
  methods: {
    /**
     * Open form employee detail
     * DVHAI 17/06/2021
     */
    openFormEmployeeDetail() {
      this.$emit("openFormEmployeeDetail");
    },

    /**
     * Open confirm popup
     * DVHAI 17/06/2021
     */
    openPopup() {
      this.$emit("openPopup");
    },
  },
};
</script>

<style scoped>
/* toolbar css */
.main__toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar__right {
  display: flex;
  justify-content: center;
}

button.btn {
  padding-right: 16px;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.btn__add {
  background-position: 16px center;
  background-repeat: no-repeat;
  background-image: url("../../../assets/icon/add.png");
}

.btn__add span {
  padding-left: 44px;
}

.btn__delete {
  background-color: #f65454 !important;
}

.icon-delete {
  margin: 0px 8px 0px 10px;
}

.btn__delete:hover {
  opacity: 0.9;
}
</style>
