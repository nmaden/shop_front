<template>
    <div class="eds">
        <div class="eds__form">
            <button @click="handleSend" class="eds__button">Выбрать сертификат</button>
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
            esp__array: null
        }
    },
     
    methods: {
        ...mapActions([
            'SIGN_IN_USER',
        ]),
        handleSend () {
            if (this.ready == false) {
                this.$toast.open({
                    message: 'Убедитесь, что программа NCALayer запущена',
                    type: 'error',
                    position: 'bottom',
                    duration: 2500,
                    queue: true
                });
            } else {
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
                    document.cookie = "token="+ response.data.access_token + "; domain=.eqonaq.kz; max-age=30"
                    window.location.href = 'https://cabinet.eqonaq.kz'
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
                        duration: 1500,
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
.eds {
    width: 100%;
    .eds__form {
        width: 100%;
        .eds__button {
            width: 100%;
            margin-bottom: 20px;
        }
        button {
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