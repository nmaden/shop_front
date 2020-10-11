<template>
    <div class="add__password">
        <div class="add__password__form">
            <img src="../../assets/logo/logo.svg" alt="logo">
            <input type="text" v-model.trim="new__password" placeholder="Введите пароль">
            <div class="error__text" v-if="$v.new__password.$dirty && !$v.new__password.required">Поле 'Новый пароль' обязателен к заполнению</div>
            <div class="error__text" v-if="!$v.new__password.minLength">Минимальная длина пароля 8 символов</div>
            <div class="error__text" v-if="!$v.new__password.maxLength">Максимальная длина пароля 42 символа</div>
            <input type="text" v-model.trim="new__password__repeat" placeholder="Повторите пароль">
            <div class="error__text" v-if="$v.new__password__repeat.$dirty && !$v.new__password__repeat.required">Поле 'Повторить новый пароль' обязателен к заполнению</div>
            <div class="error__text" v-if="$v.new__password__repeat.$dirty && !$v.new__password__repeat.sameAs">Пароли не совпадают</div>
            <button @click="sendPassword">
                Отправить
            </button>
        </div>
    </div>
</template>
<script>
import { required, sameAs, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            new__password: null,
            new__password__repeat: null,
        }
    },
    validations: {
        new__password: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(42),
        },
        new__password__repeat: {
            sameAs: sameAs('new__password'),
            required, 
        }
    },
    methods: {
        sendPassword () {
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
                console.log('send', this.$route.params.hash);
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION_2 + 'password',
                    data: {
                        hash: this.$route.params.hash,
                        password: this.new__password,
                    }
                })
                .then((response) => {
                    this.$Progress.finish()
                    console.log(response);
                })
                .catch((error) => {
                    this.$Progress.fail()
                    console.log(error);
                });  
            }
        }
    }
}
</script>
<style lang="less">
.add__password {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .add__password__form {
        width: 400px;
        padding: 10px;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #e9e9e9;
        text-align: center;
        .error__text {
            color: red;
            font-size: 12px;
            font-weight: bold;
            text-align: left;
            position: relative;
            top: -10px;
        }
        img {
            margin-bottom: 20px;
            margin-top: 10px;
        }
        input {
            width: 100%;
            height: 45px;
            border-radius: 5px;
            border: 1px solid #e9e9e9;
            margin-bottom: 15px;
            padding-left: 10px;
            outline-color: #FDE88D;
        }
        button {
            width: 100%;
            height: 45px;
            border-radius: 5px;
            background: #FDE88D;
            font-weight: bold;
            outline: none;
            font-size: 16px;
            text-transform: uppercase;
            &:hover {
                opacity: 0.7;
            }
        }
    }
}
</style>