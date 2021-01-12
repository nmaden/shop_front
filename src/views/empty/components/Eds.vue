<template>
    <div class="eds">
        <div class="eds__form">
            <button @click="handleSend" class="eds__button">{{$t('eds__btn')}}</button>
            <p v-if="showError == true"> 
                
                <i18n path="eds__page__warnings">
                    <a href="https://pki.gov.kz/ncalayer/" target="_blank" place="action">{{$t('eds__link__text')}}</a>
                </i18n>
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data () {
        return {
             // websocked
            connection: null,
            ready: false,
            esp__array: null,
            showError: false
        }
    },
     
    methods: {
        ...mapActions([
            'SIGN_IN_USER',
        ]),
        handleSend () {
            if (this.ready == false) {
                this.showError = true
                this.$toast.open({
                    message: this.$i18n.t('eds__nclaer__disabled'),
                    type: 'error',
                    position: 'bottom',
                    duration: 5000,
                    queue: true
                });
            } else {
                this.showError = false
                const data = {
                    module: 'kz.gov.pki.knca.commonUtils',
                    method: "signXml",
                    args: [
                        "PKCS12",
                        "AUTHENTICATION",
                        "<login><sessionid>caacda70-fd36-45ed-8d94-45a88890f83a</sessionid></login>",
                        "", ""
                    ]
                };
                this.connection.send(JSON.stringify(data));
            }
        },
        sendEsp () {
            this.$Progress.start()
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + this.$API_VERSION_2 + 'login/pki',
                data: {
                    data: this.esp__array,
                }
            })
            .then((response) => {
                this.$Progress.finish()
                if (response.data.is_entity == true) {
                    let origin = window.location.origin
                    let origin__array = origin.replaceAll(/[./:]/g, ' ')
                    let path = origin__array.split(' ').filter(item => item !== '')[1]
                    document.cookie = "token="+ response.data.access_token + "; domain=.eqonaq.kz; max-age=30"
                    let url = path === 'eqonaq' ? 'https://cabinet.eqonaq.kz' : 'https://cabinet.'+path+'.eqonaq.kz'
                    window.location.href = url
                } else {
                    let data__profile = {
                        token: response.data.access_token,
                        type: true,
                    }
                    this.SIGN_IN_USER(data__profile)
                }
            })  
            .catch((error) => {
                this.$Progress.fail()
                if (error.response.status == 400) {
                    this.$toast.open({
                        message: 'Пользователь не существует в системе! Обратитесь администратору!',
                        type: 'error',
                        position: 'bottom',
                        duration: 5000,
                        queue: true
                    });
                }
            });    
        }
    },

    created () {
        this.connection = new WebSocket("wss://127.0.0.1:13579/")
        this.connection.onopen = () => {
            this.ready = true
        }
        this.connection.onmessage = (e) => {
            const arr = JSON.parse(e.data);
            const parse__arr = arr.responseObject
            this.esp__array = parse__arr
            if (typeof this.esp__array !== 'undefined') {
                this.sendEsp()
            }
        };
    },
}
</script>

<style scoped lang="less">
@mobile: 900px;

.eds {
    width: 100%;
    .eds__form {
        width: 100%;
        p {
            color: #636363;
            font-family: "MediumMedium";
            a {
                color: #636363;
                border-bottom: 1px solid #636363;
                text-decoration: none;
                &:hover {
                    opacity: .7;
                }
            }
        }
        .eds__button {
            width: 100%;
            margin-bottom: 12px;
            @media (max-width: @mobile) {
                margin-bottom: 0px;
            }
        }
        button {
            @media (max-width: @mobile) {
                font-size: 14px;
                padding: 10px 20px
            }
            padding: 15px 50px;
            background: #FDE88D;
            border: 3px solid #FDE88D;
            box-sizing: border-box;
            border-radius: 30px;
            font-style: normal;
            font-weight: bold;
            outline: none;
            font-size: 16px;
            text-transform: uppercase;
            &:hover {
                opacity: .7;
            }
        }
    }
}
</style>