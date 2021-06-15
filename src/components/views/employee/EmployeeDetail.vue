<template>
  <transition name="slide">
    <div v-show="isOpen" class="form__add ui-draggable">
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
                <InputLabel :data="employeeCodeInput" />
                <InputLabel :data="employeeNameInput" />
              </div>
              <div class="form__row">
                <InputLabel :data="dateOfBirthInput" />
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
                <InputLabel :data="identityNumberInput" />
                <InputLabel :data="identityDateInput" />
              </div>
              <div class="form__row">
                <InputLabel :data="identityPlaceInput" />

                <div class="row__item"></div>
              </div>
              <div class="form__row">
                <InputLabel :data="emailInput" />
                <InputLabel :data="phoneNumberInput" />
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
                <InputLabel :data="taxCodeInput" />
                <InputLabel :data="salaryInput" />
              </div>
              <div class="form__row">
                <InputLabel :data="joinDateInput" />
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
  </transition>
</template>

<script>
import InputLabel from "../../common/InputLabel.vue";
import Dropdown from "../../common/Dropdown.vue";
import EmployeeModel from "../../../models/employeeModel.js";

function initState() {
  return {
    isOpen: false,

    // data form
    dropdownData: [
      {
        title: "Tất cả phòng ban",
        items: [
          "Phòng nhân sự",
          "Phòng kế toán",
          "Phòng kinh doanh",
          "Phòng sản xuất",
        ],
        selected: null,
      },
      {
        title: "Tất cả vị trí",
        items: ["Giám đốc", "Fresher Web", "DepOops", "BA"],
        selected: null,
      },
      {
        title: "Chọn tình trạng",
        items: ["Đang làm việc", "Nhân viên cũ", "Thử việc", "Chính thức"],
        selected: null,
      },
      {
        title: "Chọn giới tính",
        items: ["Nam", "Nữ", "Khác"],
        selected: null,
      },
    ],

    styleDropdown: {
      width: "100%",
      height: "36px !important",
    },

    //input
    employeeCodeInput: {
      inputId: "inputEmployeeCode",
      labelText: "Mã nhân viên",
      isRequired: true,
      inputType: "text",
    },

    employeeNameInput: {
      inputId: "inputFullname",
      labelText: "Họ và tên",
      isRequired: true,
      inputType: "text",
    },

    dateOfBirthInput: {
      inputId: "inputDateOfBirth",
      labelText: "Ngày sinh",
      inputType: "date",
    },

    identityNumberInput: {
      inputId: "inputIdentityNumber",
      labelText: "Số CMTND/ Căn cước",
      isRequired: true,
      inputType: "text",
    },

    identityDateInput: {
      inputId: "inputIdentityDate",
      labelText: "Ngày cấp",
      inputType: "date",
    },

    identityPlaceInput: {
      inputId: "inputIdentityPlace",
      labelText: "Nơi cấp",
      inputType: "text",
    },

    emailInput: {
      inputId: "inputEmail",
      labelText: "Email",
      isRequired: true,
      inputType: "text",
      dataType: "Email",
    },

    phoneNumberInput: {
      inputId: "inputPhoneNumber",
      labelText: "Số điện thoại",
      isRequired: true,
      inputType: "text",
    },

    taxCodeInput: {
      inputId: "inputTaxCode",
      labelText: "Mã số thuế cá nhân",
      inputType: "text",
    },

    salaryInput: {
      inputId: "inputSalary",
      labelText: "Mức lương cơ bản",
      inputType: "text",
      dataType: "Number",
    },

    joinDateInput: {
      inputId: "inputJoinDate",
      labelText: "Ngày gia nhập công ty",
      inputType: "date",
    },

    employeeModel: new EmployeeModel().initData(),
  };
}

export default {
  name: "EmployeeDetail",
  components: {
    InputLabel,
    Dropdown,
  },
  props: {},
  data() {
    return initState();
  },
  methods: {
    /**
     * Clear dữ liệu form khi mở lại
     * DVHAI 14/06/2021
     */
    resetWindow() {
      Object.assign(this.$data, initState());
    },

    /**
     * Hàm đóng form
     * DVHAI 11/06/2021
     */
    closeForm() {
      this.isOpen = false;

      //gửi sự kiện mở overlay cho app
      this.$bus.emit("displayOverlay");
    },

    /**
     * Hàm mở form
     * DVHAI 14/06/2021
     */
    openForm(item) {
      console.log(item);

      //map dữ liệu từ init state sang data mặc định
      //để clear text
      this.resetWindow();

      if (item != null) {
        //dropdown binding

        //Lấy bản ghi theo id
        let emp = this.getEmployeeById(item.EmployeeId);

        //ánh xạ dữ liệu sang model
        for (const key in this.employeeModel) {
          if (Object.prototype.hasOwnProperty.call(emp, key)) {
            this.employeeModel[key] = emp[key];
          }
        }

        this.employeeCodeInput.model = this.employeeModel.EmployeeCode;
        this.employeeNameInput.model = this.employeeModel.FullName;
        this.dateOfBirthInput.model = this.employeeModel.DateOfBirth;
        this.identityNumberInput.model = this.employeeModel.identityNumberInput;
        this.identityDateInput.model = this.employeeModel.IdentityDate;
        this.identityPlaceInput.model = this.employeeModel.IdentityPlace;
        this.emailInput.model = this.employeeModel.Email;
        this.phoneNumberInput.model = this.employeeModel.PhoneNumber;
        this.taxCodeInput.model = this.employeeModel.PersonalTaxCode;
        this.salaryInput.model = this.employeeModel.Salary;
        this.joinDateInput.model = this.employeeModel.JoinDate;
      }

      this.isOpen = true;
    },

    /**
     * Hàm lấy data từ csdl theo id
     * DVHAI 14/06/2021
     */
    getEmployeeById(id) {
      console.log(id);

      return {
        EmployeeId: "00b7abf8-c9a3-11eb-94eb-42010a8c0002",
        EmployeeCode: "MF866",
        FirstName: null,
        LastName: null,
        FullName: "Do Van Hai",
        Gender: 1,
        DateOfBirth: null,
        PhoneNumber: "335565656",
        Email: "mail@gmail.com",
        Address: "Nam Định",
        identityNumberInput: "036200011834",
        IdentityDate: null,
        IdentityPlace: "Nam Định",
        JoinDate: null,
        MartialStatus: null,
        EducationalBackground: null,
        QualificationId: null,
        DepartmentId: null,
        PositionId: null,
        WorkStatus: null,
        PersonalTaxCode: "11324567",
        Salary: 122222222222,
        PositionCode: null,
        PositionName: "FresherWeb",
        DepartmentCode: null,
        DepartmentName: "IT",
        QualificationName: null,
        GenderName: null,
        EducationalBackgroundName: null,
        MartialStatusName: null,
        CreatedDate: "2021-06-10T04:19:09",
        CreatedBy: null,
        ModifiedDate: "2021-06-10T04:32:09",
        ModifiedBy: null,
      };
    },
  },
};
</script>

<style scoped>
/* transition */
.slide-leave-active,
.slide-enter-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%);
  opacity: 0;
}
@import url("../../../assets/css/views/employee/EmployeeDetail.css");
</style>
