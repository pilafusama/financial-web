import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import cookieUtils from '@/utils/CookieUtils'
import { getQueryString, gotoLogin } from '@/utils/common'
import { getUserInfo } from '@/api/getData'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '审批流对接银行配置',
    // component: HelloWorld
    component: resolve =>
      require(['@/pages/backend/configure/company_config'], resolve)
  },
  {
    path: '/company_config',
    name: '审批流对接银行配置1',
    component: resolve =>
      require(['@/pages/backend/configure/company_config'], resolve)
  }
]

const router = new Router({
  routes
})

const getRemoteUserInfo = async (code, next) => {
  let param = {
    code: code
  }
  let userInfo = await getUserInfo(param)
  // 保存必要信息
  if (userInfo.user !== null && userInfo.user.userId) {
    // 设置cookie信息
    cookieUtils.setCookie('code', code, 1)
    cookieUtils.setCookie('userid', userInfo.user.userId, 1)
  } else {
    // 登录失败
    alert('校验登录信息失败了，请重新登录')
    gotoLogin()
    return
  }
  if (userInfo.user !== null && userInfo.user.corpId) {
    cookieUtils.setCookie('corpid', userInfo.user.corpId, 1)
  } else {
    alert('获取用户组织信息失败了，请检查企业微信配置信息')
  }
  cookieUtils.setCookie('logSsid', userInfo.logSsid, 1)
  // 清除url上的ticket信息
  let url = location.href
  url = url.substring(0, url.indexOf('auth_code') - 1)
  window.location.href = url
  // next()
}

router.beforeEach((to, from, next) => {
  if (process.env.NODE_ENV === 'development') {
    next()
    return
  }
  let params = getQueryString()
  let code = params['auth_code']
  let urlCode = to.query.code
  if (code !== '' && code !== undefined) {
    let cookieCode = cookieUtils.getCookie('code')
    if (code !== cookieCode) {
      // 获取新的用户信息
      getRemoteUserInfo(code, next)
    } else {
      next()
    }
  } else if (urlCode !== '' && urlCode !== undefined) {
    let cookieCode = cookieUtils.getCookie('code')
    if (urlCode !== cookieCode) {
      // 获取新的用户信息
      getRemoteUserInfo(urlCode, next)
    } else {
      next()
    }
  } else if (cookieUtils.getCookie('code') !== '') {
    next()
  } else {
    gotoLogin()
    // next();
  }
})

export default router
