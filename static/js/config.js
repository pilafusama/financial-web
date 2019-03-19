// var onlineServerUrl = 'https://wxwork.tenpay.com'
var baseServerUrl = 'https://testwxwork.tenpay.com'
// var baseServerUrl = 'http://localhost:8081'
// var baseServerUrl = 'http://10.41.55.45:8081'
window.g = {
  // 企业微信登录跳转的三方登录地址
  LoginUrl:
    'https://open.work.weixin.qq.com/wwopen/sso/3rd_qrConnect?appid=wwe897f06e8d6b5fb1&redirect_uri=https://wxwork.tenpay.com/approval_web/index.html&state=web_login@gyoss9&usertype=admin',
  // H5企业微信登录地址
  H5LoginUrl:
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww68099b276e2f4363&redirect_uri=https://wxwork.tenpay.com/approval_web/wxh5.html#/approve_detail?approvalId=&response_type=code&scope=snsapi_privateinfo&state=2#wechat_redirect',
  // 微信h5校验地址
  H5CheckLoginUrl: baseServerUrl + '/approval/login',
  // 校验登录的地址
  CheckLoginUrl: baseServerUrl + '/approval/loginprovider',
  // 发送验证码url
  SendVerifyCodeUrl: baseServerUrl + '/approval/corpBindAuthen',
  // 保存银行配置信息
  SaveBankConfigUrl: baseServerUrl + '/approval/corpBindConfirm',
  // 审批流批量查询
  QueryFlowBatch: baseServerUrl + '/approval/queryFlowBatch',
  // 审批单单笔查询
  QueryFlowById: baseServerUrl + '/approval/queryFlowByID',
  // 更新审批单信息
  AccoutConfirm: baseServerUrl + '/approval/accoutconfirm',
  // 更新审批单信息
  HistoryReceiver: baseServerUrl + '/approval/queryUserHis',
  // 银行查询
  QueryBank: baseServerUrl + '/approval/bankQuery',
  // 查询支行
  BranchReceiver: baseServerUrl + '/approval/subBankQuery',
  // 查询城市
  CityReceiver: baseServerUrl + '/approval/queryCities',
  // 查询城市名称
  CityNameReceiver: baseServerUrl + '/approval/queryCityname',
  // 识别银行卡号和英文简称
  BankCardPhotos: baseServerUrl + '/approval/upload_bank_card_photos',
  // 通过银行简码查询银行
  QueryBankname: baseServerUrl + '/approval/queryBankname'
}
