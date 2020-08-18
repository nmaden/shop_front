import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: {layout: 'not_authorized'},
  },
  {
    path: '/login',
    name: 'Auth',
    component: () => import('../views/empty/Auth.vue'),
    meta: {layout: 'not_authorized'},
  },
  {
    path: '/regitstration',
    name: 'Regitstration',
    component: () => import('../views/empty/Regitstration.vue'),
    meta: {layout: 'not_authorized'},
  },
  {
    path: '/notif',
    name: 'Notif',
    component: () => import('../views/cabinet/Notif.vue'),
    meta: {layout: 'authorized'},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/cabinet/Profile.vue'),
    meta: {layout: 'authorized'},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
