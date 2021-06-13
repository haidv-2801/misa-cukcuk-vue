<template>

  <div id="app">
      <!-- loader -->
      <div id="loading">
          <img id="loading-image" src="./assets/img/loader.gif" alt="Loading..." />
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

import Sidebar from './components/layouts/Sidebar.vue';
import Header from './components/layouts/Header.vue';
import Main from './components/layouts/Main.vue';

export default {
  name: 'App',
  data() {
    return {
      navItems: [
        {icon:'', text:'Tổng quan'}, 
        {icon:'', text:'Báo cáo'}, 
        {icon:'', text:'Mua hàng'}, 
        {icon:'', text:'Danh mục nhân viên'}, 
        {icon:'', text:'Danh mục khách hàng'}, 
        {icon:'', text:'Thiết lập hệ thống'}, 
      ]
    }
  }
  ,
  components: {
    Sidebar,
    Header,
    Main
  }
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
      flex-direction: column;
      flex: 1;
      display: flex;
      width: calc(100vw - var(--size-sidebar-expanded));
      height: 100%;
  }

  @import url("./assets/css/common/common.css");
</style>
