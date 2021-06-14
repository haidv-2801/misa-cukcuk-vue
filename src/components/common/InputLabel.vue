<template>
  <div class="row__item">
    <label v-if="styleObject.required">{{name}}(<span class="color-red">*</span>)</label>
    <label v-else>{{name}}</label>
    <input class="focus" :type="type" :style="styleObject" />
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
    styleObject: {
      type: Object,
      default: function() {
        return {
          required: false
        }
      }
    },
    name: {
      type: String,
      default: 'Chưa có tên',
    },
    type: {
      type: String,
      default: 'text',
    }
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
  padding-left: 16px;
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
