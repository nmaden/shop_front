import {authGuard} from './authGuard'

export const routes = [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue'),
    },
    {
      path: '/password/:hash',
      name: 'Password',
      component: () => import('../views/empty/Password.vue'),
      meta: {layout: 'not_authorized', requiresAuth: false},
      // beforeEnter: authGuard
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: () => import('../views/empty/ForgotPassword.vue'),
      meta: {layout: 'not_authorized', requiresAuth: false},
      beforeEnter: authGuard
    },
    {
      path: '/login',
      name: 'Auth',
      component: () => import('../views/empty/Auth.vue'),
      meta: {layout: 'not_authorized', requiresAuth: false},
      beforeEnter: authGuard
    },
    {
      path: '/regitstration',
      name: 'Regitstration',
      component: () => import('../views/empty/Regitstration.vue'),
      meta: {layout: 'not_authorized', requiresAuth: false},
      beforeEnter: authGuard
    },
    {
      path: '/entityregistration',
      name: 'EntityRegistration',
      component: () => import('../views/empty/EntityRegistration.vue'),
      meta: {layout: 'not_authorized', requiresAuth: false},
      beforeEnter: authGuard
    },
    {
      path: '/notif',
      name: 'Notif',
      component: () => import('../views/cabinet/Notif.vue'),
      meta: {layout: 'authorized', requiresAuth: true},
    },
    {
      path: '/address',
      name: 'AddressList',
      component: () => import('../views/cabinet/components/AddressList.vue'),
      meta: {layout: 'authorized', requiresAuth: true},
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/cabinet/Profile.vue'),
      meta: {layout: 'authorized', requiresAuth: true},
    },
    {
      path: '/currency',
      name: 'Сurrency',
      component: () => import('../views/cabinet/Сurrency.vue'),
    },
    {
      path: '/telephones',
      name: 'Telephones',
      component: () => import('../views/cabinet/Telephones.vue'),
    },
    {
      path: '/connection',
      name: 'Connection',
      component: () => import('../views/cabinet/Connection.vue'),
    },
    {
      path: '/migration',
      name: 'Migration',
      component: () => import('../views/cabinet/Migration.vue'),
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/cabinet/Search.vue'),
    },
]