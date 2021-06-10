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
        LOGOUT: (state, token) => {
            if (router.history.current.path !== '/') {
                router.push('/')
            } 
            state.token = []
     
            console.log(token);
        
            localStorage.clear()
            location.reload()
            
        }
    },
    actions: {
        SIGN_IN_USER ({commit}, data__profile) {
            commit('SIGN_IN', data__profile.token)
            commit('REDIRECT', data__profile.type)
            this.dispatch('USER_DATA')
        },
        SIGN_OUT_USER ({commit}) {
            commit('LOGOUT', this.getters.GET_TOKEN[0])
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
  