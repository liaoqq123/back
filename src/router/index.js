import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/layout/main.vue'
import Login from '../views/login/login.vue'

const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
