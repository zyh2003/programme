<template>
  <div>
    <div class="statistics-top">
      <el-card
        shadow="hover"
        class="box-card"
        v-for="(item, index) in panels"
        :key="index"
      >
        <div slot="header" class="clearfix">
          <span> {{ item.title }}</span>
          <el-tag :type="item.unitColor" effect="plain">{{ item.unit }}</el-tag>
        </div>
        <div class="statistics-top-content">
          <animate-number
            class="number"
            from="0"
            :to="item.value"
            duration="2000"
          ></animate-number>
          <hr />
          <p>
            {{ item.subTitle }}
            <span>{{ item.subValue }}</span>
          </p>
        </div>
      </el-card>
    </div>
    <div class="statistics-center">
      <el-card
        v-for="(item, index) in anniu"
        :key="index"
        class="statistics-center-content"
        shadow="hover"
      >
        <div @click="$router.push(`${item.path}`)">
          <i :style="{ color: item.color }" :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </div>
      </el-card>
    </div>
    <div class="statistics-bottom">
      <div class="statistics-bottom-left">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>订单统计</span>
            <el-button
              size="mini"
              @click="change(index)"
              v-for="(item, index) in leftTime"
              :key="index"
            >
              {{ item }}
            </el-button>
          </div>
          <div>
            <div
              class="echart"
              id="mychart"
              :style="myChartStyle"
              v-show="num == 0"
            ></div>
          </div>
          <div v-show="num == 1">eqww</div>
          <div v-show="num == 2">ewqqw</div>
        </el-card>
      </div>
      <div class="statistics-bottom-right">
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="title">店铺及商品提示</span>
              <el-tag type="danger" effect="plain">店铺及商品提示</el-tag>
            </div>
            <div class="statistics-bottom-right-top">
              <div v-for="(item, index) in list.goods" :key="index">
                <h1>{{ item.value }}</h1>
                <p>{{ item.label }}</p>
              </div>
            </div>
          </el-card>
        </div>
        <div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="title">交易提示</span>
              <el-tag type="danger" effect="plain"
                >需要立即处理的交易订单</el-tag
              >
            </div>
            <div class="statistics-bottom-right-top">
              <div v-for="(item, index) in list.order" :key="index">
                <h1>{{ item.value }}</h1>
                <p>{{ item.label }}</p>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getStatistics1,
  getStatistics2,
  getStatistics3
} from '../api/statistics'
import * as echarts from 'echarts'
export default {
  data() {
    return {
      // 页面最上面的数据
      panels: '',
      // 跳转页面数据
      anniu: [
        {
          title: '用户',
          icon: 'el-icon-user',
          color: 'green',
          path: 'user/list'
        },
        {
          title: '商品',
          icon: 'el-icon-shopping-cart-2',
          color: 'red',
          path: '/goods/list'
        },
        {
          title: '订单',
          icon: 'el-icon-tickets',
          color: 'blue',
          path: '/order/list'
        },
        {
          title: '评价',
          icon: 'el-icon-chat-dot-square',
          color: 'orangered',
          path: '/comment/list'
        },
        {
          title: '图库',
          icon: 'el-icon-picture-outline',
          color: 'blueviolet',
          path: '/image/list'
        },
        {
          title: '公告',
          icon: 'el-icon-bell',
          color: 'goldenrod',
          path: '/notice/list'
        },
        {
          title: '配置',
          icon: 'el-icon-set-up',
          color: 'teal',
          path: '/setting/base'
        },
        {
          title: '优惠券',
          icon: 'el-icon-files',
          color: 'lightseagreen',
          path: '/coupon/list'
        }
      ],
      // 表图
      xData: ['07-24', '07-23', '07-22', '07-21', '07-20', '07-19', '07-18'], // 横坐标
      yData: [51, 0, 1, 1, 0, 2, 1], // 数据
      myChartStyle: { float: 'left', width: '100%', height: '400px' }, // 图表样式
      // 下左数据
      leftTime: ['近一个月', '近一周', '近24个小时'],
      num: 0,
      list: []
    }
  },
  methods: {
    /**
     * 图表
     */
    initEcharts() {
      // 基本柱状图
      const option = {
        xAxis: {
          data: this.xData
        },
        yAxis: {},
        series: [
          {
            type: 'bar', // 形状为柱状图
            data: this.yData
          }
        ]
      }
      const myChart = echarts.init(document.getElementById('mychart'))
      myChart.setOption(option)
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    /**
     * tab切换
     */
    change(index) {
      // console.log(index)
      this.num = index
    }
  },

  created() {
    getStatistics1().then((res) => {
      this.panels = res.data.data.panels
    })
    getStatistics2().then((res) => {
      // console.log(res.data.data)
      this.list = res.data.data
    })
    getStatistics3().then((res) => {})
  },
  mounted() {
    this.initEcharts()
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.statistics-top {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .box-card {
    width: 230px;
    .clearfix {
      display: flex;
      justify-content: space-between;
      .el-tag {
        width: 32px;
        height: 22px;
        line-height: 22px;
      }
    }
  }
  .statistics-top-content {
    padding: 20px;
    .number {
      font-size: 1.875rem;
      font-weight: 700;
    }
    hr {
      height: 1px;
      border: none;
      margin: 24px 0;
      background-color: #dcdfe6;
    }
    p {
      font-size: 0.875rem;
      display: flex;
      justify-content: space-between;
    }
  }
}
.statistics-center {
  margin-top: 20px;
  display: flex;
  font-size: 0.875rem;
  justify-content: space-between;
  .el-card {
    div {
      height: 44px;
      width: 60px;
      box-sizing: content-box;
      display: flex;
      text-align: center;
      flex-direction: column;
      i {
        margin-bottom: 10px;
      }
    }
  }
}
.statistics-bottom {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .statistics-bottom-left {
    .box-card {
      .clearfix {
        span {
          margin-right: 100px;
        }
      }
    }
  }
  .statistics-bottom-right {
    div {
      margin-bottom: 10px;
    }
    width: 450px;
    height: 175px;
    .box-card {
      .clearfix {
        .title {
          margin-right: 185px;
        }
      }
    }
    .statistics-bottom-right-top {
      display: flex;
      justify-content: space-between;
      div {
        text-align: center;
        background-color: #f6f6f6;
        padding: 20px;
        p {
          margin-top: 8px;
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
