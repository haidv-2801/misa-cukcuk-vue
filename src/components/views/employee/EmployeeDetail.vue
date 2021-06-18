<template>
  <transition name="slide">
    <div v-if="isOpen" class="form__add ui-draggable">
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
          <div class="img__field"></div>
          <div class="img__required">
            (Vui lòng chọn ảnh có định <br />
            dạng <br />.jpg .jpeg .png .gif)
          </div>
        </div>
        <div ref="formGroup" class="main__right">
          <div class="form__group">
            <div class="form__title">
              A. THÔNG TIN CHUNG
            </div>
            <div class="title__solid--blue"></div>
            <div class="form__content">
              <div class="form__row">
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.EmployeeCode"
                  :data="employeeCodeInput"
                />
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.FullName"
                  :data="employeeNameInput"
                />
              </div>
              <div class="form__row">
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.DateOfBirth"
                  :data="dateOfBirthInput"
                />
                <div class="row__item">
                  <label for="">Giới tính</label>
                  <div class="dropdown__gender dropdown__key left__item">
                    <Dropdown
                      @changeValueInput="changeValueInput"
                      :model="employeeModel.Gender"
                      :styleObject="styleDropdown"
                      :data="genderDropdown"
                    />
                  </div>
                </div>
              </div>
              <div class="form__row">
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.IdentityNumber"
                  :data="identityNumberInput"
                />
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.IdentityDate"
                  :data="identityDateInput"
                />
              </div>
              <div class="form__row">
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.IdentityPlace"
                  :data="identityPlaceInput"
                />

                <div class="row__item"></div>
              </div>
              <div class="form__row">
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.Email"
                  :data="emailInput"
                />
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.PhoneNumber"
                  :data="phoneNumberInput"
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
                    @changeValueInput="changeValueInput"
                    :model="employeeModel.PositionName"
                    :styleObject="styleDropdown"
                    :data="positionDropdown"
                  />
                </div>
                <div class="row__item">
                  <label for="">Phòng ban</label>
                  <Dropdown
                    @changeValueInput="changeValueInput"
                    :model="employeeModel.DepartmentName"
                    :styleObject="styleDropdown"
                    :data="departmentDropdown"
                  />
                </div>
              </div>
              <div class="form__row">
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.PersonalTaxCode"
                  :data="taxCodeInput"
                />
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.Salary"
                  :data="salaryInput"
                />
              </div>
              <div class="form__row">
                <InputLabel
                  MustValidate="true"
                  @changeValueInput="changeValueInput"
                  :model="employeeModel.JoinDate"
                  :data="joinDateInput"
                />
                <div class="row__item">
                  <label for="">Tình trạng công việc</label>
                  <Dropdown
                    @changeValueInput="changeValueInput"
                    :model="employeeModel.WorkStatus"
                    :styleObject="styleDropdown"
                    :data="workStatusDropdown"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form__bottom">
        <button class="btn-default btn-cancel" @click="closeForm()">Hủy</button>
        <button @click="save()" class="btn-default btn-green">
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

// import EmployeeModel from "../../../models/employeeModel.js";

function initState() {
  return {
    isOpen: false,
    styleDropdown: {
      width: "100%",
      height: "36px !important",
    },

    // data form

    departmentDropdown: {
      inputId: "DepartmentName",
      title: "Tất cả phòng ban",
      items: [
        "Phòng nhân sự",
        "Phòng kế toán",
        "Phòng kinh doanh",
        "Phòng sản xuất",
      ],
      dataType: "Enum",
      enumName: "",
    },
    positionDropdown: {
      inputId: "PositionName",
      title: "Tất cả vị trí",
      items: ["Giám đốc", "Fresher Web", "DepOops", "BA"],
      dataType: "Enum",
      enumName: "",
    },
    workStatusDropdown: {
      inputId: "WorkStatus",
      title: "Chọn tình trạng",
      items: ["Đang làm việc", "Đang thử việc", "Đã nghỉ việc"],
      dataType: "Enum",
      enumName: "WorkStatus",
    },
    genderDropdown: {
      inputId: "Gender",
      title: "Chọn giới tính",
      items: ["Nữ", "Nam", "Khác"],
      dataType: "Enum",
      enumName: "Gender",
    },

    //input
    employeeCodeInput: {
      inputId: "EmployeeCode",
      labelText: "Mã nhân viên",
      isRequired: true,
      inputType: "text",
      validation: ["required", "minLength:3"],
    },

    employeeNameInput: {
      inputId: "Fullname",
      labelText: "Họ và tên",
      isRequired: true,
      inputType: "text",
      validation: ["required"],
    },

    dateOfBirthInput: {
      inputId: "DateOfBirth",
      labelText: "Ngày sinh",
      inputType: "date",
      dataType: "Date",
      validation: [],
    },

    identityNumberInput: {
      inputId: "IdentityNumber",
      labelText: "Số CMTND/ Căn cước",
      isRequired: true,
      inputType: "text",
      validation: ['required'],
    },

    identityDateInput: {
      inputId: "IdentityDate",
      labelText: "Ngày cấp",
      inputType: "date",
      dataType: "Date",
      validation: [],
    },

    identityPlaceInput: {
      inputId: "IdentityPlace",
      labelText: "Nơi cấp",
      inputType: "text",
      validation: [],
    },

    emailInput: {
      inputId: "Email",
      labelText: "Email",
      isRequired: true,
      inputType: "text",
      validation: ["required", "email"],
      dataType: "Email",
    },

    phoneNumberInput: {
      inputId: "PhoneNumber",
      labelText: "Số điện thoại",
      isRequired: true,
      inputType: "text",
      validation: ["required"],
    },

    taxCodeInput: {
      inputId: "PersonalTaxCode",
      labelText: "Mã số thuế cá nhân",
      inputType: "text",
      validation: [],
    },

    salaryInput: {
      inputId: "Salary",
      labelText: "Mức lương cơ bản",
      inputType: "text",
      validation: [],
      dataType: "Number",
    },

    joinDateInput: {
      inputId: "JoinDate",
      labelText: "Ngày gia nhập công ty",
      inputType: "date",
      dataType: "Date",
      validation: [],
    },

    employeeModel: {},
    formMode: null,
    allInputValid: true
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
  created() {
    this.$bus.on('allInputValid', (value) => {
        this.allInputValid = value;
    });
  },
  methods: {
    /**
     * Reset all fields
     * DVHAI 14/06/2021
     */
    resetWindow() {
      Object.assign(this.$data, initState());
    },

    /**
     * Close form
     * DVHAI 11/06/2021
     */
    closeForm() {
      this.isOpen = false;

      //hide overlay
      this.invokeOverlay();
    },

    /**
     * Invoke overlay
     * DVHAI 14/06/2021
     */
    invokeOverlay() {
      this.$bus.emit("displayOverlay");
    },

    /**
     * Open form
     * DVHAI 14/06/2021
     */
    openForm(item) {
      this.resetWindow();

      if (item != null) {
        // this.bindDataForm(item);
        this.bindDataForm(item);
        this.formMode = item.EmployeeId;
      }

      this.isOpen = true;
    },

    /**
     * Bind data to edit form
     * DVHAI 14/06/2021
     */
    bindDataForm(item) {
      //Get record by id
      this.getEmployeeById(item.EmployeeId);

      // if (emp != null) {
      //   this.employeeModel = emp;
      // }
    },

    /**
     * Get record by id
     * DVHAI 14/06/2021
     */
    getEmployeeById(id) {
      var item = null;

      var url = `http://cukcuk.manhnv.net/v1/Employees/${id}`;
      this.axios
        .get(url)
        .then((response) => {
          this.employeeModel = response.data;
        })
        .catch((error) => alert(error));

      return item;
    },

    /**
     * Save data
     * DVHAI 14/06/2021
     */
    async save() {
      this.allInputValid =  true;
      var elValidate = this.$refs.formGroup.querySelectorAll("[MustValidate]");

      for (const el of elValidate) {
        await el.querySelector(".focus").focus();
        await el.querySelector(".focus").blur();
      }
      
      if(this.allInputValid) {
        if (!this.formMode) {
          this.axios
            .post("http://cukcuk.manhnv.net/v1/Employees/", this.employeeModel)
            .then((response) => {
              alert("Add : " + response);
              this.refreshGrid();
            })
            .catch((error) => alert(error));
        } else {
          this.axios
            .put(
              "http://cukcuk.manhnv.net/v1/Employees/" +
                this.employeeModel.EmployeeId,
              this.employeeModel
            )
            .then((response) => {
              this.refreshGrid();
              alert("Edit " + response);
            })
            .catch((error) => alert(error));
        }
      }

    },

    /**
     * Refresh grid
     * DVHAI 14/06/2021
     */
    refreshGrid() {
      this.$emit("refreshGrid");
    },

    /**
     * Change value input called by inputlabel
     * compoment
     * DVHAI 14/06/2021
     */
    changeValueInput(key, value) {
      this.employeeModel[key] = value;
      console.log(value);
    },

    /**
     * Check all input
     * DVHAI 14/06/2021
     */
    async validateSuccess() {},

    /**
     * Change validate result
     * DVHAI 14/06/2021
     */
    validateResult(value) {
      if(typeof  value == Boolean) 
        this.validateResult = value;
    }
  },
};
</script>

<style scoped>

@import url("../../../assets/css/views/employee/EmployeeDetail.css");

</style>
