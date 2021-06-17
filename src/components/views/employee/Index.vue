<template>
  <div class="main">
    <!-- confirm popup -->
    <ConfirmDialog @getSelectedRow="getSelectedRow" ref="confirmDialog" />

    <!-- form employee -->
    <EmployeeDetail @refreshGrid="refreshGrid" ref="formEmployeeDetail" />

    <!-- toolbar -->
    <ToolBar
      @openPopup="openPopup"
      @openFormEmployeeDetail="openFormEmployeeDetail"
    />

    <!-- filterbar -->
    <FilterBar @refreshGrid="refreshGrid" />

    <!-- grid -->
    <Grid ref="Grid" @openFormEmployeeDetail="openFormEmployeeDetail" />

    <!-- Pagination -->
    <Paging />
  </div>
</template>

<script>
import EmployeeDetail from "../views/../employee/EmployeeDetail.vue";
import ToolBar from "@/components/views/employee/ToolBar";
// import ToolBar from '../views/employee/ToolBar.vue'
import FilterBar from "../../views/employee/FilterBar.vue";
import Grid from "../../common/Grid.vue";
import Paging from "../../common/Paging.vue";
import ConfirmDialog from "../../common/ConfirmDialog.vue";

export default {
  name: "Index",
  components: {
    EmployeeDetail,
    ToolBar,
    FilterBar,
    Grid,
    Paging,
    ConfirmDialog,
  },
  data() {
    return {
      isDisplayedEmployeeDetail: false,
    };
  },
  methods: {
    /**
     * Hàm mở form employeedetail
     * DVHAI 14/06/2021
     */
    openFormEmployeeDetail(item) {
      console.log(item);
      //gọi hàm mở form ở form
      this.$refs.formEmployeeDetail.openForm(item);

      //gửi sự kiện mở overlay cho app
      this.$bus.emit("displayOverlay");
    },

    refreshGrid() {
      this.$refs.Grid.getDataServer();
    },

    openPopup() {
      this.$refs.confirmDialog.openPopup();
    },

    getSelectedRow() {
      return this.$refs.Grid.getSelectedRow();
    },
  },
};
</script>

<style scoped>
@import url("../../../assets/css/common/main.css");
</style>
