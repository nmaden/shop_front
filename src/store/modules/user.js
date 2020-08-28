export default {
    state: {
        user_name: '',
    },
    mutations: {
        USER: (state, user) => {
            state.user = user
        },
    },
    actions: {
        USER_DATA({commit}, user) {
            commit('USER', user)
        },
    },
    getters: {
        GET_USER_DATA(state) {
            return state.user
        },
    },
}
  