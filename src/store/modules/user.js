import axios from 'axios'
import router from '../../router'

export default {
    state: {
        user_name: '',
        password_expired: null
    },
    mutations: {
        USER: (state, user) => {
            state.user = user
        },
        PASSWORD_EXPIRED: (state, password_expired) => {
            state.password_expired = password_expired
        }
    },
    actions: {
        USER_DATA({commit}) {
            axios({ 
                method: 'GET',
                url: process.env.VUE_APP_API_URL + process.env.VUE_APP_API_VERSION_2 + 'profile',
                headers: {
                    'Authorization': `Bearer ${this.getters.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                console.log(response);
               commit('PASSWORD_EXPIRED', response.data.password_expired)
               commit('USER', response.data.profile)
               if (this.getters.GET_REDIRECT == true) {
                  router.push('/profile')
               }
            })  
            .catch((error) => {
                console.log(error);
            })
        },
    },
    getters: {
        GET_USER_DATA(state) {
            return state.user
        },
        GET_PASSWORD_EXPIRED_DATA(state) {
            return state.password_expired
        },
    },
}
  