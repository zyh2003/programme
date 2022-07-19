import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import( '../views/AboutView.vue')
  // }
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('../views')
      },
      {
        path: '/goods/list',
        name: 'goods',
        component: () => import('../views/goods/list.vue')
      },
      {
        path: '/category/list',
        name: 'category',
        component: () => import('../views/category/list.vue')
      },
      {
        path: '/skus/list',
        name: 'skus',
        component: () => import('../views/skus/list.vue')
      },
      {
        path: '/coupon/list',
        name: 'coupon',
        component: () => import('../views/coupon/list.vue')
      },
      {
        path: '/user/list',
        name: 'user',
        component: () => import('../views/user/list.vue')
      },
      {
        path: '/level/list',
        name: 'level',
        component: () => import('../views/level/list.vue')
      },
      {
        path: '/order/list',
        name: 'order',
        component: () => import('../views/order/list.vue')
      },
      {
        path: '/comment/list',
        name: 'comment',
        component: () => import('../views/comment/list.vue')
      },
      {
        path: '/manager/list',
        name: 'manager',
        component: () => import('../views/manager/list.vue')
      },
      {
        path: '/access/list',
        name: 'access',
        component: () => import('../views/access/list.vue')
      },
      {
        path: '/role/list',
        name: 'role',
        component: () => import('../views/role/list.vue')
      },
      {
        path: '/setting/ship',
        name: 'settingShip',
        component: () => import('../views/setting/ship.vue')
      },
      {
        path: '/setting/base',
        name: 'settingBase',
        component: () => import('../views/setting/base.vue')
      },
      {
        path: '/setting/buy',
        name: 'settingBy',
        component: () => import('../views/setting/buy.vue')
      },
      {
        path: '/distribution/index',
        name: 'distributionIndex',
        component: () => import('../views/distribution/index.vue')
      },
      {
        path: '/distribution/setting',
        name: 'distributionSetting',
        component: () => import('../views/distribution/setting.vue')
      },
      {
        path: '/image/list',
        name: 'image',
        component: () => import('../views/image/list.vue')
      },
      {
        path: '/notice/list',
        name: 'notice',
        component: () => import('../views/notice/list.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
