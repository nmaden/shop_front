<template>
    <div class="login">
        <div class="login__form">
            <form @submit="login">
                <label for="email">
                    E-mail
                </label>
                <input type="text" v-model.trim="email" id="email">
                <div class="error__text" v-if="$v.email.$dirty && !$v.email.required">Поле 'E-mail' обязателен к заполнению</div>
                <div class="error__text" v-if="$v.password.$dirty && !$v.email.email">Введите корректный 'E-mail' </div>
                
                <label for="password">
                    Пароль
                </label>
                <input type="password" v-model.trim="password" id="password">
                <div class="error__text" v-if="$v.password.$dirty && !$v.password.required">Поле 'Пароль' обязателен к заполнению</div>

                <!-- <p>Забыли пароль?</p> -->
                <button type="submit">Войти</button> 
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
        login (e) {
            e.preventDefault()
            if (this.$v.$invalid) {
                this.$toast.open({
                    message: 'Заполните необходимые поля',
                    type: 'error',
                    position: 'bottom',
                    duration: 1500,
                    queue: true
                });
                this.$v.$touch()
                return 
            } else {
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
                    this.$Progress.finish()
                    this.is_entity = response.data.is_entity
                    console.log(response)
                    if (response.data.is_entity == 1) {
                        document.cookie = "token="+ response.data.token + "; domain=.eqonaq.kz; max-age=30"
                        window.location.href = 'https://cabinet.eqonaq.kz'
                    } else {
                        let data__profile = {
                            token: response.data.token,
                            type: true,
                        }
                        this.SIGN_IN_USER(data__profile)
                    }
                })
                .catch((error) => {
                    this.$Progress.fail()
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