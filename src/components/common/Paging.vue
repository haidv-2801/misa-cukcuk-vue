<template>
  <div id="pagination" class="main__pagination">
    <div class="pagi__left">
      Hiển thị
      <b>{{ fromNumber }}-{{ toNumber }}/{{ pagination.totalRecord }}</b> nhân
      viên
    </div>
    <div class="pagi__mid">
      <div 
      :class="{'disable': pagination.pageNumber == 1}"
      @click="firstPage()" 
      class="btn-page-control">
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
      <div 
      @click="prePage()" 
      :class="{'disable':  pagination.pageNumber == 1}"
      class="btn-page-control">
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
      <div 
      :class="{'disable':  pagination.pageNumber == pagination.totalPage}"
      @click="nextPage()" class="btn-page-control">
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
      <div 
      :class="{'disable': pagination.pageNumber == pagination.totalPage}"
      @click="lastPage()" class="btn-page-control">
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
      <span>
        <b>{{ pagination.pageSize }}</b> nhân viên/trang
      </span>
      <div class="test">
        <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="icon__pagenumber"
          @click="increPagesize()"
        >
          <title>Tăng số trang</title>
          <path
            d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
          />
        </svg>
        <svg
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="icon__pagenumber"
          @click="descPagesize()"
        >
          <title>Giảm số trang</title>
          <path
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          />
        </svg>
      </div>
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
    this.pagination = JSON.parse(JSON.stringify(this.data));
  },
  data() {
    return {
      //clone model to new one
      pagination: JSON.parse(JSON.stringify(this.data)),

      //to calculate page segment
      pageStep: 0,
    };
  },
  methods: {
    /**
     * Select page number
     * DVHAI 13/06/2021
     */
    increPagesize() {
      if (this.pagination.pageSize < this.pagination.totalRecord) {
        this.pagination.pageSize++;
        this.pageStep = 0;
        this.pagination.pageNumber = 1;
      }
    },

    /**
     * Select page number
     * DVHAI 13/06/2021
     */
    descPagesize() {
      if (this.pagination.pageSize > 1) {
        this.pagination.pageSize--;
        this.pageStep = 0;
        this.pagination.pageNumber = 1;
      }
    },

    /**
     * Select page number
     * DVHAI 13/06/2021
     */
    btnClick(index) {
      this.pagination.pageNumber = index;
    },

    /**
     * Select previus page
     * DVHAI 13/06/2021
     */
    prePage() {
      if (this.pagination.pageNumber > 1) {
        if (this.pagination.pageNumber == this.lowerBoundPage) {
          this.pageStep--;
        }
        this.pagination.pageNumber--;
      }
    },

    /**
     * Select first page
     * DVHAI 13/06/2021
     */
    firstPage() {
      this.pageStep = 0;
      this.pagination.pageNumber = 1;
    },

    /**
     * Select last page
     * DVHAI 13/06/2021
     */
    lastPage() {
      this.pageStep = this.pagination.totalPage - this.pagination.maximumPage;
      this.pagination.pageNumber = this.pagination.totalPage;
    },

    /**
     * Select page number
     * DVHAI 13/06/2021
     */
    nextPage() {
      if (this.pagination.pageNumber < this.pagination.totalPage) {
        if (this.pagination.pageNumber == this.upperBoundPage) {
          this.pageStep++;
        }
        this.pagination.pageNumber++;
      }
    },
  },
  computed: {
    //page segment
    fromNumber() {
      let from =
        this.pagination.pageSize * (this.pagination.pageNumber - 1) + 1;
      return from.toString().padStart(2, "0");
    },

    toNumber() {
      let to = this.pagination.pageSize * this.pagination.pageNumber;
      return to.toString().padStart(2, "0");
    },

    //list page number
    listPages() {
      let lPage = [];
      for (let i = this.lowerBoundPage; i <= this.upperBoundPage; i++) {
        lPage.push(i);
      }
      return lPage;
    },

    //currentPageNumber
    currentPageNumber() {
      return this.pagination.pageNumber;
    },

    //currentPageSize
    currentPageSize() {
      return this.pagination.pageSize;
    },

    //lowerBoundPage
    lowerBoundPage() {
      return Math.max(1, 1 + this.pageStep);
    },

    //upperBoundPage
    upperBoundPage() {
      return Math.min(
        this.pagination.maximumPage + this.pageStep,
        this.pagination.totalPage
      );
    },
  },
  watch: {
    //tracking current pagenumber
    currentPageNumber: function(value) {
      this.$emit("changePageNumber", value);
    },

    //tracking current pagesize
    currentPageSize: function(value) {
      this.$emit("changePageSize", value);
    },

    //tracking props data and clone to a new one
    data: {
      deep: true,
      handler: function() {
        this.pagination = JSON.parse(JSON.stringify(this.data));
      },
    },
  },
};
</script>

<style scoped>
.disable {
  pointer-events: none;
  opacity: 0.4;
}

.test {
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.test svg:hover {
  opacity: 0.7;
  background-size: #838383;
}
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  flex: 2;
}
.pagi__right span {
  margin-right: 10px;
}

.pagi__right .icon__pagenumber {
  cursor: pointer;
  margin: 0 16px 0px 10px;
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
