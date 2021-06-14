<template>
  <div class="main">
    <!-- form employee -->
    <EmployeeDetail ref="formEmployeeDetail"/>

    <!-- toolbar -->
    <ToolBar @openFormEmployeeDetail="openFormEmployeeDetail" />

    <!-- filterbar -->
    <FilterBar />

    <!-- grid -->
    <Grid @openFormEmployeeDetail="openFormEmployeeDetail" />

    <!-- Pagination -->
    <Paging />
  </div>
</template>

<script>
import EmployeeDetail from "../views/employee/EmployeeDetail.vue";
import ToolBar from "@/components/views/employee/ToolBar";
// import ToolBar from '../views/employee/ToolBar.vue'
import FilterBar from "../views/employee/FilterBar.vue";
import Grid from "../common/Grid.vue";
import Paging from "../common/Paging.vue";

export default {
  name: "Main",
  components: {
    EmployeeDetail,
    ToolBar,
    FilterBar,
    Grid,
    Paging,
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
    openFormEmployeeDetail(item = null) {
      //gọi hàm mở form ở form
      this.$refs.formEmployeeDetail.openForm(item);

      //gửi sự kiện mở overlay cho app
      this.$bus.emit("displayOverlay");
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/common/main.css");
</style>
