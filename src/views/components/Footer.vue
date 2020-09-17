<template>
    <div class="footer">
        <div class="footer__top">
            <div class="footer__top__margin">
                <div class="footer__top__l">
                    <div class="footer__top__l_left">
                        <h4>
                            ЗАРЕГИСТРИРОВАТЬ ГОСТЯ
                        </h4>
                    </div>
                    <div class="footer__top__l__right">
                        <img src="../../assets/icons/mail.svg" alt="mail">
                        <p>
                            Отправить уведомление 
                            о прибытии гостя
                        </p>
                    </div>
                </div>
                <div class="footer__top__c">
                    <p>
                        ЗАРЕГИСТРИРОВАТЬСЯ
                    </p>
                </div>
                <div class="footer__top__r">
                    <p>
                        АВТОРИЗОВАТЬСЯ
                    </p>
                </div>
            </div>
        </div>
        
        <div class="footer__bottom">
            <div class="footer__bottom__l">
                <div class="footer__bottom__l__left">
                    <img class="logo__footer" src="../../assets/logo/logo.svg" alt="logo">
                    <p>
                        EQONAQ 2020
                    </p>
                    <div class="footer__bottom__l__left__flex">
                        <img src="../../assets/icons/appstore.svg" alt="appstore">
                        <img src="../../assets/icons/playmarket.svg" alt="playmarket">
                    </div>
                </div>
                <div class="footer__bottom__l__right">
                    <h5>
                        ИНФОРМАЦИЯ
                    </h5>
                    <p
                        v-for="item_info in info"
                        :key="item_info.name"
                    >
                        {{item_info.name}}
                    </p>
                </div>
            </div>
            <div class="footer__bottom__r">
                <h5>
                    ДОПОЛНИТЕЛЬНО
                </h5>
                <div class="footer__bottom__r__flex__p">
                    <div 
                        class="footer__bottom__r__text__block"
                        v-for="item_additionally in additionally"
                        :key="item_additionally.name"
                    >
                        <p>
                            {{item_additionally.name}}
                        </p>
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
            info: [
                {
                    name: 'О системе'
                },
                {
                    name: 'Основные задачи'
                },
                {
                    name: 'Интересные места'
                },
                {
                    name: 'Забронировать отель'
                },
                {
                    name: 'Полезные приложения'
                },
            ],
            additionally: [
                {
                    name: 'Номера телефонов'
                },
                {
                    name: 'Связь'
                },
                {
                    name: 'Миграционный справочник'
                },
                {
                    name: 'Валюта'
                },
                {
                    name: 'Гостиницы'
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>

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
                .footer__top__l_left {
                    width: 40%;
                    h4 {
                        margin: 0;
                        font-weight: 750;
                        font-size: 23px;
                        line-height: 29px;
                        color: #FFFFFF;
                        cursor: pointer;
                        user-select: none;
                    }
                }
                .footer__top__l__right {
                    width: 60%;
                    display: flex;
                    justify-content: space-around;
                    p {
                        margin: 0;
                        width: 185px;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        letter-spacing: -0.05em;
                        color: #AFAFAF;
                        user-select: none;
                        cursor: pointer;
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
            width: 45%;
            display: flex;
            justify-content: space-between;
            .footer__bottom__l__left {
                .logo__footer {
                    width: 230px;
                }
                p {
                    font-style: normal;
                    font-weight: 750;
                    font-size: 14px;
                    line-height: 17px;
                    color: #FFFFFF;
                    margin: 0;
                    margin-bottom: 15px;
                    margin-top: 15px;
                }
                .footer__bottom__l__left__flex {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    img {
                        margin-right: 20px;
                        cursor: pointer;
                    }
                }
            }
            .footer__bottom__l__right {
                h5 {
                    font-size: 14px;
                    line-height: 17px;
                    color: #FFFFFF;
                    margin: 0;
                    margin-bottom: 23px;
                }
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
        .footer__bottom__r {
            width: 45%;
            h5 {
                font-size: 14px;
                line-height: 17px;
                color: #FFFFFF;
                margin: 0;
                margin-bottom: 23px;
            }
            .footer__bottom__r__flex__p {
                width: 70%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .footer__bottom__r__text__block {
                    width: 45%;
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
</style>