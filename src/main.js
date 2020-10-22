import Vue from 'vue'
import App from './App.vue'

// 导入路由
import router from './router'

//导入全局样式
import './styles/global.less'

//导入axios
//因为我们下面不需要使用他  所以不用像路由一样
import './utils/request'

new Vue({
  render: h => h(App),
  router //把路由注入到根实例中,这样整个项目都会拥有根实例
}).$mount('#app')
