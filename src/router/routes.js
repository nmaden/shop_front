import {authGuard} from './authGuard'

export const routes = [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue'),
    },
 

    {
      path: '/login',
      name: 'GreenLogin',
      component: () => import('../views/empty/Auth.vue'),
      meta: {layout: 'not_authorized', requiresAuth: false},
      beforeEnter: authGuard
    },
    {
      path: '/green/admin',
      name: 'GreenAdmin',
      component: () => import('../views/empty/GreenAdmin.vue'),
      meta: {layout: 'not_authorized', requiresAuth: false},
      beforeEnter: authGuard
    },

  
 
    {
      path: '*',
      name: '404',
      component: () => import('../views/cabinet/404.vue'),
    },
]