<template>
    <div class="main">
        <Header />
        <div class="main__base__margin">
            <Baner />
            <WelcomeService />
            <InterestingPlaces />
            <News />
            <BookHotel />

         
        </div>
        <Footer />
        
         <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <div 
                    class="support__service"
                    v-bind="attrs"
                    v-on="on"
                    @click="supportModal"
                >
                    <img src="../assets/icons/call__icon.svg" alt="">
                </div>
            </template>
            <span>
                {{$t('fead__back__toast')}}
            </span>
        </v-tooltip>


        <v-dialog
            v-model="support"
            max-width="570"
        >
            <div class="support__modal">
                <div class="support__modal__header">
                    <h2>
                       {{$t('modal__title')}}
                    </h2>
                    <p class="description">
                       {{$t('modal__feadback')}}
                    </p>

                    <a target="_blank" href="mailto:support@eqonaq.kz" class="support__description"> {{$t('support__description__one')}} support@eqonaq.kz </a>
                    <a target="_blank" href="tel:+7 7172 79-04-39" class="support__description" >{{$t('support__description__two')}} +7/7172/79-04-39</a>
                </div>
                <div class="support__modal__form">
                    <div class="form__group">
                        <label for="name">{{$t('notif__input__label__name')}}</label>
                        <input type="text" v-model.trim="name" id="name">
                        <div class="error__text" v-if="$v.name.$dirty && !$v.name.required">{{$t('modal_name_error')}}</div>
                    </div>
                    <div class="form__group">
                        <label for="phone">{{$t('notif__input__label__phone')}}</label>
                        <input type="text" v-model.trim="phone" id="phone">
                        <div class="error__text" v-if="$v.phone.$dirty && !$v.phone.required">{{$t('modal_phone_error')}}</div>
                        <div class="error__text" v-if="!$v.phone.numeric">Поле 'Телефон' введите только цифры</div>
                    </div>
                    <div class="form__group">
                        <label for="message">{{$t('modal_title_message')}}</label>
                        <textarea id="message" v-model.trim="message"></textarea>
                        <div class="error__text" v-if="$v.message.$dirty && !$v.message.required">{{$t('modal_message_error')}}</div>
                    </div>
                    <div class="form__group__button">
                        <button @click="sendFeadback">
                            {{$t('forgot__password__page__btn')}}
                        </button>
                    </div>
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<script>
import Header from './components/Header'
import Baner from './components/Baner'
import WelcomeService from './components/WelcomeService'
import InterestingPlaces from './components/InterestingPlaces'
import News from './components/News'
import BookHotel from './components/BookHotel'
import Footer from './components/Footer'
import { required, numeric } from 'vuelidate/lib/validators'

export default {
    components: {
        Header, Baner, WelcomeService, InterestingPlaces, BookHotel, Footer,News
    },
    validations: {
        phone: {
            required, 
            numeric
        },
        name: {
            required, 
        },
        message: {
            required, 
        }
    },
    data () {
        return {
            support: false,
            phone: '',
            message: '',
            name: '',
        }
    },
    methods: {
        supportModal () {
            this.support = true
        },
        sendFeadback () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return 
            } else {
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION + 'feedback/main_page', 
                    data: {
                        name: this.name,
                        phone: this.phone,
                        message: this.message,
                    }
                })
                .then((response) => {
                    this.support = false
                    this.$toast.open({
                        message: response.data.message,
                        type: 'success',
                        position: 'bottom',
                        duration: 5000,
                        queue: true
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });              
            }
        }
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;
@planshet: 1200px;

.support__modal {
    width: 100%;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    .support__modal__header {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        h2 {
            margin: 0;
           font-family: "MontserratBold";
           font-size: 30px;
           margin-top: 25px;
           line-height: 36,57px;
        }
        a {
            margin: 0;
            font-family: "MediumMedium";
            font-size: 14px;
            line-height: 17px;
            margin-top: 15px;
            text-decoration: none;
        }
        .description {
            font-weight: 400;
        }
        .support__description {
            font-weight: 700;
            color: #000000;

        }
    }
    .support__modal__form {
        width: 100%;
        margin-top: 15px;
        .form__group {
            width: 100%;
            margin-bottom: 10px;
            .error__text {
                color: red;
                font-size: 12px;
                margin-bottom: 10px;
            }
            label {
                font-family: "MediumMedium";
                font-size: 14px;
                line-height: 17px;
                color: #000;
            }
            input {
                width: 100%;
                background: #FFFFFF;
                border: 2px solid #000000;
                border-radius: 10px;
                outline: none;
                height: 46px;
                padding: 10px;
            }
            textarea {
                width: 100%;
                background: #FFFFFF;
                border: 2px solid #000000;
                border-radius: 10px;
                outline: none;
                height: 126px;
                resize: none;
                padding: 10px;
            }
        }
        .form__group__button {
            width: 100%;
            text-align: center;
            button {
                width: 163px;
                outline: none;
                height: 50px;
                background: #FDE88D;
                border: 3px solid #FDE88D;
                border-radius: 30px;
                font-size: 16px;
                font-family: "MediumMedium";
                letter-spacing: -0.05em;
                &:hover {
                    opacity: .7;
                }
            }
        }
    }
}

.main {
    overflow: hidden;
    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 0;
        }
        @media (max-width: @planshet) {
            width: 95%;
        }
    }
    .support__service {
        position: fixed;
        right: 30px;
        bottom: 30px;
        width: 65px;
        height: 65px;
        background: #FDE88D;
        box-shadow: 0px 8px 20px rgba(253, 232, 141, 0.56);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
}

</style>