import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('../components/views/employee/EmployeeIndex.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../components/views/employee/EmployeeIndex.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../components/views/employee/EmployeeIndex.vue')
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('../views/About.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../components/views/employee/EmployeeIndex.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../components/views/employee/EmployeeIndex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
