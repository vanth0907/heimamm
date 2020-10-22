import Vue from 'vue'
import VueRouter from 'vue-router'

//在vue中使用路由
Vue.use(VueRouter)

//导入页面
//登录页面
import Login from '../views/login/Login.vue'
import Layout from '../views/layout/index.vue'

const router = new VueRouter({
    routes: [
        { path: '/login', component: Login },
        { path: '/', redirect: '/login' },
        { path: '/layout', component: Layout },
    ]
})

export default router
