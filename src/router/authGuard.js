import store from '../store'

export const authGuard = (to, from, next) => {
    const currentUser = store.getters.GET_TOKEN.length

    if (currentUser !== 0) {
        next({name: 'Admin'});
    } else {
        next()
    }
}