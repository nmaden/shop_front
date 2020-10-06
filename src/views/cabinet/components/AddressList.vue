<template>
    <div class="address">
        <div class="main__base__margin">
            <Nav />
            <h1>
                Мои адреса
            </h1>
        </div>
        <div class="address__list__data">
            <div class="address__list__data__margin">
                <div 
                    class="address__list"
                    v-for="item_address in address"
                    :key="item_address.id"
                >
                    <div class="address__list__title">
                        <p>
                            {{item_address.region.name_rus}}, 
                            {{item_address.area.name_rus}},
                            <span v-if="item_address.locality !== null">{{item_address.locality.name_rus}},</span> 
                            {{item_address.street}} 
                            {{item_address.house}}
                        </p>
                    </div>
                    <div class="address__list__button">
                        <img 
                            src="../../../assets/icons/edit.svg" 
                            alt="edit"
                            @click="modal('edit', edit_data = {
                                street: item_address.street,
                                house: item_address.house,
                                area_id: item_address.area_id,
                                locality_id: item_address.locality_id,
                                region_id: item_address.region_id,
                                id: item_address.id
                            })"
                        >
                        <img 
                            src="../../../assets/icons/delete.svg" 
                            alt="delete"
                            v-if="address.length > 1"
                            @click="deleteGetId(item_address.id)"
                        >
                    </div>
                </div>
            </div>
        </div>

        <v-dialog
            v-model="deleteDialog"
            max-width="290"
        >
            <v-card>
                <v-card-title class="headline">
                    <h3 class="delete__dialog__title">
                        Вы действительно хотите удалить адрес?
                    </h3>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="#000"
                        @click="deleteDialog = false"
                        style="background: rgb(255 206 3); font-family: 'MontserratBold'"
                    >
                        Нет
                    </v-btn>

                    <v-btn
                        style="background: rgb(255 206 3); font-family: 'MontserratBold'"
                        color="#000"
                        @click="deleteAddress"
                    >
                        Да
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <AddAddress @update__address="uodateList" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddAddress from './AddAddress'
import Nav from '../../components/NavHeader'

export default {
    components: {
       AddAddress, Nav
    },
    data () {
        return {
            address: [],
            deleteDialog: false,
            deleteId: null
        }
    },
    mounted () {
        this.getAddress()
    },
    methods: {
        deleteGetId (id) {
            this.deleteId = id
            this.deleteDialog = true
        },
        deleteAddress () {
            this.$axios({
                method: 'delete',
                headers: {
                    'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                },
                url: this.$API_URL + this.$API_VERSION_2 + 'placement/' + this.deleteId,
            })
            .then((response) => {
                this.getAddress()
                this.deleteDialog = false
                this.$toast.open({
                    message: response.data.message,
                    type: 'success',
                    position: 'bottom',
                    duration: 1500,
                    queue: true
                })
            })  
            .catch((error) => {
                this.$toast.open({
                    message: error.response.data.message,
                    type: 'error',
                    position: 'bottom',
                    duration: 1500,
                    queue: true
                });
            });
        },
        modal (type, edit_data) {
            this.$modal.$emit('modal', {
                view: true,
                type,
                edit_data
            })
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
                this.address = response.data.hotels
            })  
            .catch((error) => {
                console.warn(error);
            });
        },
        uodateList () {
            this.getAddress()
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
.address {
    width: 100%;
    height: 100%;
    background: url('../../../assets/all/hotpng_bg.png') no-repeat;
    background-position: right bottom;
    background-size: 15%;
    font-family: "MontserratBold";

    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        margin-top: 40px;
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 10px;
        }
        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
            margin-top: 40px;

            @media (max-width: @mobile) {
                font-size: 20px;
            }
        }
        
    }
    .address__list__data {
        width: 100%;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        @media (max-width: @mobile) {
            margin-top: 0px;
            padding-top: 0;
            padding-bottom: 0;
        }
        .address__list__data__margin {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            @media (max-width: @mobile) {
                width: 95%;
                margin-top: 10px;
                justify-content: center;
            }
            .address__list {
                width: 80%;
                padding: 20px;
                background: #F8F8F8;
                border-radius: 5px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
                @media (max-width: @mobile) {
                    width: 100%;
                    padding: 10px;
                    flex-wrap: wrap;
                }
                .address__list__title {
                    width: 90%;
                    @media (max-width: @mobile) {
                        width: 100%;
                    }
                    p {
                        margin: 0;
                        font-size: 18px;
                        @media (max-width: @mobile) {
                            font-size: 12px;
                        }
                    }
                }
                .address__list__button {
                    width: 10%;
                    display: flex;
                    justify-content: flex-end;
                    @media (max-width: @mobile) {
                        width: 100%;
                        justify-content: flex-end;
                        margin-top: 10px;
                    }
                    img {
                        margin-left: 23px;
                        width: 20px;
                        cursor: pointer;
                        @media (max-width: @mobile) {
                            margin-left: 10px;
                            width: 15px;
                        }
                    }
                }
            }
        }
    }
}


</style>