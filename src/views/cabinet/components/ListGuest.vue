<template>
    <div>
        <div class="main__base__margin">
            <h2>
                {{$t('list__guest__title')}}
            </h2>

            <div 
                class="list__guest__filters"
            >
                <p @click="filterList(0)" class="not__active__filter__text active__filter__text">{{$t('all__tab__list__name')}}</p>
                <p @click="filterList(1)" class="not__active__filter__text">{{$t('residents__tab__list__name')}}</p>
                <p @click="filterList(2)" class="not__active__filter__text">{{$t('retired__tab__list__name')}}</p>
                <p @click="filterList(3)" class="not__active__filter__text">{{$t('deleted__tab__list__name')}}</p>
            </div>

            <h5 
                v-if="users.length == 0"
                class="not__data"
            >
                {{$t('not__list__guest')}}
            </h5>
            
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
                                {{
                                    item.hotel.locality !== null ? item.hotel.locality.name_rus : null
                                }}
                                {{item.hotel.apartment_number !== null ? 'кв - ' + item.hotel.apartment_number : null}}
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
                                        <a 
                                            download 
                                            target="_blank" 
                                            @click="dowloadPdf(item.id)">
                                            {{$t('dowload__pdf__list')}}
                                        </a>
                                    </p>
                                </template>
                                <span>{{$t('dowload__pdf__list')}}</span>
                            </v-tooltip>
                        </div>
                        <p>
                            <b v-if="item.statuses_id == 3">
                                {{$t('left__list')}}  
                            </b>
                            <b v-else-if="item.statuses_id == 2">
                                {{$t('residents__list')}} 
                            </b>
                            <b v-else-if="item.statuses_id == 4">
                                {{$t('removed__list')}} 
                            </b>
                        </p>
                        <button v-if="item.statuses_id !== 4" @click="removeListId(item.id)">
                            {{$t('remove__list')}}  <span class="mdi mdi-delete"></span>
                        </button>
                        <button v-if="item.statuses_id == 4" @click="activateListId(item.id)">
                            {{$t('recovery__list')}}
                        </button>
                    </div>
                </div>
            </div>
            <v-pagination
                v-model="page"
                v-if="total_page > 5"
                color="#ffdf56"
                :length="last__page"
                @input="getUsers('clients', 0)"
                class="paginations"
            ></v-pagination>
        </div>
        
        

        <v-dialog
            v-model="deleteDialog"
            max-width="420"
        >
            <v-card>
                <v-card-title class="headline">
                    <h3 class="delete__dialog__title">
                        Вы действительно хотите <br>
                        удалить лист прибытия?
                    </h3>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        style="background: rgb(255 206 3); font-family: 'MontserratBold'"
                        color="#000"
                        @click="removeList"
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
        <v-dialog
            v-model="activateDialog"
            max-width="420"
        >
            <v-card>
                <v-card-title class="headline">
                    <h3 class="delete__dialog__title">
                        Вы действительно хотите <br>
                        восcтановить лист прибытия?
                    </h3>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        style="background: rgb(255 206 3); font-family: 'MontserratBold'"
                        color="#000"
                        @click="activeList"
                    >
                        Да
                    </v-btn>

                    <v-btn
                        color="#000"
                        @click="activateDialog = false"
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
            activateDialog: false,
            list__id: null,
            page: 1,
            last__page: null,
            total_page: null
        }
    },
    mounted () {
        this.getUsers('clients', 0)
    },
    methods: {
        removeListId (id) {
            this.deleteDialog = true
            this.list__id = id
        },
        activateListId (id) {
            this.activateDialog = true
            this.list__id = id
        },
        dowloadPdf (id) {
            let origin = window.location.origin
            let origin__array = origin.replaceAll(/[./:]/g, ' ')
            let path = origin__array.split(' ').filter(item => item !== '')[2]
            let url = path === 'eqonaq' ? 'https://api.eqonaq.kz/client_reference/' : 'https://api.'+path+'.eqonaq.kz/client_reference/'
            location.href = url + id
        },
        activeList () {
            this.$axios({ 
                method: 'put',
                url: this.$API_URL + this.$API_VERSION_2 + 'client/activate',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
                data: {
                    id: this.list__id
                }
            })
            .then((response) => {
                this.$toast.open({
                    message: response.data.success,
                    type: 'success',
                    position: 'bottom',
                    duration: 5000,
                    queue: true
                })
                this.activateDialog = false
                this.getUsers('clients', 0)
            })  
            .catch((error) => {
                console.log(error);
            }); 
        },
        removeList () {
            this.$axios({ 
                method: 'delete',
                url: this.$API_URL + this.$API_VERSION_2 + 'client/delete',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
                data: {
                    id: this.list__id
                }
            })
            .then((response) => {
                this.$toast.open({
                    message: response.data.success,
                    type: 'success',
                    position: 'bottom',
                    duration: 5000,
                    queue: true
                })
                this.deleteDialog = false
                this.getUsers('client/deleted', 3)
            })  
            .catch((error) => {
                console.log(error);
            }); 
        }, 
        getUsers (type, index) {
            this.$axios({ 
                method: 'get',
                url: this.$API_URL + this.$API_VERSION_2 + type,
                params: {
                    per_page: 5,
                    page: this.page
                },
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                this.total_page = response.data.total
                this.last__page = response.data.last_page
                this.addActiveClass(index)
                this.users = response.data.data
            })  
            .catch((error) => {
                console.log(error);
            }); 
        },
        addActiveClass (index) {
            let not_active = document.querySelectorAll('.not__active__filter__text')
            for (let i = 0; i < not_active.length; i++) {
                not_active[i].classList.remove("active__filter__text")
                not_active[index].classList.add("active__filter__text")
            }
        },
        filterList (index) {
            switch (index) {
                case 0:
                    this.getUsers('clients', index)
                    break;
                case 1:
                    this.getUsers('client/residence', index)
                    break;
                case 2:
                    this.getUsers('client/exit', index)
                    break;
                case 3:
                    this.getUsers('client/deleted', index)
                    break;
            }
        }
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
    .paginations {
        width: 558px;
        margin-bottom: 20px;
        @media (max-width: @mobile) {
            width: 100%;
        }
    }
    @media (max-width: @mobile) {
        width: 100%;
        margin-top: 20px;
    }
    .not__data {
        font-size: 16px;
        margin-top: 16px;
        margin-bottom: 16px;
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
                        a {
                            text-decoration: none;
                            color: #000;
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