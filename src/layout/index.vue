<template>
  <div>
    <el-container class="home">
      <el-header class="home-header">
        <AppHeader></AppHeader>
      </el-header>
      <el-container>
        <el-aside width="200px" class="home-aside">
          <AppAside></AppAside>
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
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
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
  .home-aside {
    background-color: pink;
  }
  .home-main {
    background-color: teal;
  }
}
</style>
