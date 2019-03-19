import Vue from 'vue'
import Router from 'vue-router'
// import { MessageBox } from 'mint-ui'
import cookieUtils from '@/utils/CookieUtils'
import { getH5UserInfo } from '@/api/getData'
import { getQueryString, gotoH5Login } from '@/utils/common'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: resolve => require(['@/h5pages/wxh5/home'], resolve)
  },
  {
    path: '/home',
    name: '首页',
    component: resolve => require(['@/h5pages/wxh5/home'], resolve)
  },
  {
    path: '/list',
    name: '审批流列表',
    component: resolve => require(['@/h5pages/list/App'], resolve)
  },
  {
    path: '/approve_detail',
    name: '收款信息',
    component: resolve =>
      require(['@/h5pages/approve_detail/ReceivableInfo'], resolve)
  },
  {
    path: '/Photo',
    name: '拍照识别银行卡',
    component: resolve => require(['@/h5pages/approve_detail/Photo'], resolve)
  },
  {
    path: '/PhotoView',
    name: '拍照',
    component: resolve =>
      require(['@/h5pages/approve_detail/PhotoView'], resolve)
  },
  {
    path: '/historyReceiver',
    name: '历史收款人',
    component: resolve =>
      require(['@/h5pages/approve_detail/HistoryReceiver'], resolve)
  },
  {
    path: '/SelectBank',
    name: '选择收款银行',
    component: resolve =>
      require(['@/h5pages/approve_detail/SelectBank'], resolve)
  },
  {
    path: '/SelectBranch',
    name: '选择支行',
    component: resolve =>
      require(['@/h5pages/approve_detail/SelectBranch'], resolve)
  }
]

const router = new Router({
  routes
})

const getRemoteUserInfo = async code => {
  let param = {
    code: code
  }
  let userInfo = await getH5UserInfo(param)
  // 保存必要信息
  if (userInfo.user !== null && userInfo.user.userId) {
    // 设置cookie信息
    cookieUtils.setCookie('code', code, 1)
    cookieUtils.setCookie('userid', userInfo.user.userId, 1)
  } else {
    // 登录失败
    gotoH5Login()
  }
  if (userInfo.user !== null && userInfo.user.corpId) {
    cookieUtils.setCookie('corpid', userInfo.user.corpId, 1)
  } else {
    gotoH5Login()
  }
  cookieUtils.setCookie('logSsid', userInfo.logSsid, 1)
}

router.beforeEach(async (to, from, next) => {
  if (process.env.NODE_ENV === 'development') {
    next()
    return
  }
  let params = getQueryString()
  let code = params['code']
  let urlCode = to.query.code
  if (code !== '' && code !== undefined) {
    let cookieCode = cookieUtils.getCookie('code')
    if (code !== cookieCode) {
      // 获取新的用户信息
      await getRemoteUserInfo(code)
      next()
    } else {
      next()
    }
  } else if (urlCode !== '' && urlCode !== undefined) {
    let cookieCode = cookieUtils.getCookie('code')
    if (urlCode !== cookieCode) {
      // 获取新的用户信息
      await getRemoteUserInfo(urlCode)
      next()
    } else {
      next()
    }
  } else if (cookieUtils.getCookie('code') !== '') {
    next()
  } else {
    gotoH5Login()
  }
})

export default router
