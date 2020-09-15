<template>
    <div class="login">
        <div class="login__form">
            <label for="email">
                E-mail
            </label>
            <input type="text" v-model.trim="email" id="email">
            <div class="error__text" v-if="$v.email.$dirty && !$v.email.required">Поле 'E-mail' обязателен к заполнению</div>
            <div class="error__text" v-if="!$v.email.email">Введите корректный 'E-mail' </div>
            
            <label for="password">
                Пароль
            </label>
            <input type="password" v-model.trim="password" id="password">
            <div class="error__text" v-if="$v.password.$dirty && !$v.password.required">Поле 'Пароль' обязателен к заполнению</div>

            <p>Забыли пароль?</p>
            <button @click="login">Войти</button>
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
        ...mapActions([
            'SIGN_IN_USER',
        ]),
        login () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return 
            } else {
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION + 'auth/login',
                    data: {
                        email: this.email,
                        password: this.password,
                    }
                })
                .then((response) => {
                    console.log(response)
                    if (response.status == 200) {
                        this.SIGN_IN_USER(response.data.token)
                        this.$router.push('/profile')
                    }
                })  
                .catch((error) => {
                    if (error.response.status == 401) {
                        this.$toast.open({
                            message: 'неверный логин или пароль!',
                            type: 'error',
                            position: 'bottom',
                            duration: 1500,
                            queue: true
                        });
                    }
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