<template>
    <div class="auth">
        <div class="auth__margin">
            <Nav />
            <div class="registrations">
                <Police 
                    @police__accepted="policeAccepted" 
                    v-if="police == false" 
                />

                <div v-if="police == true">
                    <div class="eds__desktop"> 
                        <h1 v-if="showEdsForm == false">
                            {{$t('registration__title')}}
                        </h1>
                        <div v-if="showEdsForm == false" class="eds__desktop__text">
                            <p>
                                <i18n path="registration__description">
                                    <a href="https://egov.kz/cms/ru/services/pass_onlineecp" place="action">{{$t('registration__description_link')}}</a>
                                </i18n>
                            </p>
                        </div>
                        
                        <div class="registrations__form">
                            <button @click="handleSend">{{$t('registration__eds__btn')}}</button>
                        </div>
                        
                        <p v-if="showError == true"> 
                            <i18n path="eds__page__warnings">
                                <a href="https://pki.gov.kz/ncalayer/" target="_blank" place="action">{{$t('eds__link__text')}}</a>
                            </i18n>
                        </p>
                    </div>
                    
                    <div v-if="showEdsForm !== false">
                        <div class="registrations__form">
                            <div class="input__block">
                                <label for="name">
                                    Имя <span>*</span>
                                </label>
                                <div class="input">
                                    {{name}}
                                </div>
                                <div class="error__text" v-if="$v.name.$dirty && !$v.name.required">Поле 'Имя' обязателен к заполнению</div>
                            </div>

                            <div class="input__block">
                                <label for="surname">
                                    Фамилия <span>*</span>
                                </label>
                                <div class="input">
                                    {{surname}}
                                </div>
                                <div class="error__text" v-if="$v.surname.$dirty && !$v.surname.required">Поле 'Фамилия' обязателен к заполнению</div>
                            </div>

                            <div class="input__block">
                                <label for="middle_name">
                                    Отчество
                                </label>
                                <div class="input">
                                    {{middle_name}}
                                </div>
                            </div>


                            <div class="input__block__child">
                                <label for="iin">
                                    ИИН <span>*</span>
                                </label>
                                <div class="input">
                                    {{iin}}
                                </div>
                                <div class="error__text" v-if="$v.iin.$dirty && !$v.iin.required">Поле 'ИИН' обязателен к заполнению</div>
                                <div class="error__text" v-if="!$v.iin.numeric">Поле 'ИИН' введите только цифры</div>
                                <div class="error__text" v-if="!$v.iin.minLength">Минимальное количество символов 12</div>
                                <div class="error__text" v-if="!$v.iin.maxLength">Максимальное количество символов 12</div>
                            </div>
                            <div class="input__block__child">
                                <label for="phone">
                                    Телефон <span>*</span>
                                </label>
                                <masked-input v-model.trim="phone" id="phone" mask="\+\7 (111) 111-11-11" />
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
                                <select 
                                    v-model.trim="region" 
                                    id="region"
                                    @change="getDistrict"
                                >
                                    <option value="" disabled>Область</option>
                                    <option 
                                        v-for="item_region in region__array"
                                        :key="item_region.value"
                                        :value="item_region.value"
                                    >
                                        {{item_region.label}}
                                    </option>
                                </select>
                                <div class="error__text" v-if="$v.region.$dirty && !$v.region.required">Поле 'Область' обязателен к заполнению</div>
                            </div>

                            <div class="input__block">
                                <label for="district">
                                    Район <span>*</span>
                                </label>
                                <select 
                                    v-model.trim="district" 
                                    id="district"
                                    @change="getLocality"
                                >
                                    <option value="" disabled>Район</option>
                                    <option 
                                        v-for="item_district in district__array"
                                        :key="item_district.value"
                                        :value="item_district.value"
                                    >
                                        {{item_district.label}}
                                    </option>
                                </select>
                                <div class="error__text" v-if="$v.district.$dirty && !$v.district.required">Поле 'Район' обязателен к заполнению</div>
                            </div>
                            <div v-if="locality__array.length !== 0" class="input__block">
                                <label for="locality">
                                    Населенный пункт 
                                </label>
                                <select v-model.trim="locality" id="locality">
                                    <option value="" disabled>Населенный пункт</option>
                                    <option 
                                        v-for="item_locality in locality__array"
                                        :key="item_locality.value"
                                        :value="item_locality.value"
                                    >
                                        {{item_locality.label}}
                                    </option>
                                </select>
                            </div>
                            
                            <div class="input__block">
                                <label for="address">
                                    Улица <span>*</span>
                                </label>
                                <input type="text" v-model.trim="address" id="address">
                                <div class="error__text" v-if="$v.address.$dirty && !$v.address.required">Поле 'Улица' обязателен к заполнению</div>
                            </div>

                            <div class="input__block__child">
                                <label for="house_number">
                                    Номер дома <span>*</span>
                                </label>
                                <input type="text" v-model.trim="house_number" id="house_number">    
                                <div class="error__text" v-if="$v.house_number.$dirty && !$v.house_number.required">Поле 'Номер дома' обязателен к заполнению</div>
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
                        <button :disabled="disabled__button" @click="registarations">РЕГИСТРАЦИЯ</button>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- modal window -->
        <v-dialog
            v-model="modal"
            max-width="500"
        >
            <v-card>
                <div class="type__registration">
                    <h2>
                        Регистрация прошла успешно
                    </h2>
                    <div class="type__registration__block">
                        <img src="../../assets/all/super-girl.svg" alt="images">
                        <p>
                            Вам на почту отправлено письмо с вашим паролем для авторизации в системе. <br>
                            При возникновении вопросов пишите письмо на почту <a href="mailto:support@eqonaq.kz">support@eqonaq.kz</a>
                        </p>
                        <router-link to="/profile">
                            <button>
                                ПОНЯТНО
                            </button>
                        </router-link>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Nav from '../components/NavHeader'
import MaskedInput from 'vue-masked-input'
import { required, numeric, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import Police from './Police'

export default {
    data () {
        return {
            name: null,
            surname: null,
            middle_name: null,
            iin: null,
            phone: null,
            email: null,
            region: null,
            district: null,
            address: null,
            house_number: null,
            apartment_number: null,
            locality: null,
            token_pki: null,
            
            showEdsForm: false,
            police: false,
            disabled__button: false,

            modal: false,
            region__array: [],
            district__array: [],
            locality__array: [],

            // websocked
            connection: null,
            ready: false,
            esp__array: null,

            showError: false
        }
    },
    validations: {
        name: {
            required, 
        },
        surname: {
            required, 
        },
        iin: {
            required, 
            numeric,
            minLength: minLength(12),
            maxLength: maxLength(12)
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
        },
        apartment_number: {
            required, 
            numeric
        }
    },
    components: {
        Nav,
        MaskedInput,
        Police
    },
    mounted () {
        this.getLocal()
    },
     
    methods: {
        ...mapActions([
            'SIGN_IN_USER',
        ]),
        policeAccepted (type) {
            this.police = type
        },
        registarations () {
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
                    url: this.$API_URL + this.$API_VERSION_2 + 'register/pki/step2',
                    data: {
                        token: this.token_pki,
                        first_name: this.name,
                        last_name: this.surname,
                        middle_name: this.surname,
                        iin: this.iin,
                        email: this.email,
                        phone: this.phone,   
                        hotel_region_id: this.region,
                        hotel_area_id: this.district,
                        hotel_locality_id: this.locality,
                        hotel_address: this.address,
                        hotel_house: this.house_number,
                        hotel_apartment: this.apartment_number
                    }
                })
                .then((response) => {
                    this.$Progress.finish()
                    this.showEdsForm = false
                    this.modal = true
                    this.name = null
                    this.surname = null
                    this.middle_name = null
                    this.iin = null
                    this.phone = null
                    this.email = null
                    this.region = null
                    this.district = null
                    this.address = null
                    this.house_number = null
                    this.apartment_number = null
                    this.locality = null

                    let data__profile = {
                        token: response.data.access_token,
                        type: false,
                    }
                    this.SIGN_IN_USER(data__profile)
                    this.disabled__button = false

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
        handleSend () {
            if (this.ready == false) {
                this.showError = true
                this.$toast.open({
                    message: this.$i18n.t('eds__nclaer__disabled'),
                    type: 'error',
                    position: 'bottom',
                    duration: 5000,
                    queue: true
                });
            } else {
                this.showError = false
                const data = {
                    module: 'kz.gov.pki.knca.commonUtils',
                    method: "signXml",
                    args: [
                        "PKCS12",
                        "AUTHENTICATION",
                        "<login><sessionid>caacda70-fd36-45ed-8d94-45a88890f83a</sessionid></login>",
                        "", ""
                    ]
                };
                this.connection.send(JSON.stringify(data));
            }
        },
        getLocal () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION + 'kato/region',
            })
            .then((response) => {
                this.region__array = response.data
            }); 
        },
        getDistrict () {
            this.$axios({
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'kato/area',
                data: {
                    parent_id: this.region
                }
            })
            .then((response) => {
                this.district__array = response.data
            })  
            .catch((error) => {
                console.log(error);
            });
        },
        getLocality () {
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'kato/areas',
                data: {
                    parent_id: this.district
                }
            })
            .then((response) => {
                this.locality__array = response.data
            })  
            .catch((error) => {
                console.log(error);
            });
        },
        sendEsp () {
            this.$Progress.start()
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + this.$API_VERSION_2 + 'register/pki',
                data: {
                    data: this.esp__array,
                }
            })
            .then((response) => {
                this.$Progress.finish()
                if (Object.keys(response.data.filled_data).length !== 0) {
                    if (typeof(response.data.filled_data.iin) == 'undefined') {
                         this.$toast.open({
                            message: 'Выберите сертификат физического лица',
                            type: 'error',
                            position: 'bottom',
                            duration: 5000,
                            queue: true
                        });
                    } else {
                        this.name = response.data.filled_data.first_name 
                        this.surname = response.data.filled_data.last_name
                        this.iin = response.data.filled_data.iin
                        this.email = response.data.filled_data.email
                        this.token_pki = response.data.token
                        this.showEdsForm = true
                        this.$toast.open({
                            message: response.data.message,
                            type: 'success',
                            position: 'bottom',
                            duration: 5000,
                            queue: true
                        });
                    }
                } else {
                    this.showEdsForm = false
                }
            })  
            .catch((error) => {
                this.$Progress.fail()
                this.$toast.open({
                    message: error.response.data.message,
                    type: 'error',
                    position: 'bottom',
                    duration: 10000,
                    queue: true
                });
            });    
        }
    },
    created () {
        this.connection = new WebSocket("wss://127.0.0.1:13579/")
        this.connection.onopen = () => {
            this.ready = true
        }
        this.connection.onmessage = (e) => {
            const arr = JSON.parse(e.data);
            const parse__arr = arr.responseObject
            this.esp__array = parse__arr
            if (typeof this.esp__array !== 'undefined') {
                this.sendEsp()
            }
        };
    },
   
}
</script>

<style scoped lang="less">
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
        font-size: 27px;
        font-family: "MontserratBold";
        line-height: 34px;
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
        p {
            font-family: "MediumMedium";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.05em;
            color: #000000;
            margin-top: 20px;
            margin-bottom: 20px;
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

.auth {
    width: 100%;
    font-family: "MontserratBold";
    .auth__margin {
        width: 85%;
        margin: 0 auto;
        margin-top: 40px;

        .registrations {
            width: 100%;
            margin-top: 40px;
            @media (max-width: @mobile) {
                margin-top: 15px;
            }
            .eds__desktop {
                display: block;
                h1 {
                    color: #000;
                    font-size: 48px;
                    margin-bottom: 20px;
                }
                @media (max-width: @mobile) {
                    display: none;
                }
                p {
                    color:  #636363;
                    font-family: "MediumMedium";
                    a {
                        color:  #636363;
                        text-decoration: none;
                        border-bottom: 1px solid  #636363;
                        
                        &:hover {
                            opacity: .7;
                        }
                    }
                }
                .eds__desktop__text {
                    width: 544px;
                    p {
                        font-style: normal;
                        font-weight: normal;
                        font-family: "MediumMedium";
                        font-size: 16px;
                        line-height: 20px;
                        color: #636363;
                        a {
                            color: #636363;
                            border-bottom: 1px solid #636363;
                        }
                    }
                    @media (max-width: @mobile) {
                        width: 100%;
                    }
                }
            }
            h2 {
                font-style: normal;
                font-weight: 500;
                font-size: 48px;
                color: #000;
                @media (max-width: @mobile) {
                    font-size: 20px;
                    line-height: 25px;
                }
            }
            h3 {
                font-style: normal;
                color: #000;
                font-weight: 500;
                font-size: 20px;
                margin-top: 20px;
                @media (max-width: @mobile) {
                    font-size: 17px;
                    line-height: 20px;
                }
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
                @media (max-width: @mobile) {
                    margin-top: 10px;
                }
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
                    .input {
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
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
                    .input {
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                        margin-bottom: 10px;
                    }
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
                     button {
                        padding: 0;
                        width: 201px;
                        height: 45px;
                        background: #FDE88D;
                        border: 3px solid #FDE88D;
                        box-sizing: border-box;
                        font-style: normal;
                        font-weight: bold;
                        margin-top: 24px;
                        font-size: 16px;
                        outline: none;
                        border-radius: 8px;
                    }
                }
            }
            
        }
    }
}
</style>