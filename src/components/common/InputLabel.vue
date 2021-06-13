<template>
  <div class="row__item">
    <label>Mã nhân viên(<span class="color-red">*</span>)</label>
    <input class="focus" type="text" required="true" />
  </div>
</template>

<script>
export default {
  name:'InputLabel',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
input {
  width: 100%;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
  color: #000000;
  height: 36px;
}

.color-red {
  color: red;
}

.row__item label {
  margin-bottom: 4px;
  font-family: GoogleMedium;
  font-size: 13px;
  display: block;
}

.row__item {
  flex: 1;
  margin-right: 10px;
}
</style>
