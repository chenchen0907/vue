import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Index from '../pages/index'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
