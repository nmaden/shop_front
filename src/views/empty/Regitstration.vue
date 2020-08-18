<template>
    <div class="auth">
        <div class="auth__margin">
            <HeaderAuth />
            <div class="registrations">
                <h2>
                    Регистрация
                </h2>
                <div class="registrations__form">
                    <div class="input__block">
                        <label for="name">
                            Имя <span>*</span>
                        </label>
                        <input type="text" v-model.trim="name" id="name">
                        <div class="error__text" v-if="$v.name.$dirty && !$v.name.required">Поле 'Имя' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="surname">
                            Фамилия <span>*</span>
                        </label>
                        <input type="text" v-model.trim="surname" id="surname">
                        <div class="error__text" v-if="$v.surname.$dirty && !$v.surname.required">Поле 'Фамилия' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="middle_name">
                            Отчество
                        </label>
                        <input type="text" v-model.trim="middle_name" id="middle_name">
                    </div>


                    <div class="input__block">
                        <label for="document_number">
                            Номер документа <span>*</span>
                        </label>
                        <input type="text" v-model.trim="document_number" id="document_number">
                        <div class="error__text" v-if="$v.document_number.$dirty && !$v.document_number.required">Поле 'Номер документа' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.document_number.numeric">Поле 'Номер документа' введите только цифры</div>

                    </div>

                    <div class="input__block__child">
                        <label for="iin">
                            ИИН <span>*</span>
                        </label>
                        <input type="text" v-model.trim="iin" id="iin">    
                        <div class="error__text" v-if="$v.iin.$dirty && !$v.iin.required">Поле 'ИИН' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.iin.numeric">Поле 'ИИН' введите только цифры</div>
                    </div>
                    <div class="input__block__child">
                        <label for="phone">
                            Телефон <span>*</span>
                        </label>
                        <masked-input v-model.trim="phone" id="phone" mask="\+\7 (111) 1111-11" />
                        <div class="error__text" v-if="$v.phone.$dirty && !$v.phone.required">Поле 'Телефон' обязателен к заполнению</div>
                    </div>
                    <div class="input__block__child">
                        <label for="email">
                            E-mail <span>*</span>
                        </label>
                        <input type="text" v-model.trim="email" id="email">    
                        <div class="error__text" v-if="$v.email.$dirty && !$v.email.required">Поле 'E-mail' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.email.email">Введите корректный 'E-mail' </div>
                    </div>
                </div>

                <h3>Адресные данные</h3>

                <div class="registrations__form">
                    <div class="input__block">
                        <label for="region">
                            Область <span>*</span>
                        </label>
                        <select v-model.trim="region" id="region">
                            <option value="">Область</option>
                        </select>
                        <div class="error__text" v-if="$v.region.$dirty && !$v.region.required">Поле 'Область' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="district">
                            Район <span>*</span>
                        </label>
                        <select v-model.trim="district" id="district">
                            <option value="">Район</option>
                        </select>
                        <div class="error__text" v-if="$v.district.$dirty && !$v.district.required">Поле 'Район' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="locality">
                            Населенный пункт
                        </label>
                        <select v-model.trim="locality" id="locality">
                            <option value="">Населенный пункт</option>
                            <option value="">Населенный пункт</option>
                            <option value="">Населенный пункт</option>
                            <option value="">Населенный пункт</option>
                        </select>
                    </div>
                    
                    <div class="input__block">
                        <label for="address">
                            Адрес <span>*</span>
                        </label>
                        <input type="text" v-model.trim="address" id="address">
                        <div class="error__text" v-if="$v.address.$dirty && !$v.address.required">Поле 'Адрес' обязателен к заполнению</div>
                    </div>

                    <div class="input__block__child">
                        <label for="house_number">
                            Номер дома <span>*</span>
                        </label>
                        <input type="text" v-model.trim="house_number" id="house_number">    
                        <div class="error__text" v-if="$v.house_number.$dirty && !$v.house_number.required">Поле 'Номер дома' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.house_number.numeric">Поле 'Номер дома' введите только цифры</div>
                    </div>

                    <div class="input__block__child">
                        <label for="apartment_number">
                            Номер квартиры <span>*</span>
                        </label>
                        <input type="text"  v-model.trim="apartment_number"  id="apartment_number">
                        <div class="error__text" v-if="$v.apartment_number.$dirty && !$v.apartment_number.required">Поле 'Номер квартиры' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.apartment_number.numeric">Поле 'Номер квартиры' введите только цифры</div>
                    </div>

                </div>

                <button @click="registarations">РЕГИСТРАЦИЯ</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderAuth from './components/HeaderAuth'
import MaskedInput from 'vue-masked-input'
import { required, numeric, email } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            name: '',
            surname: '',
            document_number: '',
            middle_name: '',
            iin: '',
            phone: '',
            email: '',
            region: '',
            district: '',
            address: '',
            house_number: '',
            apartment_number: '',
        }
    },
    validations: {
        name: {
            required, 
        },
        surname: {
            required, 
        },
        document_number: {
            required, 
            numeric,
        },
        iin: {
            required, 
            numeric
        },
        phone: {
            required, 
        },
        email: {
            required, 
            email,
        },
        region: {
            required, 
        },
        district: {
            required, 
        },
        address: {
            required, 
        },
        house_number: {
            required,
            numeric 
        },
        apartment_number: {
            required, 
            numeric
        }
    },
    components: {
        HeaderAuth,
        MaskedInput
    },
    methods: {
        registarations () {
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
.auth {
    width: 100%;

    .auth__margin {
        width: 85%;
        margin: 0 auto;
        margin-top: 40px;

        .registrations {
            width: 100%;
            margin-top: 40px;

            h2 {
                font-style: normal;
                font-weight: 500;
                font-size: 48px;
                color: #000;
            }
            h3 {
                font-style: normal;
                color: #000;
                font-weight: 500;
                font-size: 20px;
                margin-top: 20px;
            }
            button {
                padding: 15px 50px;
                background: #FDE88D;
                border: 3px solid #FDE88D;
                box-sizing: border-box;
                font-style: normal;
                font-weight: bold;
                margin-top: 20px;
                margin-bottom: 20px;
                font-size: 16px;
                outline: none;
                border-radius: 30px;
                &:hover {
                    opacity: 0.7;
                }
            }
            .registrations__form {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin-top: 20px;
                .input__block {
                    width: 345px;
                    margin-right: 10px;
                    .error__text {
                        color: red;
                        font-size: 12px;
                        margin-bottom: 10px;
                    }
                    span {
                        color: red;
                    }
                    select {
                        width: 100%;
                        height: 46px;
                        padding: 10px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        margin-bottom: 10px;
                    }
                    input {
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                        margin-bottom: 10px;
                    }
                    label {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }
                .input__block__child {
                    width: 201px;
                    margin-right: 10px;
                    .error__text {
                        color: red;
                        font-size: 12px;
                        margin-bottom: 10px;
                    }
                    span {
                        color: red;
                    }
                    input {
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                        margin-bottom: 10px;
                    }
                    label {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        color: #000;
                    }
                }
            }
        }
    }
}
</style>