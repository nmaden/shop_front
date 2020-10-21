<template>
    <div class="telephones">
        <Header />
        <div class="main__base__margin">
            <div class="flex__not__found">
                <img src="../../assets/icons/not__found.svg" alt="404">
                <h1>
                    Страница не найдена
                </h1>
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
        margin-top: 65px;
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
                width: 350px;
            }
        }
    }
}


</style>