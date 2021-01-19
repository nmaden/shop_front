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
                            {{$t('book__hotel__footer__reg')}}
                        </p>
                    </router-link>
                </div>
                <div class="footer__top__r">
                    <router-link to="/login">
                        <p>
                            {{$t('book__hotel__footer__login')}}
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
        
        <div class="footer__bottom">
            <div class="footer__bottom__l">
                <div class="footer__bottom__l__left__pc">
                    <img class="logo__footer" src="../../assets/logo/logo.svg" alt="logo">
                     
                    <div class="footer__bottom__l__left__flex">
                        <!-- <img src="../../assets/icons/appstore.svg" alt="appstore"> -->
                        <img src="../../assets/icons/playmarket.svg" @click="openPlay('playmarket')" alt="playmarket">
                    </div>
                </div>
                <div class="footer__bottom__l__right">
                    <h5>
                        {{$t('footer__info')}}
                    </h5>
                    <div
                        class="footer__bottom__l__right__flex"
                    > 
                        <div 
                            class="footer__bottom__l__right__block"
                            v-for="item_info in $t('footer__menu__info')"
                            :key="item_info.name"
                            @click="route(item_info.to, item_info.type_route)"
                        >
                            <p>
                                {{item_info.name}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="footer__bottom__l__center">
                    <h5>
                        {{$t('footer__contact')}}
                    </h5>
                    <div
                        class="footer__bottom__l__right__flex"
                    > 
                        <div 
                            class="footer__bottom__l__right__block"
                        >
                            <p>
                               {{$t('footer__contact__feadback')}}
                            </p>
                        </div>
                        <div 
                            class="footer__bottom__l__right__block"
                        >
                            <a target="_blank" href="tel: +7 7172 79-04-39">
                                 +7/7172/79-04-39 
                            </a>
                        </div>
                        <div 
                            class="footer__bottom__l__right__block"
                        >
                            <a target="_blank" href="mailto: support@eqonaq.kz ">
                                support@eqonaq.kz 
                            </a>
                        </div>
                    </div>
                </div>
                <div class="footer__bottom__l__left__mobile">
                    <img class="logo__footer" src="../../assets/logo/logo.svg" alt="logo">
                     
                    <div class="footer__bottom__l__left__flex">
                        <!-- <img src="../../assets/icons/appstore.svg" alt="appstore"> -->
                        <img src="../../assets/icons/playmarket.svg" alt="playmarket">
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
             
        }
    },
    methods: {
        openPlay (type) {
            if (type == 'playmarket') {
                window.open('https://play.google.com/store/apps/details?id=com.codetau.eqonaq', '_blank')
            }
        },
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
@planshet: 1200px;

.footer {
    background: #141414;
    overflow: hidden;
    width: 100%;
    margin-top: 80px;
    @media (max-width: @mobile) {
        padding: 10px;
        margin-top: 10px;
    }
    .footer__top {
        border-bottom: 1px solid #3D3526;
        @media (max-width: @mobile) {
            display: none;
        }
        .footer__top__margin {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            @media (max-width: @planshet) {
                width: 95%;
            }
            @media (max-width: @mobile) {
                width: 95%;
                flex-wrap: wrap;
            }
            .footer__top__l {
                border-right: 1px solid #3D3526;
                width: 50%;
                padding: 35px 0;
                @media (max-width: @mobile) {
                    width: 100%;
                    flex-wrap: wrap;
                    padding: 10px 0;
                    border-right: 0;
                }
                .withSupport__type {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    @media (max-width: @mobile) {
                        justify-content: space-around;
                    }
                    .withSupport__type__block {
                        width: 173px;
                        margin-right: 10px;
                        cursor: pointer;
                        overflow: hidden;
                        text-align: center;
                        
                        img {
                            width: 100%;
                        }
                        @media (max-width: @planshet) {
                            width: 31%;
                        }
                        @media (max-width: @mobile) {
                            width: 26%;
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
                @media (max-width: @mobile) {
                    width: 50%;
                    padding: 10px 0;
                    border-right: 0;
                }
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
                    @media (max-width: @mobile) {
                        font-size: 12px;
                    }
                }
            }
            .footer__top__r {
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 35px 0;
                @media (max-width: @mobile) {
                    width: 50%;
                    padding: 10px 0;
                }
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
                    @media (max-width: @mobile) {
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .footer__bottom {
        width: 1200px;
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 30px;
        @media (max-width: @planshet) {
            width: 95%;
        }
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .footer__bottom__l {
            width: 100%;
            display: flex;
            justify-content: space-between;
            @media (max-width: @mobile) {
                flex-wrap: wrap;
            }
            .footer__bottom__l__left__pc {
                width: 50%;
                display: block;
                @media (max-width: @mobile) {
                    display: none;
                }
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
                        width: 150px;
                        cursor: pointer;
                        border: 1px solid #3D3526;
                        border-radius: 5px;
                    }
                }
            }
            .footer__bottom__l__left__mobile {
                display: none;
                @media (max-width: @mobile) {
                    width: 100%;
                    display: block;
                }
                .logo__footer {
                    width: 230px;
                    @media (max-width: @mobile) {
                        display: none;
                    }
                }
                
                .footer__bottom__l__left__flex {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    @media (max-width: @mobile) {
                        margin-top: 5px;
                        margin-bottom: 10px;
                    }
                    img {
                        margin-right: 20px;
                        cursor: pointer;
                        @media (max-width: @mobile) {
                            width: 120px;
                            border: 1px solid #3D3526;
                            border-radius: 5px;
                        }
                    }
                }
            }
            .footer__bottom__l__right {
                width: 25%;
                @media (max-width: @mobile) {
                    width: 100%;
                }
                h5 {
                    font-size: 14px;
                    line-height: 17px;
                    color: #FFFFFF;
                    margin: 0;
                    margin-bottom: 23px;
                    @media (max-width: @mobile) {
                        font-size: 13px;
                        margin-bottom: 10px;
                    }
                }
                .footer__bottom__l__right__flex {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    @media (max-width: @mobile) {
                        width: 100%;
                    }
                    .footer__bottom__l__right__block {
                        width: 100%;
                        @media (max-width: @mobile) {
                            width: 100%;
                        }
                        a,p {
                            text-decoration: none;
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
            .footer__bottom__l__center {
                width: 25%;
                @media (max-width: @mobile) {
                    width: 100%;
                }
                h5 {
                    font-size: 14px;
                    line-height: 17px;
                    color: #FFFFFF;
                    margin: 0;
                    margin-bottom: 23px;
                    @media (max-width: @mobile) {
                        font-size: 13px;
                        margin-bottom: 10px;
                    }
                }
                .footer__bottom__l__right__flex {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    @media (max-width: @mobile) {
                        width: 100%;
                    }
                    .footer__bottom__l__right__block {
                        width: 100%;
                        @media (max-width: @mobile) {
                            width: 100%;
                        }
                        a,p { 
                            text-decoration: none;
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