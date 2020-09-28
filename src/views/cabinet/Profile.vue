<template>
    <div class="profile">
        <Header />
        <div class="main__base__margin">
            <h1>
                {{GET_USER_DATA.name}} {{GET_USER_DATA.surname}}
            </h1>
        </div>
        <div class="profile__data">
            <div class="profile__data__margin">
                <div class="profile__data__flex">
                    <div class="profile__data__text"> 
                        <p>
                            ИИН:
                        </p>
                        <h4 v-if="GET_USER_DATA.iin !== null">
                            {{GET_USER_DATA.iin}}
                        </h4>
                        <h4 v-else>
                            не добавлен
                        </h4>
                    </div>
                    <div class="profile__data__text"> 
                        <p>
                            Почта:
                        </p>
                        
                        <h4 v-if="GET_USER_DATA.email !== null">
                            {{GET_USER_DATA.email}}
                        </h4>
                        <h4 v-else>
                            не добавлен
                        </h4>
                    </div>
                </div>
                <div class="profile__data__flex">
                    <div class="profile__data__text"> 
                        <p>
                            Адрес:
                        </p>
                        <h4>
                            {{region}} {{area}} {{locality}} 
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="main__base__margin">
            <button @click="router('/notif')">Отправить уведомление о прибытии гостя</button>
            <button @click="modal('password')">Изменить пароль</button>
            <button @click="modal('address')">Добавить адрес</button>
            <ListGuest />
        </div>

        <!-- modals -->
        <ChangePasswordModal />
        <AddAddress />
    </div>
</template>

<script>
import ListGuest from './components/ListGuest'
import Header from '../components/Header'
import ChangePasswordModal from './components/ChangePasswordModal'
import AddAddress from './components/AddAddress'
import { mapGetters } from 'vuex'

export default {
    components: {
        ListGuest,
        Header,
        ChangePasswordModal,
        AddAddress
    },
    data () {
        return {
            user: [],
            region: null,
            area: null,
            locality: null,

            address: [],
        }
    },
    mounted () {
        this.getAddress()
    },
    methods: {
        modal (type) {
            this.$modal.$emit('modal', {
                view: true,
                type
            });
        },
        router (to) {
            this.$router.push(to)
        },
        getAddress () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION_2 + 'placement',
                 headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                this.address = response.data.placement
                if (response.data.placement.region_id !== null) {
                    this.getRegion()
                }
                if (response.data.placement.area_id !== null) {
                    this.getDistrict()
                } 
                if (response.data.placement.locality_id !== null) {
                    this.getLocality()
                }
            })  
            .catch((error) => {
                console.log(error);
            });
        },
        getRegion () {
            this.$axios({
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'kato/user-region',
                data: {
                    id: this.address.region_id
                }
            })
            .then((response) => {
                this.region = response.data.user_region.name_rus
            })  
            .catch((error) => {
                console.log(error);
            });
        },
        getDistrict () {
            this.$axios({
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'kato/user-region',
                data: {
                    id: this.address.area_id
                }
            })
            .then((response) => {
                this.area = response.data.user_region.name_rus
            })  
            .catch((error) => {
                console.log(error);
            });
        },
        getLocality () {
            this.$axios({
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'kato/user-region',
                data: {
                    id: this.address.locality_id
                }
            })
            .then((response) => {
                this.locality = response.data.user_region.name_rus
            })  
            .catch((error) => {
                console.log(error);
            });
        },
    },
    computed: {
        ...mapGetters(['GET_TOKEN', 'GET_USER_DATA']),
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;

.profile {
    width: 100%;
    height: 100%;
    background: url('../../assets/all/hotpng_bg.png') no-repeat;
    background-position: right bottom;
    background-size: 15%;
    font-family: "MontserratBold";
    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        margin-top: 30px;
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 10px;
        }
        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
            @media (max-width: @mobile) {
                font-size: 20px;
            }
        }
        button {
            padding: 15px 50px;
            background: #FDE88D;
            border: 3px solid #FDE88D;
            font-style: normal;
            outline: none;
            font-weight: bold;
            font-size: 16px;
            border-radius: 30px;
            margin-right: 10px;
            &:hover {
                opacity: 0.7;
            }
            @media (max-width: @mobile) {
                padding: 10px 20px;
                color: #000;
                font-size: 14px;
                margin-top: 0px;
                width: 100%;
                margin-bottom: 10px;
            }
        }
    }
    .profile__data {
        width: 100%;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        background: #FFF5CB;
        @media (max-width: @mobile) {
            margin-top: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .profile__data__margin {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            @media (max-width: @mobile) {
                width: 95%;
            }
            .profile__data__flex {
                margin-right: 30px;

                .profile__data__text {
                    margin-bottom: 15px;
                    p {
                        margin: 0;
                        font-style: normal;
                        font-weight: 500;
                        color: #000;
                        font-size: 14px;
                        margin-bottom: 5px;
                    }
                    h4 {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 20px;
                        color: #000;
                        @media (max-width: @mobile) {
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
    
}


</style>