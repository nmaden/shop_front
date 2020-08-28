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
                img: require('../../assets/icons/arrival_sheet.png'),
                text: 'Заполяйте листы прибытия быстро и без ошибок. Используйсте функции сканирования документов, автозаполнения и группового заезда.'
            },
            {
                title: 'Справочник',
                img: require('../../assets/icons/directory.png'),
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
    }
    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 30px;
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
                color: #000;
                margin-top: 10px;
            }
            p {
                margin-top: 10px;
                font-style: normal;
                font-weight: 300;
                font-size: 16px;
                line-height: 24px;
                color: #000000
            }
        }
    }
}

</style>