<template>
    <div class="book__hotel">
        <p>
            Забронировать отель / гостиницу
        </p>

        <div class="book__hotel__filter">
            <div class="book__hotel__filter__margin">
                <h4>
                    Найдите спецпредложения от отелей, <br>
                    домов и других вариантов
                </h4>
                <div class="filter__book__hotel">
                    <div class="filter__book__hotel__block filter__book__hotel__block__border">
                        <img class="base__filter__img" src="../../assets/icons/travel_filter.png" alt="travel_filter">
                        <p>
                            Куда вы хотите поехать?
                        </p>
                        <img class="base__img__down" src="../../assets/icons/down.png" alt="down">
                    </div>
                    <div class="filter__book__hotel__block">
                        <p>
                            26.07.2020
                        </p>
                        <p>
                            -
                        </p>
                        <p>
                            26.07.2020
                        </p>
                        <img class="base__filter__img" src="../../assets/icons/data_picker_filter.png" alt="data_picker_filter">
                    </div>
                    <div class="filter__book__hotel__block">
                        <img class="base__filter__img" src="../../assets/icons/person_filter.png" alt="person_filter">
                        <p>
                            2 - взрослых
                        </p>
                        <p>
                            1 - номер
                        </p>
                    </div>
                    <a href="https://eqonaq.kz/hotels" target="_blank">
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
        
      }
    },
}
</script>

<style scoped lang="less">

.book__hotel {
    width: 100%;
    margin-top: 40px;

    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 30px;
        font-family: 'MontserratBold';
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

            h4 {
                font-size: 24px;
                color: #fff;
                line-height: 29px;
                text-transform: uppercase;
                font-family: 'MontserratBold';
            }
            .filter__book__hotel {
                width: 100%;
                display: flex;
                justify-content: space-between;
                border: 2px solid #FFCE03;
                background: #FFCE03;
                margin-top: 20px;
                border-radius: 10px;

                .filter__book__hotel__block__border {
                    border-radius: 10px 0px 0px 10px;
                }

                .filter__book__hotel__block {
                    background: #fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 25px;
                    width: 311px;

                    .base__filter__img {
                        width: 20px;
                        height: 20px;
                    }
                    .base__img__down {
                        width: 10px;
                        height: 10px;
                    }
                    p {
                        margin: 0;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 16px;
                        font-family: 'MediumMedium';
                    }
                }
                a {
                    display: block;
                    width: 194px;
                    padding: 15px 25px;
                    border-radius: 0px 10px 10px 0px;
                    font-weight: 500;
                    font-size: 16px;
                    text-transform: uppercase;
                    color: #000000;
                    text-decoration: none;
                    &:hover {
                        opacity: .7;
                    }
                }
            }
        }
    }
}

</style>