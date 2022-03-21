import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // route level code-splitting
    // this generates a separate chunk (checkout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    // route level code-splitting
    // this generates a separate chunk (delivery.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "delivery" */ '../views/Delivery.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
