<template>
  <div>
    <div class="goods-tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in tab"
          :key="index"
          class="goods-tab-item"
          :label="item.label"
          :name="item.name"
        >
          <div class="goods-table">
            <div class="goods-table-input">
              <div class="goods-table-input-left">
                <el-form
                  :inline="true"
                  label-position="right"
                  label-width="100px"
                  class="form"
                >
                  <el-form-item label="关键词">
                    <el-input
                      size="mini"
                      v-model="input"
                      placeholder="商品名称"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <div class="goods-table-input-center">
                <el-form
                  :inline="true"
                  label-position="right"
                  label-width="100px"
                  class="form"
                >
                  <el-form-item label="商品分类" prop="value">
                    <el-select size="mini" v-model="value" placeholder="请选择">
                      <!-- <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option> -->
                    </el-select>
                  </el-form-item>
                </el-form>
                <!-- 商品分类
                <el-select v-model="value" clearable placeholder="请选择"> -->
                <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option> -->
              </div>
              <div class="goods-table-input-right">
                <el-button size="mini" type="primary">搜索</el-button>
                <el-button size="mini">重置</el-button>
                <el-button size="mini" type="text">
                  展开<i class="el-icon-arrow-down"></i>
                </el-button>
              </div>
            </div>
            <div class="goods-table-CRUD">
              <div class="goods-table-CRUD-left">
                <el-button type="primary" size="mini">新增</el-button>
                <el-button type="danger" size="mini">批量删除</el-button>
                <el-button size="mini">上架</el-button>
                <el-button size="mini">下架</el-button>
              </div>
              <div class="goods-table-CRUD-right">
                <i class="el-icon-refresh"></i>
              </div>
            </div>
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip
              >
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >查看</el-button
                  >
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: [
        {
          label: '全部',
          name: 'all'
        },
        {
          label: '审核中',
          name: 'checking'
        },
        {
          label: '出售中',
          name: 'saling'
        },
        {
          label: '已下架',
          name: 'off'
        },
        {
          label: '库存预警',
          name: 'min_stock'
        },
        {
          label: '回收站',
          name: 'delete'
        }
      ],
      activeName: 'all',
      input: '',
      value: '',
      tableData: ''
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSelectionChange() {}
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.goods-tab {
  width: 100%;
  .goods-table {
    .goods-table-input {
      display: flex;
      justify-content: space-between;
      .goods-table-input-left {
        display: flex;
      }
    }
    .goods-table-CRUD {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
