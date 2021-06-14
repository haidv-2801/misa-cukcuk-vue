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
              <InputLabel
                :name="'Mã nhân viên'"
                :styleObject="{ required: true }"
              />

              <InputLabel
                :name="'Họ và tên'"
                :styleObject="{ required: true }"
              />
            </div>
            <div class="form__row">
              <InputLabel :name="'Ngày sinh'" :type="'Date'" />
              <div class="row__item">
                <label for="">Giới tính</label>
                <div class="dropdown__gender dropdown__key left__item">
                  <Dropdown
                    :styleObject="styleDropdown"
                    :data="dropdownData[3]"
                  />
                </div>
              </div>
            </div>
            <div class="form__row">
              <InputLabel
                :name="'Số CMTND/ Căn cước'"
                :styleObject="{ required: true }"
              />
              <InputLabel :name="'Ngày cấp'" :type="'Date'" />
            </div>
            <div class="form__row">
              <InputLabel :name="'Nơi cấp'" />

              <div class="row__item"></div>
            </div>
            <div class="form__row">
              <InputLabel :name="'Email'" :styleObject="{ required: true }" />
              <InputLabel
                :type="'number'"
                :name="'Số điện thoại'"
                :styleObject="{ required: true }"
              />
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
                <Dropdown
                  :styleObject="styleDropdown"
                  :data="dropdownData[0]"
                />
              </div>
              <div class="row__item">
                <label for="">Phòng ban</label>
                <Dropdown
                  :styleObject="styleDropdown"
                  :data="dropdownData[1]"
                />
              </div>
            </div>
            <div class="form__row">
              <InputLabel :type="'number'" :name="'Mã số thuế cá nhân'" />
              <InputLabel :type="'number'" :name="'Mức lương cơ bản'" />
            </div>
            <div class="form__row">
              <InputLabel :name="'Ngày gia nhập công ty'" :type="'Date'" />
              <div class="row__item">
                <label for="">Tình trạng công việc</label>
                <Dropdown
                  :styleObject="styleDropdown"
                  :data="dropdownData[2]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form__bottom">
      <button class="btn-default btn-cancel" @click="closeForm()">Hủy</button>
      <button class="btn-default btn-green">
        <svg
          width="16"
          height="16"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="save"
          class="btn-icon-left svg-inline--fa fa-save fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z"
          ></path>
        </svg>
        <span>Lưu</span>
      </button>
    </div>
  </div>
</template>

<script>
import InputLabel from "../../common/InputLabel.vue";
import Dropdown from "../../common/Dropdown.vue";

export default {
  name: "EmployeeDetail",
  components: {
    InputLabel,
    Dropdown,
  },
  data() {
    return {
      dropdownData: [
        {
          title: "Tất cả phòng ban",
          items: [
            "Phòng nhân sự",
            "Phòng kế toán",
            "Phòng kinh doanh",
            "Phòng sản xuất",
          ],
        },
        {
          title: "Tất cả vị trí",
          items: ["Giám đốc", "Fresher Web", "DepOops", "BA"],
        },
        {
          title: "Chọn tình trạng",
          items: ["Đang làm việc", "Nhân viên cũ", "Thử việc", "Chính thức"],
        },
        {
          title: "Chọn giới tính",
          items: ["Nam", "Nữ", "Khác"],
        },
      ],
      styleDropdown: {
        width: "100%",
        height: "36px !important",
      },
    };
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
@import url("../../../assets/css/views/employee/EmployeeDetail.css");
</style>
