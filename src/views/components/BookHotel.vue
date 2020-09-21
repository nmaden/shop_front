<template>
    <div class="book__hotel">
        <p>
            Забронировать отель / гостиницу
        </p>

        <div class="book__hotel__filter">
            <div class="book__hotel__filter__margin">
                <h4>
                    Найдите спецпредложения от отелей, 
                    домов и других вариантов
                </h4>
                <div class="filter__book__hotel">
                    <v-menu
                        v-model="where_to_go"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <div 
                                class="filter__book__hotel__block filter__book__hotel__block__border"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <img class="base__filter__img" src="../../assets/icons/travel_filter.png" alt="travel_filter">
                                <p>
                                    {{region_label}}
                                </p>
                                <img class="base__img__down" src="../../assets/icons/down.png" alt="down">
                            </div>
                        </template>
                        <div class="cities__list">
                            <div 
                                class="list__view"
                                v-for="item in region"
                                :key="item.value"
                                @click="setRegion(item.value, item.label)"
                            >
                                <span class="mdi mdi-map-marker"></span>
                                <p>
                                    {{item.label}}
                                </p>
                            </div>
                        </div>
                    </v-menu>
                    
                    <v-menu
                        v-model="date_arrival__view"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                    >
                      <template v-slot:activator="{ on, attrs }">
                            <div 
                                class="filter__book__hotel__block"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <p>
                                    {{arrival | moment("DD.MM.YYYY")}}
                                </p>
                                <p>
                                    -
                                </p>
                                <p>
                                    {{departure | moment("DD.MM.YYYY")}}
                                </p>
                                <img class="base__filter__img" src="../../assets/icons/data_picker_filter.png" alt="data_picker_filter">
                            </div>
                        </template>
                        <div class="data__picker__filter">
                            <v-date-picker 
                                v-model="date_arrival" 
                                no-title 
                                @change="changeDateArrival"
                                locale="ru-in"
                                :full-width="true"
                                range
                            >
                            </v-date-picker>
                        </div>
                    </v-menu>

                    <v-menu
                        v-model="count__view"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                    >
                       <template v-slot:activator="{ on, attrs }">
                            <div 
                                class="filter__book__hotel__block"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <img class="base__filter__img" src="../../assets/icons/person_filter.png" alt="person_filter">
                                <p>
                                    {{adults}} - взрослых 
                                </p>
                                <p>
                                    {{numbers}} - номер
                                </p>    
                            </div>
                        </template>
                        <div class="counter__type">
                            <div class="counter__type__flex">
                                <div class="counter__type__flex__block_l">
                                    <p>
                                        Взрослых
                                    </p>
                                </div>
                                <div class="counter__type__flex__block_r">
                                    <div @click="numbersAdults('munus')" class="minus__plus__counter">
                                        -
                                    </div>
                                    <div class="result__counter__text">
                                        {{adults}}
                                    </div>
                                    <div @click="numbersAdults('plus')" class="minus__plus__counter">
                                        +
                                    </div>
                                </div>
                            </div>
                            <div class="counter__type__flex">
                                <div class="counter__type__flex__block_l">
                                    <p>
                                        Номера
                                    </p>
                                </div>
                                <div class="counter__type__flex__block_r">
                                    <div @click="numbersCalc('munus')" class="minus__plus__counter">
                                        -
                                    </div>
                                    <div class="result__counter__text">
                                        {{numbers}}
                                    </div>
                                    <div @click="numbersCalc('plus')" class="minus__plus__counter">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    </v-menu>
                    <a href="https://kazakhstan.travel/hotels" target="_blank">
                        Проверить цены
                    </a>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        date_arrival__view: false,
        count__view: false,
        where_to_go: false,
        date_arrival: null,
        

        arrival: 'Заезд',
        departure: 'Отъезд',
        adults: 1,
        numbers: 1,
        region: [],
        region_id: null,
        region_label: 'Куда вы хотите поехать? ',
      }
    },
    mounted() {
        this.getLocality()
    },
    methods: {
        changeDateArrival () {
            this.date_arrival__view = false
            this.arrival = this.date_arrival[0]
            this.departure = this.date_arrival[1]
        },
        numbersAdults(type) {
            if (type == 'plus') {
                this.adults++
            } else {
                if (this.adults == 0) {
                    this.adults = 0
                } else {
                    this.adults--
                }
            }
        },
        numbersCalc(type) {
            if (type == 'plus') {
                this.numbers++
            } else {
                if (this.numbers == 0) {
                    this.numbers = 0
                } else {
                    this.numbers--
                }
            }
        },
        getLocality () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + this.$API_VERSION + 'guest/region',
            })
            .then((response) => {
                 this.region = response.data
            })  
            .catch((error) => {
                console.log(error);
            });
        },
        setRegion(id, label) {
            this.region_id = id
            this.region_label = label
            this.where_to_go = false
        }
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;

.cities__list {
    width: 100%;
    height: 170px;
    background: #fff;
    overflow-y: scroll;
    .list__view {
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        padding-left: 10px;
        span {
            color: #ffce03;
            font-size: 24px;
        }
        p {
            margin: 0;
            font-size: 14px;
            margin-left: 10px;
        }
    }
}
.data__picker__filter {
    width: 312px;
    @media (max-width: @mobile) {
        width: 100%;
    }
}
.counter__type {
    width: 100%;
    background: #fff;
    overflow: hidden;
    .counter__type__flex {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
        @media (max-width: @mobile) {
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .counter__type__flex__block_l {
            width: 50%;
            p {
                margin: 0;
                margin-left: 10px;
                @media (max-width: @mobile) {
                    font-size: 12px;
                }
            }
        }
        .counter__type__flex__block_r {
            width: 50%;
            display: flex;
            justify-content: flex-end;
            margin-right: 10px;
            .result__counter__text {
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: bold;
                @media (max-width: @mobile) {
                    font-size: 12px;
                    width: 30px;
                    height: 30px;
                }
            }
            .minus__plus__counter {
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #FFCE03;
                color: #000;
                font-weight: bold;
                cursor: pointer;
                user-select: none;
                font-size: 26px;
                @media (max-width: @mobile) {
                    font-size: 12px;
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
}
.book__hotel {
    width: 100%;
    margin-top: 40px;
    @media (max-width: @mobile) {
        margin-top: 0px;
    }
    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 30px;
        font-family: 'MontserratBold';
        @media (max-width: @mobile) {
            font-size: 17px;
            margin-top: 10px;
            line-height: 18px;
        }
    }

    .book__hotel__filter {
        width: 100%;
        border-radius: 5px;
        background: url('../../assets/all/bg_filter.png') no-repeat;
        background-size: cover;
        overflow: hidden;

        .book__hotel__filter__margin {
            width: 95%;
            margin: 40px auto;
            @media (max-width: @mobile) {
                margin: 20px auto;
            }
            h4 {
                font-size: 24px;
                color: #fff;
                line-height: 29px;
                text-transform: uppercase;
                font-family: 'MontserratBold';
                @media (max-width: @mobile) {
                    font-size: 14px;
                    line-height: 15px;
                    margin-top: 10px;
                    text-transform: none;
                }
            }
            .filter__book__hotel {
                width: 100%;
                display: flex;
                justify-content: space-between;
                border: 2px solid #FFCE03;
                background: #FFCE03;
                margin-top: 20px;
                border-radius: 10px;
                @media (max-width: @mobile) {
                    flex-wrap: wrap;
                }
                
                .filter__book__hotel__block__border {
                    border-radius: 10px 0px 0px 10px;
                    @media (max-width: @mobile) {
                        border-radius: 10px 10px 0px 0px;
                    }
                }

                .filter__book__hotel__block {
                    background: #fff;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 15px 12px;
                    width: 311px;
                    cursor: pointer;
                    @media (max-width: @mobile) {
                        width: 100%;
                        margin-bottom: 2px;
                    }

                    .base__filter__img {
                        width: 20px;
                        height: 20px;
                    }
                    .base__img__down {
                        width: 10px;
                        height: 6px;
                    }
                    p {
                        margin: 0;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        font-family: 'MediumMedium';
                        user-select: none;
                        @media (max-width: @mobile) {
                            font-size: 13px;
                        }
                    }
                }
                a {
                    display: block;
                    width: 194px;
                    padding: 15px 25px;
                    border-radius: 0px 10px 10px 0px;
                    font-weight: 800;
                    font-size: 16px;
                    text-transform: uppercase;
                    color: #000000;
                    text-decoration: none;
                    &:hover {
                        opacity: .7;
                    }
                    @media (max-width: @mobile) {
                        width: 100%;
                        text-align: center;
                        border-radius: 0px 0px 10px 10px;
                        font-size: 14px;
                        padding: 10px 25px;
                    }
                }
            }
        }
    }
}

</style>