// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import QS from 'qs'
Vue.prototype.qs = QS;
import 'element-ui/lib/theme-chalk/index.css'
 Vue.use(ElementUI)
//QS是axios库中带的，不需要我们再npm安装一个
 
Vue.prototype.axios = axios;
//Vue.prototype.$http=Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
