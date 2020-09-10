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
                        Qus jetken jerine qonar, Qonaq qalag’an uıine qonar
                    </h1>
                </div>
                <div class="mobile">
                    <h1>
                        Добро пожаловать
                    </h1>
                </div>
                
                <div class="desktop">
                    <button v-if="GET_TOKEN.length !== 0" @click="route">
                        Отправить уведомление о прибытии гостя
                    </button>
                    <button v-else @click="modal = true">
                        Отправить уведомление о прибытии гостя
                    </button>
                </div>
                <div class="mobile">
                    <button v-if="GET_TOKEN.length !== 0" @click="route">
                        Отправить уведомление  
                    </button>
                    <button v-else @click="modal = true">
                        Отправить уведомление 
                    </button>
                </div>
            </div>
            <div class="banner_r">
                <div class="banner_user">
                    <img src="../../assets/all/banner_user__mobile.svg" alt="banner_user">
                </div>
                <img src="../../assets/all/hotpng.png" alt="hotpng">
            </div>
            <v-dialog
                v-model="modal"
                max-width="500"
            >
                <v-card>
                    <div class="type__baner">
                        <h2>
                            Требуеться авторизация или регистрация
                        </h2>
                        
                        <div class="type__baner__block">
                            <img src="../../assets/all/auth_reg.svg" alt="images">
                            <p>
                                Вам на почту отправлено письмо с вашим паролем для авторизации в системе.
                            </p>
                            <router-link to="/login">
                                <button>
                                    АВТОРИЗОВАТЬСЯ
                                </button>
                            </router-link>
                        </div>
                    </div>
                </v-card>
            </v-dialog>
        </div>
        <Widget  class="widget"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Widget from './Widget'

export default {
    data () {
        return {
            modal: false
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
.type__baner {
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
    
    .type__baner__block {
        margin-top: 30px;
        img {
            width: 350px;
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
        }
    }
}
.banner {
    width: 100%;
    background: #FDE88D;
    margin-top: 63px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 5px;
    font-family: 'MontserratBold';
    @media (max-width: @mobile) {
        margin-top: 0;
    }
    .banner_l {
        width: 17%;
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
        width: 65%;
        @media (max-width: @mobile) {
            width: 73%;
        }
        h1 {
            font-weight: bold;
            font-size: 23px;
            text-transform: uppercase;
            margin-top: 22px;
            font-style: normal;
            line-height: 32px;
            @media (max-width: @mobile) {
                font-size: 17px;
                margin-top: 5px;
                text-transform: none;
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
        button {
            padding: 15px 50px;
            background: #FFCC47;
            border-radius: 25px;
            font-weight: bold;
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
            outline: none;
            font-style: normal;
            line-height: 25px;
            letter-spacing: -0.05em;
            color: #000000;

            &:hover {
                opacity: .7;
            }
            @media (max-width: @mobile) {
                padding: 7px 12px;
                font-size: 15px;
                margin-top: 0px;
                margin-bottom: 5px;
            }
        }
    }
    .banner_r {
        width: 17%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        @media (max-width: @mobile) {
            width: 25%;
            position: relative;
        }
        img {
            @media (max-width: @mobile) {
                width: 45px;
            }
        }
        .banner_user {
            display: none;
            position: absolute;
            left: 0;
            top: -28px;
            img {
                @media (max-width: @mobile) {
                    width: 79px;
                }
            }
            @media (max-width: @mobile) {
                border-radius: 50%;
                display: block;
            }
        }
        
        
    }
}

</style>