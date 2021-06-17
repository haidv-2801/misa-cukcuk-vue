<template>
  <div v-show="isShow" class="toast">
    <div @click="openToast()" class="toast__icon">
      <svg
        data-v-18f96775=""
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        viewBox="0 0 16 16"
        style=""
      >
        <path
          data-v-18f96775=""
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        ></path>
      </svg>
    </div>
    <div class="toast__text">
      <p>Xóa thành công nhân viên</p>
    </div>
    <div @click="closeToast()" class="toast__close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="green"
        class="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    openToast() {
      this.isShow = true;
    },

    closeToast() {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/common/toast.css");
</style>
