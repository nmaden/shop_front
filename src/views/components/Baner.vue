<template>
    <div class="banner">
        <div class="banner_l">
            <div class="banner_user">
                <img src="../../assets/all/banner_user.svg" alt="banner_user">
            </div>
        </div>
        <div class="banner_c">
            <h1>
                Qus jetken jerine qonar, Qonaq qalag’an uıine qonar
            </h1>
            <button v-if="GET_TOKEN.length !== 0" @click="route">
                Отправить уведомление о прибытии гостя
            </button>
            <button v-else @click="modal = true">
                Отправить уведомление о прибытии гостя
            </button>
        </div>
        <div class="banner_r">
            <img src="../../assets/all/hotpng.png" alt="hotpng">
        </div>

        <v-dialog
            v-model="modal"
            max-width="500"
        >
            <v-card>
                <div class="type__baner">
                    <h2>
                        Требуеться авторизация или регистрация
                    </h2>
                    
                    <div class="type__baner__block">
                        <img src="../../assets/all/auth_reg.svg" alt="images">
                        <p>
                            Вам на почту отправлено письмо с вашим паролем для авторизации в системе.
                        </p>
                        <router-link to="/login">
                            <button>
                                АВТОРИЗОВАТЬСЯ
                            </button>
                        </router-link>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            modal: false
        }
    },
    methods: {
        route () {
            this.$router.push('/notif')
        },
    },
    computed: {
        ...mapGetters(['GET_TOKEN']),
    }
}
</script>

<style scoped lang="less">
.type__baner {
    width: 100%;
    background: #fff;
    text-align: center;
    padding: 50px 70px;

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        letter-spacing: -0.05em;
        color: #000000;
    }
    
    .type__baner__block {
        margin-top: 30px;
        img {
            width: 350px;
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
        }
        p {
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            letter-spacing: -0.05em;
            color: #000000;
            margin: 0;
            margin-bottom: 20px;
            margin-top: 15px;
        }
    }
}
.banner {
    width: 100%;
    background: #FDE88D;
    margin-top: 63px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 5px;
    font-family: 'MontserratBold';

    .banner_l {
        width: 17%;
        display: flex;
        justify-content: center;
        align-items: center;

        .banner_user {
            border-radius: 50%;
            width: 112px;
            height: 112px;
            img {
                position: relative;
                top: -50px;
            }
        }
    }
    .banner_c {
        width: 65%;
        h1 {
            font-weight: bold;
            font-size: 23px;
            text-transform: uppercase;
            margin-top: 22px;
            font-style: normal;
            line-height: 32px;
        }
        button {
            padding: 15px 50px;
            background: #FFCC47;
            border-radius: 25px;
            font-weight: bold;
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
            outline: none;
            font-style: normal;
            line-height: 25px;
            letter-spacing: -0.05em;
            color: #000000;

            &:hover {
                opacity: .7;
            }
        }
    }
    .banner_r {
        width: 17%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
}

</style>