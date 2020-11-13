<template>
    <div class="notif">
        <div class="notif__margin">
            <Nav />
            <div class="registrations">
                <h2>
                    Отправить уведомление о прибытии гостя в МВД
                </h2>

                <div class="registrations__form">
                    <div class="input__block picker">
                        <label>
                            Дата заезда - выезда <span>*</span>
                        </label>
                        <div @click="date_arrival = true" class="data_input_block">
                            <p>
                                {{arrival | moment("DD.MM.YYYY")}}
                            </p>
                            <p>-</p>
                            <p>{{departure | moment("DD.MM.YYYY")}}</p>
                            <img src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.picker.$dirty && !$v.picker.required">Поле 'Дата заезда - выезда' обязателена к заполнению</div>
                    </div>
                    <div class="input__block">
                        <label for="check_in_time">
                            Время заезда <span>*</span>
                        </label>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <div
                                    v-bind="attrs"
                                    v-on="on"
                                    class="data_input_block"
                                >
                                     {{check_in_time}} 
                                </div>
                            </template>
                            <span>Невозможно изменить время заезда</span>
                        </v-tooltip>
                    </div>

                     <div class="input__block select__input">
                        <label>
                            Адрес прибывания <span>*</span>
                        </label>
                        <div class="data_input_block">
                            <v-autocomplete
                                v-model.trim="arrival_address"
                                :items="hotels"
                                item-text="label"
                                dense
                                filled
                                :hide-details="true"
                                no-data-text="Нечего не найдено"
                                background-color="transparent"
                                :single-line="true"
                                @change="checkCountry"
                            ></v-autocomplete>
                        </div>
                        <div class="error__text" v-if="$v.arrival_address.$dirty && !$v.arrival_address.required">Поле 'Адрес прибывания' обязателено к заполнению</div>
                    </div>
                    
                </div>
                
                <div class="buttons__mobile__capture">
                    <div class="registrations__form">
                        <button class="capture__photo__desktop" @click="onCapture">Сканировать документ</button>
                        <button class="get__file__button" @click="runGetPhoto">Загрузить документ</button>
                        <input type="file" id="get__file" @change="changePhoto">
                    </div>
                </div>
                
                <h3>Данные гостя</h3>

                <div class="registrations__form">
                    <div class="input__block">
                        <label for="name">
                            Имя <span>*</span>
                        </label>
                        <input v-model.trim="name" class="input" type="text" id="name">
                        <div class="error__text" v-if="$v.name.$dirty && !$v.name.required">Поле 'Имя' обязателено к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="surname">
                            Фамилия <span>*</span>
                        </label>
                        <input v-model.trim="surname" class="input" type="text" id="surname">
                        <div class="error__text" v-if="$v.surname.$dirty && !$v.surname.required">Поле 'Фамилия' обязателено к заполнению</div>
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
                                @change="checkCountry"
                            ></v-autocomplete>
                        </div>
                        <div class="error__text" v-if="$v.citizenship.$dirty && !$v.citizenship.required">Поле 'Гражданство' обязателено к заполнению</div>
                    </div>

                    <div class="input__block__child">
                        <label for="date_birth"> 
                            Дата рождения <span>*</span>
                        </label>
                        <div class="data_input_block">
                            <maskInput class="date__input" mask="11.11.1111" v-model="date_birth"/>
                            <img @click="date_birth_picker = true" src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.date_birth.$dirty && !$v.date_birth.required">Поле 'Дата рождения' обязателена к заполнению</div>
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
                                :flat="true"
                                solo
                                :hide-details="true"
                            ></v-select>
                        </div>
                        <div class="error__text" v-if="$v.floor.$dirty && !$v.floor.required">Поле 'Пол' обязателено к заполнению</div>
                    </div>
                </div>
                
                <div class="registrations__form">
                    <div class="input__block">
                        <label for="phone">
                            Телефон 
                        </label>
                        <input class="input" v-model.trim="phone" type="text" id="phone">
                        <div class="error__text" v-if="!$v.phone.numeric">Введите корректный номер телефона</div>
                    </div>
                    <div class="input__block">
                        <label for="email">
                            E-mail
                        </label>
                        <input class="input" v-model.trim="email" type="text" id="email">
                        <div class="error__text" v-if="!$v.email.email">Введите корректный 'E-mail' </div>
                    </div>
                </div>

                <h3>Документы, удостоверяющие личность</h3>

                <div class="registrations__form">
                    <div class="input__block">
                        <label for="type_document">
                            Тип документа <span>*</span>
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
                        <div class="error__text" v-if="$v.type_document.$dirty && !$v.type_document.required">Поле 'Тип документа' обязателено к заполнению</div>
                    </div>
                    <div class="input__block__child">
                        <label for="document_number">
                            Номер документа <span>*</span>
                        </label>
                        <input class="input" v-model.trim="document_number" type="text" id="document_number">
                        <div class="error__text" v-if="$v.document_number.$dirty && !$v.document_number.required">Поле 'Номер документа' обязателено к заполнению</div>
                        <div class="error__text" v-if="!$v.document_number.numeric">Введите корректный номер документа</div>
                    </div>
                    <div class="input__block__child">
                        <label for="series_documents">
                            Серия документа 
                        </label>
                        <input class="input" v-model.trim="series_documents" type="text" id="series_documents">
                    </div>
                </div>

                <div class="registrations__form">
                    <div class="input__block__child">
                        <label>
                            Дата выдачи <span>*</span>
                        </label>
                        <div class="data_input_block">
                            <maskInput class="date__input" mask="11.11.1111" v-model="date_issuing"/>
                            <img  @click="date_issuing_picker = true" src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.date_issuing.$dirty && !$v.date_issuing.required">Поле 'Дата выдачи' обязателена к заполнению</div>
                    </div>
                    <div class="input__block__child">
                        <label>
                            Дата окончания срока <span>*</span>
                        </label>
                        <div class="data_input_block">
                            <maskInput class="date__input" mask="11.11.1111" v-model="date_endings"/>
                            <img  @click="date_endings_picker = true" src="../../assets/icons/date.png" alt="date">
                        </div>
                        <div class="error__text" v-if="$v.date_endings.$dirty && !$v.date_endings.required">Поле 'Дата окончания срока' обязателена к заполнению</div>
                    </div>
                </div>

                <div v-if="checkbox_notify_mvd == true">
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
                            <div class="error__text" v-if="$v.target.$dirty && !$v.target.required">Поле 'Цель визита' обязателено к заполнению</div>
                        </div>
                        <div class="input__block__child">
                            <label>
                                Дата начала <span>*</span>
                            </label>
                            <div class="data_input_block">
                                <maskInput class="date__input" mask="11.11.1111" v-model="start_check_date"/>
                                <img @click="date_start_picker = true" src="../../assets/icons/date.png" alt="date">
                            </div>
                            <div class="error__text" v-if="$v.start_check_date.$dirty && !$v.start_check_date.required">Поле 'Дата начала' обязателена к заполнению</div>
                        </div>
                        <div class="input__block__child">
                            <label>
                                Дата окончания <span>*</span>
                            </label>
                            <div class="data_input_block">
                                <maskInput class="date__input" mask="11.11.1111" v-model="end_check_date"/>
                                <img  @click="date_end_picker = true" src="../../assets/icons/date.png" alt="date">
                            </div>
                            <div class="error__text" v-if="$v.end_check_date.$dirty && !$v.end_check_date.required">Поле 'Дата окончания' обязателена к заполнению</div>
                        </div>
                    </div>

                    <div class="registrations__form">
                        <div class="input__block">
                            <label for="comment">
                                Дополнительные сведения
                            </label>
                            <textarea class="textarea" v-model.trim="comment" id="comment"></textarea>
                        </div>
                    </div>
                </div>
                
                <v-checkbox
                    v-if="checkbox_notify_mvd == true"
                    v-model="checkbox_notify_mvd"
                    color="#FFCC47"
                    :hide-details="true"
                    :readonly="true"
                    label="Отправить уведомление в МВД РК о прибытии иностранного постояльца."
                ></v-checkbox>
                <v-checkbox
                    v-model="checkbox_welcome_message"
                    :hide-details="true"
                    color="#FFCC47"
                    label="Отправить welcome сообщение на email."
                ></v-checkbox>
                <button @click="sendNotif">ОТПРАВИТЬ</button> 
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
                    color="#FFCC47"
                    range
                    @change="changeDateArrival"
                    @input="checkDateArrival"
                    :max="max_date_arrival"
                    :min="min_date_arrival"
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
                    v-model="date_birth_modal"
                    color="#FFCC47"
                    @change="openDataPicker('date_birth_picker')"
                    :max="max_date_birth_picker"
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
                    color="#FFCC47"
                    v-model="date_issuing_modal"
                    @change="openDataPicker('date_issuing_picker')"
                    :max="max_date_issuing_picker"
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
                    color="#FFCC47"
                    v-model="date_endings_modal"
                    @change="openDataPicker('date_endings_picker')"
                    :min="max_date_issuing_picker"
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
                    color="#FFCC47"
                    v-model="start_check_date_modal"
                    @change="openDataPicker('date_start_picker')"
                    :max="max_date_issuing_picker"
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
                    color="#FFCC47"
                    v-model="end_check_date_modal"
                    @change="openDataPicker('date_end_picker')"
                    :min="max_date_issuing_picker"
                ></v-date-picker>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="scan_photo_picker"
            max-width="600"
        >
            <div class="scan__block">
                <div class="scan__block__header">
                    <h3>
                        Сканирование документа 
                    </h3>
                    <span class="mdi mdi-close" @click="closeScanDocument"></span>
                </div>
                <div class="scan__block_webcam">
                    <div class="scan__block_webcam__hidden">
                        <div v-show="loader_scan" class="scan__preloader">
                            <div class="scan__preloader__flex">
                                <v-progress-circular
                                    indeterminate
                                    color="#FFCC47"
                                ></v-progress-circular>
                            </div>
                        </div>
                        <div class="scan__border__main">
                            <div 
                                :class="{
                                    scan__border__left__top: default_style, 
                                    scan__border__left__top__error: error_style,
                                    scan__border__left__top__success: success_style,
                                }"
                            >
                            </div>
                            <div 
                                :class="{
                                    scan__border__rigth__top: default_style, 
                                    scan__border__rigth__top__error: error_style,
                                    scan__border__rigth__top__success: success_style,
                                }"
                            >
                            </div>
                            <div 
                                :class="{
                                    scan__border__left__bottom: default_style, 
                                    scan__border__left__bottom__error: error_style,
                                    scan__border__left__bottom__success: success_style,
                                }"
                            >
                            </div>
                            <div 
                                :class="{
                                    scan__border__rigth__bottom: default_style, 
                                    scan__border__rigth__bottom__error: error_style,
                                    scan__border__rigth__bottom__success: success_style,
                                }"
                            >
                            </div>
                        </div>
                        <video 
                            ref="webcam" 
                            class="webCamMirror"
                        />
                    </div>
                </div>
            </div>
        </v-dialog>
        <v-dialog
            v-model="modal_success"
            max-width="500"
        >
            <v-card>
                <div class="type__notif">
                    <h2>
                        Уведомление успешно отправлено
                    </h2>
                    <div class="type__notif__block">
                        <img src="../../assets/all/super-girl.svg" alt="images">
                        <button @click="router('/profile')">
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
import { required, email, requiredUnless, helpers } from 'vuelidate/lib/validators'
import animateScrollTo from 'animated-scroll-to'
import { mapGetters } from 'vuex'
import maskInput from 'vue-masked-input'
const alpha = helpers.regex('numeric', /^[0-9,+,(), «»]*$/)
const document_number = helpers.regex('numeric', /^[0-9, a-zA-Z]*$/)


export default {
    components: {
        Nav, maskInput
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
        arrival_address: {
            required
        },
        citizenship: {
            required
        },
        date_birth: {
            required,
        },
        floor: {
            required
        },
        email: {
            email
        },
        type_document: {
            required
        },
        phone: {
            numeric: alpha
        },
        document_number: {
            required,
            numeric: document_number
        },
        date_issuing: {
            required
        },
        date_endings: {
            required
        },
        target: {
            required: requiredUnless('additinal__fuilds')
        },
        start_check_date: {
            required: requiredUnless('additinal__fuilds')
        },
        end_check_date: {
            required: requiredUnless('additinal__fuilds')
        },
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

            default_style: true,
            error_style: false,
            success_style: false,
            loader_scan: false,

            picker: null,
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
            hotels: [],

            arrival: 'заезд',
            departure: 'выезд',
            name: null,
            surname: null,
            middle_name: null,
            floor: null,
            arrival_address: null,
            citizenship: null,
            phone: null,
            country_code: null,
            date_birth: null,
            type_document: 5,
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
            status: null,

            max_date_arrival: null,
            min_date_arrival: null,
            max_date_birth_picker: null,
            max_date_issuing_picker: null,

            additinal__validation: false,

            // data_picker

            date_birth_modal: null,
            date_issuing_modal: null,
            date_endings_modal: null,
            start_check_date_modal: null,
            end_check_date_modal: null
        }
    },
    mounted() {
        this.getCountries()
        this.getDoctypes()
        this.getTargets()
        this.getAddress()
        this.getStatus()
        setInterval(this.getTime, 1000)
    },
    methods: {
        formatDate (date) {
            let datePart = date.match(/\d+/g),
            year = datePart[0],  
            month = datePart[1], 
            day = datePart[2]
            return day+'.'+month+'.'+year;
        },

        returnFormatDate (date) {
            let datePart = date.match(/\d+/g),
            day = datePart[0],  
            month = datePart[1], 
            year = datePart[2] 
            return year+'-'+month+'-'+day;
        },

        openDataPicker (picker__name) {
            switch (picker__name) {
                case 'date_birth_picker':
                    this.date_birth = this.formatDate(this.date_birth_modal)
                    this.date_birth_picker = false
                    break;
                case 'date_issuing_picker':
                    this.date_issuing = this.formatDate(this.date_issuing_modal)
                    this.date_issuing_picker = false
                    break;
                case 'date_endings_picker':
                    this.date_endings = this.formatDate(this.date_endings_modal)
                    this.date_endings_picker = false
                    break;
                case 'date_start_picker':
                    this.start_check_date = this.formatDate(this.start_check_date_modal)
                    this.date_start_picker = false
                    break;
                case 'date_end_picker':
                    this.end_check_date = this.formatDate(this.end_check_date_modal)
                    this.date_end_picker = false
                    break;
                default:
                    break;
            }
        },

        countryChanged(country) {
            this.country_code = country.dialCode
        },
        runGetPhoto () {
            document.getElementById('get__file').click();
        },
        changePhoto (e) {
            let file = e.target.files[0]
            this.readFile(file,  (e) => {
               this.sendBase64Uplodaded(e.target.result)
            })
        },
        router (to) {
            this.$router.push(to)
        },
        readFile(file, callback){
            let reader = new FileReader();
            reader.onload = callback
            reader.readAsDataURL(file);
        },
        checkCountry () {
            if (this.citizenship == 216) {
                this.checkbox_notify_mvd = false
                this.additinal__validation = true
                this.target = null
            } else {
                this.checkbox_notify_mvd = true
                this.additinal__validation = false
                this.target = 3
            }
        },
        sendNotif () {
            if (this.$v.$invalid) {
                 this.$toast.open({
                    message: 'Заполните необходимые поля',
                    type: 'error',
                    position: 'bottom',
                    duration: 5000,
                    queue: true
                });
                if (this.$v.picker.$model == null) {
                    animateScrollTo(document.querySelector('.picker'), {
                        speed: 3000
                    })
                }
                this.$v.$touch()
                return 
            } else {  
                this.$Progress.start()
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION_2 + 'client',
                    headers: {
                        'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                    },
                    data: {
                        surname: this.surname,
                        name: this.name,
                        patronymic: this.middle_name,
                        hotel_id: this.arrival_address,
                        date_birth: this.returnFormatDate(this.date_birth),
                        email: this.email,
                        phone: this.phone,
                        doctype_id: this.type_document,
                        document_number: this.document_number,
                        series_documents: this.series_documents,
                        date_issue: this.returnFormatDate(this.date_issuing),
                        valid_until: this.returnFormatDate(this.date_endings),
                        notification_on_mvd: this.checkbox_notify_mvd,
                        gender_id: this.floor,
                        start_check_date: this.returnFormatDate(this.start_check_date),
                        end_check_date: this.returnFormatDate(this.end_check_date),
                        kato_id: this.citizenship,
                        target_id: this.target,
                        check_in: this.arrival,
                        check_out: this.departure,
                        comment: this.comment,
                        welcome_message: this.checkbox_welcome_message,
                        check_in_time: this.check_in_time,
                        status: this.status,                        
                        check_out_time: '12:00',
                    }
                })
                .then((response) => {
                    this.$Progress.finish()
                    this.arrival = 'заезд'
                    this.departure = 'выезд'
                    this.name = null
                    this.surname = null
                    this.arrival_address = null
                    this.middle_name = null
                    this.floor = null
                    this.citizenship = null
                    this.phone = null
                    this.date_birth = null
                    this.type_document = null
                    this.date_issuing = null
                    this.date_endings = null
                    this.start_check_date = null
                    this.end_check_date = null
                    this.target = null
                    this.email = null
                    this.comment = null
                    this.document_number = null
                    this.series_documents = null

                    this.modal_success = true
                    this.$toast.open({
                        message: response.data.message,
                        type: 'success',
                        position: 'bottom',
                        duration: 5000,
                        queue: true
                    });
                })  
                .catch((error) => {
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
        getStatus() {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION + 'status/check_in',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then(response => {
                this.status = response.data[0].value;
            })
            .catch(error => {
                console.log(error)
            });
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
                let obj;
                let arr = []
                for (let index = 0; index < response.data.length; index++) {
                    obj = {
                        label: response.data[index].label,
                        value: response.data[index].value
                    }
                    arr.push(obj)
                }
                this.countries = arr
            }); 
        },

        getAddress () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION_2 + 'placement',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                let obj;
                let arr = []
                for (let index = 0; index < response.data.hotels.length; index++) {
                    obj = {
                        label: response.data.hotels[index].region.name_rus + ' ул ' + response.data.hotels[index].street + ' ' + response.data.hotels[index].house,
                        value: response.data.hotels[index].id
                    }
                    arr.push(obj)
                }
                this.hotels = arr
                response.data.hotels.length > 1 ? this.arrival_address = null : this.arrival_address = response.data.hotels[0].id
                
            })  
            .catch((error) => {
                console.warn(error);
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
        addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        },
        getDate () {
            let date = new Date(),
            year = date.getFullYear(),
            mounth = this.addZero(date.getMonth() + 1),
            day = this.addZero(date.getDate()),
            dayMin = this.addZero(date.getDate()-2)
            
            let hour = this.addZero(date.getHours())
            let mimutes = this.addZero(date.getMinutes())
            let seconds = this.addZero(date.getSeconds() + 1)
            this.check_in_time = hour + ":" + mimutes + ":" + seconds

            this.max_date_arrival = year + '-' + mounth + '-' + day
            this.min_date_arrival = year + '-' + mounth + '-' + dayMin
            this.max_date_birth_picker = year + '-' + mounth + '-' + day
            this.max_date_issuing_picker = year + '-' + mounth + '-' + day
        },
        getTime(){
            var date = new Date(),
            hour = this.addZero(date.getHours()),
            mimutes = this.addZero(date.getMinutes()),
            seconds = this.addZero(date.getSeconds() + 1)
            this.check_in_time = hour + ":" + mimutes + ":" + seconds
        },
        changeDateArrival () {
            this.getDate()
            this.date_arrival = false
            this.arrival = this.picker[0]
            this.start_check_date = this.formatDate(this.picker[0])
            this.departure = this.picker[1]
            this.end_check_date = this.formatDate(this.picker[1])
        },
        checkDateArrival () {
            if (typeof this.picker[0] !== 'undefined') {
                this.max_date_arrival = null
                this.min_date_arrival = this.picker[0]
            } 
            if (typeof this.picker[1] !== 'undefined') {
                this.getDate()
            }
        },
        closeScanDocument () {
            this.scan_photo_picker = false
            const stream = this.$refs.webcam.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach((track) => {
                track.stop();
            });
            this.$refs.webcam.srcObject = null;
        },
        capturePhoto () {
            let context
            let canvas = document.createElement('canvas')
            let width = this.$refs.webcam.offsetWidth,
                height = this.$refs.webcam.offsetHeight
            canvas.width = width
            canvas.height = height
            context = canvas.getContext('2d')
            context.drawImage(this.$refs.webcam, 0, 0, width, height)
            this.sendBase64Capture(canvas.toDataURL('image/png'))
        },
        onCapture() {
            let constraints = { audio: false, video: { front: "user", width: 550, height: 400 } }; 
            navigator.mediaDevices.getUserMedia(constraints)
            .then((mediaStream) => {
                this.$refs.webcam.srcObject = mediaStream;
                this.$refs.webcam.onloadedmetadata = () => {
                    this.$refs.webcam.play();
                }
            })
            .catch((err) => { console.log(err.name + ": " + err.message); });
            this.scan_photo_picker = true
            setTimeout(() => {
                 this.capturePhoto()
            }, 2000)
        },
        sendBase64Capture(img) {
            this.loader_scan = true
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'regula',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
                data: {
                    image: img
                }
            })
            .then(response => {
                this.loader_scan = false
                if (response.data.Empty == 1) {
                    if (this.scan_photo_picker == true) {
                        setTimeout(() => {
                            this.capturePhoto()
                        }, 1000);
                    }
                    this.default_style = false
                    this.error_style = true
                    this.success_style = false
                } else {
                    this.default_style = false
                    this.error_style = false
                    this.success_style = true

                    this.closeScanDocument()

                    this.floor = response.data.Gender
                    this.document_number = response.data.DocNumber
                    this.name = response.data.FirstName
                    this.surname = response.data.LastName
                    this.date_birth = Object.prototype.hasOwnProperty.call(response.data, 'Birthday') == true ? this.formatDate(response.data.Birthday) : null
                    this.date_issuing = Object.prototype.hasOwnProperty.call(response.data, 'Issue') == true ? this.formatDate(response.data.Issue) : null
                    this.date_endings = Object.prototype.hasOwnProperty.call(response.data, 'Valid') == true ? this.formatDate(response.data.Valid) : null
                    this.citizenship = response.data.Country_id
                    this.middle_name = response.data.Patronymic

                    this.$toast.open({
                        message: "Данные успешно получены!",
                        type: 'success',
                        position: 'bottom',
                        duration: 5000,
                    })
                    this.checkCountry()
                }
            })
            .catch(() => {
                this.capturePhoto()
            })
        },
        sendBase64Uplodaded(img) {
            this.$Progress.start()
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'regula',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
                data: {
                    image: img
                }
            })
            .then(response => {
                if (response.data.Empty == 1) {
                    this.$toast.open({
                        message: "Загрузите фото документа!",
                        type: 'error',
                        position: 'bottom',
                        duration: 5000,
                    })
                } else {
                    this.floor = response.data.Gender
                    this.document_number = response.data.DocNumber
                    this.name = response.data.FirstName
                    this.surname = response.data.LastName
                    this.date_birth = Object.prototype.hasOwnProperty.call(response.data, 'Birthday') == true ? this.formatDate(response.data.Birthday) : null
                    this.date_issuing = Object.prototype.hasOwnProperty.call(response.data, 'Issue') == true ? this.formatDate(response.data.Issue) : null
                    this.date_endings = Object.prototype.hasOwnProperty.call(response.data, 'Valid') == true ? this.formatDate(response.data.Valid) : null
                    this.citizenship = response.data.Country_id
                    this.middle_name = response.data.Patronymic

                    this.$toast.open({
                        message: "Данные успешно получены!",
                        type: 'success',
                        position: 'bottom',
                        duration: 5000,
                    })
                    this.checkCountry()
                    this.$Progress.finish()
                }
            })
            .catch(() => {
                this.capturePhoto()
                this.$Progress.fail()
            })
        },
    },
    computed: {
        ...mapGetters(['GET_TOKEN']),
        additinal__fuilds () {
            return this.additinal__validation  
        },
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;

.type__notif {
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
    .type__notif__block {
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
            margin-top: 20px;
            @media (max-width: @mobile) {
                padding: 10px 20px;
                color: #000;
                width: 70%;
                font-size: 14px;
            }
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3 {
            color: #000;
            font-size: 18px;
        }
        span {
            color: #000;
            font-size: 27px;
            cursor: pointer;
        }
    }
    .scan__block_webcam {
        width: 100%;
        background: #fff;
        .scan__block_webcam__hidden {
            width: 100%;
            height: 409px;
            overflow: hidden;
            position: relative;
            .scan__preloader {
                width: 100%;
                height: 100%;
                z-index: 9999;
                display: flex;
                justify-content: center;
                background: transparent;
                position: absolute;
                top: 0;
                align-items: center;
                .scan__preloader__flex {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.5);
                    width: 89.4%;
                    height: 86.4%;
                }
            }
            .scan__border__main {
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 999;

                // border 1
                .scan__border__left__top {
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    border-left: 3px solid #FFCC47;
                    border-top: 3px solid #FFCC47;
                    left: 25px;
                    top: 25px;
                }
                .scan__border__left__top__error {
                    border-left: 3px solid red;
                    border-top: 3px solid red;
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    left: 25px;
                    top: 25px;
                }
                .scan__border__left__top__success {
                    border-left: 3px solid #26f700;
                    border-top: 3px solid #26f700;
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    left: 25px;
                    top: 25px;
                }
                // border 2
                .scan__border__rigth__top {
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    border-right: 3px solid #FFCC47;
                    border-top: 3px solid #FFCC47;
                    right: 25px;
                    top: 25px;
                }
                .scan__border__rigth__top__error {
                    border-right: 3px solid red;
                    border-top: 3px solid red;
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    right: 25px;
                    top: 25px;
                }
                .scan__border__rigth__top__success {
                    border-right: 3px solid #26f700;
                    border-top: 3px solid #26f700;
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    right: 25px;
                    top: 25px;
                }
                // border 3
                .scan__border__left__bottom {
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    border-left: 3px solid #FFCC47;
                    border-bottom: 3px solid #FFCC47;
                    left: 25px;
                    bottom: 25px;
                }
                .scan__border__left__bottom__error {
                    border-left: 3px solid red;
                    border-bottom: 3px solid red;
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    left: 25px;
                    bottom: 25px;
                }
                .scan__border__left__bottom__success {
                    border-left: 3px solid #26f700;
                    border-bottom: 3px solid #26f700;
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    left: 25px;
                    bottom: 25px;
                }
                // border 4
                .scan__border__rigth__bottom {
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    border-right: 3px solid #FFCC47;
                    border-bottom: 3px solid #FFCC47;
                    right: 25px;
                    bottom: 25px;
                }
                .scan__border__rigth__bottom__error {
                    border-right: 3px solid red;
                    border-bottom: 3px solid red;
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    right: 25px;
                    bottom: 25px;
                }
                .scan__border__rigth__bottom__success {
                    border-right: 3px solid #26f700;
                    border-bottom: 3px solid #26f700;
                    width: 120px;
                    height: 120px;
                    position: absolute;
                    right: 25px;
                    bottom: 25px;
                }

                // after ------------------------
                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    border: 25px solid rgba(0, 0, 0, 0.5);
                }
            }
            
            .webCamMirror {
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
                z-index: 98;
                width: 100%;
                height: 100%;
            }
        }
        
    }
}
.notif {
    width: 100%;
    font-family: "MontserratBold";
    .notif__margin {
        width: 85%;
        margin: 0 auto;
        margin-top: 40px;
        
        .registrations {
            width: 100%;
            margin-top: 40px;
            @media (max-width: @mobile) {
                margin-top: 15px;
            }
           
            .capture__photo__desktop {
                display: block;
                margin-right: 15px;
                @media (max-width: @mobile) {
                    display: none;
                }
            }
            .get__file__button {
                display: block;
                @media (max-width: @mobile) {
                    display: none;
                }
            }
            h2 {
                font-style: normal;
                font-weight: 500;
                font-size: 40px;
                color: #000;
                @media (max-width: @mobile) {
                    font-size: 20px;
                    line-height: 25px;
                    margin-bottom: 20px;
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
                outline: none;
                box-sizing: border-box;
                font-style: normal;
                font-weight: bold;
                margin-top: 20px;
                margin-bottom: 20px;
                font-size: 16px;
                border-radius: 30px;
                @media (max-width: @mobile) {
                    width: 100%;
                    padding: 10px;
                    font-size: 14px;
                }
                &:hover {
                    opacity: 0.7;
                }
            }
            .buttons__mobile__capture {
                display: block;
                @media (max-width: @mobile) {
                    display: none;
                }
            }
            .registrations__form {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin-top: 20px;
                #get__file {
                    display: none;
                }
                @media (max-width: @mobile) {
                    margin-top: 10px;
                }
                .select__input {
                    cursor: pointer;
                }
                .input__block {
                    width: 345px;
                    margin-right: 10px;
                    @media (max-width: @mobile) {
                        margin-right: 0;
                        width: 100%;
                    }
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
                        height: 73px;
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
                        cursor: pointer;
                        margin-bottom: 10px;
                        .date__input {
                            border: none;
                            height: 35px;
                            margin: 0;
                        }
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
                    @media (max-width: @mobile) {
                        margin-right: 0;
                        width: 100%;
                    }
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
                        .date__input {
                            border: none;
                            height: 35px;
                            margin: 0;
                        }
                    }
                    img {
                        cursor: pointer;
                        &:hover {
                            opacity: .7;
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