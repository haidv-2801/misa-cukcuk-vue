<template>
  <div class="main__grid">
    <table>
      <thead>
        <tr>
          <th><input 
          @click="toggleCheck()"
          type="checkbox" /></th>
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
          v-for="(item, index) in data.tbody"
          :key="index"
          :class="{ active: curRowClicked == index }"
          @click="rowClick(index)"
          @dblclick="openFormEmployeeDetail(item)"
        >
          <td><input 
          :checked="isSelected"
          type="checkbox" /></td>
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
                item[column.fieldName],
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
      isSelected: false
    };
  },
  created() {
    this.getDataServer();
  },
  methods: {
    toggleCheck() {
      this.isSelected = !this.isSelected;
    },

    /**
     * Get selected row
     * DVHAI 13/06/2021
     */
    getSelectedRow() {
      var res = this.data.tbody[this.curRowClicked];
      return res;
    },

    /**
     * Get data from server
     * DVHAI 13/06/2021
     */
    getDataServer() {
      this.$bus.emit("displayLoader");
      this.axios
        .get("http://cukcuk.manhnv.net/v1/Employees")
        .then((response) => {
          this.data.tbody = response.data;
          this.$bus.emit("displayLoader");
        });
    },

    /**
     * Format value
     * DVHAI 13/06/2021
     */
    formatValue(data, dataType, dataDisplayType) {
      let formattedData = data;

      if (dataType) {
        switch (dataType) {
          case this.Resource.DataTypeColumn.Number:
            if (dataDisplayType == "Money")
              formattedData = this.CommonFn.formatMoney(formattedData);
            break;
          case this.Resource.DataTypeColumn.Date:
            formattedData = this.CommonFn.formatDate(formattedData);
            break;
          case this.Resource.DataTypeColumn.Enum:
            if (dataDisplayType == "Gender")
              formattedData = this.CommonFn.getValueEnum(
                formattedData,
                dataDisplayType
              );

            if (dataDisplayType == "WorkStatus")
              formattedData = this.CommonFn.getValueEnum(
                formattedData,
                dataDisplayType
              );

            break;
        }
      }
      return formattedData;
    },

    /**
     * Event click row
     * DVHAI 13/06/2021
     */
    rowClick(index) {
      this.curRowClicked = index;
    },

    /**
     * Open form
     * If edit mode -> bind data
     * DVHAI 13/06/2021
     */
    openFormEmployeeDetail(item) {
      this.$emit("openFormEmployeeDetail", item);
    },

    deleteRecord() {
      let url = "http://cukcuk.manhnv.net/v1/Employees/",
          id = this.data.tbody[this.curRowClicked].EmployeeId,
          urlFull = url + id;

      this.axios
        .delete(urlFull)
        .then((response) => {
            this.getDataServer();
        });
    }
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

.align-right {
  text-align: right;
}

.align-center {
  text-align: center;
}

table th {
  position: sticky;
  background-color: #fff;
  top: 0;
}

table td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* i */
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

table th {
  position: sticky;
  background-color: #fff;
  top: 0;
}

table td,
th {
  white-space: nowrap;
  padding: 0 10px 0 16px;
  text-align: left;
  max-width: 300px;
}
/* i */
</style>
