import {authGuard} from './authGuard'

export const routes = [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/Main.vue'),
      children: [
        { path: '/', component: () => import('../views/components/Body.vue')},
        { path: '/category/:id', component: () => import('../views/components/Body.vue')},
        // { path: '/basket', component: () => import('../views/components/Basket.vue')},
        { path: '/category/:category/product/:id', component: () => import('../views/components/Product.vue')},
      ]
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import('../views/components/Basket.vue'),
        // meta: {layout: 'not_authorized', requiresAuth: false},

    },
    {
      path: '/login',
      name: 'Auth',
      component: () => import('../views/empty/Auth.vue'),
      // meta: {layout: 'not_authorized', requiresAuth: false},
  
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/empty/Admin'),
      // meta: {layout: 'authorized', requiresAuth: true},
      // beforeEnter: authGuard
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('../views/components/Basket.vue'),
      meta: {layout: 'not_authorized', requiresAuth: false},
      beforeEnter: authGuard
    },  
    {
      path: '*',
      name: '404',
      component: () => import('../views/cabinet/404.vue'),
    },
]