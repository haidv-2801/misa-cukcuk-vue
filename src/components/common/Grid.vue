<template>
  <div>
    <div class="main__grid">
      <table>
        <thead>
          <tr>
            <th
              v-for="(item, index) in data.column"
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
            v-for="(item, index) in data.data"
            :key="index"
            :class="{ active: multiSelectList.includes(index) }"
            @click.exact="selectRow(index)"
            @dblclick="openFormDetail(item)"
            @click.ctrl="multiSelectRow(index)"
          >
            <td
              v-for="(column, index) in data.column"
              :key="index"
              :class="{
                'align-right':
                  column.dataType == Resource.DataTypeColumn.Number,
                'align-center': column.dataType == Resource.DataTypeColumn.Date,
              }"
              :title="item[column.fieldName]"
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
    <Paging
      :data="gridData.pagination"
      @changePageNumber="changePageNumber"
      @changePageSize="changePageSize"
    />
  </div>
</template>

<script>
import Resource from "../../scripts/common/resource.js";
import Enumeration from "../../scripts/common/enumeration.js";
import CommonFn from "../../scripts/common/common.js";
import Paging from "../../components/common/Paging.vue";

export default {
  name: "Grid",
  props: {
    gridData: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Paging,
  },
  data() {
    return {
      data: JSON.parse(JSON.stringify(this.gridData)),
      CommonFn: CommonFn,
      Enumeration: Enumeration,
      Resource: Resource,
      multiSelectList: [0],
    };
  },
  created() {
    this.data = this.gridData;
  },
  methods: {
    selectRow(index) {
      this.multiSelectList = [index];
    },

    /**
     * Multiselect row by typing ctl+click
     * DVHAI 13/06/2021
     */
    multiSelectRow(index) {
      if (!this.multiSelectList.includes(index))
        this.multiSelectList.push(index);
      else {
        if (this.multiSelectList.length > 1) {
          let realIndex = this.multiSelectList.indexOf(index);
          this.multiSelectList.splice(realIndex, 1);
        }
      }
    },

    /**
     * Get selected row
     * DVHAI 13/06/2021
     */
    getSelectedRow() {
      return this.multiSelectList;
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
      this.multiSelectList = [];
      this.curRowClicked = index;
    },

    /**
     * Open form
     * If edit mode -> bind data
     * DVHAI 13/06/2021
     */
    openFormDetail(item) {
      this.$emit("openFormDetail", item);
    },

    /**
     * Change page number
     * DVHAI 13/06/2021
     */
    changePageNumber(value) {
      this.$emit("changePageNumber", value);
    },

    /**
     * Change page number
     * DVHAI 13/06/2021
     */
    changePageSize(value) {
      this.$emit("changePageSize", value);
    },
  },
  watch: {},
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
  height: 48px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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
  max-width: 250px;
}

/* i */
</style>
