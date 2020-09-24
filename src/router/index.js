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
    name: '币币',
    redirect: '',
    component: layouts,
    children: [
      {
        path: '',
        name: '币币',
        component: indexPage
      },
      {
        path: 'goods',
        name: '购买',
        component: goods
      },
      {
        path: 'sales',
        name: '出售',
        component: sales
      },
      {
        path: 'list',
        name: '成交记录',
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
