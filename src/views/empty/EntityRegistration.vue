<template>
    <div class="auth">
        <div class="auth__margin">
            <Nav />
            <div class="registrations">
                <h2>
                    Регистрация юридических лиц
                </h2>
                <div class="eds__desktop">
                    <div class="registrations__form">
                        <button @click="handleSend">Выбрать ЭЦП</button>
                    </div>
                </div>
                
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
                        <div class="error__text" v-if="!$v.iin.minLength">Минимальное количество символов 12</div>
                        <div class="error__text" v-if="!$v.iin.maxLength">Максимальное количество символов 12</div>
                    </div>
                    <div class="input__block">
                        <label for="email">
                            Роль <span>*</span>
                        </label>
                        <select 
                            v-model.trim="role" 
                        >
                            <option value="" disabled>Выберите роль</option>
                            <option value="admin">Администартор</option>
                            <option value="user">Пользователь</option>
                        </select>
                        <div class="error__text" v-if="$v.role.$dirty && !$v.role.required">Поле 'Роль' обязателен к заполнению</div>
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
                    <div class="input__block__child">
                        <label for="bin">
                            БИН места размещения <span>*</span>
                        </label>
                        <input type="text" v-model.trim="bin" id="bin">    
                        <div class="error__text" v-if="$v.bin.$dirty && !$v.bin.required">Поле 'БИН места размещения' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.bin.numeric">Поле 'БИН места размещения' введите только цифры</div>
                        <div class="error__text" v-if="!$v.bin.minLength">Минимальное количество символов 12</div>
                        <div class="error__text" v-if="!$v.bin.maxLength">Максимальное количество символов 12</div>
                    </div>
                </div>

                <div v-if="additional_fields == true" class="registrations__form">
                    <div class="input__block">
                        <label for="hotel_name">
                            Наименование места размещения <span>*</span>
                        </label>
                        <input type="text" v-model.trim="hotel_name" id="hotel_name">
                        <div class="error__text" v-if="$v.hotel_name.$dirty && !$v.hotel_name.required">Поле 'Наименование места размещения' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="hotel_entity">
                            Наименование юридического лица <span>*</span>
                        </label>
                        <input type="text" v-model.trim="hotel_entity" id="hotel_entity">
                        <div class="error__text" v-if="$v.hotel_entity.$dirty && !$v.hotel_entity.required">Поле 'Наименование юридического лица' обязателен к заполнению</div>
                    </div>

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

                    <div class="input__block">
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

                    <div class="input__block">
                        <label for="hotel_pms">
                            PMS <span>*</span>
                        </label>
                        <input type="text" v-model.trim="hotel_pms" id="hotel_pms">
                        <div class="error__text" v-if="$v.hotel_pms.$dirty && !$v.hotel_pms.required">Поле 'PMS' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="hotel_site">
                            Сайт <span>*</span>
                        </label>
                        <input type="text" v-model.trim="hotel_site" id="hotel_site">
                        <div class="error__text" v-if="$v.hotel_site.$dirty && !$v.hotel_site.required">Поле 'Сайт' обязателен к заполнению</div>
                    </div>
                    <div class="input__block">
                        <label for="hotel_booking">
                            Booking <span>*</span>
                        </label>
                        <input type="text" v-model.trim="hotel_booking" id="hotel_booking">
                        <div class="error__text" v-if="$v.hotel_booking.$dirty && !$v.hotel_booking.required">Поле 'Booking' обязателен к заполнению</div>
                    </div>
                    <div class="input__block">
                        <label for="hotel_tripadvisor">
                            Tripadvisor <span>*</span>
                        </label>
                        <input type="text" v-model.trim="hotel_tripadvisor" id="hotel_tripadvisor">
                        <div class="error__text" v-if="$v.hotel_tripadvisor.$dirty && !$v.hotel_tripadvisor.required">Поле 'Tripadvisor' обязателен к заполнению</div>
                    </div>

                </div>
                <button @click="registarations">РЕГИСТРАЦИЯ</button>
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
                        <!-- <p>
                            Вам на почту отправлено письмо с вашим паролем для авторизации в системе.
                        </p> -->
                        <router-link to="/login">
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

export default {
    data () {
        return {
            name: null,
            surname: null,
            document_number: null,
            middle_name: null,
            iin: null,
            phone: null,
            email: null,
            region: null,
            district: null,
            address: null,
            house_number: null,
            locality: null,
            role: null,
            bin: null,
            hotel_name: null,
            hotel_entity: null,
            hotel_pms: null,
            hotel_site: null,
            hotel_booking: null,
            hotel_tripadvisor: null,

            modal: false,
            region__array: [],
            district__array: [],
            locality__array: [],
            additional_fields: false,

            // websocked
            connection: null,
            ready: false,
            esp__array: null
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
            numeric,
            minLength: minLength(12),
            maxLength: maxLength(12)
        },
        bin: {
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
        role: {
            required, 
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
        hotel_name: {
            required,
        },
        hotel_entity: {
            required
        },
        hotel_pms: {
            required
        },
        hotel_site: {
            required
        },
        hotel_booking: {
            required
        },
        hotel_tripadvisor: {
            required
        }
    },
    components: {
        Nav,
        MaskedInput,
    },
    mounted () {
        this.getLocal()
    },
    
    methods: {
        registarations () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return 
            } else {
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION_2 + 'register/request',
                    data: {
                        first_name: this.name,
                        last_name: this.surname,
                        middle_name: this.surname,
                        document_number: this.document_number,
                        iin: this.iin,
                        email: this.email,
                        phone: this.phone,   
                        region_id: this.region,
                        area_id: this.district,
                        locality_id: this.locality,
                        hotel_address: this.address,
                        hotel_house: this.house_number,
                    }
                })
                .then((response) => {
                    if (response.data.msg == "success register") {
                        this.modal = true
                        this.name = null
                        this.surname = null
                        this.document_number = null
                        this.middle_name = null
                        this.iin = null
                        this.phone = null
                        this.email = null
                        this.region = null
                        this.district = null
                        this.address = null
                        this.house_number = null
                        this.locality = null
                    }
                })  
                .catch((error) => {
                    if (error.response.status == 400) {
                        this.$toast.open({
                            message: error.response.data.msg,
                            type: 'error',
                            position: 'bottom',
                            duration: 1500,
                            queue: true
                        });
                    }
                });              
            }
        },
        handleSend () {
            if (this.ready == false) {
                console.log('Убедитесь, что программа NCALayer запущена')
            } else {
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
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'guest/loginwithecp/bar',
                data: {
                    data: this.esp__array,
                }
            })
            .then((response) => {
                console.log(response)
            })  
            .catch((error) => {
                console.log(error)
            });    
        }
        
    },
    created () {
        this.connection = new WebSocket("wss://127.0.0.1:13579/")
        this.connection.onopen = () => {
            console.log("Connection success");
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
        p {
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
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
                @media (max-width: @mobile) {
                    display: none;
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