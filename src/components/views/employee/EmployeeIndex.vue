<template>
  <div class="main">
    <!-- confirm popup -->
    <DialogConfirmDel
      :data="entity"
      ref="confirmDialogDel"
      @deleteRecord="deleteRecord"
    />

    <DialogConfirmStopTyping
      :data="entity"
      ref="confirmDialogStop"
      @closeForm="closeFormEmployeeDetail"
    />

    <!-- form employee -->
    <EmployeeDetail
      @openDialogConfirmStoptyping="openDialogConfirmStoptyping"
      @refreshGrid="refreshGrid"
      ref="formEmployeeDetail"
    />

    <!-- toolbar -->
    <EmployeeToolBar
      @openPopup="openPopup"
      @openFormEmployeeDetail="openFormEmployeeDetail"
    />

    <!-- filterbar -->
    <EmployeeFilterBar
      @changeValueFilterString="changeValueFilterString"
      @filterTable="filterTable"
      @refreshGrid="refreshGrid"
    />

    <!-- grid -->
    <Grid
      ref="Grid"
      :gridData="gridDataTable"
      @openFormDetail="openFormEmployeeDetail"
      @changePageSize="changePageSize"
      @changePageNumber="changePageNumber"
    />
  </div>
</template>

<script>
import EmployeeDetail from "./EmployeeDetail.vue";
import EmployeeToolBar from "./EmployeeToolBar.vue";
import EmployeeFilterBar from "./EmployeeFilterBar.vue";
import Grid from "../../common/Grid.vue";
import Paging from "../../common/Paging.vue";
import DialogConfirmDel from "../../common/vdialog/DialogConfirmDel.vue";
import DialogConfirmStopTyping from "../../common/vdialog/DialogConfirmStopTyping.vue";
import EmployeeAPI from "../../../api/coponents/EmployeeAPI";

export default {
  name: "EmployeeIndex",
  components: {
    EmployeeDetail,
    EmployeeToolBar,
    EmployeeFilterBar,
    Grid,
    Paging,
    DialogConfirmDel,
    DialogConfirmStopTyping,
  },
  data() {
    return {
      //use for form detail
      isDisplayedEmployeeDetail: false,

      //use form cofirm log
      entity: {
        entityName: "Nhân Viên",
      },

      //use for grid
      gridDataTable: {
        column: [
          {
            fieldName: "EmployeeCode",
            displayName: "Mã nhân viên",
            dataType: "",
            displayType: "",
          },
          {
            fieldName: "FullName",
            displayName: "Tên nhân viên",
            dataType: "",
            displayType: "",
          },
          {
            fieldName: "Gender",
            displayName: "Giới tính",
            dataType: "Enum",
            displayType: "Gender",
          },
          {
            fieldName: "DateOfBirth",
            displayName: "Ngày sinh",
            dataType: "Date",
            displayType: "",
          },
          {
            fieldName: "PhoneNumber",
            displayName: "Số điện thoại",
            dataType: "",
            displayType: "",
          },
          {
            fieldName: "Email",
            displayName: "Email",
            dataType: "",
            displayType: "",
          },
          {
            fieldName: "Address",
            displayName: "Địa chỉ",
            dataType: "",
            displayType: "",
          },
          {
            fieldName: "IdentityNumber",
            displayName: "CMND/CCCD",
            dataType: "Number",
            displayType: "",
          },
          {
            fieldName: "DepartmentName",
            displayName: "Phòng ban",
            dataType: "",
            displayType: "",
          },
          {
            fieldName: "PositionName",
            displayName: "Vị trí",
            dataType: "",
            displayType: "",
          },
          {
            fieldName: "Salary",
            displayName: "Lương",
            dataType: "Number",
            displayType: "Money",
          },
          {
            fieldName: "WorkStatus",
            displayName: "Tình trạng",
            dataType: "Enum",
            displayType: "WorkStatus",
          },
        ],
        data: [],
        pagination: {
          pageSize: 7,
          pageNumber: 1,
          totalPage: null,
          totalRecord: null,
          maximumPage: 4,
        },
      },

      //use for filterbar
      filterString: "",
    };
  },
  created() {
    /**
     * Get data from server
     * DVHAI 13/06/2021
     */
    this.filterTable();
  },

  watch: {},

  methods: {
    /**
     * Change page number
     * DVHAI 21/06/2021
     */
    changePageNumber(value) {
      this.gridDataTable.pagination.pageNumber = value;

      this.refreshGrid();
    },

    /**
     * Change page size
     * DVHAI 21/06/2021
     */
    changePageSize(value) {
      this.gridDataTable.pagination.pageSize = value;

      this.resetPageNumber(1)

      this.refreshGrid();
    },

    /**
     * Reset pagenumber
     * DVHAI 21/06/2021
     */
    resetPageNumber(pageNumber) {
      this.gridDataTable.pagination.pageNumber = pageNumber;
    },

    /**
     * Change value filter string
     * DVHAI 21/06/2021
     */
    changeValueFilterString(value) {
      this.filterString = value;
    },

    /**
     * Config data paging
     * DVHAI 21/06/2021
     */
    configDataPaging() {},

    /**
     * Get data from server
     * DVHAI 13/06/2021
     */
    getDataGrid() {
      this.$bus.emit("displayLoader");
      EmployeeAPI.getAll()
        .then((response) => {
          this.gridDataTable.data = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.$bus.emit("openToast", {
            type: "toast--error",
            text: "Lỗi. Vui lòng liên hệ MISA",
          });
        })
        .finally(() => {
          this.$bus.emit("displayLoader");
        });
    },

    /**
     * Filter
     * DVHAI 21/06/2021
     */
    filterTable() {
      if (this.filterString.toString().length <= 0) {
        //get all
        this.filterString = "n";
      }

      //params: pagesize, pagenumber, filterString
      this.$bus.emit("displayLoader");
      EmployeeAPI.filter(
        this.gridDataTable.pagination.pageSize,
        this.gridDataTable.pagination.pageNumber - 1,
        this.filterString
      )
        .then((response) => {
          this.gridDataTable.data = response.data.Data;
          this.gridDataTable.pagination.totalRecord = response.data.TotalRecord;
          this.gridDataTable.pagination.totalPage = response.data.TotalPage;
        })
        .catch((error) => {
          console.log(error);
          this.$bus.emit("openToast", {
            type: "toast--error",
            text: "Lỗi. Vui lòng liên hệ MISA",
          });
        })
        .finally(() => {
          this.$bus.emit("displayLoader");
        });
    },

    /**
     * Open from employee detail
     * DVHAI 14/06/2021
     */
    openFormEmployeeDetail(item) {
      //invoke openform method
      this.$refs.formEmployeeDetail.openForm(item);
    },

    /**
     * Close from employee detail
     * DVHAI 14/06/2021
     */
    closeFormEmployeeDetail() {
      this.$refs.formEmployeeDetail.closeForm();
    },

    /**
     * Refresh grid
     * DVHAI 14/06/2021
     */
    refreshGrid() {
      this.filterTable();
    },

    /**
     * Open confirm popup
     * DVHAI 14/06/2021
     */
    openPopup() {
      this.$refs.confirmDialogDel.openPopup();
    },

    /**
     * Delete selected record
     * DVHAI 14/06/2021
     */
    async deleteRecord() {
      let listSelectedRow = await this.$refs.Grid.getSelectedRow();

      for (const item of listSelectedRow) {
        let id = this.gridDataTable.data[item].EmployeeId;

        await EmployeeAPI.delete(id)
          .then((response) => {
            this.$bus.emit("openToast", {
              type: "toast--success",
              text: "Xóa thành công Nhân Viên",
            });
          })
          .catch((error) => {
            console.log(error);
            this.$bus.emit("openToast", {
              type: "toast--error",
              text: "Lỗi. Vui lòng liên hệ MISA",
            });
          });
      }

      this.refreshGrid();
    },

    /**
     * Open DialogConfirmStoptyping
     * form employee detail
     * DVHAI 14/06/2021
     */
    openDialogConfirmStoptyping() {
      this.$refs.confirmDialogStop.openPopup();
    },
  },
};
</script>

<style scoped>
@import url("../../../assets/css/common/main.css");
</style>
