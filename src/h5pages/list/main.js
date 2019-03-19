// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import router from '@/router'
// import { Loadmore } from 'mint-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'

// Vue.component(Loadmore.name, Loadmore)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
