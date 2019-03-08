import Vue from 'vue'
import app from './App'
import router from './router'
import 'lib-flexible/flexible'

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(app),
  router,//配置路由器

})
