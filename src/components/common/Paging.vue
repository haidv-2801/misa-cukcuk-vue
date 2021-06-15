<template>
  <div id="pagination" class="main__pagination">
    <div class="pagi__left">Hiển thị <b>1-10/1000</b> nhân viên</div>
    <div class="pagi__mid">
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
        <polyline points="11 17 6 12 11 7"></polyline>
        <polyline points="18 17 13 12 18 7"></polyline>
      </svg>
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
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>

      <button 
        @click="btnClick($event)"
        tabindex="15" class="btn btn-number"><span>1</span></button>
      <button 
        @click="btnClick($event)"
        tabindex="16" class="btn btn-number"><span>2</span></button>
      <button 
        @click="btnClick($event)"
        tabindex="17" class="btn btn-number"><span>3</span></button>
      <button 
        @click="btnClick($event)"
        tabindex="18" class="btn btn-number"><span>4</span></button>

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
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
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
        <polyline points="13 17 18 12 13 7"></polyline>
        <polyline points="6 17 11 12 6 7"></polyline>
      </svg>
    </div>
    <div class="pagi__right"><b>20</b> nhân viên/trang</div>
  </div>
</template>

<script>
export default {
  name: "Pageing",
  data() {
    return {};
  },
  methods: {
      btnClick(e) {
          alert("test")
          e.target.classList.add('active');
      }
  }
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
  cursor: pointer;
  align-items: center;
  display: flex;
  text-align: center;
  flex: 1;
  justify-content: center;
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
.pagi__mid svg:first-child {
  margin-right: 20px;
}

.pagi__mid svg:nth-child(2) {
  margin-right: 15px;
}

.pagi__mid svg:nth-of-type(3) {
  margin-left: 15px;
}

.pagi__mid svg:nth-of-type(4) {
  margin-left: 20px;
}

.pagi__right {
  text-align: right;
  flex: 2;
}
</style>
