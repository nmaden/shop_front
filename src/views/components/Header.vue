<template>

<div>
    <header  class="header item__column item__ac">
         
        <div class="container green__main">

            <div class="header__row">

                <a href="https://greenclinic.kz/ru" class="header__logo">
                    <img src="../../assets/all/green_logo.svg" alt="logo">
                </a>
                <div class="header__right">
                    <div class="header__menu">
                        <ul class="menu">
                            <li style="margin:0">
                               
                                <div class="item__hover item__column">
                                    
                                    <div class="item__hover__label item__row item__ac" @click="showDropdownAbout">
                                        <a    href="https://greenclinic.kz/ru/o-nas/" >О нас</a>
                                        <img src="../../assets/all/icon_down.png" alt="" v-bind:class="{rotateimg180:dropdownShowAbout==true}" > 
                                    </div>
                                    <div class=" item__dropdown" v-if="dropdownShowAbout"  @mouseleave="hideDropdownAbout">
                                        <a   href="https://greenclinic.kz/ru/dokumentacziya">Документация</a>
                                    </div>
                                 </div>
                            </li>
                           
                            <li class="menu-item-has-children">
                                <div class="item__hover item__column">
                                    <div class="item__hover__label item__row item__ac"  @click="showDropdown">
                                        <a    href="https://greenclinic.kz/ru/departments" >Отделения</a>
                                        <img src="../../assets/all/icon_down.png" alt="" v-bind:class="{rotateimg180:dropdownShow==true}"> 
                                    </div>
                                    <div class=" item__dropdown" v-if="dropdownShow"  @mouseleave="hideDropdown">
                                        <a   href="https://greenclinic.kz/ru/departments/poliklinika/">Поликлиника</a>
                                        <a   href="https://greenclinic.kz/ru/departments/staczionar/">Стационар</a>
                                        <a   href="https://greenclinic.kz/ru/departments/otdelenie-luchevoj-diagnostiki/">Отделение лучевой<br> диагностики</a>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                                <a href="https://greenclinic.kz/ru/control/">Услуги</a>
                            </li>
                            <li>
                                <a href="https://greenclinic.kz/ru/doctor/">Врачи</a>
                            </li>
                            <li>
                                <a href="https://zakup.greenclinic.kz">Закупки</a>
                            </li>
                            <li>
                                <a href="https://greenclinic.kz/ru/news/">Новости</a>
                            </li>
                            <li>
                                <a href="https://greenclinic.kz/ru/kontakty/">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__contact item__row item__ac">
                        <div class="header__contact--icon">
                            <svg width="39" height="39" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.9166 34.545V40.67C44.919 41.2386 44.8025 41.8014 44.5747 42.3224C44.3469 42.8434 44.0128 43.3111 43.5938 43.6955C43.1748 44.0799 42.6801 44.3725 42.1415 44.5547C41.6029 44.7369 41.0321 44.8045 40.4658 44.7533C34.1833 44.0707 28.1484 41.9239 22.8462 38.4854C17.9132 35.3508 13.7309 31.1684 10.5962 26.2354C7.14576 20.9091 4.99847 14.8449 4.32831 8.53416C4.27729 7.96957 4.34439 7.40055 4.52533 6.86331C4.70627 6.32608 4.9971 5.8324 5.37929 5.41372C5.76148 4.99504 6.22666 4.66053 6.74522 4.43148C7.26377 4.20243 7.82434 4.08386 8.39123 4.08333H14.5162C15.5071 4.07358 16.4676 4.42445 17.2189 5.07054C17.9702 5.71663 18.4609 6.61386 18.5996 7.59499C18.8581 9.55513 19.3375 11.4797 20.0287 13.3321C20.3034 14.0628 20.3629 14.857 20.2 15.6205C20.0372 16.3841 19.6589 17.0849 19.11 17.64L16.5171 20.2329C19.4235 25.3443 23.6557 29.5765 28.7671 32.4829L31.36 29.89C31.9151 29.3411 32.6159 28.9628 33.3794 28.7999C34.1429 28.6371 34.9371 28.6966 35.6679 28.9712C37.5202 29.6625 39.4448 30.1419 41.405 30.4004C42.3967 30.5403 43.3025 31.0399 43.95 31.804C44.5975 32.5682 44.9415 33.5437 44.9166 34.545Z" stroke="#0F1721" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="header__contact--info">
                            <a href="tel:+7 (7172) 79 77 22" class="header__contact--phone">+7 (7172) 79 77 22</a>
                            <a @click="$parent.openModal()" class="header__contact--popap">Заказать звонок</a>
                        </div>
                    </div>
                    <div class="header__right--row">
                        <div class="header__right--version">
                            <a class="version_visually">Версия для слабовидищих</a>
                        </div>
                        <div class="header__lang">
                            <div class="header__lang--click">
                                <a>Ru</a>
                            </div>
                            <div class="header__lang--menu">
                                <ul>
                                    <li class="header__lang--item">
                                        <a href="#" data-lang="kz">Kz</a>
                                    </li>
                                    <li class="header__lang--item header__lang--active">
                                        <a href="#" data-lang="ru">Ru</a>
                                    </li>
                                    <li class="header__lang--item">
                                        <a href="#" data-lang="en">En</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="header__right--click" @click="show_left=true">
                        <a class="click__mobile">
                            <img src="../../assets/all/bar-left.svg" alt="">
                        </a>
                    </div>
                </div>

            </div>

        </div>

    </header>


    <div class="item__column top__mobil item__ac" v-if="show_left" v-bind:class="{slide:show_left}">

        <div class="top__contact item__row item__ac item__100 item__jb">
            <div class="item__row item__ac">
               
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.9166 34.545V40.67C44.919 41.2386 44.8025 41.8014 44.5747 42.3224C44.3469 42.8434 44.0128 43.3111 43.5938 43.6955C43.1748 44.0799 42.6801 44.3725 42.1415 44.5547C41.6029 44.7369 41.0321 44.8045 40.4658 44.7533C34.1833 44.0707 28.1484 41.9239 22.8462 38.4854C17.9132 35.3508 13.7309 31.1684 10.5962 26.2354C7.14576 20.9091 4.99847 14.8449 4.32831 8.53416C4.27729 7.96957 4.34439 7.40055 4.52533 6.86331C4.70627 6.32608 4.9971 5.8324 5.37929 5.41372C5.76148 4.99504 6.22666 4.66053 6.74522 4.43148C7.26377 4.20243 7.82434 4.08386 8.39123 4.08333H14.5162C15.5071 4.07358 16.4676 4.42445 17.2189 5.07054C17.9702 5.71663 18.4609 6.61386 18.5996 7.59499C18.8581 9.55513 19.3375 11.4797 20.0287 13.3321C20.3034 14.0628 20.3629 14.857 20.2 15.6205C20.0372 16.3841 19.6589 17.0849 19.11 17.64L16.5171 20.2329C19.4235 25.3443 23.6557 29.5765 28.7671 32.4829L31.36 29.89C31.9151 29.3411 32.6159 28.9628 33.3794 28.7999C34.1429 28.6371 34.9371 28.6966 35.6679 28.9712C37.5202 29.6625 39.4448 30.1419 41.405 30.4004C42.3967 30.5403 43.3025 31.0399 43.95 31.804C44.5975 32.5682 44.9415 33.5437 44.9166 34.545Z" stroke="#0F1721" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                <div class="top__phone item__column">
                    <a href="tel:+7 776 898 38 00" >+7 776 898 38 00</a>
                    <a class="top__phone__a" @click="$parent.openModal()">Заказать звонок</a>
                </div>
            </div>
             
            <img src="../../assets/all/x.svg" alt="" @click="show_left=false">
        </div>

        
        <div class="item__row item__ac">
            <a href="https://greenclinic.kz/ru/about" @click="dropdownShowAbout=!dropdownShowAbout" class="top__menu__item">О нас</a>
            <img class="top__menu__item__icon"  v-if="!dropdownShowAbout"  src="../../assets/all/icon_down.png" alt="">
            <img class="top__menu__item__icon top__reverse__icon" v-if="dropdownShowAbout"   src="../../assets/all/icon_down.png" alt="">
        </div>
        <div class="item__column item__ac" v-if="dropdownShowAbout">
            <a href="https://greenclinic.kz/ru/departments/poliklinika" class="top__menu__item__min">Документация</a>
        </div>

        <a href="https://greenclinic.kz" class="top__menu__item">Новости</a>
        <div class="item__row item__ac" @click="item__show=!item__show">
            <a class="top__menu__item">Отделения</a>
            <img class="top__menu__item__icon"  v-if="!item__show"  src="../../assets/all/icon_down.png" alt="">
            <img class="top__menu__item__icon top__reverse__icon" v-if="item__show"   src="../../assets/all/icon_down.png" alt="">
        </div>

        <div class="item__column item__ac" v-if="item__show">
            <a href="https://greenclinic.kz/ru/departments/poliklinika" class="top__menu__item__min">Поликлиника</a>
            <a href="https://greenclinic.kz/ru/departments/stacionar" class="top__menu__item__min">Стационар</a>
            <a href="https://greenclinic.kz/ru/departments/luchevaya-diagnostika" class="top__menu__item__min">Отделение лучевой <br> диагностики</a>
        </div>
        
        <a href="https://zakup.greenclinic.kz/" class="top__menu__item">Закупки</a>
        <a href="https://greenclinic.kz/ru/dokumentacziya" class="top__menu__item">Документация</a>
        <a href="https://greenclinic.kz/ru/contacts" class="top__menu__item">Контакты</a>
    </div>
</div>
    
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data () {
      return {
        show_left:false,
        item__show: false,
        sign_out_modal: false,
        show_desctop_menu: false,
        langs: [
            {
                type: 'kz',
                label: 'ҚАЗ',
            },
            {
                type: 'ru',
                label: 'РУС',
            },
            {
                type: 'en',
                label: 'ENG',
            },
        ],
        lang: 'ru',
        show_menu: false,
        show_mobile_menu: false,
        dropdownShow: false,
        dropdownShowAbout: false
      }
    },
    methods: {
        showDropdownAbout() {
            this.dropdownShowAbout = !this.dropdownShowAbout;
        },
        hideDropdownAbout() {
            this.dropdownShowAbout = false;
        },
        showDropdown() {
            this.dropdownShow = !this.dropdownShow;
        },
        hideDropdown() {
            this.dropdownShow = false;
        }
    },
    computed: {
        ...mapGetters(['GET_TOKEN', 'GET_USER_DATA']),
    },
    created () {
      
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;
@planshet: 1200px;

.green__main {
    max-width: 1420px;
     @media (max-width: @mobile) {
        width: 100%;
    }
     @media (max-width: @planshet) {
          width: 100%;
    }
}
.rotateimg180 {
  -webkit-transform:rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

.top__mobil {
    position:fixed;
    top: 0;
    right: -1200px;
    z-index: 10;
    background: white;
    height: 100vh;
    width: 100%;
    .top__reverse__icon {
         transform: rotate(180deg);
    }
    .top__menu__item {
        margin-bottom: 15px;
        color: #0F1721;
        font-size: 30px;
        font-family: 'MontserratRegular';
    }
    .top__menu__item__min {
        margin-bottom: 10px;
        color: #5B5B5B;
        font-size: 18px;
        font-family: 'Light';
        text-align: center;
        animation: fadein 1s;
        -moz-animation: fadein 1s; /* Firefox */
        -webkit-animation: fadein 1s; /* Safari and Chrome */
        -o-animation: fadein 1s; /* Opera */
    }
    .top__menu__item__icon {
        margin-left: 5px;
        margin-bottom: 16px;
        color: #0F1721;
        font-size: 24px;
    }
    .top__contact {
        padding: 15px;
        margin-bottom: 40px;
        svg {
            margin-right: 8px;
        }
            i {
                font-size: 32px;
                font-weight: normal;
            }
        .top__phone {
            
            a {
                font-size: 18px;
                font-family: 'MontserratBold';
            }
            a:nth-child(1) {
                color: #0F1721;
            }
            a:nth-child(2) {
                color: #85C418;
                text-decoration: underline !important;
            }

          
        }
    }
}
.slide {
    -webkit-animation: slide 0.2s forwards;
    -webkit-animation-delay: 0.2s;
    animation: slide 0.2s forwards;
    animation-delay: 0.2s;
}
@-webkit-keyframes slide {
    100% { right: 0; }
}

@keyframes slide {
    100% { right: 0; }
}


.item__hover {
    position: relative;
    a {
        font-size: 18px;
        color: #0F1721;
    }
    a:hover {
        color: #85C418;
    }
    .item__hover__label {
        cursor: pointer;
    }
}
.item__dropdown {
    width: 230px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 25px;
    text-align: center;
    position: absolute;
    
    top: 25px;
    left: 0;
    
    a {
        text-decoration: none;
        margin-bottom: 10px;
    }
    a:hover {
        color: #85C418;
    }
}



.item__jb {
    justify-content: space-between;
}
.item__100 {
    width: 100%;
}
.item__row {
    display: flex;
    flex-direction: row;
}
.item__ac {
    align-items: center;
}
.item__column {
    display: flex;
    flex-direction: column;
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
    max-width: 1420px;
}
body{
	padding-top: 140px;
	background-size: contain;
    font-size: 16px;
}

.header {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.05);
    padding: 8px 0;
  
    width: 100%;
    z-index: 10;  
}

.header__row {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: @mobile) {
        padding: 15px;
    }

    
}

.header__logo {
    text-decoration: none;
    margin-right: 50px;
    width: 123px;
    height: 60px;
    img {
        width: 113px;
        height: 60px;
    }
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
    align-items: center;
}
.header__menu {
    a {
        font-family: 'MontserratRegular';
        font-weight: normal;
        font-size: 18px;
        color: #0F1721;
        transition: all 0.5s ease;
    }
}
.header__menu .menu > li > a {
    font-family: 'MontserratRegular';
    font-weight: normal;

    color: #0F1721;
    transition: all 0.5s ease;
}
.header__menu .menu > li > a:hover {
    color: #85C418;
}
.header__menu .menu > li {
    margin: 0 10px;
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
    font-family: 'MontserratBold';
    font-size: 16px;
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
    font-family: 'MontserratSemiBold';
    font-size: 16px;
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
