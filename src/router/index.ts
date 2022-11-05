import Login from '@/views/Authentication/Login/Login.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import NotFound from '@/views/NotFound/NotFoundView.vue';
import Register from '@/views/Authentication/Register/Register.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
