<template>
    <div class="service">
        <h1>
            Добро пожаловать <br>
            в информационную cистему eQonaq
        </h1>

        <p>
            О системе eQonaq
        </p>
        
        <div class="description">
            <p>
                «eQonaq» –  информационная система по сбору и обработке единого реестра мест размещения туристов,  туристического потока, а также контроль над соблюдением миграционного законодательства РК посредством  уведомления государственных органов о прибытии туристов. 
            </p>
            <p>
                Система создана в рамках реализации государственной программы развития туристической отрасли Министерством Культуры и Спорта при содействии Министерства Внутренних дел и Комитета Национальной безопасности Республики Казахстан.
            </p>
        </div>

        <p>
            Основные задачи
        </p>

        <div class="service__type">
            <div 
                class="service__type__block"
                v-for="service_item in service"
                :key="service_item.title"
            >   
                <div class="service__type__block__img">
                    <img :src="service_item.img" alt="">
                </div>
                <p>
                    {{service_item.text}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        service: [
            {
                img: require('../../assets/icons/1.svg'),
                text: 'Создание единого реестра мест размещения.'
            },
            {
                img: require('../../assets/icons/2.svg'),
                text: 'Учет и контроль прибытия и убытия туристов.'
            },
            {
                img: require('../../assets/icons/3.svg'),
                text: 'Аналитика туристического потока и портрета туриста.'
            },
            {
                img: require('../../assets/icons/4.svg'),
                text: 'Инфраструктура для учета туристического сбора.'
            },
            {
                img: require('../../assets/icons/5.svg'),
                text: 'Предоставление различных сервисов для повышения качества пребывания туристов.'
            },
            {
                img: require('../../assets/icons/6.svg'),
                text: 'Уведомление МВД РК о прибытии иностранных туристов, во избежание штрафа по ст. 518'
            },
        ]
      }
    },
}
</script>

<style scoped lang="less">
@mobile: 900px;

.service {
    width: 100%;
    margin-top: 40px;
    @media (max-width: @mobile) {
        margin-top: 25px;
    }
    .description {
        width: 100%;
        p {
            font-weight: 600;
            font-family: 'MediumExtraLight';
            font-style: normal;
            font-size: 20px;
            line-height: 25px;
            margin: 0;
            color: #000000;
            margin-bottom: 15px;
            @media (max-width: @mobile) {
                font-size: 14px;
                line-height: 16px;
                margin-bottom: 5px;
            }
        }
    }
    h1 {
        font-weight: bold;
        font-size: 55px;
        line-height: 67px;
        font-style: normal;
        letter-spacing: -0.05em;
        color: #000000;
        font-family: 'MontserratBold';
        @media (max-width: @mobile) {
            margin-top: 0;
            display: none;
        }
    }
    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 40px;
        font-style: normal;
        line-height: 29px;
        font-family: 'MontserratBold';
        letter-spacing: -0.05em;
        color: #000000;
        @media (max-width: @mobile) {
            font-size: 17px;
            margin-top: 25px;
        }
    }

    .service__type {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 35px;
        @media (max-width: @mobile) {
            margin-top: 20px;
        }
        .service__type__block {
            width: 27%;
            margin-bottom: 20px;
            margin-right: 16px;
            @media (max-width: @mobile) {
                width: 47%;
                margin-right: 0;
            }
            .service__type__block__img {
                height: 76px;
                @media (max-width: @mobile) {
                    height: 50px;
                }
            }
            img {
                @media (max-width: @mobile) {
                    width: 50px;
                }
            }
            
            p {
                margin-top: 15px;
                font-weight: 600;
                font-family: 'MediumExtraLight';
                font-style: normal;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                @media (max-width: @mobile) {
                    margin-top: 0px;
                    font-size: 12px;
                    line-height: 14px;
                }
            }
        }
    }
}

</style>