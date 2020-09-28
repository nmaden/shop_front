export default {
    state: {
        token: [],
    },
    mutations: {
        SIGN_IN: (state, token) => {
            state.token.push(token)
        },
    },
    actions: {
        SIGN_IN_USER({commit}, token) {
            commit('SIGN_IN', token)
            this.dispatch('USER_DATA')
        },
    },
    getters: {
        GET_TOKEN(state) {
            return state.token
        },
    },
}
  