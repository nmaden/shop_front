<template>
    <div class="footer">
        <div class="footer__top">
            <div class="footer__top__margin">
                <div class="footer__top__l">
                    <div class="withSupport__type">
                        <div 
                            class="withSupport__type__block"
                            v-for="withSupport_item in withSupport"
                            :key="withSupport_item.title"
                        >   
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <img 
                                        v-bind="attrs"
                                        v-on="on"
                                        :src="withSupport_item.img"
                                    >
                                </template>
                                <p>{{withSupport_item.hover_text}}</p>
                            </v-tooltip>
                        </div>
                    </div>
                </div>
                <div class="footer__top__c">
                    <router-link to="/login">
                        <p>
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </p>
                    </router-link>
                </div>
                <div class="footer__top__r">
                    <router-link to="/login">
                        <p>
                            АВТОРИЗОВАТЬСЯ
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
        
        <div class="footer__bottom">
            <div class="footer__bottom__l">
                <div class="footer__bottom__l__left">
                    <img class="logo__footer" src="../../assets/logo/logo.svg" alt="logo">
                     
                    <div class="footer__bottom__l__left__flex">
                        <img src="../../assets/icons/appstore.svg" alt="appstore">
                        <img src="../../assets/icons/playmarket.svg" alt="playmarket">
                    </div>
                </div>
                <div class="footer__bottom__l__right">
                    <h5>
                        ИНФОРМАЦИЯ
                    </h5>
                    <div
                        class="footer__bottom__l__right__flex"
                    > 
                        <div 
                            class="footer__bottom__l__right__block"
                            v-for="item_info in info"
                            :key="item_info.name"
                            @click="route(item_info.to, item_info.type_route)"
                        >
                            <p>
                                {{item_info.name}}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
             
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            withSupport: [
                {
                    img: require('../../assets/logo/2.png'),
                    hover_text: 'Министерство культуры и спорта Республики Казахстан',
                },
                {
                    img: require('../../assets/logo/1.png'),
                    hover_text: 'Министерство внутренних дел Республики Казахстан',
                },
                {
                    img: require('../../assets/logo/3.png'),
                    hover_text: 'АО «НК «Kazakh Tourism» ',
                },
            ],
            info: [
                {
                    name: 'О системе',
                    to: '',
                    type_route: 'on_page',
                },
                {
                    name: 'Номера телефонов',
                    to: '/telephones',
                    type_route: 'on_site',
                },
                {
                    name: 'Связь',
                    to: '/connection',
                    type_route: 'on_site',
                },
                {
                    name: 'Миграционный справочник',
                    to: '/migration',
                    type_route: 'on_site',
                },
                {
                    name: 'Валюта',
                    to: '/currency',
                    type_route: 'on_site',
                },
                {
                    name: 'Гостиницы',
                    to: 'https://api.eqonaq.kz/hotels',
                    type_route: 'on_new_site',
                },
            ],
        }
    },
    methods: {
        route (to, type_route) {
            if (type_route == 'on_site') {
                this.$router.push(to)
            } else if (type_route == 'on_new_site') {
                window.open(to, '_blank')
            } else if (type_route == 'on_page') {
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: document.querySelector('.service').offsetTop
                });
            } 
        } 
    }
}
</script>

<style lang="less" scoped>
@mobile: 900px;

.footer {
    background: #141414;
    overflow: hidden;
    width: 100%;
    .footer__top {
        border-bottom: 1px solid #3D3526;
        .footer__top__margin {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .footer__top__l {
                border-right: 1px solid #3D3526;
                width: 50%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 35px 0;
                .withSupport__type {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;

                    .withSupport__type__block {
                        width: 173px;
                        margin-right: 10px;
                        cursor: pointer;
                        overflow: hidden;
                        text-align: center;
                        img {
                            width: 100%;
                        }
                        @media (max-width: @mobile) {
                            width: 132px;
                            display: inline-block;
                        }
                    }
                }
            }
            .footer__top__c {
                width: 25%;
                border-right: 1px solid #3D3526;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 35px 0;
                a {
                    text-decoration: none;
                }
                p {
                    margin: 0;
                    user-select: none;
                    cursor: pointer;
                    font-weight: 750;
                    font-size: 14px;
                    color: #AFAFAF;
                }
            }
            .footer__top__r {
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 35px 0;
                a {
                    text-decoration: none;
                }
                p {
                    margin: 0;
                    user-select: none;
                    cursor: pointer;
                    font-weight: 750;
                    font-size: 14px;
                    color: #AFAFAF;
                }
            }
        }
    }
    .footer__bottom {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        margin-bottom: 30px;
        .footer__bottom__l {
            width: 100%;
            display: flex;
            justify-content: space-between;
            .footer__bottom__l__left {
                width: 50%;
                .logo__footer {
                    width: 230px;
                }
                
                .footer__bottom__l__left__flex {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 20px;
                    img {
                        margin-right: 20px;
                        width: 105px;
                        cursor: pointer;
                    }
                }
            }
            .footer__bottom__l__right {
                width: 50%;

                h5 {
                    font-size: 14px;
                    line-height: 17px;
                    color: #FFFFFF;
                    margin: 0;
                    margin-bottom: 23px;
                }
                .footer__bottom__l__right__flex {
                    width: 65%;
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    .footer__bottom__l__right__block {
                        width: 50%;
                        p {
                            font-style: normal;
                            cursor: pointer;
                            user-select: none;
                            font-weight: 600;
                            margin: 0;
                            font-size: 14px;
                            line-height: 17px;
                            color: #AFAFAF;
                            margin-bottom: 10px;
                        }
                    }
                    
                }
                
            }
        }
        
    }
}
</style>