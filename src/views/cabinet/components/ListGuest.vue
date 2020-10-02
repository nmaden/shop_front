<template>
    <div>
        <div class="main__base__margin">
            <h2 
                v-if="users.length !== 0"
            >
                Список моих гостей
            </h2>

            <h2 
                v-if="users.length == 0"
            >
                У вас нет списока гостей
            </h2>
            
            <div 
                v-if="users.length !== 0"
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
                            <img :src="item.clients.citizenship.flag" alt="country">
                        </div>
                        <p v-if="item.start_check_date !== null">
                            <span>
                                {{item.start_check_date}}
                            </span>
                        </p>
                        <p v-if="item.check_in !== null">
                            <b>
                                {{item.check_in}} - {{item.check_out}}
                            </b>
                        </p>
                    </div>
                    <div class="quest__list__r">
                        <!-- <img src="../../../assets/icons/edit.png" alt="edit"> -->
                        <p>
                            <span>
                                статус
                            </span>
                        </p>
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
                    </div>
                </div>
                
            </div>
        </div>
         
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            users: []
        }
    },
    mounted () {
        this.getUsers()
    },
    methods: {
        getUsers () {
            this.$axios({ 
                method: 'get',
                url: this.$API_URL + this.$API_VERSION_2 + 'clients',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
            })
            .then((response) => {
                console.log(response)
                 this.users = response.data.data
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
                    }
                }
                p {
                    margin: 0;
                    margin-top: 5px;
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
                @media (max-width: @mobile) {
                    width: 35%;
                }
                
                img {
                    cursor: pointer;
                }
                p {
                    margin: 0;
                    
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