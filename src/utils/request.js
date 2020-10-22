import Vue from 'vue'
import axios from 'axios'

// 设置基准地址
axios.defaults.baseURL = 'http://127.0.0.1/heimamm/public/'

// 把axios实例挂载在vue原型上
Vue.prototype.$http = axios