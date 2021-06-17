<template>
  <div id="app">
    <!-- loader -->
    <div 
      v-show="displayLoader"
      id="loading">
      <img id="loading-image" src="./assets/img/loader.gif" alt="Loading..." />
    </div>

    <div class="overlay" v-show="displayOverlay"></div>

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

import Sidebar from './components/layouts/Sidebar.vue';
import Header from './components/layouts/Header.vue';
import Main from './components/layouts/Main.vue';

export default {
  name: 'App',
  created() {
    //lắng nghe sự kiện bật overlay
    this.$bus.on('displayOverlay', () => { this.displayOverlay = !this.displayOverlay });

    //lắng nghe sự kiện bật overlay
    this.$bus.on('displayLoader', () => { this.displayLoader = !this.displayLoader });
  },
  data() {
    return {
      navItems: [
        {icon:'', text:'Tổng quan'},
        {icon:'', text:'Báo cáo'},
        {icon:'', text:'Mua hàng'},
        {icon:'', text:'Danh mục nhân viên'},
        {icon:'', text:'Danh mục khách hàng'},
        {icon:'', text:'Thiết lập hệ thống'},
      ],
      displayOverlay: false,
      displayLoader: false,
    }
  }
  ,
  components: {
    Sidebar,
    Header,
    Main
  },
  methods: {

  },
}
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
