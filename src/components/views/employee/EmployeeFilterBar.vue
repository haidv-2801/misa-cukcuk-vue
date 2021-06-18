<template>
  <!-- filterbar -->
  <div class="main__filter">
    <div class="filter__left">
      <input
        tabindex="7"
        class="search-box focus left__item"
        type="text"
        placeholder="Tìm kiếm theo Mã Tên hoặc Số điện thoại"
        v-debounce:300ms="filterTable"
        v-model="filterData"
      />

      <DropdownAutoComplete v-bind:data="dropdownData[0]" />

      <Dropdown v-bind:data="dropdownData[1]" />
    </div>
    <div class="filter__right">
      <button
        @click="refreshGrid()"
        class="btn"
        tabindex="11"
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
      filterData:''
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

    filterTable() {
      this.$emit('filterTable', this.filterData);
    }
  },

  computed: {},
};
</script>

<style>
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
