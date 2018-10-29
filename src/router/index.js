import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 0,
      component: resolve => require(['@/components/firstLevelPage/Index'], resolve),
    },
    {
      path: '/Newhouse',
      name: 1,
      component: resolve => require(['@/components/firstLevelPage/Newhouse'], resolve),
    },
    {
      path: '/Oldhouse',
      name: 2,
      component: resolve => require(['@/components/firstLevelPage/Oldhouse'], resolve),
    },
    {
      path: '/Newhousedetails',
      component: resolve => require(['@/components/firstLevelPage/secondLevelPage/Newhousedetails'], resolve),
    },
    {
      path: '/Login',
      component: resolve => require(['@/components/firstLevelPage/Login'], resolve),
    }
  ]
})
