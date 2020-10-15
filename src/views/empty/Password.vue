<template>
    <div class="add__password">
        <div class="add__password__form">
            <img src="../../assets/logo/logo.svg" alt="logo">
            <p>
                Ваш пароль должен содержать символы верхнего и нижнего регистра, цифры и специальные символы. Минимальное  количество символов 8 шт.
            </p>
            <input type="password" v-model.trim="new__password" placeholder="Введите пароль">
            <div class="error__text" v-if="$v.new__password.$dirty && !$v.new__password.required">Поле 'Новый пароль' обязателен к заполнению</div>
            <div class="error__text" v-if="!$v.new__password.minLength">Минимальная длина пароля 8 символов</div>
            <div class="error__text" v-if="!$v.new__password.maxLength">Максимальная длина пароля 42 символа</div>
            <input type="password" v-model.trim="new__password__repeat" placeholder="Повторите пароль">
            <div class="error__text" v-if="$v.new__password__repeat.$dirty && !$v.new__password__repeat.required">Поле 'Повторить новый пароль' обязателен к заполнению</div>
            <div class="error__text" v-if="$v.new__password__repeat.$dirty && !$v.new__password__repeat.sameAs">Пароли не совпадают</div>
            <button :disabled="disabled__button" @click="sendPassword">
                Отправить
            </button>
        </div>

        <!-- modal window -->

        <v-dialog
            v-model="modal"
            max-width="500"
            persistent
        >
            <v-card>
                <div class="type__registration">
                    <h2>
                        Пароль успешно изменён
                    </h2>
                    <div class="type__registration__block">
                        <img src="../../assets/all/super-girl.svg" alt="images">
                        <router-link to="/">
                            <button>
                                Закрыть
                            </button>
                        </router-link>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { required, sameAs, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            new__password: null,
            new__password__repeat: null,
            modal: false,
            disabled__button: false,
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
                    duration: 5000,
                    queue: true
                });
                this.$v.$touch()
                return 
            } else {
                this.disabled__button = true
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION_2 + 'password',
                    data: {
                        hash: this.$route.params.hash,
                        password: this.new__password,
                    }
                })
                .then((response) => {
                    this.disabled__button = false
                    this.$Progress.finish()
                    this.$toast.open({
                        message: response.data.message,
                        type: 'success',
                        position: 'bottom',
                        duration: 5000,
                        queue: true
                    });
                    this.new__password = null
                    this.new__password__repeat = null
                    this.modal = true
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
        }
    }
}
</script>
<style lang="less">
@mobile: 900px;

.type__registration {
    width: 100%;
    background: #fff;
    text-align: center;
    padding: 50px 70px;
    @media (max-width: @mobile) {
        padding: 10px;
    }
    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        letter-spacing: -0.05em;
        color: #000000;
         @media (max-width: @mobile) {
            font-size: 16px;
            line-height: 20px;
            margin-top: 10px;
        }
    }
    .type__registration__block {
        margin-top: 30px;
        @media (max-width: @mobile) {
            margin-top: 15px;
        }
        img {
            @media (max-width: @mobile) {
                width: 50%;
            }
        }
         
        button {
            padding: 15px 40px;
            background: #FDE88D;
            border: 3px solid #FDE88D;
            box-sizing: border-box;
            border-radius: 30px;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #000;
            outline: none;
            @media (max-width: @mobile) {
                padding: 10px 20px;
                color: #000;
                width: 70%;
                font-size: 14px;
            }
        }
    }
}

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
        p {
            font-size: 15px;
            line-height: 17px;
            color: #818181;
            margin: 0;
            margin-bottom: 10px;
        }
        img {
            margin-bottom: 10px;
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