<template>
    <div class="login">
        <h2>
            Регистрация по номеру телефона
        </h2>
        <div class="login__form">
            <label for="phone">
                Телефон
            </label>
            <masked-input v-model.trim="phone" id="phone" mask="\+\7 (111) 1111-11" />
            <div class="error__text" v-if="$v.phone.$dirty && !$v.phone.required">Поле 'Телефон' обязателен к заполнению</div>
            <p>
                для регестрирования по номеру телефона необходимо иметь ключ ЭЦП либо быть зарегестрированным в <b>Digital ID</b>
            </p>
            <button @click="reg">ДАЛЕЕ</button>
        </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import MaskedInput from 'vue-masked-input'

export default {
    data () {
        return {
            phone: '',
        }
    },
    components: {
        MaskedInput
    },
    validations: {
        phone: {
            required, 
        },
    },
    methods: {
        reg () {
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
        font-size: 32px;
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
            color: #000;
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
            user-select: none;
            b {
                font-weight: 500;
                font-style: normal;
                color: blue;
                cursor: pointer;
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