<template>
    <div class="auth">
        <div class="auth__margin">
            <HeaderAuth />
            <div class="login__and__registration__flex">
                <div class="login__and__registration__flex__l">
                    <Login />
                </div>
                <div class="login__and__registration__flex__r">
                    <h2>
                        Впервые на eQonaq?
                    </h2>
                    <router-link to="/regitstration">
                        <button>
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderAuth from './components/HeaderAuth'
import Login from './components/Login'

export default {
    components: {
        HeaderAuth, Login
    },
}
</script>

<style scoped lang="less">
.auth {
    width: 100%;
    height: 100vh;
    background: url('../../assets/all/bg_auth.png') no-repeat;
    background-position: right bottom;
    overflow: hidden;
    background-size: 45%;

    .auth__margin {
        width: 85%;
        margin: 0 auto;
        margin-top: 40px;

        .login__and__registration__flex {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            .login__and__registration__flex__l {
                width: 361px;
            }
            .login__and__registration__flex__r {
                width: 480px;
                h2 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 48px;
                    color: #000;
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
                    &:hover {
                        opacity: .7;
                    }
                }
            }
        }
    }
}
</style>