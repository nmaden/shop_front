<template>
    <div class="currency">
        <Header />
        <div class="main__base__margin">
            <h1>
                Валюта
            </h1>
        </div>
        <div class="currency__data">
            <div class="currency__data__margin">
                 <div class="currency__block">
                    <div class="currency__block__info">
                        <div class="currency__block__info__header">
                            <img src="../../assets/flags/usd.svg" alt="">
                            <p>
                                <b>USD</b> - Unated States Dollar
                            </p>
                        </div>
                        <div class="currency__number currency__number__margin">
                            <p>
                                $1
                            </p>
                        </div>
                    </div>
                    <div class="currency__block__info currency__block__info__line">
                        <div class="currency__block__info__header">
                            <img src="../../assets/flags/kzt.svg" alt="">
                            <p>
                                <b>KZT</b> - Kazakhstan Tenge
                            </p>
                        </div>
                        <div class="currency__number">
                            <p>
                                410 KZT
                            </p>
                        </div>
                    </div>
                 </div>

                 <div class="currency__block">
                    <div class="currency__block__info">
                        <div class="currency__block__info__header">
                            <img src="../../assets/flags/eur.svg" alt="">
                            <p>
                                <b>EUR</b> - Europian Union Euro
                            </p>
                        </div>
                        <div class="currency__number currency__number__margin">
                            <p>
                                €1
                            </p>
                        </div>
                    </div>
                    <div class="currency__block__info currency__block__info__line">
                        <div class="currency__block__info__header">
                            <img src="../../assets/flags/kzt.svg" alt="">
                            <p>
                                 <b>KZT</b> - Kazakhstan Tenge
                            </p>
                        </div>
                        <div class="currency__number">
                            <p>
                                430 KZT
                            </p>
                        </div>
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
}
</script>

<style scoped lang="less">

.currency {
    width: 100%;
    height: 100%;
    background: url('../../assets/all/hotpng_bg.png') no-repeat;
    background-position: right bottom;
    background-size: 15%;

    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        margin-top: 135px;

        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
        }
        
    }
    .currency__data {
        width: 100%;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;

        .currency__data__margin {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .currency__block {
                width: 446px;
                background: #FFFFFF;
                box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
                border-radius: 15px;
                padding: 25px;
                margin-right: 20px;
                .currency__block__info__line {
                    border-top: 1px solid #DADADA;
                    width: 100%;
                    padding-top: 25px;
                }
                .currency__block__info {
                    width: 100%;
                    .currency__number {
                        margin-top: 20px;
                        p {
                            margin: 0;
                            font-weight: 600;
                            font-size: 48px;
                            color: #000;
                            line-height: 59px;
                        }
                    }   
                    
                    .currency__number__margin {
                        margin-bottom: 25px;
                    }

                    .currency__block__info__header {
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        p {
                            margin: 0;
                            margin-left: 15px;
                            font-size: 17px;
                            color: #000;
                            font-style: normal;
                            font-weight: 300;
                            b {
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }
}


</style>