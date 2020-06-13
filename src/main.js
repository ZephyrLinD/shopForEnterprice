import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import App from './App.vue'

// Mock 开关
const mock = false;
if (mock) {
  require('./mock/api');
}

// 根据前端跨域方式做调整 这里写的是接口代理方式 /a/b : /api/a/b => /a/b
axios.defaults.baseURL= '/api';
// axios.defaults.baseURL='https://www.easy-mock.com/mock/5ee211fe81099f496759c679/api'

// 超时
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    // 未登录 状态码为 10
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
