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
                      <el-option
                        v-for="item in category"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      >
                      </el-option>
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

              <el-table-column prop="desc" label="商品" width="300">
                <template v-slot="scope">
                  <div>
                    <el-avatar
                      shape="square"
                      :size="50"
                      :src="scope.row.cover"
                    ></el-avatar>
                  </div>
                  <div>
                    <h1>{{ scope.row.title }}</h1>
                    <p>
                      ￥{{ scope.row.min_price
                      }}<span>￥{{ scope.row.min_oprice }}</span>
                    </p>
                    <p>分类：{{ scope.row.category.name }}</p>
                    <p>创建时间：{{ scope.row.update_time }}</p>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="sale_count" label="实际销量" width="70">
              </el-table-column>
              <el-table-column prop="status" label="商品状态" width="100">
              </el-table-column>
              <el-table-column prop="ischeck" label="审核状态" width="120">
              </el-table-column>
              <el-table-column prop="stock" label="总库存" width="90">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="200">
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
import { getGoods, getCategory } from '../../api/goods'
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
      // 列表数据
      tableData: [],
      category: ''
    }
  },
  methods: {
    /**
     * 商品管理列表数据
     */
    async handleClick(tab, event) {
      // console.log(tab, event)
      const data = await getGoods(tab._props.name)
      this.tableData = data.data.data.list
      console.log()
    },
    handleSelectionChange() {}
  },
  created() {
    getCategory().then((res) => {
      // console.log(res)
      this.category = res.data.data
    })
  },
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
  ::deep .el-table {
    .cell {
      display: flex;
      justify-content: space-between;
      div{
        &:nth-of-type(2){
          p{
            &:nth-of-type(1){
              // font-size: ;
              color: red;
              span{
                color: #ccc;
              }
            }
          }
        }
      }
    }
  }
}
</style>
