<template>
    <div class="item__column item__ac footer">
        <div class="green__main">

            <div class="footer__row">

                <div class="footer__left">
                    <div class="footer__left--logo">
                        <a href="/">
                            <img src="../../assets/all/logo__bottom.png" alt="">
                        </a>
                    </div>
                    <div class="footer__left--social">
                        <div class="social__item">
                            <a href="https://www.instagram.com/greenclinic_astana/">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div class="social__item">
                            <a href="https://api.whatsapp.com/send?phone=77768983800&text=&source=&data=">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                        <div class="social__item">
                            <a href="https://www.facebook.com/profile.php?id=100023667519846">
                               <i class="fab fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                    <div class="footer__left--linck">
                        <!-- <a class="footer__left--popap">Получить консультацию</a> -->
                    </div>
                </div>

                <div class="footer__center">
                    <div class="footer__center--title">Услуги</div>
                    <div class="row">

                        <div class="col-lg-4">
                            <ul class="menu">
                                <li><a href="#">Кардиология</a></li>
                                <li><a href="#">Гинекология</a></li>
                                <li><a href="#">Урология</a></li>
                                <li><a href="#">Хирургия</a></li>
                                <li><a href="#">Маммология. Онкология</a></li>
                                <li><a href="#">Травматология</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <ul class="menu">
                                <li><a href="#">Отоларингология</a></li>
                                <li><a href="#">Эндоскопия</a></li>
                                <li><a href="#">Неврология</a></li>
                                <li><a href="#">Офтальмология</a></li>
                                <li><a href="#">Дерматология и венерология</a></li>
                                <li><a href="#">Физиотерапевтические процедуры</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4">
                            <ul class="menu">
                                <li><a href="#">Массаж</a></li>
                                <li><a href="#">Магнитно-резонансная томография</a></li>
                                <li><a href="#">Рентгенология</a></li>
                                <li><a href="#">Компьютерная томография</a></li>
                                <li><a href="#">Услуги процедурного кабинета</a></li>
                                <li><a href="#">Ультразвуковое исследование</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="footer__right">
                    <ul class="menu">
                        <li><a href="https://greenclinic.kz/about">О нас</a></li>
                        <li><a href="https://greenclinic.kz/news">Новости</a></li>
                        <li><a href="https://greenclinic.kz/departments">Отделения</a></li>
                        <li><a href="https://purchases.greenclinic.kz/">Закупки</a></li>
                        <li><a href="https://greenclinic.kz/documents">Документация</a></li>
                        <li><a href="https://greenclinic.kz/contacts">Контакты</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
      support: String
    },
    data () {
        return {
           
            withSupport: [
                {
                    img: require('../../assets/logo/2.png'),
                    hover_text: 'Министерство культуры и спорта Республики Казахстан',
                },
                {
                    img: require('../../assets/logo/1.png'),
                    hover_text: 'Министерство внутренних дел Республики Казахстан',
                },
                {
                    img: require('../../assets/logo/3.png'),
                    hover_text: 'АО «НК «Kazakh Tourism» ',
                },
            ],
             
        }
    },
    methods: {
   
    },
  
}
</script>

<style lang="less" scoped>
@mobile: 900px;
@planshet: 1200px;
.item__column { 
    display: flex;
    flex-direction: column;
}
.item__ac {
    align-items: center;
}
.footer {
    background: #FCFCFC;
    padding: 65px 0 50px 0;

}
.footer__center {max-width: 100%;width: 830px;}
.footer__row {
    margin: 0 -15px;
    display: flex;
    justify-content: space-between;
}

.footer__left--social {
    display: flex;
    margin-bottom: 35px;
    i {
        color: #939393;
        font-size: 24px;
    }
}

.footer__left--logo {
    margin-bottom: 35px;
}

.social__item {
    margin-right: 25px;
}

.social__item:last-child {
    margin-right: 0;
}

.footer__left--popap {
    background: #85C418;
    border-radius: 2px;
    font-weight: normal;
    font-size: 14px;
    color: #FFFFFF !important;
    padding: 15px 25px;
    cursor: pointer;
}

.footer__right ul.menu {
    margin: 0;
    padding: 0;
    list-style: none;
}

.footer__right ul.menu li a {
    font-weight: bold;
    font-size: 16px;
    color: #939393;
}

.footer__right ul.menu li {
    margin-bottom: 19px;
}

.footer__right ul.menu li:last-child {
    margin-bottom: 0;
}

.footer__center--title {
    font-weight: bold;
    font-size: 16px;
    color: #939393;
    margin-bottom: 15px;
}

.footer__center ul.menu {
    margin: 0;
    padding: 0;
    list-style: none;
}

.footer__center ul.menu li a {
    font-weight: normal;
    font-size: 14px;
    color: #CACACA;
}

.footer__center ul.menu li {
    margin-bottom: 10px;
}

.footer__center ul.menu li:last-child {
    margin-bottom: 0;
}

.phone__fixed {
    position: fixed;
    right: 50px;
    z-index: 5;
    bottom: 50px;
    animation:circle-fill-anim 2.3s infinite ease-in-out;
}
@keyframes circle-fill-anim {
    0% {transform: rotate(10deg)}
    50% {transform: rotate(-10deg)}
    100% {transform: rotate(10deg)}
}

.services__filter--content.swiper-wrapper {
    width: auto;
}

</style>


<style scoped lang="less">
@mobile: 900px;
@planshet: 1200px;

.green__main {
    width: 1280px;
    @media (max-width: @mobile) {
        width: 100%;
    }
    @media (max-width: @planshet) {
        width: 100%;
    }
}
.v-sheet.v-list {
    border-radius: 0;
    text-align: center;
}


.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.delete__dialog__title {
    font-family: "MontserratBold";
    font-size: 17px;
    line-height: 21px;

    @media (max-width: @mobile) {
        font-size: 13px;
        line-height: 15px; 
    }
}

html,
body {
    overflow-x: hidden;
    letter-spacing: -0.03em;
    font-family: Montserrat;

 
}

a {
    text-decoration: none !important;
}

body * {
    outline: none;
}
.container {
    max-width: 1440px;
}
body{
	padding-top: 140px;
	background-size: contain;
    font-size: 16px;
}

.header {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
    padding: 40px 0;
  
    width: 100%;
    z-index: 10;

   
    
}

.header__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 -15px;
}

.header__logo {
    margin-right: 50px;
}

.header__right {
    display: flex;
    align-items: center;
}

.header__menu .menu {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

.header__menu .menu > li > a {
    font-weight: normal;
    font-size: 18px;
    color: #0F1721;
    transition: all 0.5s ease;
}
.header__menu .menu > li > a:hover {
    color: #85C418;
}
.header__menu .menu > li {
    margin: 0 20px;
    padding: 10px 0;
}

.header__contact {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.header__contact--info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header__contact--icon {
    margin-right: 10px;
}

.header__contact--phone {
    font-weight: bold;
    font-size: 18px;
    color: #0F1721 !important;
}

a.header__contact--popap {
    font-weight: 600;
    font-size: 16px;
    color: #85C418 !important;
    text-decoration: underline !important;
    cursor: pointer;
}

.header__lang--click {
    display: none;
}


.header__lang--menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
}

.header__lang--menu ul li {
    margin-left: 15px;
}

.header__lang--menu ul li a {
    color: #0F1721;
    font-weight: normal;
    font-size: 18px;
    transition: all 0.5s ease;
}
.header__lang--menu ul li:hover a,
.header__lang--menu ul li.header__lang--active a {
    color: #85C418;
}

a.version_visually {
    font-weight: 500;
    font-size: 14px;
    color: #85C418 !important;
    line-height: 1.2;
    display: block;
    text-decoration-line: underline !important;
    white-space: nowrap;
    transition: all 0.5s ease;
    cursor: pointer;
}

.header__right--version {
    text-align: right;
    margin-bottom: 12px;
}

.header__right--row {
    margin-left: 30px;
}

a.version_visually:hover {
    text-decoration-line: none !important;
}
.header__right--click{
    display: none;
}


@media screen and (max-width: 1920px) {

}
@media screen and (max-width: 1800px) {

}
@media screen and (max-width: 1536px) {

}
@media screen and (max-width: 1400px) {
    .header__lang--menu {
        text-align: right;
    }
    
    .header__menu .menu > li {
        margin: 0 15px;
    }
    
    .header__row {
        margin: 0;
    }
    
    a.version_visually {
        white-space: normal;
    }
    
    .header__contact {
        margin-left: 10px;
    }
    
    .header__right--row {
        margin-left: 15px;
    }
    
    .header__right--version {
        margin-bottom: 5px;
    }
    
    .header__menu .menu > li > a {
        font-size: 16px;
    }
    
    .section__banner {
        padding-top: 110px;
    }
    
    .advantage__item--text {
        font-size: 14px;
    }
    
    .section__margin .section__title {
        margin-left: 0;
        margin-right: 0;
    }
    
    .services__number--row {
        margin-left: 0;
        margin-right: 0;
    }
    
    .services__filter--content {
        margin: 0;
    }
    
    .services__filter__item--active {
        margin: 10px;
        width: 205px;
        height: 210px;
    }
    
    .footer__row {
        margin: 0;
    }
    
    .contact__info {
        margin-left: 0;
    }
}
@media screen and (max-width: 1366px) {

}
@media screen and (max-width: 1300px) {

    .header__menu {
        display: none;
    }
    .header__right--click{
        display: block;
        margin-left: 45px;
    }
    .header__mobile {
        display: block;
    }

    .footer__center {
        width: auto;
    }

    .section__title--main {
        font-size: 40px;
    }

    .section__title--main:before {
        width: 70px;
        top: 30px;
    }

    .section__margin .section__title {
        padding-left: 80px;
    }

    .services__number--text {
        font-size: 18px;
    }

    .section__banner {
        height: auto;
        padding-top: 60px;
        padding-bottom: 100px;
    }


    
    .services__filter__item--active {
        width: 220px;
    }
}
@media screen and (max-width: 1200px) {
    .departments__item--img img {
        height: 100%;
    }
    
    .departments__item--img {
        height: 100%;
    }
    
    .departments__item--title {
        font-size: 25px;
    }
    
    .departments__item--text {
        font-size: 14px;
    }
    
    .departments__item--linck a {
        font-size: 16px;
        padding: 15px 70px;
    }
    .departments__item--info {
        padding: 30px 20px;
    } 
    .departments__item--text p:last-child {
        margin-bottom: 0;
    }
}
@media screen and (max-width: 1199px){

}
@media screen and (max-width: 1024px) {
    .row.swiper-wrapper {
        flex-wrap: nowrap;
        margin: 0;
    }


    .consultant__form--title {
        font-size: 30px;
    }
    
    .contact__item--calendar div {
        margin-right: 10px;
    }
    
    .contact__item--text.contact__item--calendar {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .footer__row {
        flex-wrap: wrap;
    }
    
    .footer__left {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
    
    .footer__left--popap {
        display: inline-block;
    }
    .footer__left--social {
        margin: 0;
    }
    
    .footer__left--logo {
        margin: 0;
    }
}
@media screen and (max-width: 992px) {
    .services__filter__button--item {
        margin: 0 20px;
        font-size: 18px;
    }



    .services__filter--content.swiper-wrapper {
        flex-wrap: nowrap;
        min-width: 100%;
    }
    .services__filter__item--active {
        width: auto;
        margin: 0;
    }
    .services__filter--slider {
        padding: 0 15px;
    }
    .services__filter--item {
        display: none;
    }
    .services__filter__item--active {
        display: block;
    }

    .swiper-slide.services__filter--item {
        width: 215px;
        height: 210px;
        opacity: 1;
        margin: 0;
        padding: 40px 5px 20px 5px;
    }

    .page__about--img {
        margin-bottom: 40px;
    }
    .page__about--img img {
        position: relative;
        width: 100%;
        height: auto;
    }
    .page__about--mission {
        padding: 40px;
    }


}
@media screen and (max-width: 768px) {
    .section__banner--title {
        font-size: 35px;
    }
    
    .section__banner--text {
        display: none;
    }
    
    .section__banner--linck {
        margin-top: 10px;
    }
    
    .section__advantages {
        margin-top: -50px;
    }
    
    .advantage__item--img img {
        width: 95px;
    }
    
    .section__title--main {
        font-size: 36px;
    }
    
    .section__title--main:before {
        width: 50px;
    }
    
    .section__margin .section__title {
        padding-left: 70px;
    }
    
    .section__title--desc {
        font-size: 16px;
        max-width: 315px;
    }
    
    .services__number--number {
        font-size: 64px;
    }
    
    .services__number--number:before {
        font-size: 96px;
    }
    
    .services__number--text {
        font-size: 16px;
    }
    
    .services__number--item {
        height: 150px;
        padding-top: 30px;
    }
    
    .services__filter__button--item {
        font-size: 18px;
    }
    
    .consultant__form--title {
        font-size: 24px;
        margin-bottom: 25px;
    }
    
    .form__input--item {
        margin-bottom: 15px;
    }
    
    .consultant__block {
        height: auto;
        padding: 25px 0;
    }
    .contact__info {
        margin-bottom: 25px;
    }
    
    .contact__map {
        margin: 0 -15px;
        height: 220px;
    }
    
    .contact__map img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .section__contact.section__margin {
        margin-bottom: 0;
    }
    
    footer {
        padding: 20px 0 40px 0;
    }
    
    .footer__center {
        text-align: center;
    }
    
    .footer__right {
        text-align: center;
        width: 100%;
        margin-top: 25px;
    }
    .phone__fixed svg {
        width: 90px;
    }
    .phone__fixed {
        right: 15px;
        bottom: 15px;
    }


    header .header__contact {
        display: none;
    }
    header .header__right--version {
        display: none;
    }
    header {
        padding: 20px 0;
    }
    .services__filter--button {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    body {
        padding-top: 100px;
    }
    .form__input-bott_desc {
        margin-top: 20px;
        font-size: 18px;
    }

}
@media screen and (max-width: 568px) {
    .footer__left--logo {
        order: 1;
    }
    .footer__left--linck {
        order: 2;
    }
    .footer__left--social {
        order: 3;
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .footer__left {
        flex-wrap: wrap;
    }
    .services__number--row {
        margin-left: -15px;
        margin-right: -15px;
    }

    .section__margin {
        margin-bottom: 40px;
    }
    .about__mission--text {
        font-size: 16px;
    }
    .page__about--mission {
        padding: 40px 20px;
    }
    .section__title--main {
        line-height: 1;
    }
    
}
@media screen and (max-width: 480px) {
    .services__number--item {
        height: 150px;
    }
    
    .header__logo img {
        max-width: 93px;
    }
    
    .header__right--row {
        margin-left: 0;
    }
    
    .header__right--click {
        margin-left: 15px;
    }
    
    .header__logo {
        margin-right: 10px;
    }
    
    .section__banner--linck a {
        padding: 15px 50px;
    }
    
    body {
        padding-top: 85px;
    }
    
    .section__title--desc {
        font-size: 14px;
    }

    .departments__item--linck a {
        font-size: 14px;
        padding: 15px 45px;
    }
    
    .departments__item--title {
        font-size: 20px;
    }
}
@media screen and (max-width: 400px) {
    .consultant__form--title {
        line-height: 1.2;
        font-size: 20px;
    }
    .section__title--main {
        font-size: 28px;
    }
    .section__title--main:before {
        top: 20px;
    }
    .footer__left {
        justify-content: center;
    }
    .footer__left--logo {
        margin-bottom: 15px;
    }

    .departments__item--info {
        padding: 20px;
    }
}
@media screen and (max-width: 350px) {

}
@media screen and (max-width: 320px) {

}
</style>
