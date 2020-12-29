<template>
    <div class="main">
        <Header />
        <div class="main__base__margin">
            <Baner />
            <WelcomeService />
            <InterestingPlaces />
            <BookHotel />
        </div>
        <Footer />

         <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <div 
                    class="support__service"
                    v-bind="attrs"
                    v-on="on"
                >
                    <img src="../assets/icons/call__icon.svg" alt="">
                </div>
            </template>
            <span>Обратная связь</span>
        </v-tooltip>

    </div>
</template>

<script>
import Header from './components/Header'
import Baner from './components/Baner'
import WelcomeService from './components/WelcomeService'
import InterestingPlaces from './components/InterestingPlaces'
import BookHotel from './components/BookHotel'
import Footer from './components/Footer'

export default {
    components: {
        Header, Baner, WelcomeService, InterestingPlaces, BookHotel, Footer
    },
}
</script>

<style scoped lang="less">
@mobile: 900px;
@planshet: 1200px;

.main {
    overflow: hidden;
    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 0;
        }
        @media (max-width: @planshet) {
            width: 95%;
        }
    }
    .support__service {
        position: fixed;
        right: 30px;
        bottom: 30px;
        width: 65px;
        height: 65px;
        background: #FDE88D;
        box-shadow: 0px 8px 20px rgba(253, 232, 141, 0.56);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
}

</style>