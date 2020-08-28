<template>
    <div class="auth">
        <div class="auth__margin">
            <Nav />
            <div class="registrations">
                <h2>
                    Отправить уведомление о прибытии гостя в МВД
                </h2>

                <div class="registrations__form">
                    <div @click="date_arrival = true" class="input__block">
                        <label>
                            Дата заезда - выезда <span>*</span>
                        </label>
                        <div class="data_input_block">
                            <p>{{this.arrival}}</p>
                            <p>-</p>
                            <p>{{this.departure}}</p>
                            <img src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.picker.$dirty && !$v.picker.required">Поле 'Дата заезда - выезда' обязателен к заполнению</div>
                    </div>
                    <div class="input__block">
                        <label for="check_in_time">
                            Время заезда <span>*</span>
                        </label>
                        <input v-model.trim="check_in_time" class="input" :disabled="true" type="text" id="check_in_time">
                    </div>
                    <!-- <div class="input__block select__input">
                        <label>
                            Адрес прибывания <span>*</span>
                        </label>
                        <div class="data_input_block">
                            <img src="../../assets/icons/search.svg" alt="date">
                             <v-autocomplete
                                v-model.trim="stay_addres"
                                :items="items"
                                dense
                                filled
                                :hide-details="true"
                                no-data-text="Нечего не найдено"
                                background-color="transparent"
                                :single-line="true"
                            ></v-autocomplete>
                        </div>
                    </div> -->
                </div>

                <button @click="scanDocument">Сканировать документ</button>

                <h3>Данные гостя</h3>

                <div class="registrations__form">
                    <div class="input__block">
                        <label for="name">
                            Имя <span>*</span>
                        </label>
                        <input v-model.trim="name" class="input" type="text" id="name">
                        <div class="error__text" v-if="$v.name.$dirty && !$v.name.required">Поле 'Имя' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="surname">
                            Фамилия <span>*</span>
                        </label>
                        <input v-model.trim="surname" class="input" type="text" id="surname">
                        <div class="error__text" v-if="$v.surname.$dirty && !$v.surname.required">Поле 'Фамилия' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="middle_name">
                            Отчество
                        </label>
                        <input v-model.trim="middle_name" class="input" type="text" id="middle_name">
                    </div>
 
                    <div class="input__block select__input">
                        <label>
                            Гражданство <span>*</span>
                        </label>
                        <div class="data_input_block">
                             <v-autocomplete
                                v-model.trim="citizenship"
                                :items="countries"
                                item-text="label"
                                dense
                                filled
                                :hide-details="true"
                                no-data-text="Нечего не найдено"
                                background-color="transparent"
                                :single-line="true"
                            ></v-autocomplete>
                        </div>
                        <div class="error__text" v-if="$v.citizenship.$dirty && !$v.citizenship.required">Поле 'Гражданство' обязателен к заполнению</div>
                    </div>

                    <div class="input__block__child">
                        <label for="date_birth">
                            Дата рождения <span>*</span>
                        </label>
                        <div @click="date_birth_picker = true" class="data_input_block">
                            <p>{{date_birth}}</p>
                            <img src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.date_birth.$dirty && !$v.date_birth.required">Поле 'Дата рождения' обязателен к заполнению</div>
                    </div>

                    <div class="input__block__child">
                        <label for="floor">
                            Пол <span>*</span>
                        </label>
                        
                        <div class="data_input_block">
                             <v-select
                                v-model.trim="floor"
                                :items="genders"
                                item-text="label"
                                dense
                                solo
                                :hide-details="true"
                            ></v-select>
                        </div>
                        <div class="error__text" v-if="$v.floor.$dirty && !$v.floor.required">Поле 'Пол' обязателен к заполнению</div>
                    </div>
                </div>

                <div class="registrations__form">
                    <div class="input__block">
                        <label for="phone">
                            Телефон  <span>*</span>
                        </label>
                        <masked-input class="input" v-model.trim="phone" id="phone" mask="\+\7 (111) 1111-11" />
                        <div class="error__text" v-if="$v.phone.$dirty && !$v.phone.required">Поле 'Телефон' обязателен к заполнению</div>
                    </div>
                    <div class="input__block">
                        <label for="email">
                            E-mail <span>*</span>
                        </label>
                        <input class="input" v-model.trim="email" type="text" id="email">
                        <div class="error__text" v-if="$v.email.$dirty && !$v.email.required">Поле 'E-mail' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.email.email">Введите корректный 'E-mail' </div>
                    </div>
                </div>

                <h3>Документы, удостоверяющие личность</h3>

                <div class="registrations__form">
                    <div class="input__block">
                        <label for="type_document">
                            Тип документа  <span>*</span>
                        </label>
                        <div class="data_input_block">
                             <v-autocomplete
                                v-model.trim="type_document"
                                :items="doctypes"
                                dense
                                item-text="label"
                                filled
                                :hide-details="true"
                                no-data-text="Нечего не найдено"
                                background-color="transparent"
                                :single-line="true"
                            ></v-autocomplete>
                        </div>
                        <div class="error__text" v-if="$v.type_document.$dirty && !$v.type_document.required">Поле 'Тип документа' обязателен к заполнению</div>
                    </div>
                    <div class="input__block__child">
                        <label for="document_number">
                            Номер документа <span>*</span>
                        </label>
                        <input class="input" v-model.trim="document_number" type="text" id="document_number">
                        <div class="error__text" v-if="$v.document_number.$dirty && !$v.document_number.required">Поле 'Номер документа' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.document_number.numeric">Поле 'Номер документа' введите только цифры</div>
                    </div>
                    <div class="input__block__child">
                        <label for="series_documents">
                            Серия документа <span>*</span>
                        </label>
                        <input class="input" v-model.trim="series_documents" type="text" id="series_documents">
                        <div class="error__text" v-if="$v.series_documents.$dirty && !$v.series_documents.required">Поле 'Серия документа' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.series_documents.numeric">Поле 'Серия документа' введите только цифры</div>
                    </div>
                </div>

                <div class="registrations__form">
                    <div class="input__block__child">
                        <label>
                            Дата выдачи <span>*</span>
                        </label>
                        <div @click="date_issuing_picker = true" class="data_input_block">
                            <p>{{date_issuing}}</p>
                            <img src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.date_issuing.$dirty && !$v.date_issuing.required">Поле 'Дата выдачи' обязателен к заполнению</div>
                    </div>
                    <div class="input__block__child">
                        <label>
                            Дата окончания срока <span>*</span>
                        </label>
                        <div @click="date_endings_picker = true" class="data_input_block">
                            <p>{{date_endings}}</p>
                            <img src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.date_endings.$dirty && !$v.date_endings.required">Поле 'Дата окончания срока' обязателен к заполнению</div>
                    </div>
                </div>

                <h3>Данные о пребывании</h3>

                <div class="registrations__form">
                    <div class="input__block select__input">
                        <label>
                            Цель визита <span>*</span>
                        </label>
                        <div class="data_input_block">
                             <v-autocomplete
                                v-model.trim="target"
                                :items="targets"
                                item-text="label"
                                dense
                                filled
                                :hide-details="true"
                                no-data-text="Нечего не найдено"
                                background-color="transparent"
                                :single-line="true"
                            ></v-autocomplete>
                        </div>
                        <div class="error__text" v-if="$v.target.$dirty && !$v.target.required">Поле 'Цель визита' обязателен к заполнению</div>
                    </div>
                    <div class="input__block__child">
                        <label>
                            Дата начала <span>*</span>
                        </label>
                        <div @click="date_start_picker = true" class="data_input_block">
                            <p>{{start_check_date}}</p>
                            <img src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.start_check_date.$dirty && !$v.start_check_date.required">Поле 'Дата начала' обязателен к заполнению</div>
                    </div>
                    <div class="input__block__child">
                        <label>
                            Дата окончания <span>*</span>
                        </label>
                        <div @click="date_end_picker = true" class="data_input_block">
                            <p>{{end_check_date}}</p>
                            <img src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.end_check_date.$dirty && !$v.end_check_date.required">Поле 'Дата окончания' обязателен к заполнению</div>
                    </div>
                    
                </div>

                 <div class="registrations__form">
                    <div class="input__block">
                        <label for="comment">
                            Дополнительные сведения <span>*</span>
                        </label>
                        <textarea class="textarea" v-model.trim="comment" id="comment"></textarea>
                        <div class="error__text" v-if="$v.comment.$dirty && !$v.comment.required">Поле 'Дополнительные сведения' обязателен к заполнению</div>
                    </div>
                </div>
                
                <v-checkbox
                    v-model="checkbox_notify_mvd"
                    color="#FDE88D"
                    label="Отправить уведомление в МВД РК о прибытии иностранного постояльца."
                ></v-checkbox>
                <v-checkbox
                    v-model="checkbox_welcome_message"
                    color="#FDE88D"
                    label="Отправить welcome сообщение на email."
                ></v-checkbox>

                <button @click="send_notif">ОТПРАВИТЬ</button>
            </div>
        </div>


        <!-- modal window -->

        <v-dialog
            v-model="date_arrival"
            max-width="290"
        >
            <v-card>
                <v-date-picker 
                    locale="ru-in"
                    v-model="picker"
                    range
                    @change="changeDateArrival"
                ></v-date-picker>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="date_birth_picker"
            max-width="290"
        >
            <v-card>
                <v-date-picker 
                    locale="ru-in"
                    v-model="date_birth"
                    @change="date_birth_picker = false"
                ></v-date-picker>
            </v-card>
        </v-dialog>
        
        <v-dialog
            v-model="date_issuing_picker"
            max-width="290"
        >
            <v-card>
                <v-date-picker 
                    locale="ru-in"
                    v-model="date_issuing"
                    @change="date_issuing_picker = false"
                ></v-date-picker>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="date_endings_picker"
            max-width="290"
        >
            <v-card>
                <v-date-picker 
                    locale="ru-in"
                    v-model="date_endings"
                    @change="date_endings_picker = false"
                ></v-date-picker>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="date_start_picker"
            max-width="290"
        >
            <v-card>
                <v-date-picker 
                    locale="ru-in"
                    v-model="start_check_date"
                    @change="date_start_picker = false"
                ></v-date-picker>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="date_end_picker"
            max-width="290"
        >
            <v-card>
                <v-date-picker 
                    locale="ru-in"
                    v-model="end_check_date"
                    @change="date_end_picker = false"
                ></v-date-picker>
            </v-card>
        </v-dialog>
        

        <v-dialog
            v-model="scan_photo_picker"
            max-width="900"
        >
            <div class="scan__block">
                <div class="scan__block__header">
                    <h3>
                        Сканирование документа, удостоверящего личность
                    </h3>
                </div>
                <div class="scan__block__flex">
                    <div class="scan__block__flex__child">
                        <WebCam
                            ref="webcam"
                            width="100%"
                            height="100%"
                            class="webCamMirror"
                        ></WebCam>
                    </div>
                    <div class="scan__block__flex__child">
                        <img :src="img" v-if="img !== null" />
                        <img src="../../assets/all/rightside.svg" v-else>
                    </div>
                </div>
                <div class="button__flex">
                    <button @click="onCapture" class="bg__btn__1">
                        сканировать
                    </button>
                    <button  @click="img = null" class="bg__btn__1">
                        переснять
                    </button>
                    <button @click="closeScanDocument" class="bg__btn__2">
                        закрыть
                    </button>
                </div>
            </div>
        </v-dialog>
        
        <v-dialog
            v-model="modal_success"
            max-width="500"
        >
            <v-card>
                <div class="type__auth">
                    <h2>
                        Изменения сохранены успешно
                    </h2>
                    <div class="type__auth__block">
                        <img src="../../assets/all/super-girl.svg" alt="images">
                        <button @click="modal_success = false">
                            ЗАКРЫТЬ
                        </button>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Nav from '../components/NavHeader'
import MaskedInput from 'vue-masked-input'
import { WebCam } from "vue-cam-vision";
import { required, email, numeric } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
    components: {
        Nav, 
        MaskedInput, 
        WebCam
    },
    validations: {
        picker: {
            required
        },
        name: {
            required
        },
        surname: {
            required
        },
        citizenship: {
            required
        },
        date_birth: {
            required
        },
        floor: {
            required
        },
        phone: {
            required
        },
        email: {
            required,
            email
        },
        type_document: {
            required
        },
        document_number: {
            required,
            numeric
        },
        series_documents: {
            required,
            numeric
        },
        date_issuing: {
            required
        },
        date_endings: {
            required
        },
        target: {
            required
        },
        start_check_date: {
            required
        },
        end_check_date: {
            required
        },
        comment: {
            required
        }
    },
    data () {
        return {
            date_arrival: false,
            date_birth_picker: false,
            date_issuing_picker: false,
            date_endings_picker: false,
            date_start_picker: false,
            date_end_picker: false,
            scan_photo_picker: false,
            modal_success: false,
            picker: null,
            items: ['foo', 'bar', 'fizz', 'buzz'],
            img: null,

            genders: [
                {
                    label: 'мужской',
                    value: 2,
                },
                {
                    label: 'женский',
                    value: 1,
                }
            ],
            targets: [],
            doctypes: [],
            countries: [],

            stay_addres: null,

            arrival: 'заезд',
            departure: 'выезд',
            name: null,
            surname: null,
            middle_name: null,
            floor: null,
            citizenship: null,
            phone: null,
            date_birth: null,
            type_document: null,
            date_issuing: null,
            date_endings: null,
            start_check_date: null,
            end_check_date: null,
            target: null,
            email: null,
            comment: null,
            document_number: null,
            series_documents: null,
            checkbox_notify_mvd: true,
            checkbox_welcome_message: true,
            check_in_time: null,
            check_out_time: null,
        }
    },
    mounted() {
        this.getDate()
        this.getCountries()
        this.getDoctypes()
        this.getTargets()
    },
    methods: {
        send_notif () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return 
            } else {  
                this.modal_success = true
                // this.$axios({ 
                //     method: 'post',
                //     url: this.$API_URL + this.$API_VERSION + 'registry/create',
                //     data: {
                //         surname: this.surname,
                //         name: this.name,
                //         patronymic: this.middle_name,
                //         date_birth: this.date_birth,
                //         email: this.email,
                //         phone: this.phone,
                //         doctype_id: this.type_document,
                //         document_number: this.document_number,
                //         series_documents: this.series_documents,
                //         date_issue: this.date_issuing,
                //         valid_until: this.date_endings,
                //         notify_mvd: this.checkbox_notify_mvd,
                //         gender_id: this.floor,
                //         start_check_date: this.start_check_date,
                //         end_check_date: this.end_check_date,
                //         kato_id: this.citizenship,
                //         target_id: this.target,
                //         check_in: this.arrival,
                //         check_out: this.departure,
                //         comment: this.comment,
                //         welcome_message: this.checkbox_welcome_message,
                //         check_in_time: this.check_in_time,
                        
                //         check_out_time: '12:00',

                //         number: this.number,
                //         status: this.status.value,
                //     }
                // })
                // .then((response) => {
                //     if (response.data.msg == "success register") {
                //         this.modal = true
                //     }
                // })  
                // .catch((error) => {
                //     console.log(error);
                // });              
            }
        },
        getCountries () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION + 'country/index',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                // console.log(response.data)
                let obj;
                let arr = []
                for (let index = 0; index < response.data.length; index++) {
                    obj = {
                        label: response.data[index].label,
                        value: response.data[index].value
                    }
                    arr.push(obj)
                }
                console.log(arr)
                this.countries = arr
            }); 
        },
        getDoctypes () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION + 'doctype/index',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                this.doctypes = response.data
            }); 
        },
        getTargets () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION + 'target/index',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                this.targets = response.data
            }); 
        },
        getDate () {
            let hours = (new Date()).getHours();
            let minutes = (new Date()).getMinutes();
            this.check_in_time = hours + ':'  + minutes
        },
        closeScanDocument () {
            this.$refs.webcam.stop();
            this.scan_photo_picker = false
        },
        changeDateArrival () {
            this.date_arrival = false
            this.arrival = this.picker[0]
            this.departure = this.picker[1]
        },
        scanDocument () {
            this.scan_photo_picker = true
        },
        onCapture() {
            this.img = this.$refs.webcam.capture();
            // this.send_base64();
        },
    },
    computed: {
        ...mapGetters(['GET_TOKEN']),
    }
}
</script>

<style scoped lang="less">
.type__auth {
    width: 100%;
    background: #fff;
    text-align: center;
    padding: 50px 70px;

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        letter-spacing: -0.05em;
        color: #000000;
    }
    .type__auth__block {
        margin-top: 30px;
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
            margin-top: 20px;
        }
    }
}
.scan__block {
    width: 100%;
    background: #fff;
    padding: 20px;
    
    .scan__block__header {
        width: 100%;
        margin-bottom: 20px;
        h3 {
            color: #000;
            font-size: 20px;
        }
    }
    .scan__block__flex {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .scan__block__flex__child {
            width: 400px;
            height: 300px;
            img {
                width: 100%;
            }
            .webCamMirror {
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
            }
        }
    }
    .button__flex {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        button {
            padding: 9px 20px;
            text-transform: uppercase;
            margin-right: 14px;
            font-size: 14px;
            outline: none;
            border-radius: 5px;
        }
        .bg__btn__1 {
            background: #FDE88D;
            color: #000;
        }
        .bg__btn__2 {
            background: red;
            color: #fff;
        }
    }
}
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
                outline: none;
                box-sizing: border-box;
                font-style: normal;
                font-weight: bold;
                margin-top: 20px;
                margin-bottom: 20px;
                font-size: 16px;
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
                .select__input {
                    cursor: pointer;
                }
                .input__block {
                    width: 345px;
                    margin-right: 10px;
                    span {
                        color: red;
                    }
                    .error__text {
                        color: red;
                        font-size: 12px;
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
                    .textarea {
                        width: 100%;
                        height: 146px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                    }
                    
                    
                    .data_input_block {
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 10px;
                        .search_input {
                            height: 26px;
                            border: none;
                            width: 81%;
                            outline: none;
                        }
                        p {
                            cursor: pointer;
                            color: #000;
                            margin: 0;
                            &:hover {
                                opacity: .7;
                            }
                        }
                        img {
                            cursor: pointer;
                            &:hover {
                                opacity: .7;
                            }
                        }
                        .icon__size {
                            height: 7px;
                            width: 10px;
                        }
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
                    .data_input_block {
                        cursor: pointer;
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                        margin-bottom: 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        p {
                            margin: 0
                        }
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