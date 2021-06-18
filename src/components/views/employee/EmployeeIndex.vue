<template>
  <div class="main">
    <!-- confirm popup -->
    <ConfirmDialog 
    ref="confirmDialog" 
    @deleteRecord="deleteRecord" />

    <!-- form employee -->
    <EmployeeDetail @refreshGrid="refreshGrid" ref="formEmployeeDetail" />

    <!-- toolbar -->
    <EmployeeToolBar
      @openPopup="openPopup"
      @openFormEmployeeDetail="openFormEmployeeDetail"
    />

    <!-- filterbar -->
    <EmployeeFilterBar 
    @filterTable="filterTable"
    @refreshGrid="refreshGrid" />

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
import ConfirmDialog from "../../common/ConfirmDialog.vue";

export default {
  name: "EmployeeIndex",
  components: {
    EmployeeDetail,
    EmployeeToolBar,
    EmployeeFilterBar,
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

    filterTable(value) {
      this.$refs.Grid.filterTable(value);
    },
    
    /**
     * Open from employee detail
     * DVHAI 14/06/2021
     */
    openFormEmployeeDetail(item) {
      console.log(item);
      //invoke openform method
      this.$refs.formEmployeeDetail.openForm(item);

      //send overlay event
      this.$bus.emit("displayOverlay");
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
      this.$refs.confirmDialog.openPopup();
    },

    /**
     * Delete selected record
     * DVHAI 14/06/2021
     */
    deleteRecord() {
      this.$refs.Grid.deleteRecord();
    },

  },
};
</script>

<style scoped>
@import url("../../../assets/css/common/main.css");
</style>
