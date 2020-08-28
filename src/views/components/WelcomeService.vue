<template>
    <div class="service">
        <h1>
            Добро пожаловать <br>
            в информационную cистему eQonaq
        </h1>

        <p>
            Возможности
        </p>

        <div class="service__type">
            <div 
                class="service__type__block"
                v-for="service_item in service"
                :key="service_item.title"
            >
                <img :src="service_item.img" alt="">
                <h3>
                    {{service_item.title}}
                </h3>
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
                title: 'Листы прибытия',
                img: require('../../assets/icons/arrival_sheet.svg'),
                text: 'Заполяйте листы прибытия быстро и без ошибок. Используйсте функции сканирования документов, автозаполнения и группового заезда.'
            },
            {
                title: 'Справочник',
                img: require('../../assets/icons/directory.svg'),
                text: 'Просмотрите актуальные миграционные правила для страны проживания вашего гостя.'
            },
            {
                title: 'Миграционная служба',
                img: require('../../assets/icons/service.png'),
                text: 'Отправляйте уведомления в МВД РК обо всех прибывающих иностранных гостях онлайн.'
            },
        ]
      }
    },
}
</script>

<style scoped lang="less">

.service {
    width: 100%;
    margin-top: 40px;

    h1 {
        font-weight: bold;
        font-size: 55px;
        line-height: 67px;
        font-style: normal;
        letter-spacing: -0.05em;
        color: #000000;
        font-family: 'MontserratBold';
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
    }

    .service__type {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 35px;

        .service__type__block {
            width: 32%;
            margin-bottom: 20px;
            margin-right: 16px;

            h3 {
                font-weight: bold;
                font-size: 20px;
                margin-top: 15px;
                font-family: 'MontserratBold';
                font-style: normal;
                line-height: 25px;
                color: #000000;
            }
            p {
                margin-top: 15px;
                font-weight: 600;
                font-family: 'MediumExtraLight';
                font-style: normal;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
            }
        }
    }
}

</style>