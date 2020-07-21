import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'index', component: resolve => require(['@/views/index'], resolve)},
    {path: '/about', name: 'about', component: resolve => require(['@/views/about'], resolve)},
    {path: '/feature', name: 'feature', component: resolve => require(['@/views/feature'], resolve)},
    {path: '/product', name: 'product', component: resolve => require(['@/views/product'], resolve)},
    {path: '/market', name: 'market', component: resolve => require(['@/views/market'], resolve)},
    {path: '/show', name: 'show', component: resolve => require(['@/views/show'], resolve)},
    {path: '/mask', name: 'mask', component: resolve => require(['@/views/mask'], resolve)},
    {path: '/question', name: 'question', component: resolve => require(['@/views/question'], resolve)},
    {path: '/feedback', name: 'feedback', component: resolve => require(['@/views/feedback'], resolve)}
  ]
})
