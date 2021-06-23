<template>
  <div id="pagination" class="main__pagination">
    <div class="pagi__left">
      Hiển thị
      <b>1-{{ pagination.pageSize }}/{{ pagination.totalRecord }}</b> nhân viên
    </div>
    <div class="pagi__mid">
      <div @click="firstPage()" class="btn-page-control">
        <svg
          tabindex="13"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevrons-left"
        >
          <title>Trang đầu</title>
          <polyline points="11 17 6 12 11 7"></polyline>
          <polyline points="18 17 13 12 18 7"></polyline>
        </svg>
      </div>
      <div @click="prePage()" class="btn-page-control">
        <svg
          tabindex="14"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <title>Trang trước</title>
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      <button
        v-for="(item, index) in listPages"
        :key="index"
        :class="{ active: pagination.pageNumber == item }"
        tabindex="15"
        class="btn btn-number"
        @click="btnClick(item)"
      >
        <span>{{ item }}</span>
      </button>
      <div @click="nextPage()" class="btn-page-control">
        <svg
          tabindex="19"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-right"
        >
          <title>Trang sau</title>
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
      <div @click="lastPage()" class="btn-page-control">
        <svg
          tabindex="20"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevrons-right"
        >
          <title>Trang cuối</title>
          <polyline points="13 17 18 12 13 7"></polyline>
          <polyline points="6 17 11 12 6 7"></polyline>
        </svg>
      </div>
    </div>
    <div class="pagi__right">
      <b>{{ pagination.pageSize }}</b> nhân viên/trang
    </div>
  </div>
</template>

<script>
export default {
  name: "Paging",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    //clone new pagination info
    this.pagination = JSON.parse(JSON.stringify(this.data));

    //set segment in list page
    this.lowerBound = 1;
    this.upperBound = this.pagination.totalPage;
  },
  data() {
    return {
      pagination: JSON.parse(JSON.stringify(this.data)),
      lowerBound: 0,
      upperBound: 0,
    };
  },
  methods: {
    btnClick(index) {
      this.pagination.pageNumber = index;
    },

    prePage() {
      if (this.pagination.pageNumber > 1) {
        this.pagination.pageNumber--;
      }
    },

    firstPage() {
      this.pagination.pageNumber = 1;
    },

    lastPage() {
      this.pagination.pageNumber = this.pagination.totalPage;
    },

    nextPage() {
      if (this.pagination.pageNumber < this.pagination.totalPage) {
        this.pagination.pageNumber++;
      }
    },
  },
  computed: {
    listPages() {
      let lPage = [];
      for (let i = this.lowerBound; i <= this.upperBound; i++) {
        lPage.push(i);
      }
      return lPage;
    },
  },
  watch: {
    // pagination: {
    //   deep: true,
    //   handler: function() {
    //     this.$emit("changeValuePage", this.pagination);
    //   },
    // },
  },
};
</script>

<style scoped>
/* pagination css */
.main__pagination {
  align-items: center;
  display: flex;
  height: 56px;
  justify-content: space-between;
}

.pagi__left {
  flex: 2;
}

.pagi__mid {
  align-items: center;
  display: flex;
  text-align: center;
  flex: 1;
  justify-content: center;
  cursor: pointer;
}

.pagi__mid svg {
  outline: none;
}

.pagi__mid button {
  border: 1px solid var(--color-hint);
  background: white;
  cursor: pointer;
  outline: none;
  text-align: center;
  margin: 0 5px;
  width: 40px;
  height: 40px;
  border-radius: 50% !important;
  color: #000000;
}

.pagi__mid button:focus-visible {
  background-color: #019160;
  color: white;
}

.pagi__mid button:hover {
  background-color: #e9ebee;
}

/* các button pre, next, first, last 
        trong phân trang
    */
.btn-page-control:first-child {
  margin-right: 20px;
}

.btn-page-control:nth-child(2) {
  margin-right: 15px;
}

.btn-page-control:nth-of-type(3) {
  margin-left: 15px;
}

.btn-page-control:nth-of-type(4) {
  margin-left: 20px;
}

.pagi__right {
  text-align: right;
  flex: 2;
}

.btn-page-control {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
}

.btn-page-control:hover {
  background-color: #e9ebee;
}
</style>
