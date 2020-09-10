<template>
    <div>
        <div class="header">
            <div class="header__l">
                <div class="icon__mobile">
                    <img src="../../assets/icons/menu_icon_mobile.svg" alt="menu">
                </div>

                <router-link to="/">
                    <img src="../../assets/logo/logo.svg" alt="logo">
                </router-link>

                <div 
                    class="languages"
                    @mouseleave="view__langs = false"
                >
                    <img :src="flag_uri" @click="getLocale" alt="language">
                    <div class="languages__list" v-show="view__langs">
                        <div 
                            class="languages__list__block"
                            v-for="flag_item in langs"
                            :key="flag_item.lang"
                            @click="localeSite(flag_item)"
                        >
                            <img :src="flag_item.flag" alt="flag">
                        </div>  
                    </div>
                </div>
            </div>
            <div class="header__r">
                <div class="search">
                    <router-link to="/search">
                        <img src="../../assets/icons/search.svg" alt="search">
                    </router-link>
                </div>
                <div class="lang">
                    <div 
                        class="languages"
                        @mouseleave="view__langs = false"
                    >
                        <img :src="flag_uri" @click="getLocale" alt="language">
                        <div class="languages__list" v-show="view__langs">
                            <div 
                                class="languages__list__block"
                                v-for="flag_item in langs"
                                :key="flag_item.lang"
                                @click="localeSite(flag_item)"
                            >
                                <img :src="flag_item.flag" alt="flag">
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="user">
                    <router-link v-if="GET_TOKEN.length == 0" to="/login">
                        <img src="../../assets/icons/person_default.svg" alt="person_default">
                    </router-link>
                    <div class="main__header__menu__user" @mouseleave="show_menu = false" @mouseover="show_menu = true" v-if="GET_TOKEN.length !== 0">
                        <div class="header__menu__user">
                            <p>
                                {{GET_USER_DATA}} 
                            </p>
                            <img src="../../assets/icons/person_default.svg" alt="person_default">
                        </div>
                        <div v-show="show_menu == true" class="header__menu__user__hover">
                            <div class="header__menu__user__hover__after">
                                <div v-if="currentRouteName !== 'Profile'" @click="to_profile" class="header__menu__user__hover__after__block">
                                    <p>
                                        Личный кабинет 
                                    </p>
                                </div>
                                <div @click="sign_out" class="header__menu__user__hover__after__block">
                                    <p>
                                        Выход
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div 
            @mousewheel="scrollMenu" 
            @mousemove="scrollBodyOver" 
            @mouseleave="scrollBodyLeave" 
            v-if="currentRouteName !== 'Profile'" 
            class="scroll__menu"
        >
            <div class="menu" :style="'margin-left:' + this.menu_count + 'px'">
                <a 
                    class="menu__item"
                    v-for="menu_item in menu"
                    :key="menu_item.name"
                    ref="menu__item"
                    @click="route(menu_item.to)"
                >
                    {{menu_item.name}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import disableScroll from 'disable-scroll'

export default {
    data () {
      return {
        flag_uri: require('../../assets/flags/russia.svg'),
        langs: [
            {
                flag: require('../../assets/flags/russia.svg'),
                lang: 'ru'
            },
            {
                flag: require('../../assets/flags/kazakhstan.svg'),
                lang: 'kz'
            },
            {
                flag: require('../../assets/flags/britannia.svg'),
                lang: 'br'
            }
        ],
        view__langs: false,
        menu: [
            {
                name: 'номера телефонов',
                to: '/telephones'
            },
            {
                name: 'Связь',
                to: '/connection'
            },
            {
                name: 'МИГРАЦИОННЫЙ СПРАВОЧНИК',
                to: '/migration'
            },
            {
                name: 'ВАЛЮТА',
                to: '/currency'
            },
            {
                name: 'ГОСТИНИЦЫ',
                to: 'https://api.eqonaq.kz/hotels'
            },
        ],
        show_menu: false,
        menu_count: 0,
      }
    },
    methods: {
        getLocale () {
            this.view__langs = !this.view__langs
        },
        localeSite (item) {
            this.flag_uri = item.flag
            this.view__langs = false
        },
        route (to) {
            if (to == 'https://api.eqonaq.kz/hotels') {
                window.location.href = to
            } else {
                this.$router.push(to)
            }
        },
        to_profile () {
            this.$router.push('/profile')
        },
        sign_out () {
            localStorage.clear()
            this.$router.push('/')
            location.reload()
        },
        scrollMenu (e) {
            e = e || window.event
            let delta = e.deltaY || e.detail || e.wheelDelta
            let menu__item = this.$refs.menu__item
            let last__menu__item = menu__item[Object.keys(menu__item)[Object.keys(menu__item).length - 1]] 
            let style__last__menu__item = window.getComputedStyle(last__menu__item)
            let offset__width = last__menu__item.offsetLeft + parseInt(style__last__menu__item.width.replace('px', ''))
            let margin__left__menu = Number(String(this.menu_count).replace('-', '')) + 1200

            if (offset__width < 1200) {
                return false
            } else {
                if (margin__left__menu > offset__width) {
                    if (delta < 0) {
                        this.menu_count += 20
                    } 
                } else {
                    if (this.menu_count > -1) {
                        delta > 0 ? this.menu_count -= 20 : this.menu_count = 0;
                    } else {
                        delta > 0 ? this.menu_count -= 20 : this.menu_count += 20;
                    }
                }
            }
        },
        
        scrollBodyOver () {
            disableScroll.on()
        },
        scrollBodyLeave () {
            disableScroll.off()
        }
    },
    computed: {
        currentRouteName () {
            return this.$route.name;
        },
        ...mapGetters(['GET_TOKEN', 'GET_USER_DATA']),
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;

.header {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    
    @media (max-width: @mobile) {
        width: 95%;
    }

    .header__l {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
            @media (max-width: @mobile) {
                width: 100px;
            }
        }
        @media (max-width: @mobile) {
            width: 100%;
            justify-content: space-between;
        }
        .icon__mobile {
            display: none;
            @media (max-width: @mobile) {
                display: block;
            }
            img {
                width: auto;
                cursor: pointer;
            }
        }
        .languages {
            width: 37px;
            cursor: pointer;
            z-index: 999;
            display: none;
            position: relative;
            @media (max-width: @mobile) {
                display: block;
            }
            img {
                width: 100%;
            }
            .languages__list {
                width: 100%;
                background: #fff;
                position: absolute;
                .languages__list__block {
                    width: 100%;
                    height: 31px;
                    overflow: hidden;
                    img {
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .header__r {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media (max-width: @mobile) {
            display: none;
        }
        .search {
            margin-right: 15px;
            border-right: 2px solid #000;
            padding-right: 15px;
            img {
                cursor: pointer;
                &:hover {
                    opacity: .7;
                }
            }
        }
        .lang {
            width: 51px;
            z-index: 999;
            font-family: 'MontserratBold';
            display: flex;
            justify-content: center;
            align-items: center;
             .languages {
                width: 37px;
                cursor: pointer;
                z-index: 999;
                display: block;
                position: relative;
                @media (max-width: @mobile) {
                    display: none;
                }
                img {
                    width: 100%;
                }
                .languages__list {
                    width: 100%;
                    background: #fff;
                    position: absolute;
                    .languages__list__block {
                        width: 100%;
                        height: 31px;
                        overflow: hidden;
                        img {
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        .user {
            margin-left: 15px;
            .main__header__menu__user {
                position: relative;
                z-index: 9999;

                .header__menu__user__hover {
                    position: absolute;
                    width: 200px;
                    top: 40px;
                    right: 0px;
                    .header__menu__user__hover__after {
                        width: 100%;
                        margin-top: 10px;
                        background: #fff;
                        border-radius: 5px;
                        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.25);
                        padding: 10px 15px;
                        &::after {
                            content: '';
                            display: block;
                            position: absolute;
                            right: 10px;
                            top: -10px;
                            transform: rotateZ(180deg);
                            border: 10px solid transparent;
                            border-top: 10px solid #fff;
                        }

                        .header__menu__user__hover__after__block {
                            width: 100%;
                            border-bottom: 1px solid #F5F5FC;
                            padding-top: 9px;
                            cursor: pointer;
                            padding-bottom: 9px;
                            p {
                                margin: 0;
                                font-style: normal;
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 17px;
                                color: #000;
                                user-select: none;
                            }
                        }
                    }
                }
                .header__menu__user {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    p {
                        margin: 0;
                        margin-right: 10px;
                        color: #000;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 17px;
                        line-height: 25px;
                        user-select: none;
                    }
                }
            }
            
            img {
                cursor: pointer;
                &:hover {
                    opacity: .7;
                }
            }
        }
    }
}

.scroll__menu {
    width: 1200px;
    margin: 0 auto;
    z-index: 20;
    margin-top: 10px;
    height: 65px;
    position: relative;
    @media (max-width: @mobile) {
        display: none;
    }

    .menu {
        width: 100%;
        padding-bottom: 10px;
        z-index: 100;
        white-space: nowrap;
        position: absolute;

        &::-webkit-scrollbar {
            height: 0px;
        }
        &::-webkit-scrollbar-track {
            background: #fff; 
        }
        &::-webkit-scrollbar-thumb {
            background: #ffce03; 
            border-radius: 5px;
        }
        &::-webkit-scrollbar-thumb:hover {
            opacity: 0.7;
        }
        .menu__item {
            display: inline-block;
            padding: 15px 40px;
            border: 3px solid #FDE88D;
            border-radius: 30px;
            font-family: 'MontserratBold';
            font-size: 16px;
            font-style: normal;
            font-weight: bold;
            margin-right: 10px;
            text-transform: uppercase;
            letter-spacing: -0.05em;
            user-select: none;
            color: #000;
            cursor: pointer;
            &:hover {
                background: #FDE88D;
            }
        }
    }
}

</style>
