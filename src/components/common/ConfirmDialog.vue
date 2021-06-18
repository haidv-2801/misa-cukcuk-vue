<template>
  <transition name="slide">
    <div v-if="isShow" class="alert">
      <div @click="closePopup()" class="alert__iconClose">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
      <div class="alert__title">
        <div class="title__text">Xóa bản ghi</div>
      </div>
      <div class="alert__main">
        <div class="main__icon">
          <svg
            fill="red"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="exclamation-triangle"
            class="svg-inline--fa fa-exclamation-triangle fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="red"
              d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
            ></path>
          </svg>
        </div>
        <div class="main__text">
          <p>Bạn có chắc muốn xóa <b>"nhân viên"</b> không</p>
        </div>
      </div>
      <div class="alert__bottom">
        <button @click="cancel()" class="btn btn__cancel">Hủy</button>
        <button @click="deleteRecord()" class="btn btn__delete">Xóa</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: ["data"],
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    /**
     * Open popup
     * DVHAI 17/06/2021
     */
    openPopup() {
      this.isShow = true;

      this.invokeOverlay();
    },

    /**
     * Close popup
     * DVHAI 17/06/2021
     */
    closePopup() {
      this.isShow = false;

      this.invokeOverlay();
    },

    /**
     * Do nothing
     * DVHAI 17/06/2021
     */
    cancel() {
      this.closePopup();
      //alert success
    },

    /**
     * Delete record
     * DVHAI 17/06/2021
     */
    async deleteRecord() {
      await this.$emit("deleteRecord");
      await this.$bus.emit("openToast", {type:'toast--success', text:'Xóa nhân viên thành công'})
      this.closePopup();
    },

    /**
     * Invoke overlay
     * DVHAI 14/06/2021
     */
    invokeOverlay() {
      this.$bus.emit("displayOverlay");
    },
  },
};
</script>

<style>
.btn {
  outline: none;
  border: none;
  font-family: GoogleRegular;
  height: 40px;
  border-radius: 5px;
}

.alert {
  z-index: 1000;
  height: fit-content;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 16%);
  border-radius: 6px;
  border-collapse: separate;
}

.alert__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: GoogleBold;
  font-size: 15px;
  padding: 24px 5px 0px 24px;
}

.alert__main {
  font-size: 13px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 24px;
}

.main__icon svg {
  width: 20px;
  height: 20px;
}

.main__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f4f4f4;
  border-radius: 50%;
}

.main__text {
  padding-left: 10px;
  flex: 1;
}

.alert__bottom {
  height: 60px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 24px;
}

.alert__iconClose {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
}

.alert__iconClose svg {
  width: 20px;
  height: 20px;
  font-weight: 200;
}

.alert__iconClose:hover {
  background-color: #f4f4f4;
}

.btn__cancel {
  color: black !important;
  background-color: #f4f4f4 !important;
}

.btn__delete {
  background-color: #f65454 !important;
}

.btn__delete:hover {
  opacity: 0.9;
}

.btn__delete,
.btn__cancel {
  cursor: pointer;
  margin-left: 10px;
  padding: 0px 24px;
  text-align: center;
}

.btn__cancel:hover {
  background-color: #e9ebee !important;
}
</style>
