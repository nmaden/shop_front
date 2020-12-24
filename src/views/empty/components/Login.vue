<template>
    <div class="login">
        <div class="login__form">
            <form @submit="login">
                <label for="email">
                    E-mail
                </label>
                <input type="text" v-model.trim="email" id="email">
                <div class="error__text" v-if="$v.email.$dirty && !$v.email.required">Поле 'E-mail' обязателен к заполнению</div>
                <div class="error__text" v-if="$v.email.$dirty && !$v.email.email">Введите корректный 'E-mail' </div>
                
                <label for="password">
                    {{$t('login__label__password')}} 
                </label>
 
                <div class="view__password__icon">
                    <input :type="active__eye == true ? 'password' : 'text'" v-model.trim="password" id="password">
                    <div class="view__icon">
                        <span @click="activeEye" :class="active__eye == true ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"></span>
                    </div>
                </div>

                <div class="error__text" v-if="$v.password.$dirty && !$v.password.required">Поле 'Пароль' обязателен к заполнению</div>

                <router-link tag="a" to="/forgot"><p>{{$t('login__forgot__password')}}</p></router-link>
                <button :disabled="disabled__button" type="submit">{{$t('login__btn')}}</button> 
            </form>
            
        </div>
    </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
    data () {
        return {
            email: '',
            password: '',
            disabled__button: false,
            active__eye: true
        }
    },
    validations: {
        password: {
            required, 
        },
        email: {
            required, 
            email,
        },
    },
    methods: {
        activeEye () {
            this.active__eye = !this.active__eye
        },
        ...mapActions([
            'SIGN_IN_USER',
        ]),
        login (e) {
            e.preventDefault()
            if (this.$v.$invalid) {
                this.$toast.open({
                    message: 'Заполните необходимые поля',
                    type: 'error',
                    position: 'bottom',
                    duration: 5000,
                    queue: true
                });
                this.$v.$touch()
                return 
            } else {
                this.disabled__button = true
                this.$Progress.start()
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION_2 + 'login',
                    data: {
                        email: this.email,
                        password: this.password,
                    }
                })
                .then((response) => {
                    this.disabled__button = false
                    this.$Progress.finish()
                    this.is_entity = response.data.is_entity
                    if (response.data.is_entity == 1) {
                        let origin = window.location.origin
                        let origin__array = origin.replaceAll(/[./:]/g, ' ')
                        let path = origin__array.split(' ').filter(item => item !== '')[1]
                        document.cookie = "token="+ response.data.token + "; domain=.eqonaq.kz; max-age=30"
                        let url = path === 'eqonaq' ? 'https://cabinet.eqonaq.kz' : 'https://cabinet.'+path+'.eqonaq.kz'
                        window.location.href = url
                    } else {
                        let data__profile = {
                            token: response.data.token,
                            type: true,
                        }
                        this.SIGN_IN_USER(data__profile)
                    }
                })
                .catch((error) => {
                    this.disabled__button = false
                    this.$Progress.fail()
                    this.$toast.open({
                        message: error.response.data.message,
                        type: 'error',
                        position: 'bottom',
                        duration: 5000,
                        queue: true
                    });
                });    
            }
        },
    },
}
</script>

<style scoped lang="less">
@mobile: 900px;

.login {
    width: 100%;
   
    .login__form {
        width: 100%;
        a {
            text-decoration: none;
        }
        .error__text {
            color: red;
            font-size: 12px;
            margin-bottom: 10px;
        }
        input {
            width: 100%;
            height: 46px;
            background: #F7F7F7;
            border-radius: 10px;
            outline: none;
            padding: 10px;
            margin-bottom: 10px;
        }
        .view__password__icon {
            position: relative;
            .view__icon {
                position: absolute;
                top: 14%;
                right: 7px;
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    font-size: 22px;
                    cursor: pointer;
                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }
        label {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            @media (max-width: @mobile) {
                font-size: 13px;
            }
        }
        p {
            color: #64A4E0;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            cursor: pointer;
            user-select: none;
            &:hover {
                opacity: .7;
            }
        }
        button {
            padding: 15px 50px;
            background: #FDE88D;
            border: 3px solid #FDE88D;
            box-sizing: border-box;
            border-radius: 30px;
            font-style: normal;
            font-weight: bold;
            outline: none;
            font-size: 16px;
            text-transform: uppercase;
            &:hover {
                opacity: .7;
            }
            @media (max-width: @mobile) {
                padding: 10px 20px;
                color: #000;
                font-size: 14px;
                margin-top: 0;
                width: 100%;
            }
        }
    }
}
</style>