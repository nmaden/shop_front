<template>
    <div>
        <div class="main__base__margin">
            <h2 
                v-if="users.length !== 0"
            >
                {{$t('list__guest__title')}}
            </h2>

            <div 
                class="list__guest__filters"
                v-if="users.length !== 0"
            >
                <p class="active__filter__text">Все</p>
                <p class="not__active__filter__text">Проживающие</p>
                <p class="not__active__filter__text">Выбывшие</p>
                <p class="not__active__filter__text">Удаленные</p>
            </div>

            <h2 
                v-if="users.length == 0"
            >
                У вас нет списка гостей
            </h2>
            
            <div 
                v-else
                class="quest__list__margin"
            >

                <div 
                    class="quest__list"
                    v-for="item in users"
                    :key="item.id"
                >
                    <div class="quest__list__l">
                        <div class="quest__list__l__header">
                            <h4>
                                {{item.clients.name}} {{item.clients.surname}}  
                            </h4> 
                            <v-tooltip 
                                bottom
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <img 
                                        v-bind="attrs"
                                        v-on="on"
                                        :src="item.clients.citizenship.flag" 
                                        alt="country"
                                    >
                                </template>
                                <span>{{item.clients.citizenship.name_rus}}</span>
                            </v-tooltip>
                        </div>
                        <p>
                            <span>
                                {{item.hotel.region.name_rus}},
                                {{item.hotel.area.name_rus}},
                                {{item.hotel.locality.name_rus}}
                                кв
                                {{item.hotel.apartment_number}}
                            </span>
                        </p>
                        <p>
                            <b>
                                {{item.start_check_date}} - {{item.end_check_date}}
                            </b>
                        </p>
                    </div>
                    <div class="quest__list__r">
                        <div class="pfd__block">
                            <v-tooltip 
                                bottom
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <p
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        Скачать справку (pdf)
                                    </p>
                                </template>
                                <span>Скачать справку</span>
                            </v-tooltip>
                        </div>
                        <p>
                            <b v-if="item.statuses_id == 1">
                                заезд
                            </b>
                            <b v-else-if="item.statuses_id == 2">
                                проживание
                            </b>
                            <b v-else>
                                выезд
                            </b>
                        </p>
                        <button>
                            Удалить <span class="mdi mdi-delete"></span>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
        

        <v-dialog
            v-model="deleteDialog"
            max-width="320"
        >
            <v-card>
                <v-card-title class="headline">
                    <h3 class="delete__dialog__title">
                        Вы действительно хотите удалить лист прибытия?
                    </h3>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        style="background: rgb(255 206 3); font-family: 'MontserratBold'"
                        color="#000"
                    >
                        Да
                    </v-btn>

                    <v-btn
                        color="#000"
                        @click="deleteDialog = false"
                        style="background: rgb(255 206 3); font-family: 'MontserratBold'"
                    >
                        Нет
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            users: [],
            deleteDialog: false,
        }
    },
    mounted () {
        this.getUsers()
    },
    methods: {
        deleteGetId () {
            this.deleteDialog = true
        },
        getUsers () {
            this.$axios({ 
                method: 'get',
                url: this.$API_URL + this.$API_VERSION_2 + 'clients',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                console.log(response.data)
                response.data.data == undefined ? this.users = [] : this.users = response.data.data
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
@mobile: 900px;
.delete__dialog__title {
    font-family: "MontserratBold";
    font-size: 17px;
    line-height: 21px;
}
.main__base__margin {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
    @media (max-width: @mobile) {
        width: 100%;
        margin-top: 20px;
    }
    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #000;
        @media (max-width: @mobile) {
            font-size: 15px;
        }
    }
    
    .list__guest__filters {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-top: 10px;
        
        .not__active__filter__text {
            color: #C0C0C0;
        }
        .active__filter__text {
            color: #000;
        }
        p {
            font-family: "MediumMedium";
            font-weight: normal;
            font-size: 15px;
            letter-spacing: -0.05em;
            margin: 0;
            margin-right: 10px;
            cursor: pointer;
            &:hover {
                opacity: .7;
            }
        }
    }

    .quest__list__margin {
        margin-top: 20px;
        margin-bottom: 20px;
        @media (max-width: @mobile) {
            margin-bottom: 10px;
            margin-top: 10px;
        }
         .quest__list {
            width: 560px;
            background: #F8F8F8;
            border-radius: 5px;
            padding: 15px;
            display: flex;
            margin-bottom: 15px;
            justify-content: space-between;
            @media (max-width: @mobile) {
                width: 100%;
                padding: 7px;
            }
            .quest__list__l {
                width: 70%;
                @media (max-width: @mobile) {
                    width: 60%;
                }
                .quest__list__l__header {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    h4 {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 15px;
                        margin-right: 15px;
                        @media (max-width: @mobile) {
                            font-size: 13px;
                            margin-right: 5px;
                        }
                    }
                    img {
                        width: 25px;
                        height: 16px;
                    }
                }
                p {
                    margin: 0;
                    margin-top: 5px;
                    span {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 12px;
                        color: #a7a7a7;
                        @media (max-width: @mobile) {
                            font-size: 10px;
                        }
                    }
                    b {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 13px;
                        color: #000000;
                        @media (max-width: @mobile) {
                            font-size: 10px;
                        }
                    }
                }
            }
            .quest__list__r {
                width: 27%;
                text-align: right;
                .pfd__block {
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-start;
                    p {
                        font-size: 12px;
                        font-family: "MediumMedium";
                        color: #000;
                        cursor: pointer;
                        font-weight: 400;
                        &:hover {
                            opacity: .5;
                        }
                    }
                }
                @media (max-width: @mobile) {
                    width: 35%;
                }
                button {
                    font-size: 12px;
                    color: #C0C0C0;
                    font-family: "MediumMedium";
                    span {
                        font-size: 14px;
                    }
                    &:hover {
                        opacity: .5;
                    }
                }
                img {
                    cursor: pointer;
                }
                p {
                    margin: 0;
                    font-family: "MediumMedium";
                    span {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 12px;
                        color: #C0C0C0;
                        @media (max-width: @mobile) {
                            font-size: 10px;
                        }
                    }
                    b {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 12px;
                        color: #FF9100;
                        @media (max-width: @mobile) {
                            font-size: 10px;
                        }
                    }
                }
            }
        }
    }
   
}
</style>