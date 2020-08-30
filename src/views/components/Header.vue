<template>
    <div>
        <div class="header">
            <div class="header__l">
                <router-link to="/">
                    <img src="../../assets/logo/logo.svg" alt="logo">
                </router-link>
            </div>
            <div class="header__r">
                <div class="search">
                    <router-link to="/search">
                        <img src="../../assets/icons/search.svg" alt="search">
                    </router-link>
                </div>
                <div class="lang">
                    <v-select
                        v-model="selectLangs"
                        :items="langs"
                        item-text="state"
                        item-value="abbr"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                    ></v-select>
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
        <div v-if="currentRouteName !== 'Profile'" class="scroll__menu">
            <div class="menu">
                <a 
                    class="menu__item"
                    v-for="menu_item in menu"
                    :key="menu_item.name"
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

export default {
    data () {
      return {
        selectLangs: { state: 'Русский', abbr: 'ru' },
        langs: [
          { state: 'Русский', abbr: 'ru' },
          { state: 'Англиский', abbr: 'en' },
        ],
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
                to: '/'
            },
            {
                name: 'ИСТОРИЯ КАЗАХСТАНА',
                to: '/'
            },
        ],
        show_menu: false
      }
    },
    methods: {
        route (to) {
            this.$router.push(to)
        },
        to_profile () {
            this.$router.push('/profile')
        },
        sign_out () {
            console.log('ok')
            localStorage.clear()
            this.$router.push('/')
            location.reload()
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

.header {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;

    .header__l {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .header__r {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
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
            width: 120px;
            z-index: 999;
            font-family: 'MontserratBold';
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
    .menu {
        width: 100%;
        padding-bottom: 10px;
        overflow: auto;
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