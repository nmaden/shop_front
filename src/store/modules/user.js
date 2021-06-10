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
        
            axios.post('http://127.0.0.1:8000/api/v1/get/user/me', {
            //...data
            }, {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiZmU2YWY2Nzk1OGFiZDQzYTMzNmJhMjM4M2M3MjBjNGJhMDc4NWE3ODgxZTA3ZTUxMWRmYjljZGY1NGIxNzQ1NTU5NWM4ZjE5ZTVjNDczZjEiLCJpYXQiOjE2MjMyMzUwMzEsIm5iZiI6MTYyMzIzNTAzMSwiZXhwIjoxNjM5MDQ2MjMxLCJzdWIiOiI4NyIsInNjb3BlcyI6W119.c8gmIGmGxRlPzof9j9N_l0NWKrDNVwb9di-v9Vfh6rG2It-91RF3EteM89nBG4gPjXJPDqwn_LMeoYtfmXaP8KcUOGLDCM4mzdYdFJp2ykLvTGjiXP6WNVE1XKqWxl7CMEi9aXcI8vOI9Jl3ub3WVjEcADMuPqSerEenOh7ZliNc_T3XpL3otGJtfFiNbOU4vgljNGzIGbExYnSJuFYRPSfNUu_cbaJzCaoLv0bVMDjoSo45szR1GFJSqptPnrMTQpqaUOd-tbW_EEYEyjax8wN9KqoG1wouCOZET91bqMlIdo21PVhwHC6RvwLeTuAQdYfU3n9MPAeU9REZsgGJhNPkQ4oN6bZSNpTjEbYLP5JnN_C5wjZv1p0Xr_ZV-F0j-h0dvoYplkp6jVQ8anZUnR8zpkb59ZMshEmSvqJlBfO01ymx910hkRZk5VsL_UmY0FnBb1-ys4wxuVZFLon4tjqX-Q1JDKXu8PPx2EJxaCyZIC5RRNX0Q0YZQgdZqrFRR-73gqy-X0cEPuI6pNs_n1cI7NJ2UsYDjFXCvM87iu8FgmY-gtpdxSunCDkAVdqyjd1AsEL8Ne_N7mTTXEiVPa0DB8EiK5-lngvNW1yU4nSfHQqOadiX9CyCmJC1bxpKgqk9ehhvEiZ5hqcZnMFgkrBmi_9H6xM5tfXDg14ijPk`
            }
            }).then((response) => {
                console.log(response)
                console.log(commit)
                router.push('/admin');
                // commit('PASSWORD_EXPIRED', response.data)
                // commit('USER', response.data.profile)
                // if (this.getters.GET_REDIRECT == true) {
                //    router.push('/admin')
                // }
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
  