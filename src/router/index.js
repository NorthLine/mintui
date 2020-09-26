import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/views/layouts'
import indexPage from '@/views/public/index'
import goods from '@/views/public/goods'
import list from '@/views/public/list'
import sales from '@/views/public/sales'
import user from '@/views/public/user'
import intercept from '@/views/private/intercept'
import myCenter from '@/views/private/myCenter'
import fbgg from '@/views/private/fbgg'
import smrz from '@/views/private/smrz'
import skfs from '@/views/private/skfs'
import bddz from '@/views/private/bddz'
import xgmm from '@/views/private/xgmm'
import zczh from '@/views/private/zczh'
import forget from '@/views/public/forget'
import login from '@/views/public/login'
import register from '@/views/public/register'
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
  }, {
    path: '/userCenter',
    name: '用户中心',
    redirect: 'index',
    component: intercept,
    children: [
      {
        path: 'index',
        name: '我的',
        component: myCenter
      },
      {
        path: 'zczh',
        name: '资产账户',
        component: zczh
      },
      {
        path: 'fbgg',
        name: '发布公告',
        component: fbgg
      },
      {
        path: 'smrz',
        name: '实名认证',
        component: smrz
      },
      {
        path: 'skfs',
        name: '收款方式',
        component: skfs
      },
      {
        path: 'bddz',
        name: '绑定地址',
        component: bddz
      },
      {
        path: 'xgmm',
        name: '修改密码',
        component: xgmm
      }
    ]
  }, {
    path: '/login',
    name: '登录',
    component: login
  }, {
    path: '/register',
    name: '注册',
    component: register
  }, {
    path: '/forget',
    name: '忘记密码',
    component: forget
  }]
})
