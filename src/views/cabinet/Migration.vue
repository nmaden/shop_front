<template>
    <div class="migrations">
        <Header />
        <div class="main__base__margin">
            <h1>
                Миграционный справочник
            </h1>
            <p>
                Миграционный справочник - это справочник с данными о необходимости визы для прибывания в Республики Казахстан. Также информация о безвизовом нахождений туриста.
            </p>
            <p>
                Для получения элекронной визы необходимо обратиться в визово-миграционный портал <a href="https://www.vmp.gov.kz">www.vmp.gov.kz</a>
            </p>
        </div>
        <div class="migrations__data">
             <h4>
                 Выберите страну
             </h4>
             <div class="migrations__select">
                <img src="../../assets/icons/search.svg" alt="search">
                <img class="flag" v-show="country_id !== null" :src="country_flag" alt="search">
                <v-autocomplete
                    v-model.trim="country_id"
                    :items="countries"
                    item-text="label"
                    solo 
                    :flat="true"
                    :hide-details="true"
                    no-data-text="Нечего не найдено"
                    background-color="transparent"
                    :single-line="true"
                    height="68"
                    @change="getCountry"
                ></v-autocomplete>
             </div>
             <p>
                 Турист может прибывать в Республике Казахстан без визы в течении 30 дней, если свыше указанного срока необходимо оформление визы.
             </p>
             <div class="migrations__flex">
                 <div class="migrations__flex__block">
                    <div class="migrations__flex__block__header">
                        <p>
                            Безвизовый въезд
                        </p>
                    </div>
                    <div class="migrations__flex__block__content">
                        <p>
                            <b>
                                {{allowed_days_without_registration}}
                            </b>
                            дней
                        </p>
                    </div>
                 </div>
                 <div class="migrations__flex__block">
                    <div class="migrations__flex__block__header">
                        <p>
                            Электронная виза (eVisa)
                        </p>
                    </div>
                    <div class="migrations__flex__block__content">
                        <p>
                            <b>
                                {{visa_required}}
                            </b>
                        </p>
                    </div>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    components: {
        Header,
    },
    data () {
      return {
        country: [],
        countries: [],
        country_id: null,
        allowed_days_without_registration: 30,
        visa_required: 'Нет',
        country_flag: null
      }
    },
    mounted() {
        this.getMigrations()
    },
    methods: {
        getCountry() {
            if (typeof this.country_id !== 'undefined') {
                let res = this.country.filter((item) => item.id == this.country_id)
                this.country_flag = res[0].flag
                if (res[0].visa_required == 1) {
                    this.visa_required = 'Да'
                } else {
                    this.visa_required = 'Нет'
                }
                this.allowed_days_without_registration = res[0].allowed_days_without_registration
            } else {
                this.country_id = null
            }
        },
        getMigrations () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + 'v2/countries',
            })
            .then((response) => {
                this.country = response.data.migration_guide
                let obj;
                let arr = []
                for (let index = 0; index < response.data.migration_guide.length; index++) {
                    obj = {
                        label: response.data.migration_guide[index].name_rus,
                        value: response.data.migration_guide[index].id
                    }
                    arr.push(obj)
                }
                this.countries = arr
            })  
            .catch((error) => {
                console.log(error);
            });
        },
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;

.migrations {
    width: 100%;
    height: 100%;
    font-family: "MontserratBold";

    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        margin-top: 65px;
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
        p {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            font-family: "MediumExtraLight";
            margin: 0;
            margin-top: 10px;
            width: 859px;
            margin-bottom: 20px;
            @media (max-width: @mobile) {
                font-size: 12px;
                line-height: 16px;
                margin: 0;
                margin-top: 10px;
                margin-bottom: 10px;
                width: auto;
            }
            a {
                text-decoration: none;
                font-family: "MontserratBold";
                font-weight: bold;
            }
        }
    }
    .migrations__data {
        width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        h4 {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            letter-spacing: -0.05em;
            color: #000000;
            @media (max-width: @mobile) {
                font-size: 18px;
            }
        }
        .migrations__select {
            margin-top: 15px;
            width: 948px;
            height: 70px;
            background: #F7F7F7;
            border-radius: 10px;
            display: flex;
            justify-content: space-around;
            padding-left: 15px;
            padding-right: 10px;
            align-items: center;
            margin-bottom: 38px;
            @media (max-width: @mobile) {
                width: 100%;
                margin-top: 5px;
                height: 45px;
                padding-left: 10px;
                padding-right: 3px;
                margin-bottom: 12px;
            }
            .flag {
                width: 35px;
                margin-left: 20px;
            }
        }
        p {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            font-family: "MediumExtraLight";
            line-height: 25px;
            letter-spacing: -0.05em;
            width: 726px;
            color: #000000;
            @media (max-width: @mobile) {
                font-size: 12px;
                line-height: 16px;
                margin: 0;
                margin-top: 10px;
                margin-bottom: 10px;
                width: auto;
            }
        }
        .migrations__flex {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            @media (max-width: @mobile) {
                flex-wrap: wrap;
            }

            .migrations__flex__block {
                width: 211px;
                background: #F8F8F8;
                border-radius: 5px;
                margin-right: 35px;
                padding: 10px 15px;
                @media (max-width: @mobile) {
                    width: 100%;
                    margin-right: 0;
                    margin-bottom: 10px;
                }
                .migrations__flex__block__header {
                    width: 100%;
                    p {
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                        margin: 0;
                        letter-spacing: -0.05em;
                        color: #000000;
                    }
                }
                .migrations__flex__block__content {
                    width: 100%;
                    margin-top: 10px;
                    p {
                        font-style: normal;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 20px;
                        margin: 0;
                        letter-spacing: -0.05em;
                        color: #000000;
                        b {
                            font-style: normal;
                            font-weight: bold;
                            font-size: 36px;
                            font-family: "MontserratBold";
                        }
                    }
                }
            }
        }
    }
}


</style>