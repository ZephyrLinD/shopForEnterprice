import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Index from './pages/index'
import Product from './pages/product'
import All from './pages/all'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import Alipay from './pages/alipay'



Vue.use(Router);

// 导出
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [ // 子路由
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                }, {
                    // 商品
                    path: '/product/:id',
                    name: 'product',
                    component: Product
                }, {
                    // 商品详情
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }, {
                    path: '/all',
                    name: 'all',
                    component: All
                }
            ]
        }, {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/cart',
            name: 'cart',
            component: Cart
        }, {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList
                }, {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm
                }, {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay
                }, {
                    path: 'alipay',
                    name: 'alipay',
                    component: Alipay
                }
            ]
        }
    ]
});