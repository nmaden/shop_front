<template>
    <v-dialog
        v-model="modal"
        max-width="760"
    >
        <v-card>
            <div class="change__address">
                 <h3 v-if="addAddressModal == true">
                    Добавить адрес
                 </h3>
                 <h3 v-else>
                    Редактировать адрес
                 </h3>
                 <div class="registrations__form">
                    <div class="input__block">
                        <label for="region">
                            Область <span>*</span>
                        </label>
                        <select 
                            v-model.trim="region" 
                            id="region"
                            @change="getDistrict"
                        >
                            <option value="" disabled>Область</option>
                            <option 
                                v-for="item_region in region__array"
                                :key="item_region.value"
                                :value="item_region.value"
                            >
                                {{item_region.label}}
                            </option>
                        </select>
                        <div class="error__text" v-if="$v.region.$dirty && !$v.region.required">Поле 'Область' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="district">
                            Район <span>*</span>
                        </label>
                        <select 
                            v-model.trim="district" 
                            id="district"
                            @change="getLocality"
                        >
                            <option value="" disabled>Район</option>
                            <option 
                                v-for="item_district in district__array"
                                :key="item_district.value"
                                :value="item_district.value"
                            >
                                {{item_district.label}}
                            </option>
                        </select>
                        <div class="error__text" v-if="$v.district.$dirty && !$v.district.required">Поле 'Район' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="locality">
                            Населенный пункт 
                        </label>
                        <select v-model.trim="locality" id="locality">
                            <option value="" disabled>Населенный пункт</option>
                            <option 
                                v-for="item_locality in locality__array"
                                :key="item_locality.value"
                                :value="item_locality.value"
                            >
                                {{item_locality.label}}
                            </option>
                        </select>
                    </div>
                    
                    <div class="input__block">
                        <label for="address">
                            Адрес <span>*</span>
                        </label>
                        <input type="text" v-model.trim="address" id="address">
                        <div class="error__text" v-if="$v.address.$dirty && !$v.address.required">Поле 'Адрес' обязателен к заполнению</div>
                    </div>

                    <div class="input__block">
                        <label for="house_number">
                            Номер дома <span>*</span>
                        </label>
                        <input type="text" v-model.trim="house_number" id="house_number">    
                        <div class="error__text" v-if="$v.house_number.$dirty && !$v.house_number.required">Поле 'Номер дома' обязателен к заполнению</div>
                        <div class="error__text" v-if="!$v.house_number.numeric">Введите корректный Номер дома</div>
                    </div>

                    <div class="input__block">
                        <label for="apartment_number">
                            Номер квартиры
                        </label>
                        <input type="text"  v-model.trim="apartment_number"  id="apartment_number">
                    </div>
                    <div v-if="addAddressModal == true" class="input__block">
                        <button @click="addAddress">Добавить</button>
                    </div>
                    <div v-else class="input__block">
                        <button @click="editAddress">Редактировать</button>
                    </div>
                </div>   
            </div>
        </v-card>
    </v-dialog>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import { helpers } from 'vuelidate/lib/validators'
const alpha = helpers.regex('numeric', /^[0-9,/,a-zA-Z]*$/)

export default {
    validations: {
        region: {
            required, 
        },
        district: {
            required, 
        },
        address: {
            required, 
        },
        house_number: {
            required,
            numeric: alpha
        },
    },
    data () {
        return {
            modal: false,

            region: null,
            district: null,
            address: null,
            house_number: null,
            apartment_number: null,
            locality: null,
            id: null,

            region__array: [],
            district__array: [],
            locality__array: [],
            addAddressModal: null
        }
    },
    mounted () {
        this.getLocal()
    },
    methods: {
        getLocal () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION + 'kato/region',
            })
            .then((response) => {
                this.region__array = response.data
            }); 
        },
        getDistrict () {
            this.$axios({
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'kato/area',
                data: {
                    parent_id: this.region
                }
            })
            .then((response) => {
                this.district__array = response.data
            })  
            .catch((error) => {
                console.log(error);
            });
        },
        getLocality () {
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + this.$API_VERSION + 'kato/areas',
                data: {
                    parent_id: this.district
                }
            })
            .then((response) => {
                this.locality__array = response.data
            })  
            .catch((error) => {
                console.log(error);
            });
        },
        addAddress () {
            if (this.$v.$invalid) {
                this.$toast.open({
                    message: 'Заполните необходимые поля',
                    type: 'error',
                    position: 'bottom',
                    duration: 1500,
                    queue: true
                });
                this.$v.$touch()
                return 
            } else {
                this.$Progress.start()
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION_2 + 'placement',
                    headers: {
                        'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                    },
                    data: {
                        region_id: this.region,
                        area_id: this.district,
                        locality_id: this.locality,
                        street: this.address,
                        house: this.house_number
                    }
                })
                .then((response) => {
                    this.$Progress.finish()
                    this.modal = false
                    this.$toast.open({
                        message: response.data.message,
                        type: 'success',
                        position: 'bottom',
                        duration: 1500,
                        queue: true
                    })
                    this.$emit('update__address')
                })  
                .catch((error) => {
                    this.$Progress.fail()
                    this.$toast.open({
                        message: error.response.data.message,
                        type: 'error',
                        position: 'bottom',
                        duration: 1500,
                        queue: true
                    });
                });    
            }
        },
        editAddress () {
            if (this.$v.$invalid) {
                this.$toast.open({
                    message: 'Заполните необходимые поля',
                    type: 'error',
                    position: 'bottom',
                    duration: 1500,
                    queue: true
                });
                this.$v.$touch()
                return 
            } else {
                this.$Progress.start()
                this.$axios({ 
                    method: 'PUT',
                    url: this.$API_URL + this.$API_VERSION_2 + 'placement/' + this.id,
                    headers: {
                        'Authorization': `Bearer ${this.GET_TOKEN[0]}` 
                    },
                    data: {
                        region_id: this.region,
                        area_id: this.district,
                        locality_id: this.locality,
                        street: this.address,
                        house: this.house_number
                    }
                })
                .then((response) => {
                    this.$Progress.finish()
                    this.modal = false
                    this.$toast.open({
                        message: response.data.message,
                        type: 'success',
                        position: 'bottom',
                        duration: 1500,
                        queue: true
                    })
                    this.$emit('update__address')
                })  
                .catch((error) => {
                    this.$Progress.fail()
                    this.$toast.open({
                        message: error.response.data.message,
                        type: 'error',
                        position: 'bottom',
                        duration: 1500,
                        queue: true
                    });
                });    
            }
        }
    },
    created () {
      this.$modal.$on('modal',  (value) => {
          if (value.type == 'address') {
                this.modal = value.view
                this.house_number = null
                this.address = null
                this.addAddressModal = true
          }
          if (value.type == 'edit') {
                this.modal = value.view
                this.addAddressModal = false
                this.house_number = value.edit_data.house
                this.address = value.edit_data.street

                this.region = value.edit_data.region_id
                this.district = value.edit_data.area_id
                this.locality = value.edit_data.locality_id
                this.id = value.edit_data.id

                this.getDistrict()
                this.getLocality()
          }
      })
    },
    computed: {
        ...mapGetters(['GET_TOKEN']),
    }
}
</script>
<style lang="less" scoped>
@mobile: 900px;
 
.change__address {
    width: 100%;
    background: #fff;
    padding: 50px;
    text-align: center;
    @media (max-width: @mobile) {
        padding: 10px;
    }
    h3 {
        margin-bottom: 20px;
        font-size: 30px;
        font-family: "MontserratBold";

        @media (max-width: @mobile) {
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
    .registrations__form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: left;
        
        .input__block {
            width: 314px;
            margin-bottom: 10px;
            @media (max-width: @mobile) {
                width: 100%;
            }
            .error__text {
                color: red;
                font-size: 12px;
                margin-bottom: 10px;
                font-weight: bold;
            }
            span {
                color: red;
            }
            select {
                width: 100%;
                height: 46px;
                padding: 10px;
                background: #fff;
                border-radius: 10px;
                outline: none;
                border: 2px solid #000000;
            } 
            
            button {
                height: 46px;
                width: 100%;
                background: #FDE88D;
                border: 3px solid #FDE88D;
                box-sizing: border-box;
                border-radius: 10px;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                text-transform: uppercase;
                line-height: 25px;
                color: #000;
                outline: none;
                font-family: "MontserratBold";
                margin-top: 5px;
            }
            input {
                width: 100%;
                height: 46px;
                background: #fff;
                border-radius: 10px;
                outline: none;
                border: 2px solid #000000;
                padding: 10px;
            }
            label {
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                font-family: "MediumMedium";
            }
        }
    }
}
</style>