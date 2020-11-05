<template>
    <div class="auth">
        <div class="auth__margin">
            <Nav />
            <div class="login__and__registration__flex">
                <div class="login__and__registration__flex__l">
                    <h2>
                        {{$t('auth__login__title')}}
                    </h2>
                    <p>
                        {{$t('auth__login__descriptions')}}
                    </p>
                    <Tabs />
                </div>
                <div class="login__and__registration__flex__r">
                    <h2>
                        {{$t('auth__reg__title')}}
                    </h2>
                    <button @click="modal = true">
                        {{$t('auth__reg__button')}}
                    </button>
                </div>
            </div>
        </div>

        <!-- modal window -->

        <v-dialog
            v-model="modal"
            max-width="500"
        >
            <v-card>
                <div class="type__auth">
                    <h2>
                        {{$t('auth__reg__modal__title')}}
                    </h2>
                    <div class="type__auth__block">
                        <img src="../../assets/all/natural_person.svg" alt="images">
                        <router-link to="/regitstration">
                            <button>
                                {{$t('auth__reg__modal__btn__individuals')}}
                            </button>
                        </router-link>
                    </div>
                    <div class="type__auth__block">
                        <img src="../../assets/all/entity.svg" alt="images">
                        <router-link to="/entityregistration">
                            <button>
                                {{$t('auth__reg__modal__btn__entities')}}
                            </button>
                        </router-link>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Nav from '../components/NavHeader'
import Tabs from './components/Tabs'

export default {
    components: {
        Nav, Tabs
    },
    data() {
        return {
            modal: false
        }
    },
}
</script>

<style scoped lang="less">
@mobile: 900px;

.type__auth {
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
    
    .type__auth__block {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        @media (max-width: @mobile) {
            margin-top: 15px;
        }
        img {
            @media (max-width: @mobile) {
                width: 50%;
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
            margin-top: 10px;
            font-size: 20px;
            line-height: 25px;
            color: #000;
            outline: none;
            @media (max-width: @mobile) {
                padding: 10px 20px;
                color: #000;
                width: 70%;
                font-size: 14px;
            }
        }
    }
}
.auth {
    width: 100%;
    height: 100vh;
    background: url('../../assets/all/bg_auth.png') no-repeat;
    background-position: right bottom;
    overflow: hidden;
    background-size: 45%;
    font-family: "MontserratBold";
    @media (max-width: @mobile) {
        height: auto;
        background: none;
    }
    .auth__margin {
        width: 85%;
        margin: 0 auto;
        margin-top: 40px;

        .login__and__registration__flex {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            @media (max-width: @mobile) {
                flex-wrap: wrap;
                margin-top: 20px;
            }
            .login__and__registration__flex__l {
                width: 436px;
                @media (max-width: @mobile) {
                    width: 100%;
                }
                h2 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 32px;
                    color: #000;
                    @media (max-width: @mobile) {
                        font-size: 20px;
                    }
                }
            }
            .login__and__registration__flex__r {
                width: 480px;
                @media (max-width: @mobile) {
                    width: 100%;
                }
                h2 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 32px;
                    color: #000;
                    @media (max-width: @mobile) {
                        display: none;
                    }
                }
                button {
                    padding: 15px 50px;
                    background: #FDE88D;
                    border: 3px solid #FDE88D;
                    box-sizing: border-box;
                    border-radius: 30px;
                    font-style: normal;
                    font-weight: bold;
                    color: #000;
                    font-size: 16px;
                    text-transform: uppercase;
                    margin-top: 35px;
                    outline: none;
                    @media (max-width: @mobile) {
                        padding: 10px 20px;
                        color: #000;
                        font-size: 14px;
                        margin-top: 19px;
                        width: 100%;
                    }
                    &:hover {
                        opacity: .7;
                    }
                }
            }
        }
    }
}
</style>