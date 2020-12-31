<template>
    <div class="main">
        <Header />
        <div class="main__base__margin">
            <Baner />
            <WelcomeService />
            <InterestingPlaces />
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
            <span>Обратная связь</span>
        </v-tooltip>


        <v-dialog
            v-model="support"
            max-width="570"
        >
            <div class="support__modal">
                <div class="support__modal__header">
                    <h2>
                        Обратная связь
                    </h2>
                    <p class="description">
                        Пожалуйста, выберите подходящую цель обращения, кратко опишите <br>
                        суть вопроса, укажите свои имя, номер телефона, чтобы в случае <br>
                        необходимости была возможность с вами связаться.
                    </p>
                    <p class="support__description">
                        Службу поддержки: eqonaq@suport.kz <br>
                        Телефон: +7 702 324 43 43
                    </p>
                </div>
                <div class="support__modal__form">
                    <div class="form__group">
                        <label for="name">Имя</label>
                        <input type="text" id="name">
                    </div>
                    <div class="form__group">
                        <label for="phone">Телефон</label>
                        <input type="text" id="phone">
                    </div>
                    <div class="form__group">
                        <label for="message">Сообщение</label>
                        <textarea id="message"></textarea>
                    </div>
                    <div class="form__group__button">
                        <button>Отправить</button>
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
import BookHotel from './components/BookHotel'
import Footer from './components/Footer'

export default {
    components: {
        Header, Baner, WelcomeService, InterestingPlaces, BookHotel, Footer
    },
    data () {
        return {
            support: false  
        }
    },
    methods: {
        supportModal () {
            this.support = true
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
        h2 {
            margin: 0;
           font-family: "MontserratBold";
           font-size: 30px;
           margin-top: 25px;
           line-height: 36,57px;
        }
        p {
            margin: 0;
            font-family: "MediumMedium";
            font-size: 14px;
            line-height: 17px;
            margin-top: 15px;
        }
        .description {
            font-weight: 400;
        }
        .support__description {
            font-weight: 700;
        }
    }
    .support__modal__form {
        width: 100%;
        margin-top: 15px;
        .form__group {
            width: 100%;
            margin-bottom: 10px;
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
            }
        }
        .form__group__button {
            width: 100%;
            text-align: center;
            button {
                width: 163px;
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