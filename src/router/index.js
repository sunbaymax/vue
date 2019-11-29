import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Choose from '@/components/Choose'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})
