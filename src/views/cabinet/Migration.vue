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
                                30
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
                                Да
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
      }
    },
    mounted() {
        this.getMigrations()
    },
    methods: {
        getMigrations () {
            this.$axios({
                method: 'get',
                url: this.$API_URL + 'v2/countries',
            })
            .then((response) => {
                console.log(response)
            })  
            .catch((error) => {
                console.log(error);
            });
        },
    }
}
</script>

<style scoped lang="less">

.migrations {
    width: 100%;
    height: 100%;
    font-family: "MontserratBold";

    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        margin-top: 65px;

        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
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
        h4 {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            letter-spacing: -0.05em;
            color: #000000;
        }
        .migrations__select {
            margin-top: 15px;
            width: 948px;
            height: 70px;
            background: #F7F7F7;
            border-radius: 10px;
            margin-bottom: 38px;
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
        }
        .migrations__flex {
            width: 100%;
            display: flex;
            justify-content: flex-start;

            .migrations__flex__block {
                width: 211px;
                background: #F8F8F8;
                border-radius: 5px;
                margin-right: 35px;
                padding: 10px 15px;
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