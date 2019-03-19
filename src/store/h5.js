import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Vuex全局状态管理
 * @param options {Array} 用于渲染tabs的数组
 */
const store = new Vuex.Store({
  state: {
    receiveInfo: {
      approval_id: '',
      receive_name: '',
      receive_account: '',
      account_bank: '',
      account_bank_code: '',
      account_city: '',
      account_city_code: '',
      account_subbank: '',
      account_subbank_code: ''
    }
  },
  mutations: {
    setReceiveInfo (state, data) {
      if (data.hasOwnProperty('approval_id')) {
        state.receiveInfo.approval_id = data.approval_id
      }
      if (data.hasOwnProperty('receive_name')) {
        state.receiveInfo.receive_name = data.receive_name
      }
      if (data.hasOwnProperty('receive_account')) {
        state.receiveInfo.receive_account = data.receive_account
      }
      if (data.hasOwnProperty('account_bank')) {
        state.receiveInfo.account_bank = data.account_bank
      }
      if (data.hasOwnProperty('account_bank_code')) {
        state.receiveInfo.account_bank_code = data.account_bank_code
      }
      if (data.hasOwnProperty('account_area')) {
        state.receiveInfo.account_area = data.account_area
      }
      if (data.hasOwnProperty('account_city')) {
        state.receiveInfo.account_city = data.account_city
      }
      if (data.hasOwnProperty('account_city_code')) {
        state.receiveInfo.account_city_code = data.account_city_code
      }
      if (data.hasOwnProperty('account_subbank')) {
        state.receiveInfo.account_subbank = data.account_subbank
      }
      if (data.hasOwnProperty('account_subbank_code')) {
        state.receiveInfo.account_subbank_code = data.account_subbank_code
      }
    }
  }
})

export default store
