<template>
  <div class="main__toolbar">
    <div class="toolbar__left title">
      Danh sách nhân viên
    </div>
    <div class="toolbar__right">
      <button
        @click="openFormEmployeeDetail()"
        class="btn buttonItem"
        commandtype="Add"
        title="Thêm mới"
        tabindex="10"
      >
        <span>Thêm nhân viên</span>
      </button>
      <!-- <button class="btn buttonItem" commandtype="Delete" title="Xóa nhân viên" tabindex="10">
            <span>Xóa</span>
        </button>
        <button class="btn buttonItem" commandtype="Edit" title="Sửa nhân viên" tabindex="10">
            <span>Sửa</span>
        </button> -->
    </div>
  </div>
</template>

<script>
export default {
    name:'ToolBar',
    data() {
        return {

        }
    },
    methods: {
        openFormEmployeeDetail() {
          this.$emit('openFormEmployeeDetail');
        }
    }
};
</script>

<style>
/* toolbar css */
.main__toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.toolbar__right button {
    margin-left: 10px;
    padding: 0;
    cursor: pointer;
    background-position: 16px center;
    background-repeat: no-repeat;
    background-image: url("../../../assets/icon/add.png");
}

.toolbar__right span {
    padding-right: 16px;
    padding-left: 44px;
}
</style>
