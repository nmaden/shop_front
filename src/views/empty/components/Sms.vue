<template>
    <div class="sms">
        <div class="sms__form">
            <label for="iin">
                ИИН
            </label>
            <input type="text" v-model.trim="iin" id="iin">
            <div class="error__text" v-if="$v.iin.$dirty && !$v.iin.required">Поле 'ИИН' обязателен к заполнению</div>
            <div class="error__text" v-if="!$v.iin.numeric">Поле 'ИИН' введите только цифры</div>
            <div class="error__text" v-if="!$v.iin.minLength">Минимальное количество символов 12</div>
            <div class="error__text" v-if="!$v.iin.maxLength">Максимальное количество символов 12</div>
            <label for="phone">
                Номер телефона
            </label>
            <masked-input v-model.trim="phone" id="phone" mask="\+\7 (111) 1111-11" />
            <div class="error__text" v-if="$v.phone.$dirty && !$v.phone.required">Поле 'Номер телефона' обязателен к заполнению</div>
            <button @click="auth">Войти</button>
        </div>
    </div>
</template>

<script>
import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators'
import MaskedInput from 'vue-masked-input'

export default {
    data () {
        return {
            phone: '',
            iin: '',
        }
    },
    components: {
        MaskedInput
    },
    validations: {
        phone: {
            required, 
        },
        iin: {
            required, 
            numeric,
            minLength: minLength(12),
            maxLength: maxLength(12)
        }
    },
    methods: {
        auth () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return 
            } else {
                console.log('test')                 
            }
        },
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;

.sms {
    width: 100%;
    .sms__form {
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
        }
        button {
            @media (max-width: @mobile) {
                font-size: 14px;
                padding: 10px 20px;
                width: 100%;
            }
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