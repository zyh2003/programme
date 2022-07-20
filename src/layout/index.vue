<template>
  <div class="content">
    <el-container class="home">
      <el-header class="home-header">
        <AppHeader :info="info"></AppHeader>
      </el-header>
      <el-container>
        <el-aside width="250px" class="home-aside">
          <AppAside :menus="menus"></AppAside>
        </el-aside>
        <el-main class="home-main">
          <tags-view></tags-view>
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
import TagsView from '../components/TagsView.vue'
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
    AppMain,
    TagsView
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-color: #fff;
  .home-header {
    background-color: #6366f1;
  }
}
</style>
