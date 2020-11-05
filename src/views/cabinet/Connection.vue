<template>
    <div class="telephones">
        <Header />
        <div class="main__base__margin">
            <h1>
                {{$t('connection__page__title')}}
            </h1>
            <p>
                {{$t('connection__page__text__cards')}}
                <b>Kcell, Beeline, Tele2, Алтел4G</b>
            </p>
            <p>
                {{$t('connection__page__text__paragraf_one')}}
            </p>
            <p>
                {{$t('connection__page__text__paragraf_two')}} <br>
                <b> 
                   <i18n path="connection__page__text__paragraf_threa_bold">
                        <br place="break" />
                    </i18n>
                </b>
            </p>
            <p>
                {{$t('connection__page__text__paragraf_four')}}
            </p>
            <p>
                {{$t('connection__page__text__paragraf_five')}}
            </p>
            <p>
                {{$t('connection__page__text__paragraf_six')}}
            </p>
            <p>
                {{$t('connection__page__text__paragraf_seven')}}
            </p>
            <p>
                <b>
                    <i18n path="connection__page__text__paragraf_eight_bold">
                        <br place="break" />
                    </i18n>
                </b>
            </p>
            <p>
                {{$t('connection__page__text__paragraf_nine')}}
            </p>
            
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
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 10px;
        }
        @media (max-width: @planshet) {
            width: 95%;
        }

        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
            margin-bottom: 10px;
            color: #000;
            @media (max-width: @mobile) {
                font-size: 20px;
            }
        }
        p {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #000;
            margin: 0;
            margin-bottom: 15px;
            width: 965px;
            font-family: "MediumExtraLight";
            @media (max-width: @mobile) {
                font-size: 12px;
                line-height: 16px;
                margin: 0;
                margin-top: 10px;
                margin-bottom: 10px;
                width: auto;
            }

            b {
                font-weight: bold;
                font-family: "MontserratBold";
            }
        }
    }
}


</style>