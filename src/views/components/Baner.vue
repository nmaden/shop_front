<template>
    <div>
        <div class="banner">
            <div class="banner_l">
                <div class="banner_user">
                    <img src="../../assets/all/banner_user.svg" alt="banner_user">
                </div>
            </div>
            <div class="banner_c">
                <div class="desktop">
                    <h1>
                        {{$t('baner__title')}}
                    </h1>
                    <p>
                       {{$t('baner__description')}}  <span @click="modal__description = true">Подробнее...</span>
                    </p>
                </div>
                <div class="mobile">
                    <h1>
                        {{$t('baner__title')}}
                    </h1>
                    <div class="banner_user">
                        <img src="../../assets/all/banner_user__mobile.svg" alt="banner_user">
                    </div>
                </div>
            </div>
            <div class="banner_r">
                <img class="hotpng" src="../../assets/all/hotpng.png" alt="hotpng">
            </div>
            <div class="text__info__mobile">
                <p>
                    {{$t('baner__description')}} <br>
                    <span @click="modal__description = true">Подробнее...</span>
                </p>
            </div>

            <div class="baner_flex__service">
                <div 
                    class="baner__service__block"
                    v-for="item in $t('baner__array')"
                    :key="item.id"
                >
                    <img :src="item.img" alt="icon">
                    <p>
                        {{item.text}}
                    </p>
                </div>
            </div>
        </div>

        <div class="main__button">
            <div class="desktop">
                <button v-if="GET_TOKEN.length !== 0" @click="route">
                    {{$t('notif_button')}}
                </button>
                <button v-else @click="modal = true">
                    {{$t('notif_button')}}
                </button>
            </div>
            <div class="mobile">
                <button v-if="GET_TOKEN.length !== 0" @click="route">
                    {{$t('notif_button_mobile')}}
                </button>
                <button v-else @click="modal = true">
                    {{$t('notif_button_mobile')}}
                </button>
            </div>
        </div>

        <!-- modals -->

        <v-dialog
            v-model="modal"
            max-width="500"
        >
            <v-card>
                <div class="type__baner">
                    <h2>
                        {{$t('auth__modal__requires__title')}}
                    </h2>
                    
                    <div class="type__baner__block">
                        <img src="../../assets/all/auth_reg.svg" alt="images">
                        <router-link to="/login">
                            <button>
                                {{$t('book__hotel__footer__login')}}
                            </button>
                        </router-link>
                    </div>
                </div>
            </v-card>
        </v-dialog>

        <v-dialog
            v-model="modal__description"
            max-width="900"
        >
            <v-card>
                <div class="type__police">
                    <div class="type__police__title">
                        <h1>
                            Административный Кодекса РК
                        </h1>
                    </div>
                    <div 
                        class="type__police__list"
                        v-for="item_police in type__police__list"
                        :key="item_police.title"
                    >
                        <h3>
                             {{item_police.title}}
                        </h3>
                        <p>
                             {{item_police.text}}
                        </p>
                    </div>
                    <div class="type__police__scroll">
                        <h4>
                            В случае не соблюдения требовании законодательства, согласно статье 518 Административного Кодекса РК:
                        </h4>
                        <p>
                            1. Непринятие принимающим лицом мер по своевременной регист рации иностранцев и лиц без гражданства либо оформлению документов на право их пребывания в Республике Казахстан, либо их выезду из Республики Казахстан по истечении определенного срока пребывания, либо несвоевременное информирование органов внутренних дел о пребывающих у них иммигрантах – влечет предупреждение на физических лиц, штраф на должностных лиц, субъектов малого предпринимательства или некоммерческие организации в размере десяти, на субъектов среднего предпринимательства – в размере пятнадцати, на субъектов крупного предпринимательства – в размере двадцати месячных расчетных показателей.
                        </p>
                        <p>
                            2. Предоставление жилища иностранцу или лицу без гражданства, пребывающему в Республике Казахстан с нарушением законодательства Республики Казахстан в области миграции населения либо уклонение от выезда из Республики Казахстан в установленные сроки, либо несоответствие фактического места проживания адресу, указанному при регистрации, – влекут штраф на физических лиц в размере двадцати пяти, на должностное лицо, на субъектов малого предпринимательства или некоммерческие организации – в размере сорока, на субъектов среднего предпринимательства – в размере пятидесяти пяти, на субъектов крупного предпринимательства – в размере семидесяти пяти месячных расчетных показателей.
                        </p>
                        <p>
                            3. Действия, предусмотренные частями первой и второй настоящей статьи, совершенные повторно в течение года после наложения административного взыскания, – влекут штраф на физических лиц в размере тридцати, на должностное лицо, на субъектов малого предпринимательства или некоммерческие организации – в размере сорока, на субъектов среднего предпринимательства – в размере семидесяти, на субъектов крупного предпринимательства – в размере ста месячных расчетных показателей.
                        </p>
                        <p>
                            4. Совершение сделок с иностранцем или лицом без гражданства, пребывающими в Республике Казахстан с нарушением законодательства Республики Казахстан в области миграции населения в несоответствии осуществляемой деятельности целям, указанным в визе либо при регистрации в миграционной карточке, – влечет штраф на физических лиц в размере тридцати, на должностное лицо, на субъектов малого предпринимательства или некоммерческие организации – в размере сорока, на субъектов среднего предпринимательства – в размере семидесяти пяти, на субъектов крупного предпринимательства – в размере ста пятидесяти месячных расчетных показателей.
                        </p>
                        <p>
                            5. Действие, предусмотренное частью четвертой настоящей статьи, совершенное повторно в течение года после наложения административного взыскания, – влечет штраф на физических лиц в размере пятидесяти, на должностное лицо, на субъектов малого предпринимательства или некоммерческие организации – в размере ста, на субъектов среднего предпринимательства – в размере ста пятидесяти, на субъектов крупного предпринимательства – в размере трехсот месячных расчетных показателей.
                        </p>
                    </div>
                    <button @click="modal__description = false">
                        Понятно
                    </button>
                </div>
            </v-card>
        </v-dialog>

        <Widget  class="widget"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Widget from './Widget'

export default {
    data () {
        return {
            modal: false,
            modal__description: false,
            type__police__list: [
                {
                    title: 'Согласно пункту 9 Постановлению Правительства Республики Казахстан от 21 января 2012 года № 148:',
                    text: 'Принимающие лица информируют органы внутренних дел о пребывающих у них иммигрантах в течение трех рабочих дней со дня их прибытия.',
                },
                {
                    title: 'Согласно пункту 10.1 статьи 1 Закону о миграции: ',
                    text: 'Принимающее лицо - гражданин Республики Казахстан, иностранец и лицо без гражданства, постоянно проживающие в Республике Казахстан, или юридическое лицо, зарегистрированное в Республике Казахстан, ходатайствующие о приглашении иммигрантов в Республику Казахстан для временного проживания и (или) предоставляющие место для их проживания.'
                }
            ],
        }
    },
    components: {
        Widget
    },
    methods: {
        route () {
            this.$router.push('/notif')
        },
    },
    computed: {
        ...mapGetters(['GET_TOKEN']),
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;
.widget {
    display: none;
    @media (max-width: @mobile) {
        display: flex;
    }
}
.type__police {
    background: #fff;
    padding: 40px 30px;
    @media (max-width: @mobile) {
        padding: 10px;
    }
    .type__police__title {
        width: 100%;
        h1 {
            font-weight: 600;
            font-family: "MontserratBold";
            font-size: 30px;
            @media (max-width: @mobile) {
                font-size: 16px;
                line-height: 20px;
            }
        }
        margin-bottom: 25px;
        @media (max-width: @mobile) {
            margin-bottom: 10px;
        }
    }
    .type__police__list {
        background: url('../../assets/all/police__border.svg') no-repeat;
        background-position: left;
        padding-left: 30px;
        background-size: contain;
        margin-bottom: 15px;
        @media (max-width: @mobile) {
            margin-bottom: 7px;
            background: none;
            padding-left: 0;
        }
        h3 {
            font-size: 16px;
            margin-bottom: 5px;
            line-height: 19px;
            @media (max-width: @mobile) {
                font-size: 14px;
            }
        }
        p {
            margin: 0;
            font-size: 16px;
            line-height: 19px;
            @media (max-width: @mobile) {
                font-size: 14px;
            }
        }
    }
    .type__police__scroll {
        width: 100%;
        h4 {
            color: #FFCE03;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 10px;
            @media (max-width: @mobile) {
                font-size: 15px;
                line-height: 19px;
            }
        }
        p {
            font-size: 16px;
            line-height: 19px;
            @media (max-width: @mobile) {
                font-size: 14px;
            }
        }
    }
    button {
        padding: 15px 50px;
        background: #FFCC47;
        border-radius: 25px;
        font-weight: bold;
        margin: 0 auto;
        font-size: 20px;
        margin-top: 20px;
        display: block;
        outline: none;
        font-style: normal;
        line-height: 25px;
        letter-spacing: -0.05em;
        color: #000000;

        &:hover {
            opacity: .7;
        }
        @media (max-width: @mobile) {
            padding: 4px 10px;
            font-size: 12px;
            margin-top: 10px;
            margin-bottom: 5px;
            width: 100%;
        }
    }
}

.type__baner {
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
    
    .type__baner__block {
        margin-top: 30px;
        @media (max-width: @mobile) {
            margin-top: 15px;
        }
        img {
            width: 350px;
            @media (max-width: @mobile) {
                width: 90%;
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
                font-size: 14px;
                margin-top: 19px;
                width: 100%;
            }
        }
        p {
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            letter-spacing: -0.05em;
            color: #000000;
            margin: 0;
            margin-bottom: 20px;
            margin-top: 15px;
            @media (max-width: @mobile) {
                margin-bottom: 0px;
            }
        }
    }
}

.main__button {
    .desktop {
        display: block;
        @media (max-width: @mobile) {
            display: none;
        }
    }
    .mobile {
        display: none;
        @media (max-width: @mobile) {
            display: block;
        }
    }
    button {
        padding: 15px 50px;
        width: 485px;
        background: #FFCC47;
        border-radius: 25px;
        font-weight: bold;
        margin: 0 auto;
        font-size: 20px;
        margin-top: 20px;
        display: block;
        outline: none;
        font-style: normal;
        line-height: 25px;
        letter-spacing: -0.05em;
        color: #000000;

        &:hover {
            opacity: .7;
        }
        @media (max-width: @mobile) {
            padding: 4px 10px;
            font-size: 12px;
            margin-top: 10px;
            margin-bottom: 5px;
            width: 100%;
        }
    }
}

.banner {
    width: 100%;
    background: #FDE88D;
    margin-top: 63px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 5px;
    font-family: 'MontserratBold';
    @media (max-width: @mobile) {
        margin-top: 0;
        padding: 5px 20px;
    }
    .banner_l {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: @mobile) {
            display: none;
        }
        .banner_user {
            border-radius: 50%;
            width: 112px;
            height: 112px;
            img {
                position: relative;
                top: -50px;
            }
        }
    }
    .banner_c {
        width: 70%;
        @media (max-width: @mobile) {
            width: 100%;
            position: relative;
        }
        .banner_user {
            display: none;
            position: absolute;
            img {
                @media (max-width: @mobile) {
                    width: 59px;
                }
            }
            @media (max-width: @mobile) {
                border-radius: 50%;
                display: block;
                right: -8px;
                top: -26px;
            }
        }
        h1 {
            font-weight: bold;
            font-size: 23px;
            text-transform: uppercase;
            margin-top: 22px;
            font-style: normal;
            line-height: 32px;
            @media (max-width: @mobile) {
                font-size: 16px;
                margin-top: 5px;
                text-transform: none;
                line-height: 19px;
                width: 80%;
            }
        }
        p {
            font-family: "MediumMedium";
            font-size: 17px;
            margin-top: 10px;
            span {
                color: #0368FF;
                cursor: pointer;
            }
        }
        .desktop {
            display: block;
            @media (max-width: @mobile) {
                display: none;
            }
        }
        .mobile {
            display: none;
            @media (max-width: @mobile) {
                display: block;
            }
        }
    }
    .banner_r {
        width: 10%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        @media (max-width: @mobile) {
            display: none;
        }
        .hotpng {
            transform: rotate(-88deg);
            @media (max-width: @mobile) {
                display: none;
            }
        }
    }
    .text__info__mobile {
        display: none;
        @media (max-width: @mobile) {
            display: block;
            width: 100%;
        }
        p {
            font-family: "MediumMedium";
            font-size: 12px;
            margin: 0;
            margin-top: 15px;
            line-height: 14,7px;
            span {
                color: #0368FF;
                cursor: pointer;
            }
        }
    }
    .baner_flex__service {
        width: 96%;
        padding-top: 20px;
        margin: 0 auto;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        @media (max-width: @mobile) {
            display: none;
        }
        .baner__service__block {
            width: 31%;
            display: flex;
            justify-content: space-between;
            line-height: 20px;
            p {
                font-family: "MediumMedium";
                font-size: 15px;
                margin: 0;
                margin-left: 17px;
                span {
                    color: #0368FF;
                    cursor: pointer;
                }
            }
        }
    }
}

</style>