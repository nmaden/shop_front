<template>
    <div>
        <Header />
        <div class="main__base__margin">
            <Baner />
            <WelcomeService />
            <InterestingPlaces />
            <BookHotel />
            <Applications />
            <WithSupport />
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
import Applications from './components/Applications'
import WithSupport from './components/WithSupport'
import Footer from './components/Footer'

export default {
    components: {
        Header, Baner, WelcomeService, InterestingPlaces, BookHotel, Applications, WithSupport, Footer
    },
}
</script>

<style scoped lang="less">
@mobile: 900px;

.main__base__margin {
    width: 1200px;
    margin: 0 auto;
    margin-top: 65px;
    @media (max-width: @mobile) {
        width: 95%;
        margin-top: 0;
    }
}
</style>