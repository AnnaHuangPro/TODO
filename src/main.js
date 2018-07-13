/*真正的入口文件，App.vue不能单独的挂载在HTML里面*/

import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/styles/global.styl'/*全局css*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
/*将App.vue组件的内容挂载在"#app"上*/
