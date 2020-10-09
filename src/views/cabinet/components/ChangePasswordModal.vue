<template>
    <v-dialog
        v-model="modal"
        max-width="500"
    >
        <v-card>
            <div class="change__password">
                 <h3>
                     Изменить пароль
                 </h3>
                 <div class="registrations__form">
                    <div class="input__block">
                        <label for="old__password">
                            Старый пароль <span>*</span>
                        </label>
                        <input type="password" v-model.trim="old__password" id="old__password">
                        <div class="error__text" v-if="$v.old__password.$dirty && !$v.old__password.required">Поле 'Старый пароль' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="new__password">
                            Новый пароль <span>*</span>
                        </label>
                        <input type="password" v-model.trim="new__password" id="new__password">    
                        <div class="error__text" v-if="$v.new__password.$dirty && !$v.new__password.required">Поле 'Новый пароль' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.new__password.minLength">Минимальная длина пароля 8 символов</div>
                        <div class="error__text" v-if="!$v.new__password.maxLength">Максимальная длина пароля 42 символа</div>
                    </div>

                    <div class="input__block">
                        <label for="new__password__repeat">
                            Повторить новый пароль <span>*</span>
                        </label>
                        <input type="password"  v-model.trim="new__password__repeat"  id="new__password__repeat">
                        <div class="error__text" v-if="$v.new__password__repeat.$dirty && !$v.new__password__repeat.required">Поле 'Повторить новый пароль' обязателен к заполнению</div>
                        <div class="error__text" v-if="$v.new__password__repeat.$dirty && !$v.new__password__repeat.sameAs">Пароли не совпадают</div>
                    </div>
                    <div class="input__block">
                        <button @click="changePassword">Сохранить</button>
                    </div>
                </div>   
            </div>
        </v-card>
    </v-dialog>
</template>
<script>
import { required, sameAs, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
    validations: {
        old__password: {
            required,
        },
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
    data () {
        return {
            modal: false,
            old__password: null,
            new__password: null,
            new__password__repeat: null,
        }
    },
    methods: {
        changePassword () {
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
                this.$axios({ 
                    method: 'put',
                    url: this.$API_URL + this.$API_VERSION_2 + 'profile',
                    headers: {
                        'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                    },
                    data: {
                        old_password: this.old__password,
                        password: this.new__password
                    }
                })
                .then((response) => {
                    this.$Progress.finish()
                    if (Object.prototype.hasOwnProperty.call(response.data, 'password') == true) {
                        this.$toast.open({
                            message: 'Минимальная длина пароля 8 символов максимальная 42 символа',
                            type: 'error',
                            position: 'bottom',
                            duration: 2000,
                            queue: true
                        });
                    } else {
                        this.$toast.open({
                            message: response.data.message,
                            type: 'success',
                            position: 'bottom',
                            duration: 1500,
                            queue: true
                        });
                        this.modal = false
                        this.old__password = null
                        this.new__password = null
                        this.new__password__repeat = null
                    }
                })  
                .catch((error) => {
                    this.$Progress.fail()
                    console.log(error)
                });  
                
            }
        }
    },
    created () {
      this.$modal.$on('modal',  (value) => {
          if (value.type == 'password') {
                this.modal = value.view
          }
      })
    },
    computed: {
        ...mapGetters(['GET_TOKEN']),
    }
}
</script>
<style lang="less" scoped>
@mobile: 900px;

.change__password {
    width: 100%;
    background: #fff;
    padding: 50px;
    text-align: center;
    @media (max-width: @mobile) {
        padding: 10px;
    }
    h3 {
        margin-bottom: 20px;
        font-family: "MontserratBold";
        font-size: 30px;
        @media (max-width: @mobile) {
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
    .registrations__form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: left;
        
        .input__block {
            width: 100%;
            margin-bottom: 10px;
            .error__text {
                color: red;
                font-size: 12px;
                margin-bottom: 10px;
                font-weight: bold;
            }
            span {
                color: red;
            }
            button {
                height: 46px;
                width: 100%;
                background: #FDE88D;
                border: 3px solid #FDE88D;
                box-sizing: border-box;
                border-radius: 10px;
                font-style: normal;
                font-weight: 600;
                font-family: "MontserratBold";
                font-size: 16px;
                text-transform: uppercase;
                line-height: 25px;
                color: #000;
                outline: none;
                margin-top: 5px;
            }
            input {
                width: 100%;
                height: 46px;
                background: #fff;
                border-radius: 10px;
                outline: none;
                border: 2px solid #000000;
                padding: 10px;
            }
            label {
                font-style: normal;
                font-weight: 500;
                font-family: "MediumMedium";
                font-size: 14px;
            }
        }
    }
}
</style>