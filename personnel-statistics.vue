<template>
  <div class="application-box">
    <!-- header start -->
    <div class="content-top">
      <h2>
        <span>{{ title }}</span>
      </h2>
      <div class="actions-box">
        <a-button @click="handleExport">导出</a-button>
      </div>
    </div>
    <!-- header end -->
    <div class="table">
      <a-table
        :scroll="{x: 2600}"
        :columns="columns"
        :dataSource="list"
        size="small"
        :locale="{emptyText: ''}"
        :pagination="false"
      ></a-table>
      <!-- page-loading -->
      <PageLoading v-model="isLoading" shadeColor="#F4F6FC" :shadeOpacity="1" />
      <!-- page-no-data -->
      <PageNoData
        :isShowNoData="isShowNoData"
        :isShowSearchNoData="isShowSearchNoData"
        :tipText="$t('cloudpivot.list.pc.NoData')"
      />
      <!-- page-load-fail -->
      <PageLoadFail v-model="isShowLoadFailBox" @refresh="reload" />
    </div>
    <div v-if="list.length > 0" class="pagination-box">
      <a-pagination
        :current="curPage"
        :total="total"
        :showTotal="total => $t('cloudpivot.list.pc.Total', { num: total })"
        :pageSize="pageSize"
        :pageSizeOptions="pageSizeOptions"
        showSizeChanger
        @change="onPaginationChange"
        @showSizeChange="onSizeChange"
      />
    </div>
  </div>
</template>
<script>
// import Mydemo from '@/components/mydemo1';//引用模板
import moment from "moment";
import axios from "axios";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import common from "@cloudpivot/common";
import * as applicationList from "@cloudpivot/list";

import {
  Button,
  Modal,
  Table,
  Pagination,
  Checkbox,
  Icon,
  Tooltip,
  Row,
  Col,
  Input,
  DatePicker
} from "h3-antd-vue";
// 配置项
var option = {
  title: "人事档案按个人统计" // 人事档案个人统计
};
// 组件模块
export default {
  name: "homePage",
  components: {
    PageNoData: common.components.pc.PageNoData,
    PageLoading: common.components.pc.PageLoading,
    PageLoadFail: common.components.pc.LoadFail,
    AButton: Button,
    ATable: Table,
    APagination: Pagination
  },
  data() {
    return {
      title: option.title,
      list: [],
      columns: [],
      curPage: 1,
      total: 0,
      range: 2,
      pageSize: 10,
      pageSizeOptions: ["10", "20", "30", "40", "50"],
      isShowLoadFailBox: false,
      isLoading: false,
      isShowNoData: false,
      isShowSearchNoData: false
    };
  },
  // 数据接口 type:String Number Boolean Function Object Array Symbol
  props: {
    items: {
      type: Array,
      default() {
        return [12];
      }
    }
  },
  // 计算属性
  computed: {},
  // 数据监控
  watch: {},
  // 方法属性
  methods: {
    colum() {
      const columnsData = [
        {
          title: "序号",
          dataIndex: "indexNum",
          fixed: "left"
        },
        {
          title: "姓名",
          dataIndex: "staffName"
        },
        {
          title: "性别",
          dataIndex: "sex"
        },
        {
          title: "出生年月",
          dataIndex: "birthday"
        },
        {
          title: "党派",
          dataIndex: "politicCountenance"
        },
        {
          title: "民族",
          dataIndex: "nation"
        },
        {
          title: "工作所在单位",
          dataIndex: "unitOfWork"
        },
        {
          title: "工作所在校区",
          dataIndex: "campusYouWork"
        },
        {
          title: "参加工作时间",
          dataIndex: "joinWorkDate"
        },
        {
          title: "何年何月任教",
          dataIndex: "teachDate"
        },
        {
          title: "专业技术职务",
          dataIndex: "hightTechnicalTitles"
        },
        {
          title: "评定职称时间",
          dataIndex: "hightTechnicalTitlesDate"
        },
        {
          title: "职称聘任时间",
          dataIndex: "hightTechnicalTitlesNew"
        },
        {
          title: "学历",
          dataIndex: "education"
        },
        {
          title: "现有最高学历",
          dataIndex: "nowEducation"
        },
        {
          title: "党政职务(含中层)",
          dataIndex: "jobTitle"
        },
        {
          title: "任教年级学科",
          dataIndex: "teachingSubject"
        },
        {
          title: "聘用合同签订起止时间",
          dataIndex: "contractTime"
        },
        {
          title: "家庭住址",
          dataIndex: "fanilyAaddress"
        },
        {
          title: "联系电话",
          dataIndex: "userPhone"
        },
        {
          title: "备注",
          dataIndex: "otherInformationNote"
        }
      ];
      const data = [];
      this.columns = columnsData;
      this.list = data;
    },

    onPaginationChange(pageNumber) {
      console.log("Page: ", pageNumber);
      this.curPage = pageNumber;
      this.getDate();
    },

    // 点击导出excel
    handleExport() {},
    reload() {},
    // 更改每页数量
    onSizeChange(current, size) {
      this.curPage = 1;
      this.pageSize = size;
    },
    getDate() {
      axios
        .get("/api/education/selectAllStaff", {
          params: {
            pageNumber: this.curPage - 1,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.list = res.content.map((i, index) => {
            i.indexNum = index + 1 + (this.curPage - 1) * this.pageSize;
            i.birthday = i.birthday.split(" ")[0];
            i.joinWorkDate = i.joinWorkDate.split(" ")[0];
            i.hightTechnicalTitlesDate = i.hightTechnicalTitlesDate.split(
              " "
            )[0];
            i.hightTechnicalTitlesNew = i.hightTechnicalTitlesNew.split(" ")[0];
            i.contractTime = i.contractTime.split(" ")[0];
            return i;
          });
          this.total = res.totalElements;
        });
    }
  },
  // 组件创建勾子只执行一次
  created() {},
  // 组件渲染完成勾子只执行一次
  mounted() {
    this.getDate();
    this.colum();
  }
};
</script>
<!-- <style scoped lang="less"> -->
<style scoped lang="less">
/* @import url(''); */
/* 这里面写样式 */
@import "../style/index.less";
.content-top {
  background-color: #f4f6fc;
  margin-bottom: 0 !important;
  padding-bottom: 16px;
  height: 50px !important;
}
.actions-box {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .actions {
    button {
      margin-right: 8px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
.table {
  height: 100%;
  max-height: calc(100% - 122px);
  overflow-y: scroll;
  table {
    padding: 0 !important;
  }
  th,
  td {
    white-space: nowrap !important;
  }
}
.pagination-box {
  z-index: 999;
  margin-top: @base4-padding-xs;
  text-align: right;
  padding: @base4-padding-xs @base4-padding-md;
  border-top: 1px solid @base-border-color;
  background-color: #fff;
}
.ant-table-wrapper {
  overflow-x: scroll !important;
}
</style>
