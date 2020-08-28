<template>
    <div class="eds">
        <div class="eds_bg">
            <div class="eds__margin">
                <Nav />
                <div class="login__and__registration__flex">
                    <div class="login__and__registration__flex__l">
                        <EdsPhone />
                    </div>
                    <div class="login__and__registration__flex__r">
                        <h2>
                        У меня нет ключа ЭЦП
                        </h2>
                        <p>
                            Если у Вас нет электронной цифравой подписи, тогда введите необходимые данные в ручную
                        </p>
                        <router-link to="/regitstration">
                            <button>
                                ВВЕСТИ В РУЧНУЮ
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Nav from '../components/NavHeader'
import EdsPhone from './components/EdsPhone'

export default {
    components: {
        Nav, EdsPhone
    },
}
</script>

<style scoped lang="less">
.eds {
    width: 100%;
    height: 100vh;
    background: url('../../assets/all/hotpng_bg.svg') no-repeat;
    background-position: right bottom;
    overflow: hidden;
    background-size: 16%;
    .eds_bg {
        width: 100%;
        height: 100vh;
        background: url('../../assets/all/eds_bg.svg') no-repeat;
        background-position: right 98px bottom 29px;
        overflow: hidden;
        background-size: 24%;
        .eds__margin {
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
                        font-size: 32px;
                        color: #000;
                    }
                    p {
                        margin: 0;
                        font-style: normal;
                        font-weight: 300;
                        font-size: 12px;
                        line-height: 15px;
                        color: #000;
                        margin-top: 5px;
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
    
}
</style>