<template>
    <div class="login">
        <h2>
            Войти в eQonaq
        </h2>
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
        login () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return 
            } else {
                console.log('ok reg')                 
            }
        },
    }
}
</script>

<style scoped lang="less">
.login {
    width: 100%;
    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        color: #000;
    }
    .login__form {
        width: 90%;
        margin-top: 20px;
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
        }
    }
}
</style>