import router from '../../router'

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
        LOGOUT: (state) => {
            state.token = []
            if (router.path !== '/') {
                router.push('/')
            } 
        }
    },
    actions: {
        SIGN_IN_USER ({commit}, data__profile) {
            commit('SIGN_IN', data__profile.token)
            commit('REDIRECT', data__profile.type)
            this.dispatch('USER_DATA')
        },
        SIGN_OUT_USER ({commit}) {
            commit('LOGOUT')
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
  