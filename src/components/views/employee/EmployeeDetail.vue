<template>
  <div class="form__add ui-draggable">
    <div class="form__head ui-draggable-handle">
      <div class="head__left">
        <h2>THÔNG TIN NHÂN VIÊN</h2>
      </div>
      <div class="head__right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
          @click="closeForm()"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="form__main">
      <div class="main__left">
        <div class="img__field">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            ></path>
          </svg>
        </div>
        <div class="img__required">
          (Vui lòng chọn ảnh có định <br />
          dạng <br />.jpg .jpeg .png .gif)
        </div>
      </div>
      <div class="main__right">
        <div class="form__group">
          <div class="form__title">
            A. THÔNG TIN CHUNG
          </div>
          <div class="title__solid--blue"></div>
          <div class="form__content">
            <div class="form__row">
              <!-- <div class="row__item">
                <label for="">Mã nhân viên(<span class="required">*</span>)</label>
                <input
                  class="focus"
                  fieldname="EmployeeCode"
                  type="text"
                  required="true"/>
              </div> -->
              <InputLabel />

              <div class="row__item">
                <label for="">Họ và tên(<span class="required">*</span>)</label>
                <input
                  class="focus"
                  fieldname="FullName"
                  type="text"
                  required="true"
                />
              </div>
            </div>
            <div class="form__row">
              <div class="row__item">
                <label for="">Ngày sinh</label>
                <input class="focus" fieldname="DateOfBirth" type="date" />
              </div>
              <div class="row__item">
                <label for="">Giới tính</label>
                <!-- <select class="form-select" FieldName="Gender">
                                    <option value="0">Nữ</option>
                                    <option value="1" selected>Nam</option>
                                    <option value="2">Khác</option>
                                </select> -->

                <div class="dropdown__gender dropdown__key left__item">
                  <input
                    tabindex=""
                    class="dropdown-box focus"
                    fieldname="Gender"
                    enumname="Gender"
                    type="dropdown"
                    datatype="Enum"
                    readonly=""
                  />
                  <div class="dropdown__items">
                    <div class="dropdown__row" row="1">
                      <div class="svg__box"></div>
                      <span>Nam</span>
                    </div>
                    <div class="dropdown__row" row="0">
                      <div class="svg__box"></div>
                      <span>Nữ</span>
                    </div>
                    <div class="dropdown__row" row="2">
                      <div class="svg__box"></div>
                      <span>Khác</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form__row">
              <div class="row__item">
                <label for=""
                  >Số CMTND/ Căn cước(<span class="required">*</span>)</label
                >
                <input
                  class="focus"
                  fieldname="IdentityNumber"
                  required="true"
                  type="text"
                />
              </div>
              <div class="row__item">
                <label for="">Ngày cấp</label>
                <input class="focus" type="date" />
              </div>
            </div>
            <div class="form__row">
              <div class="row__item">
                <label for="">Nơi cấp</label>
                <input class="focus" type="text" />
              </div>

              <div class="row__item"></div>
            </div>
            <div class="form__row">
              <div class="row__item">
                <label for="">Email(<span class="required">*</span>)</label>
                <input
                  class="focus"
                  fieldname="Email"
                  required="true"
                  type="email"
                />
              </div>
              <div class="row__item">
                <label for=""
                  >Số điện thoại(<span class="required">*</span>)</label
                >
                <input
                  class="focus"
                  fieldname="PhoneNumber"
                  datatype="Number"
                  required="true"
                  min="0"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="form__group">
          <div class="form__title">
            B. THÔNG TIN CÔNG VIỆC
          </div>
          <div class="title__solid--blue"></div>
          <div class="form__content">
            <div class="form__row">
              <div class="row__item">
                <label for="">Vịtrí</label>
                <input class="focus" fieldname="PositionName" type="text" />
              </div>
              <div class="row__item">
                <label for="">Phòng ban</label>
                <input class="focus" fieldname="DepartmentName" type="text" />
              </div>
            </div>
            <div class="form__row">
              <div class="row__item">
                <label for="">Mã số thuế cá nhân</label>
                <input class="focus" type="text" />
              </div>
              <div class="row__item">
                <label for="">Mức lương cơ bản</label>
                <input
                  class="focus"
                  fieldname="Salary"
                  datatype="Number"
                  type="money"
                />
              </div>
            </div>
            <div class="form__row">
              <div class="row__item">
                <label for="">Ngày gia nhập công ty</label
                ><input class="focus" type="date" />
              </div>
              <div class="row__item">
                <label for="">Tình trạng công việc</label
                ><input class="focus" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form__bottom">
      <button class="btn-default" @click="closeForm()">Hủy</button>
      <button class="btn-default btn-green">Lưu</button>
    </div>
  </div>
</template>

<script>
import InputLabel from "../../common/InputLabel.vue";

export default {
  components: {
    InputLabel,
  },
  methods: {
    /**
     * Đóng form employee detail
     * thông qua refs main
     * DVHAI 11/06/2021
     */
    closeForm() {
      this.$emit("toggleEmployeeDetail");
    },
  },
};
</script>

<style scoped>
.focus:focus-visible {
  outline-color: #019160;
}

.required {
  color: red;
}

/* button */
.btn-default {
  cursor: pointer !important;
  padding: 0 16px;
  outline: none;
  border: none;
  font-family: GoogleRegular;
  height: 40px;
  border-radius: 4px;
}

.btn-green {
  color: #ffffff;
  background-color: #019160;
}

.btn-green:hover {
  background-color: #2fbe8e;
}

.btn-green:active {
  background-color: #01b075;
}

html {
  font-family: GoogleRegular;
  font-size: 13px;
  background-color: whitesmoke;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  align-items: center;
  justify-content: center;
  overflow: auto;
}

.form__add {
  overflow: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
  z-index: 9999999999999999999;
  position: absolute;
  background-color: white;
  border-radius: 4px;
  flex-direction: column;
  max-height: 100vh;
  width: 740px;
}

.form__head,
.form__main,
.form__bottom {
  padding: 0 24px;
}

.form__title {
  font-family: GoogleMedium;
  font-size: 15px;
}

.form__head {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.head__left {
}

.head__right {
  cursor: pointer;
}

.head__right:hover {
  opacity: 0.5;
  cursor: pointer;
}

.form__main {
  display: flex;
  flex: 1;
}

.main__left {
  margin-right: 10px;
  flex: 1;
}

.img__field {
  width: 150px;
  height: 150px;
}

.img__field svg {
  cursor: pointer;
  width: 100%;
  height: 100%;
  fill: #bbbbbb;
}

.img__required {
  text-align: center;
}

.main__right {
  display: flex;
  flex-direction: column;
  flex: 3;
}

.form__group {
  width: 100%;
}

.form__group:first-child {
  flex: 2;
}

.form__group input {
  width: 100%;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  color: #000000;
  height: 36px !important;
}

.form__row {
  display: flex;
  margin: 0px 0px 16px 0px;
}

.form__bottom {
  background-color: #e9ebee;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.form__bottom button {
  margin-left: 20px;
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

.title__solid--blue {
  margin: 10px 0px;
  height: 4px;
  width: 100px;
  background-color: #019160;
}

/* gender */

.dropdown__gender {
  position: relative;
  width: 100%;
}
</style>
