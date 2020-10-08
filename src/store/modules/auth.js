export default {
    state: {
        token: [],
        redirect: null,
    },
    mutations: {
        SIGN_IN: (state, token) => {
            state.token.push(token)
        },
        REDIRECT: (state, type) => {
            state.redirect = type
        },
    },
    actions: {
        SIGN_IN_USER({commit}, data__profile) {
            commit('SIGN_IN', data__profile.token)
            commit('REDIRECT', data__profile.type)
            this.dispatch('USER_DATA')
        },
    },
    getters: {
        GET_TOKEN(state) {
            return state.token
        },
        GET_REDIRECT(state) {
            return state.redirect
        },
    },
}
  