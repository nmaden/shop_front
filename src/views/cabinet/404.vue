<template>
    <div class="telephones">
        <Header />
        <div class="main__base__margin">
            <div class="flex__not__found">
                <img src="../../assets/icons/not__found.svg" alt="404">
                <h1>
                    404
                </h1>
                <h1>
                    {{$t('page__404__title')}}
                </h1>
                <router-link tag="a" to="/">
                    {{$t('page__404__btn')}}
                </router-link>
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
        margin-top: 15px;
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 10px;
        }
        @media (max-width: @planshet) {
            width: 95%;
        }
        .flex__not__found {
            width: 100%;
            text-align: center;
            img {
                width: 300px;
                @media (max-width: @planshet) {
                    width: 200px;
                }
            }
            h1 {
                font-size: 24px;
                @media (max-width: @planshet) {
                    font-size: 17px;
                }
            }
            a {
                color: #000;
                display: block;
                text-decoration: none;
                padding: 10px;
                width: 200px;
                background: #FDE88D;
                border: 3px solid #FDE88D;
                box-sizing: border-box;
                font-style: normal;
                font-weight: bold;
                margin: 0 auto;
                font-size: 16px;
                outline: none;
                border-radius: 30px;
                margin-top: 10px;
                @media (max-width: @planshet) {
                    font-size: 14px;
                    padding: 10px;
                }
                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
}


</style>