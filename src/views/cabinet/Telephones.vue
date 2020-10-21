<template>
    <div class="telephones">
        <Header />
        <div class="main__base__margin">
            <h1>
                Полезные номера телефонов
            </h1>
            <p>
                Вызов экстренных служб с любого оператора сотовой связи и городских номеров производится в Казахстане бесплатно
            </p>
        </div>
        <div class="telephones__data">
            <div class="telephones__data__margin">
                 <div 
                    class="telephones__block"
                    v-for="item in phones"
                    :key="item.number"
                    @click="call(item.phone)"
                 >
                     <div class="telephones__block__number__l">
                        <img :src="item.img" alt="">
                        <h3>
                            {{item.number}}
                        </h3>
                     </div>
                     <div class="telephones__block__number__r">
                         <p>
                             {{item.title}}
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
        phones: [
            {
                title: 'служба аварийно-спасательных работ (служба спасения)',
                number: '112',
                img: require('../../assets/icons/phone.svg'),
                phone: 'tel:112',
            },
            {
                title: 'противопожарная служба',
                number: '101',
                img: require('../../assets/icons/phone.svg'),
                phone: 'tel:101',
            },
            {
                title: 'полиция',
                number: '102',
                img: require('../../assets/icons/phone.svg'),
                phone: 'tel:102',
            },
            {
                title: 'скорая медицинская помощь',
                number: '103',
                img: require('../../assets/icons/phone.svg'),
                phone: 'tel:103',
            },
            {
                title: 'заказ международных и межугородных звонков',
                number: '171',
                img: require('../../assets/icons/phone.svg'),
                phone: 'tel:171',
            },
            {
                title: 'справочная служба операторов местной телефонной связи',
                number: '118',
                img: require('../../assets/icons/phone.svg'),
                phone: 'tel:118',
            },
            {
                title: 'платная информационная служба',
                number: '169',
                img: require('../../assets/icons/phone.svg'),
                phone: 'tel:169',
            },
        ]
      }
    },
    methods: {
        call(phone) {
            window.location.href = phone
        }
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;
@planshet: 1200px;

.telephones {
    width: 100%;
    height: 100%;
    background: url('../../assets/all/hotpng_bg.png') no-repeat;
    background-position: right bottom;
    background-size: 15%;
    font-family: "MontserratBold";

    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        margin-top: 65px;
        @media (max-width: @planshet) {
            width: 95%;
        }
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
            margin: 0;
            margin-top: 10px;
            width: 863px;
            @media (max-width: @mobile) {
                font-size: 12px;
                line-height: 16px;
                margin: 0;
                margin-top: 10px;
                margin-bottom: 10px;
                width: auto;
            }
        }
    }
    .telephones__data {
        width: 100%;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        @media (max-width: @mobile) {
            margin-top: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .telephones__data__margin {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            @media (max-width: @planshet) {
                width: 95%;
            }
            @media (max-width: @mobile) {
                width: 95%;
            }

            .telephones__block {
                width: 446px;
                background: #FFFFFF;
                box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
                border-radius: 15px;
                padding: 25px;
                margin-right: 20px;
                cursor: pointer;
                margin-bottom: 20px;
                display: flex;
                justify-content: space-between;
                @media (max-width: @mobile) {
                    width: 100%;
                    margin-right: 0;
                    padding: 10px;
                    margin-bottom: 10px;
                }
                .telephones__block__number__l {
                    width: 30%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    border-right: 1px solid #DADADA;
                    h3 {
                        font-style: normal;
                        font-weight: 750;
                        font-size: 26px;
                        line-height: 32px;
                        margin: 0;
                        margin-left: 15px;
                        @media (max-width: @mobile) {
                            font-size: 20px;
                        }
                    }
                    img {
                        @media (max-width: @mobile) {
                            width: 20px;
                        }
                    }
                }
                .telephones__block__number__r {
                    width: 63%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    p {
                        font-style: normal;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 20px;
                        margin: 0;
                        @media (max-width: @mobile) {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
}


</style>