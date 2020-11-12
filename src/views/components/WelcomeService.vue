<template>
    <div class="service">
        <h1>
            {{$t('welcome__title')}}
        </h1>

        <div class="description">
            <p>
                «eQonaq» - государственная информационная система,  предназначенная для осуществления в электронном виде сбора, учета и обработки данных принимающих лиц о пребывающих у них иммигрантах и внутренних мигрантах, посредством автоматизации процессов их обязательной регистрации и  направления принимающими лицами уведомления в органы внутренних дел
            </p>
            <p>
                Система создана в рамках реализации государственной программы развития туристической отрасли Министерством Культуры и Спорта при содействии Министерства Внутренних дел и Комитета Национальной безопасности Республики Казахстан.
            </p>
        </div>
        <Video />
        <p>
            {{$t('welcome__task__title')}}
        </p>

        <div class="service__type">
            <div 
                class="service__type__block"
                v-for="service_item in $t('welcome__service')"
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
import Video from './VideoPage'
export default {
    components: {
        Video
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;
.service {
    width: 100%;
    margin-top: 50px;
    @media (max-width: @mobile) {
        margin-top: 25px;
    }
    .description {
        width: 100%;
        margin-top: 20px;
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
                line-height: 20px;
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
        margin-top: 60px;
        font-style: normal;
        line-height: 29px;
        font-family: 'MontserratBold';
        letter-spacing: -0.05em;
        color: #000000;
        @media (max-width: @mobile) {
            font-size: 17px;
            margin-top: 25px;
            margin-bottom: 5px;
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
                text-align: center;
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
                    line-height: 18px;
                }
            }
        }
    }
}

</style>