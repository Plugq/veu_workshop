import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      name: 'home',
      component: HomeView
    },
   { path: '',
    name: 'toolbar',
    component: () => import('../views/Toolbar.vue'),
    children:[
      {
        path: '/about',
        name: 'about',
        component: () => import( '../views/AboutView.vue')
      },
      {
      path: '/me',
      name: 'me',
      component: () => import('../views/me.vue')
      },
      {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail.vue')
      }
    ]
   },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
