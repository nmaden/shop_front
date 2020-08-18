<template>
    <div class="applications">
        <p>
            Полезные приложения
        </p>

        <div class="applications__type">
            <div 
                class="applications__type__block"
                v-for="applications_item in applications"
                :key="applications_item.title"
            >
                <div class="image__block">
                    <img :src="applications_item.img">
                </div>
                <div class="text__block">
                    <h5>
                        {{applications_item.title}}
                    </h5>
                    <p>
                        {{applications_item.text}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        applications: [
            {
                title: 'eQonaq',
                img: require('../../assets/logo/logo.png'),
                text: 'Турист может прибывать в Республике Казахстан без визы в течении 30 дней, если свыше указанного срока необходимо оформление визы.'
            },
            {
                title: 'AstraBus',
                img: require('../../assets/logo/astrabus.png'),
                text: 'Турист может прибывать в Республике Казахстан без визы в течении 30 дней, если свыше указанного срока необходимо оформление визы.'
            },
            {
                title: 'ONAY',
                img: require('../../assets/logo/onay.png'),
                text: 'Турист может прибывать в Республике Казахстан без визы в течении 30 дней, если свыше указанного срока необходимо оформление визы.'
            },
            {
                title: '2GIS',
                img: require('../../assets/logo/2gis.png'),
                text: 'Турист может прибывать в Республике Казахстан без визы в течении 30 дней, если свыше указанного срока необходимо оформление визы.'
            },
        ]
      }
    },
}
</script>

<style scoped lang="less">

.applications {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 30px;
    }

    .applications__type {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .applications__type__block {
            width: 233px;
            border-radius: 15px;
            margin-right: 10px;
            box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
            background: #fff;
            .image__block {
                width: 85%;
                margin: 0 auto;
                height: 120px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid #E8E8E8;
            }
            .text__block {
                width: 85%;
                margin: 0 auto;
                h5 {
                    color: #000;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                }
                p {
                    font-style: normal;
                    color: #000;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 17px;
                    margin: 0;
                    margin-bottom: 15px;
                }
            }
        }
    }
}

</style>