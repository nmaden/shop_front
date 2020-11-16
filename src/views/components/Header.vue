<template>
    <div>
        <div class="header">
            <div class="header__l">
                <div class="icon__mobile">
                    <img 
                        @click="show_mobile_menu = true" 
                        src="../../assets/icons/menu_icon_mobile.svg" 
                        alt="menu"
                    />
                </div>

                <router-link to="/">
                    <img src="../../assets/logo/logo.svg" alt="logo">
                </router-link>
                <div class="languages">
                    <select
                        v-model="lang"
                        @change="sendLocale"
                    >
                        <option 
                            v-for="lang in langs"
                            :key="lang.type"
                            :value="lang.type"
                        >
                            {{lang.label}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="header__r">
                <div class="search">
                    <router-link to="/search">
                        <img src="../../assets/icons/search.svg" alt="search">
                    </router-link>
                </div>
                <div class="lang">
                    <v-select
                        :items="langs"
                        :hide-details="true"
                        :flat="true"
                        item-text="label"
                        item-value="type"
                        item-color="#000"
                        solo
                        dense
                        v-model="lang"
                        @change="sendLocale"
                    ></v-select>
                </div>
                <div class="user">
                    <v-tooltip 
                        v-if="GET_TOKEN.length == 0" 
                        bottom
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <img  
                                v-bind="attrs"
                                v-on="on"
                                @click="route('/login')" 
                                src="../../assets/icons/person_default.svg" 
                                alt="person_default"
                            >
                        </template>
                        <span>{{$t('header__user__toast')}}</span>
                    </v-tooltip>
                    <div 
                        class="main__header__menu__user" 
                        @mouseleave="show_menu = false" 
                        @mouseover="show_menu = true" 
                        v-if="GET_TOKEN.length !== 0"
                    >
                        <div class="header__menu__user">
                            <p>
                                {{GET_USER_DATA.name}} 
                            </p>
                            <img src="../../assets/icons/person_default.svg" alt="person_default">
                        </div>
                        <div v-show="show_menu == true" class="header__menu__user__hover">
                            <div class="header__menu__user__hover__after">
                                <div @click="route('/profile')" class="header__menu__user__hover__after__block">
                                    <p>
                                        {{$t('header__user__menu__cabinet')}} / {{GET_USER_DATA.name}} {{GET_USER_DATA.surname}}
                                    </p>
                                </div>
                                <div @click="sign_out_modal = true" class="header__menu__user__hover__after__block">
                                    <p>
                                        {{$t('header__user__menu__sign__out')}}
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
            class="scroll__menu"
        >
            <div class="menu">
                <a 
                    class="menu__item"
                    v-for="menu_item in $t('menu_header')"
                    :key="menu_item.name"
                    ref="menu__item"
                    @click="route(menu_item.to, menu_item.url)"
                >
                    {{menu_item.name}}
                </a>
            </div>
        </div>

        <!-- mobile menu -->

        <transition name="slide-fade">
            <div 
                v-show="show_mobile_menu == true" 
                class="mobile__menu"
            >
                <div class="mobile__menu__position">
                    <div class="mobile__menu__list">
                        <div class="mobile__menu__list__header">
                            <img 
                                @click="show_mobile_menu = false" 
                                src="../../assets/all/back__white.svg" 
                                alt=""
                            >
                        </div>
                        <div class="mobile__menu__list__header">
                            <img src="../../assets/logo/logo__white.svg" alt="">
                        </div>
                        <div class="mobile__menu__list__flex">
                            <div 
                                class="mobile__menu__list__flex__block"
                                v-for="menu_item in $t('menu_header')"
                                :key="menu_item.name"
                                @click="route(menu_item.to)"
                            >
                                <p>
                                    {{menu_item.name}}
                                </p>
                            </div>
                        </div>
                        <div 
                            v-if="GET_TOKEN.length == 0" 
                            @click="route('/login')" 
                            class="cabinet__block"
                        >
                            <img src="../../assets/icons/person_default.svg" alt="person_default">
                            <p>
                                {{$t('header__user__menu__cabinet')}}
                            </p>
                        </div>
                        <div 
                            v-if="GET_TOKEN.length !== 0" 
                            @click="route('/profile')" 
                            class="cabinet__block__user"
                        >
                            <img src="../../assets/icons/person_default.svg" alt="person_default">
                            <p>
                                {{$t('header__user__menu__cabinet')}}
                            </p>
                        </div>
                        <div 
                            v-if="GET_TOKEN.length !== 0"
                            @click="sign_out_modal = true" 
                            class="cabinet__block"
                        >
                            <p>
                                {{$t('header__user__menu__sign__out')}}
                            </p>
                        </div>
                    </div>
                    <div class="mobile__menu__img">
                        <img src="../../assets/all/hotpng__black.svg" alt="hotpng__black">
                    </div>
                </div>
            </div>
        </transition>


        <v-dialog
            v-model="sign_out_modal"
            max-width="350"
            style="z-index: 9999"
        >
            <v-card>
                <v-card-title class="headline">
                    <h3 class="delete__dialog__title">
                        Вы уверены, что хотите выйти?
                    </h3>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        style="background: rgb(255 206 3); font-family: 'MontserratBold'"
                        color="#000"
                        @click="sign_out"
                    >
                        Да
                    </v-btn>

                     <v-btn
                        color="#000"
                        @click="sign_out_modal = false"
                        style="background: rgb(255 206 3); font-family: 'MontserratBold'"
                    >
                        Нет
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import disableScroll from 'disable-scroll'

export default {
    data () {
      return {
        sign_out_modal: false,
        langs: [
            {
                type: 'kz',
                label: 'ҚАЗ',
            },
            {
                type: 'ru',
                label: 'РУС',
            },
            {
                type: 'en',
                label: 'ENG',
            },
        ],
        lang: 'ru',
        show_menu: false,
        show_mobile_menu: false,
      }
    },
    methods: {
        getLocale () {
            this.view__langs = !this.view__langs
        },
        route (to, url) {
            if (url == true) {
                window.location.href = to
            } else {
                if (this.$route.path !== to) {
                    this.$router.push(to)
                } 
            }
            this.show_mobile_menu = false
        },
        sign_out () {
            this.$Progress.finish()
            this.sign_out_modal = false
            this.$store.dispatch('SIGN_OUT_USER')
            this.$toast.open({
                message: this.$i18n.t('header__user__menu__sign__out__toast'),
                type: 'warning',
                position: 'bottom',
                duration: 4000,
                queue: true
            });
        },
        scrollMenu (e) {
            this.$scroll(e, 60)
        },
         
        scrollBodyOver () {
            disableScroll.on()
        },
        scrollBodyLeave () {
            disableScroll.off()
        },
        sendLocale () {
            import(`../../localization/${this.lang}.js`)
            .then((lang) => {
                this.$i18n.setLocaleMessage(this.lang, lang.default)
                this.$i18n.locale = this.lang
            })
        },
        
    },
     
    computed: {
        ...mapGetters(['GET_TOKEN', 'GET_USER_DATA']),
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;
@planshet: 1200px;

.v-sheet.v-list {
    border-radius: 0;
    text-align: center;
}


.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.delete__dialog__title {
    font-family: "MontserratBold";
    font-size: 17px;
    line-height: 21px;

    @media (max-width: @mobile) {
        font-size: 13px;
        line-height: 15px;
    }
}
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

    @media (max-width: @planshet) {
        width: 95%;
    }

    .header__l {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img {
            @media (max-width: @mobile) {
                width: 134px;
            }
        }
        @media (max-width: @mobile) {
            width: 100%;
            justify-content: space-between;
        }
        .languages {
            width: 40px;
            display: none;
            @media (max-width: @mobile) {
                display: block;
            }
            select {
                font-size: 14px;
                font-weight: bold;
                width: 100%;
                outline: none;
            }
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
            display: none;
            img {
                cursor: pointer;
                &:hover {
                    opacity: .7;
                }
            }
        }
        .lang {
            width: 92px;
            z-index: 99;
            font-family: 'MontserratBold';
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .user {
            margin-left: 15px;
            z-index: 99;
            height: 40px;

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
                            top: -8px;
                            transform: rotateZ(180deg);
                            border: 10px solid transparent;
                            border-top: 10px solid #fff;
                        }
                        &::before {
                            content: '';
                            display: block;
                            position: absolute;
                            right: 9px;
                            top: -12px;
                            transform: rotateZ(180deg);
                            border: 11px solid transparent;
                            border-top: 11px solid #dadada;
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
    height: 76px;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    @media (max-width: @mobile) {
        display: none;
    }
    @media (max-width: @planshet) {
        width: 95%;
    }
    &::-webkit-scrollbar {
        width: 1px;
    }
    .menu {
        width: 100%;
        padding-bottom: 10px;
        z-index: 100;
        white-space: nowrap;
        
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

.mobile__menu {
    width: 100%;
    height: 100%;
    z-index: 9997;
    background: rgba(23, 23, 23, 0.9);
    position: fixed;
    top: 0;

    .mobile__menu__position {
        width: 100%;
        height: 100%;
        position: relative;
        .mobile__menu__list {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 20px;
            top: 0;
            z-index: 11;
            .mobile__menu__list__header {
                width: 100%;
                margin-top: 20px;
                img {
                    cursor: pointer;
                }
            }
            .mobile__menu__list__flex {
                width: 100%;
                margin-top: 7px;
                height: 50%;
                overflow-y: scroll;
                .mobile__menu__list__flex__block {
                    padding: 10px;
                    border-radius: 12px;
                    cursor: pointer;
                    border: 2px solid #FDE88D;
                    margin-right: 10px;
                    margin-bottom: 10px;
                    float: left;
                    color: #fff;
                    text-align: center;
                    &:hover {
                        background: #FDE88D;
                        color: #000;
                    }
                    p {
                        margin: 0;
                        font-style: normal;
                        text-transform: uppercase;
                        font-weight: bold;
                        font-size: 13px;
                        line-height: 20px;
                    }
                }
            }
            .cabinet__block {
                width: 90%;
                padding: 10px;
                display: flex;
                background: #FDE88D;
                cursor: pointer;
                justify-content: flex-start;
                position: absolute;
                bottom: 20px;
                align-items: center;
                border-radius: 10px;
                img {
                    width: 30px;
                }
                p {
                    margin: 0;
                    color: #000;
                    margin-left: 10px;
                    font-weight: bold;
                    user-select: none;
                    font-size: 14px;
                }
            }
            .cabinet__block__user {
                width: 90%;
                padding: 10px;
                display: flex;
                background: #FDE88D;
                cursor: pointer;
                justify-content: flex-start;
                position: absolute;
                bottom: 73px;
                align-items: center;
                border-radius: 10px;
                img {
                    width: 30px;
                }
                p {
                    margin: 0;
                    color: #000;
                    margin-left: 10px;
                    font-weight: bold;
                    font-size: 13px;
                    user-select: none;
                }
            }
        }
        .mobile__menu__img {
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 10;
        }
    }
}

</style>
