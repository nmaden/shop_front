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
        margin-top: 65px;
        @media (max-width: @mobile) {
            width: 95%;
            margin-top: 0;
        }
        @media (max-width: @planshet) {
            width: 95%;
        }
    }
}

</style>