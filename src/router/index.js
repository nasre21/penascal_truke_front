import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobreNosotros',
    name: 'sobreNosotros',
    component: () => import('../views/sobreNosotrosView.vue')
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: () => import('../views/logInView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminM.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/UserView.vue'),
    props: true,
  },
  {
    path: '/producto/:id',
    name: 'producto', 
    component: () => import('../views/ProductoView.vue'),
    props: true,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router