<template>
  <div class="sidebar" :class="{ sidebar_state: isCollapsed }">
    <!-- navbar -->
    <div class="nav">
      <div class="nav__item">
        <div
          class="nav__toggle btnToggle"
          @click="changeSidebarState()"
        >
          <!-- background here -->
        </div>
        <div class="nav__logo">
          <!-- background here -->
        </div>
      </div>
      <div
        tabindex="1"
        class="nav__item"
        v-for="(item, index) in data"
        :key="index"
        :class="{
          'sidebar__row--hover': curHoverItem == index,
          'active': curSelectedItem == index,
        }"
        @click="evtRowClick(index, $event)"
        @mouseover="evtMouseOver(index)"
        @mouseout="evtMouseOut()"
      >
        <div class="item__icon"></div>
        <div class="item__title">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapsed: false,
      curHoverItem: -1,
      curSelectedItem: -1,
    };
  },
  props: ["data"],
  methods: {
    /**
     * Hàm thay đổi trạng thái của sidebar
     * DVHAI 11/06/2021
     */
    changeSidebarState() {
      this.isCollapsed = !this.isCollapsed;
    },

    /**
     * Gán index của dòng đang click cho curSelectedItem
     * DVHAI 12/06/2021
     */
    evtRowClick(index) {
      this.curSelectedItem = index;
    },

    /**
     * Gán index = -1
     * để bỏ hover color
     * DVHAI 12/06/2021
     */
    evtMouseOut() {
      this.curHoverItem = -1;
    },
    /**
     * Gán index của dòng đang có mouseover
     * cho curHoverItem
     * DVHAI 12/06/2021
     */
    evtMouseOver(index) {
      this.curHoverItem = index;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped>
@import url("../../assets/css/common/sidebar.css");
</style>
