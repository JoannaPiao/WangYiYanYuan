import Vue from 'vue'
import app from './App'
import router from './router'
import 'lib-flexible/flexible'
import store from './store'
import './mock/mockServer'  //mockServer.js会被打包执行一次

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(app),
  router,//配置路由器
  store,

})
