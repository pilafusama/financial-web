import { baseUrl } from './env'
import { gotoLogin, gotoH5Login } from '@/utils/common'
import { MessageBox } from 'mint-ui'

export default async (
  url = '',
  data = {},
  type = 'GET',
  contentType = '',
  method = 'fetch'
) => {
  type = type.toUpperCase()
  if (url.indexOf('http') !== 0) {
    url = baseUrl + url
  }
  if (contentType === '') {
    contentType =
      type === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
  }

  if (type === 'GET') {
    // 数据拼接字符串
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }

  if (window.fetch && method === 'fetch') {
    let requestConfig = {
      // 默认带上cookie等校验参数
      credentials: 'include',
      method: type,
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType
      },
      mode: 'cors',
      cache: 'force-cache'
    }

    if (type === 'POST') {
      // post 请求不能使用 application/json，否则后台拿不到参数，或者得去解析body
      requestConfig.headers['Content-Type'] = contentType
      if (contentType === 'application/json') {
        // Object.defineProperty(requestConfig, 'body', data);
        Object.defineProperty(requestConfig, 'body', {
          value: JSON.stringify(data)
        })
      } else if (contentType === 'application/x-www-form-urlencoded') {
        // data 得是 key=value&key1=value2 的形式，否则传递参数会有问题
        Object.defineProperty(requestConfig, 'body', { value: data })
      }
    }

    try {
      const response = await fetch(url, requestConfig)
      const responseJson = await response.json()
      if (
        responseJson.retCode === '-1' ||
        responseJson.retCode === '3319' ||
        responseJson.retCode === '3322' ||
        responseJson.retCode === '98883319'
      ) {
        // PC登录态过期，处理方式
        gotoLogin()
      } else if (responseJson.retCode === '3341') {
        // H5登录态过期，处理方式
        // gotoH5Login()
        MessageBox('提示', '登录超时，请退出页面重新登录')
      }
      return responseJson
    } catch (error) {
      alert('请求接口不可达')
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      } else {
        requestObj = new ActiveXObject()
      }

      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }

      requestObj.open(type, url, true)
      // requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.setRequestHeader('Content-type', contentType)
      requestObj.send(sendData)

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            // ie10及以上有新属性response，以下使用responseText
            // let obj = requestObj.response
            let obj = requestObj.responseText
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            if (
              obj.retCode === '-1' ||
              obj.retCode === '3319' ||
              obj.retCode === '3322' ||
              obj.retCode === '98883319'
            ) {
              // 登录态过期，处理方式
              gotoLogin()
              console.log(obj.retCode)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
