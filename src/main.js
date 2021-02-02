// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'

import ElementUI from 'element-ui'
Vue.use(ElementUI);
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'


import axios from 'axios'
Vue.prototype.$axios = axios


import qs from 'qs'
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



//axios 配置
//var axios = require('axios');
// Axios挂载到prototype，全局可以使用this.$axios访问
Vue.prototype.$axios = axios;
//axios.defaults.baseURL ="http://114.115.213.211:8080";
axios.defaults.baseURL ="http://localhost:8080";
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8";
//
// // axios.interceptors.request.use( (config) => {
// //   if (config.method=="post"){
// //     config.data = qs.stringify(config.data);
// //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// //   }
// //   return config;
// // },  (error) => {
// //   return Promise.reject(error);
// // });
//
// axios.interceptors.request.use(function(config){
//   if(config.method == "post"){
//     config.data = qs.stringify(config.data);
//   }
//   return config;
// },function(error){
//   return Promise.reject(error);
// });
//
// // http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     if(store.state.token) {
//       // 判断是否有token，若存在，每个http header加上token
//       console.log("存在token");
//       config.headers.Authorization = `Bearer ${store.state.token}`
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// );
//
// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     console.log(error);
//     alert(error.response.data.message);
//     if(error.response.status===403) {
//       // 清除token 跳转至首页
//       store.commit('logout');
//       router.replace({
//         path: '/',
//         query: { redirect: router.currentRoute.path }
//       })
//     }
//     return Promise.reject(error)
//   }
// );
//
