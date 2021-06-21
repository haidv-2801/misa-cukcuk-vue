<template>
  <!-- filterbar -->
  <div class="main__filter">
    <div class="filter__left">
      <div class="search-gr">
        <input
          tabindex="2"
          class="search-box focus left__item"
          type="text"
          placeholder="Tìm kiếm theo Mã Tên hoặc Số điện thoại"
          v-debounce:400ms="filterTable"
          v-model="filterData"
        />

        <span
          v-show="visibleClearIcon"
          @click="resetText()"
          class="box__icon icon-textclear"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </span>
      </div>

      <DropdownAutoComplete v-bind:data="dropdownData[0]" />

      <Dropdown v-bind:data="dropdownData[1]" />
    </div>
    <div class="filter__right">
      <button
        @click="refreshGrid()"
        class="btn"
        tabindex="3"
        title="Làm mới"
      ></button>
    </div>
  </div>
</template>

<script>
import Dropdown from "../../common/Dropdown.vue";
import DropdownAutoComplete from "../../common/DropdownAutoComplete.vue";

export default {
  name: "FilterBar",
  components: {
    Dropdown,
    DropdownAutoComplete,
  },
  data() {
    return {
      dropdownData: [
        {
          title: "Tất cả phòng ban",
          placeHolder: "Chọn/Nhập phòng ban",
          items: [
            "Phòng nhân sự",
            "Phòng kế toán",
            "Phòng kinh doanh",
            "Phòng sản xuất",
          ],
        },
        {
          title: "Tất cả vị trí",
          placeHolder: "Chọn/Nhập vị trí",
          items: ["Giám đốc", "Fresher Web", "DepOops", "BA"],
        },
      ],
      filterData: "",
      visibleClearIcon: false,
    };
  },

  methods: {
    /**
     * Refresh grid
     * DVHAI 14/06/2021
     */
    refreshGrid() {
      this.$emit("refreshGrid");
    },

    /**
     * Call filter method in parent component
     * DVHAI 14/06/2021
     */
    filterTable() {
      this.$emit("filterTable");
    },

    /**
     * Clear text
     * DVHAI 14/06/2021
     */
    async resetText() {
      this.filterData = "";
      await this.$emit("changeValueFilterString", this.filterData);
      await this.refreshGrid();
    },
  },

  computed: {},

  watch: {
    /**
     * Show and hide clear icon
     * DVHAI 14/06/2021
     */
    filterData() {
      if (this.filterData.length > 0) {
        this.visibleClearIcon = true;
      } else {
        this.visibleClearIcon = false;
      }

      this.$emit("changeValueFilterString", this.filterData);
    },
  },
};
</script>

<style scoped>
.focus:focus-visible {
  border: 1px solid #019160;
}

/* icon clear */
.box__icon {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(233, 235, 238);
  position: absolute;
  top: 10px;
  right: 20px;
}

.icon-textclear {
  cursor: pointer;
}

.icon-textclear:hover {
  background-color: rgb(233, 235, 238, 0.5);
}

.search-gr {
  position: relative;
}

/* filter css */
.main__filter {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filter__left {
  display: flex;
}

.left__item {
  margin-right: 10px;
}

.search-box {
  width: calc(var(--size-width-M) * 4.5);
  height: 40px !important;
  background-image: url("../../../assets/icon/search.png");
  background-position: 16px center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  min-width: 125px;
  text-indent: 40px;
}

.filter__left input {
  border: 1px solid var(--color-hint);
  border-radius: 4px;
}

.filter__left input[type="dropdown"] {
  width: 100%;
  cursor: pointer;
}

.filter__left input::placeholder {
  font-size: 11px;
  color: #bbbbbb;
  color: var(--color-hint);
}

.filter__right button {
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-hint) !important;
  outline: var(--color-hint);
  background-color: white !important;
  background-image: url(".../../../../../assets/icon/refresh.png");
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.filter__right button:hover {
  background-color: #e9ebee !important;
}

.filter__right button:active {
  background-color: #01b075 !important;
}

.filter__right button:focus-visible {
  border: 1px solid #019160;
}
</style>
