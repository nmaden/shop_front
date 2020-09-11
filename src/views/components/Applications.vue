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
                @click="to_link(applications_item.uri)"
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
                title: 'AstraBus',
                img: require('../../assets/logo/astrabus.svg'),
                text: 'Турист может прибывать в Республике Казахстан без визы в течении 30 дней, если свыше указанного срока необходимо оформление визы.',
                uri: 'https://play.google.com/store/apps/details?id=kz.itsolutions.businformator'
            },
            {
                title: 'ONAY',
                img: require('../../assets/logo/onay.svg'),
                text: 'Турист может прибывать в Республике Казахстан без визы в течении 30 дней, если свыше указанного срока необходимо оформление визы.',
                uri: 'https://play.google.com/store/apps/details?id=kz.onay'
            },
            {
                title: '2GIS',
                img: require('../../assets/logo/2gis.svg'),
                text: 'Турист может прибывать в Республике Казахстан без визы в течении 30 дней, если свыше указанного срока необходимо оформление визы.',
                uri: 'https://play.google.com/store/apps/details?id=kz.citysoft.smartastana'
            },
        ]
      }
    },
    methods: {
        to_link (to) {
            window.open(to, '_blank');
        }
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;

.applications {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    font-family: "MontserratBold";
    @media (max-width: @mobile) {
        margin-top: 0;
        margin-bottom: 20px;
    }
    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 30px;
        @media (max-width: @mobile) {
            font-size: 17px;
            margin-top: 20px;
        }
    }

    .applications__type {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        @media (max-width: @mobile) {
            overflow-x: scroll;
            width: 100%;
            white-space: nowrap;
            display: block;
            height: 160px;
            &::-webkit-scrollbar {
                width: 0px;
            }
        }

        .applications__type__block {
            width: 233px;
            border-radius: 15px;
            margin-right: 10px;
            box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
            background: #fff;
            cursor: pointer;
            @media (max-width: @mobile) {
                width: 132px;
                display: inline-block;
                height: 126px;
            }
            .image__block {
                width: 85%;
                margin: 0 auto;
                height: 120px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid #E8E8E8;
                @media (max-width: @mobile) {
                    height: 80px;
                }
            }
            .text__block {
                width: 85%;
                margin: 0 auto;
                @media (max-width: @mobile) {
                    text-align: center;
                }
                h5 {
                    color: #000;
                    font-style: normal;
                    font-family: "MediumMedium";
                    font-weight: 600;
                    font-size: 18px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    @media (max-width: @mobile) {
                        font-size: 14px;
                        margin-top: 10px;
                    }
                }
                p {
                    font-style: normal;
                    color: #000;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 17px;
                    font-family: "MediumExtraLight";
                    margin: 0;
                    margin-bottom: 15px;
                    @media (max-width: @mobile) {
                        display: none;
                    }
                }
            }
        }
    }
}

</style>