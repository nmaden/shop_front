import store from '../store'

export function checkAccessMiddleware(to, from, next) {
    const currentUser = store.getters.GET_TOKEN.length
    const requireAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requireAuth && currentUser == 0) {
        next({name: 'Auth'})
    } else {
        next()
    }
}
  