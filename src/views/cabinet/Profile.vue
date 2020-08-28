<template>
    <div class="profile">
        <Header />
        <div class="main__base__margin">
            <h1>
                {{this.user.name}} {{this.user.surname}}
            </h1>
        </div>
        <div class="profile__data">
            <div class="profile__data__margin">
                <div class="profile__data__flex">
                    <div class="profile__data__text"> 
                        <p>
                            ИИН:
                        </p>
                        <h4 v-if="this.user.iin !== null">
                            {{this.user.iin}}
                        </h4>
                        <h4 v-else>
                            не добавлен
                        </h4>
                    </div>
                    <div class="profile__data__text"> 
                        <p>
                            Почта:
                        </p>
                        <h4>
                            {{this.user.email}}
                        </h4>
                    </div>
                </div>
                <div class="profile__data__flex">
                    <div class="profile__data__text"> 
                        <p>
                            Адрес:
                        </p>
                        <h4>
                            {{region}}, {{area}}, {{locality}}, {{street}} {{house}}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="main__base__margin">
            <button>РЕДАКТИРОВАТЬ</button>
            <ListGuest />
        </div>
    </div>
</template>

<script>
import ListGuest from './components/ListGuest'
import Header from '../components/Header'
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        ListGuest,
        Header,
    },
    data () {
        return {
            user: [],
            region: null,
            area: null,
            locality: null,
            street: null,
            house: null,
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        ...mapActions([
            'USER_DATA',
        ]),
        getUser () {
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'user/me',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
                data: {}
            })
            .then((response) => {
                this.USER_DATA(response.data.name)
                this.user = response.data
                this.street = response.data.responsible[0].street
                this.house = response.data.responsible[0].house
                this.getRegion()
                this.getDistrict()
                this.getLocality()
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
                    id: this.user.responsible[0].region_id
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
                    id: this.user.responsible[0].area_id
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
                    id: this.user.responsible[0].locality_id
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
        ...mapGetters(['GET_TOKEN']),
    }
}
</script>

<style scoped lang="less">

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

        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
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
            &:hover {
                opacity: 0.7;
            }
        }
    }
    .profile__data {
        width: 100%;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        background: #FFF5CB;

        .profile__data__margin {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

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
                    }
                }
            }
        }
    }
    
}


</style>