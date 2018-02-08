// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import message from  './components/message/index'
import messageLoding from  './components/loading/messageLoading.js'
Vue.prototype.$message = message;
Vue.prototype.$messageLoding = messageLoding;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
