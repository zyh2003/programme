<template>
  <div class="content">
    <el-container class="home">
      <el-header class="home-header">
        <AppHeader :info="info"></AppHeader>
      </el-header>
      <el-container>
        <el-aside width="200px" class="home-aside">
          <AppAside :menus="menus"></AppAside>
        </el-aside>
        <el-main class="home-main">
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from './aside'
import AppHeader from './header'
import AppMain from './main'
import { getInfo } from '../api/user'
export default {
  data() {
    return {
      info: '',
      menus: ''
    }
  },
  methods: {},
  created() {
    getInfo().then((res) => {
      // console.log(res.data.data)
      this.info = res.data.data
      this.menus = res.data.data.menus
      // console.log(res.data.data.menus);
    })
  },
  mounted() {},
  components: {
    AppAside,
    AppHeader,
    AppMain
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  .home-header {
    background-color: #6366f1;
  }
  // .home-aside {
  //   background-color: pink;
  // }
  .home-main {
    background-color: teal;
  }
}
</style>
