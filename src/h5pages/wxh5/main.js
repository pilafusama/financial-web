// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from '@/router/phone'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store/h5'
import 'font-awesome/scss/font-awesome.scss'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/../static/css/common.css'
import * as filters from '@/../static/js/filters.js'

import App from './App'

Vue.use(ElementUI)
Vue.use(MintUI)
Vue.prototype.Toast = MintUI.Toast

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
