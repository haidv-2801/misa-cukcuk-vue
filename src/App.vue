<template>
  <div id="app">
    <!-- loader -->
    <div v-show="displayLoader" id="loading">
      <img id="loading-image" src="./assets/img/loader.gif" alt="Loading..." />
    </div>

    <!-- overlay -->
    <div class="overlay" v-show="displayOverlay"></div>

    <!-- toast msg -->
    <div class="toast-list">
      <Toast ref="Toast" />
    </div>

    <!-- sidebar -->
    <Sidebar :data="navItems" />

    <!-- content -->
    <div class="content">
      <!-- header -->
      <Header />

      <!-- main -->
      <Main />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/layouts/TheSidebar.vue";
import Header from "./components/layouts/TheHeader.vue";
import Main from "./components/layouts/TheMain.vue";
import Toast from "../src/components/common/Toast.vue";

export default {
  name: "App",
  created() {
    //lắng nghe sự kiện bật overlay
    this.$bus.on("displayOverlay", () => {
      this.displayOverlay = !this.displayOverlay;
    });

    //lắng nghe sự kiện bật overlay
    this.$bus.on("displayLoader", () => {
      this.displayLoader = !this.displayLoader;
    });

    //lắng nghe sự kiện bật toast
    this.$bus.on("openToast", (value) => {
      this.$refs.Toast.openToast({ ...value });
    });
  },
  data() {
    return {
      navItems: [
        { icon: "", link:"/overview", text: "Tổng quan" },
        { icon: "", link:"/report", text: "Báo cáo" },
        { icon: "", link:"/product", text: "Mua hàng" },
        { icon: "", link:"/employee", text: "Danh mục nhân viên" },
        { icon: "", link:"/customer", text: "Danh mục khách hàng" },
        { icon: "", link:"/setting", text: "Thiết lập hệ thống" },
      ],
      displayOverlay: false,
      displayLoader: false,
    };
  },
  components: {
    Sidebar,
    Header,
    Main,
    Toast,
  },
  methods: {},
};
</script>

<style>
#app {
  display: flex;
  width: 100%;
  height: 100vh;
}

/* content css */
.content {
  background-color: white;
  flex-direction: column;
  flex: 1;
  display: flex;
  width: calc(100vw - var(--size-sidebar-expanded));
  height: 100%;
}

@import url("./assets/css/common/common.css");
@import url("./assets/css/common/tooltip.css");
</style>
