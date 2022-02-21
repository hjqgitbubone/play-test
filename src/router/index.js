import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/index.vue')
      },
      {
        path: '/fen',
        name: 'fen',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/fen.vue')
      }, {
        path: '/shopcar',
        name: 'shopcar',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/shopcar.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/mine.vue')
      }
    ]
    
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/login.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/info.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
