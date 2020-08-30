import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: {layout: 'not_authorized', auth: false},
  },
  {
    path: '/login',
    name: 'Auth',
    component: () => import('../views/empty/Auth.vue'),
    meta: {layout: 'not_authorized', auth: false},
  },
  {
    path: '/regitstration',
    name: 'Regitstration',
    component: () => import('../views/empty/Regitstration.vue'),
    meta: {layout: 'not_authorized', auth: false},
  },
  {
    path: '/notif',
    name: 'Notif',
    component: () => import('../views/cabinet/Notif.vue'),
    meta: {layout: 'authorized', auth: true},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/cabinet/Profile.vue'),
    meta: {layout: 'authorized', auth: true},
  },
  {
    path: '/currency',
    name: 'Сurrency',
    component: () => import('../views/cabinet/Сurrency.vue'),
    meta: {layout: 'not_authorized', auth: false},
  },
  {
    path: '/telephones',
    name: 'Telephones',
    component: () => import('../views/cabinet/Telephones.vue'),
    meta: {layout: 'not_authorized', auth: false},
  },
  {
    path: '/connection',
    name: 'Connection',
    component: () => import('../views/cabinet/Connection.vue'),
    meta: {layout: 'not_authorized', auth: false},
  },
  {
    path: '/migration',
    name: 'Migration',
    component: () => import('../views/cabinet/Migration.vue'),
    meta: {layout: 'not_authorized', auth: false},
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/cabinet/Search.vue'),
    meta: {layout: 'not_authorized', auth: false},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next)=> {
  const currentUser = store.getters.GET_TOKEN.length
  const requireAuth = to.matched.some(record => record.meta.auth)
  if (requireAuth && currentUser == 0) {
     next('/')
  } else {
     next()
  }
})


export default router
