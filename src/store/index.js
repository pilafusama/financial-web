import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Vuex全局状态管理
 * @param options {Array} 用于渲染tabs的数组
 */
const store = new Vuex.Store({
  state: {
    config: {
      appName: '金融服务平台'
    },
    userInfo: {
      username: ''
    }
  },
  mutations: {

  }
})

export default store
