<template>
  <div class="main__grid">
    <table>
      <thead>
        <tr>
          <th
            v-for="(item, index) in data.thead"
            :key="index"
            :class="{
              'align-right': item.dataType == Resource.DataTypeColumn.Number,
              'align-center': item.dataType == Resource.DataTypeColumn.Date,
            }"
          >
            {{ item.displayName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in data.tbody"
          :key="index"
          :class="{ active: curRowClicked == index }"
          @click="rowClick(index)"
          @dblclick="openFormEmployeeDetail(row)"
        >
          <td
            v-for="(column, index) in data.thead"
            :key="index"
            :class="{
              'align-right': column.dataType == Resource.DataTypeColumn.Number,
              'align-center': column.dataType == Resource.DataTypeColumn.Date,
            }"
          >
            {{
              formatValue(
                row[column.fieldName],
                column.dataType,
                column.displayType
              )
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import employee from "../../store/employeeData.js";
import Resource from "../../scripts/common/resource.js";
import Enumeration from "../../scripts/common/enumeration.js";
import CommonFn from "../../scripts/common/common.js";

export default {
  name: "Grid",
  data() {
    return {
      data: {
        thead: employee.column,
        tbody: employee.data,
      },
      CommonFn: CommonFn,
      Enumeration: Enumeration,
      Resource: Resource,
      curRowClicked: 0,
    };
  },
  methods: {
    /**
     * Hàm format value từ dạng thô sang chuẩn
     * DVHAI 13/06/2021
     */
    formatValue(data, dataType, dataDisplayType) {
      if (dataType) {
        switch (dataType) {
          case this.Resource.DataTypeColumn.Number:
            if (dataDisplayType == "Money")
              data = this.CommonFn.formatMoney(data);
            break;
          case this.Resource.DataTypeColumn.Date:
            data = this.CommonFn.formatDate(data);
            break;
          case this.Resource.DataTypeColumn.Enum:
            if (dataDisplayType == "Gender")
              data = this.CommonFn.getValueEnum(data, dataDisplayType);
            break;
        }
      }
      return data;
    },

    /**
     * Gán index của dòng được click vào
     * biến so sánh active class
     * DVHAI 13/06/2021
     */
    rowClick(index) {
      this.curRowClicked = index;
    },

    /**
     * Đóng mở form employee
     * nếu là edit thì bind dữ liệu lên
     * DVHAI 13/06/2021
     */
    openFormEmployeeDetail(row) {
      this.$emit("openFormEmployeeDetail", row);
    },
  },
};
</script>

<style scoped>
.active {
  background-color: rgb(227 243 238) !important;
  color: black !important;
}

.main__grid {
  position: relative;
  overflow: auto;
  width: 100%;
  margin-top: 10px;
  height: calc(100vh - 228px);
}

table {
  width: 100%;
  border-collapse: collapse;
}

table tr {
  cursor: pointer;
  height: 40px;
  border-bottom: 1px solid var(--color-hint);
}

table tbody tr:nth-child(odd) {
  background-color: #fafafa;
}

table tbody tr:hover {
  background-color: #e9ebee;
}

table thead tr {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

/* table th {
  position: sticky;
  background-color: #fff;
  top: 0;
} */

tbody {
    display: block;
}

table td,
th {
  padding: 0 10px 0 16px;
  text-align: left;
}

table td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

table {
    height: calc(100% - 56px - 66px);
    width: 100%;
}

tbody {
    display: block;
    height: calc(100vh - 56px - 49px - 56px - 66px - 49px);
    overflow: auto;
}

thead, tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}
</style>
