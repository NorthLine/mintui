import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/views/layouts'
import indexPage from '@/views/public/index'
import goods from '@/views/public/goods'
import list from '@/views/public/list'
import sales from '@/views/public/sales'
import user from '@/views/public/user'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '',
    component: layouts,
    children: [
      {
        path: '',
        name: '首页',
        component: indexPage
      },
      {
        path: 'goods',
        name: '物品',
        component: goods
      },
      {
        path: 'sales',
        name: '卖货',
        component: sales
      },
      {
        path: 'list',
        name: '列表',
        component: list
      },
      {
        path: 'user',
        name: '我的',
        component: user
      }
    ]
  }]
})
