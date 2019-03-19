import fetch from '@/config/fetch'

let postContentType = 'application/json'

const postFetch = (url, data, type) => {
  return fetch(url, data, type, postContentType)
}

// 校验用户信息
const CHECK_LOGIN_URL = window.g.CheckLoginUrl
export const getUserInfo = data => postFetch(CHECK_LOGIN_URL, data, 'POST')

// 校验H5页面用户信息
const CHECK_H5_LOGIN_URL = window.g.H5CheckLoginUrl
export const getH5UserInfo = data => postFetch(CHECK_H5_LOGIN_URL, data, 'POST')

// 发送验证码
const SEND_VERIFY_CODE_URL = window.g.SendVerifyCodeUrl
export const sendVerifyCode = data =>
  postFetch(SEND_VERIFY_CODE_URL, data, 'POST')

// 保存银行信息
const SAVE_BANK_INFO_URL = window.g.SaveBankConfigUrl
export const saveBankInfo = data => postFetch(SAVE_BANK_INFO_URL, data, 'POST')

// 获取银行审批模板信息
const GET_APPROVAL_CONF = window.g.ApprovalConf
export const getApprovalConf = data =>
  postFetch(GET_APPROVAL_CONF, data, 'POST')

// 获取审批流列表
const GET_APPROVAL_LIST = window.g.QueryFlowBatch
export const getApprovalList = data =>
  postFetch(GET_APPROVAL_LIST, data, 'POST')

// 获取审批流列表
const GET_APPROVAL_DETAIL = window.g.QueryFlowById
export const getApprovalDetail = data =>
  postFetch(GET_APPROVAL_DETAIL, data, 'POST')

// 更新审批信息
const ACCOUNT_CONFIRM = window.g.AccoutConfirm
export const accountConfirm = data => postFetch(ACCOUNT_CONFIRM, data, 'POST')

// 查询历史收款人
const HISTROY_RECEIVER = window.g.HistoryReceiver
export const getHistoryReceiver = data =>
  postFetch(HISTROY_RECEIVER, data, 'POST')

// 查询银行
const GET_BANK = window.g.QueryBank
export const queryBank = data => postFetch(GET_BANK, data, 'POST')

// 查询支行
const BRANCH_RECEIVER = window.g.BranchReceiver
export const getBranchReceiver = data =>
  postFetch(BRANCH_RECEIVER, data, 'POST')

// 查询城市
const CITY_RECEIVER = window.g.CityReceiver
export const getCityReceiver = data => postFetch(CITY_RECEIVER, data, 'POST')

// 查询城市名称
const CITY_NAME_RECEIVER = window.g.CityNameReceiver
export const getCityNameReceiver = data =>
  postFetch(CITY_NAME_RECEIVER, data, 'POST')

// 识别银行卡号和英文简称
const BANK_CARD_PHOTOS = window.g.BankCardPhotos
export const getBankCardPhotos = data =>
  postFetch(BANK_CARD_PHOTOS, data, 'POST')
// 通过银行简码查询银行
const QUERY_BANK_NAME = window.g.QueryBankname
export const queryBankname = data => postFetch(QUERY_BANK_NAME, data, 'POST')
