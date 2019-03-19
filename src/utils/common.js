import cookieUtils from '@/utils/CookieUtils'
import { MessageBox } from 'mint-ui'

// 跳转登录
export const gotoLogin = () => {
  // 清除cookie信息
  cookieUtils.clearCookie('logSsid')
  cookieUtils.clearCookie('userid')
  cookieUtils.clearCookie('corpid')
  // 跳转到登录页面
  window.location.href = window.g.LoginUrl
}

// 跳转登录
export const gotoH5Login = () => {
  // 清除cookie信息
  cookieUtils.clearCookie('logSsid')
  cookieUtils.clearCookie('userid')
  cookieUtils.clearCookie('corpid')
  // 跳转到登录页面
  // window.location.href = window.g.H5LoginUrl
  MessageBox('提示', '登录超时，请退出页面重新登录')
}

export const getQueryString = () => {
  // 获取url中 "?" 符后的字串
  let qs = location.search.substr(1)
  // 保存参数数据的对象
  let args = {}
  // 取得每一个参数项,
  let items = qs.length ? qs.split('&') : []
  let item = null
  let len = items.length

  for (let i = 0; i < len; i++) {
    item = items[i].split('=')
    let name = decodeURIComponent(item[0])
    let value = decodeURIComponent(item[1])
    if (name) {
      args[name] = value
    }
  }
  return args
}
