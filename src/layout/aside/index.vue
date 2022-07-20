<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      router
    >
      <template v-for="(item, index) in menus">
        <el-submenu :key="index" :index="item.id + ''">
          <template slot="title">
            <i :class="'el-icon-' + item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group v-for="(item, index) in item.child" :key="index">
            <el-menu-item :index="item.frontpath">
              <i :class="'el-icon-' + item.icon"></i>
              {{ item.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['menus'],
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-menu{
  height: 100%;
  overflow-y: hidden;
  // width: 250px;
}
</style>
