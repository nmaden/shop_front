import axios from 'axios'
import router from '../../router'

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
        USER_DATA({commit}) {
            axios({ 
                method: 'GET',
                url: process.env.VUE_APP_API_URL + process.env.VUE_APP_API_VERSION_2 + 'profile',
                headers: {
                    'Authorization': `Bearer ${this.getters.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
               commit('USER', response.data.profile)
               router.push('/profile')
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
    },
}
  