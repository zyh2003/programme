<template>
  <div class="header">
    <div class="header-left">
      <span>
        <i class="el-icon-platform-eleme"></i>
        积云编程
      </span>
      <span>
        <i class="el-icon-s-fold"></i>
        <!-- <i class="el-icon-s-unfold"></i> -->
      </span>
      <el-tooltip class="item" effect="dark" content="刷新" placement="bottom">
        <i class="el-icon-refresh" @click="refreshbtn"></i>
      </el-tooltip>
    </div>
    <div class="header-right">
      <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
        <span class="el-icon-full-screen" @click="fullscreen"> </span>
      </el-tooltip>
      <el-avatar class="avater" :size="30" :src="info.avatar"></el-avatar>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ info.username }} <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item command="del">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data() {
    return {}
  },
  methods: {
    /**
     * 全屏
     */
    fullscreen() {
      // 需要全屏显示的dom元素
      const dom = this.$el.querySelector('.videosList')
      // 调用全屏方法
      this.$fullscreen.enter(dom, {
        wrap: false,
        callback: (f) => {
          this.fullscreenFlag = f
        }
      })
    },
    /**
     * 点击刷新
     */
    refreshbtn() {
      location.reload()
      this.$router.go(0)
    },
    handleCommand() {
      this.del()
    },
    del() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$notify({
            message: '退出登录成功',
            type: 'success'
          })
          localStorage.removeItem('token')
          this.$router.push('/login')
        })
        .catch(() => {
          this.$notify({
            message: '取消退出登录',
            type: 'info'
          })
        })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  color: white;
  box-sizing: border-box;
  .header-left {
    padding-top: 18px;
    span {
      &:nth-of-type(1) {
        margin-right: 80px;
        font-weight: 100;
        font-size: 1.5rem;
      }
      &:nth-of-type(2) {
        margin-right: 30px;
      }
    }
  }
  .header-right {
    padding: 18px 0;
    position: relative;
    .el-icon-full-screen {
      margin-right: 40px;
    }
    .avater {
      position: absolute;
      bottom: 12px;
    }
    .el-dropdown-link {
      margin-left: 35px;
      color: white;
    }
  }
}
</style>
