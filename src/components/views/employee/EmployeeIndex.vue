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
    @refreshGrid="refreshGrid" ref="formEmployeeDetail" />

    <!-- toolbar -->
    <EmployeeToolBar
      @openPopup="openPopup"
      @openFormEmployeeDetail="openFormEmployeeDetail"
    />

    <!-- filterbar -->
    <EmployeeFilterBar @filterTable="filterTable" @refreshGrid="refreshGrid" />

    <!-- grid -->
    <Grid ref="Grid" @openFormEmployeeDetail="openFormEmployeeDetail" />

    <!-- Pagination -->
    <Paging />
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

export default {
  name: "EmployeeIndex",
  components: {
    EmployeeDetail,
    EmployeeToolBar,
    EmployeeFilterBar,
    Grid,
    Paging,
    DialogConfirmDel,
    DialogConfirmStopTyping
  },
  data() {
    return {
      isDisplayedEmployeeDetail: false,
      entity: {
        entityName: "Nhân Viên",
      },
    };
  },
  methods: {
    filterTable(value) {
      this.$refs.Grid.filterTable(value);
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
      this.$refs.Grid.getDataServer();
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
    deleteRecord() {
      this.$refs.Grid.deleteRecord();
    },

    openDialogConfirmStoptyping() {
      this.$refs.confirmDialogStop.openPopup();
    }
  },
};
</script>

<style scoped>
@import url("../../../assets/css/common/main.css");
</style>
