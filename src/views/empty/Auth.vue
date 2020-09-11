<template>
    <div class="auth">
        <div class="auth__margin">
            <Nav />
            <div class="login__and__registration__flex">
                <div class="login__and__registration__flex__l">
                    <Login />
                </div>
                <div class="login__and__registration__flex__r">
                    <h2>
                        Впервые на eQonaq?
                    </h2>
                    <button @click="modal = true">
                        ЗАРЕГИСТРИРОВАТЬСЯ
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
                        Зарегистрироваться как
                    </h2>
                    <div class="type__auth__block">
                        <img src="../../assets/all/natural_person.svg" alt="images">
                        <router-link to="/regitstration">
                            <button>
                                Физическое лицо
                            </button>
                        </router-link>
                    </div>
                    <div class="type__auth__block">
                        <img src="../../assets/all/entity.svg" alt="images">
                        <a href="https://eqonaq.kz" target="_blank">
                            <button>
                                Юридическое лицо
                            </button>
                        </a>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Nav from '../components/NavHeader'
import Login from './components/Login'

export default {
    components: {
        Nav, Login
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
                width: 361px;
                @media (max-width: @mobile) {
                    width: 100%;
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