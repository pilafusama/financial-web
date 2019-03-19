window.g = {
  // 企业微信登录跳转的三方登录地址
  LoginUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wwf4667f7ddf4b623e&redirect_uri=http%3a%2f%2fwxwork.tenpay.com%2f%23%2flogin%2fcallback&response_type=code&scope=snsapi_privateinfo&state=STATE#wechat_redirect',
  // 校验登录的地址
  // CheckLoginUrl: 'http://testwxwork.tenpay.com/approval/login',
  CheckLoginUrl: 'http://10.224.137.241/approval/loginprovider',
  // 发送验证码url
  // SendVerifyCodeUrl: 'https://wxwork.tenpay.com/approval/corpBindAuthen',
  SendVerifyCodeUrl: 'http://10.41.55.86:8081/approval/corpBindAuthen',
  // 保存银行配置信息
  // SaveBankConfigUrl: 'https://wxwork.tenpay.com/approval/corpBindConfirm',
  SaveBankConfigUrl: 'http://10.41.55.86:8081/approval/corpBindConfirm',
  // 配置服务器地址
  ProdApiUrl: 'http://dev.panshi.cf.com:8091',
  // 配置服务器地址
  DevApiUrl: 'http://localhost:8091'
}
