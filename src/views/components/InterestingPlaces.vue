<template>
    <div class="places">
        <p>
            Интересные места
        </p>

        <div class="mobile">
            <div class="places__type">
                <div 
                    class="places__type__block__parrent"
                    v-for="places_item in places"
                    :key="places_item.title"
                    @click="to_link(places_item.uri)"
                >
                    <div 
                        class="places__type__block"
                        :style="'background: url(' + places_item.img + ') no-repeat; background-size: cover'"
                    >
                        <div class="header">
                        </div>
                        <div class="center__logo">
                            <img :src="places_item.sub_logo">
                        </div>
                        <div class="footer">
                            <h4>
                                {{places_item.title}}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div 
            class="desktop"
            @mousewheel="scrollMenu" 
            @mousemove="scrollBodyOver" 
            @mouseleave="scrollBodyLeave" 
        >
            <div class="places__type" :style="'margin-left:' + this.menu_count + 'px'">
                <div 
                    class="places__type__block__parrent"
                    v-for="places_item in places"
                    :key="places_item.title"
                    @click="to_link(places_item.uri)"
                >
                    <div 
                        class="places__type__block"
                        ref="menu__item"
                        :style="'background: url(' + places_item.img + ') no-repeat; background-size: cover'"
                    >
                        <div class="header">
                        </div>
                        <div class="center__logo">
                            <img :src="places_item.sub_logo">
                        </div>
                        <div class="footer">
                            <h4>
                                {{places_item.title}}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import disableScroll from 'disable-scroll'

export default {
    data () {
      return {
        menu_count: 0,
        scrollInteval: 60,
        places: [
            {
                title: 'УЗНАЙТЕ БОЛЬШЕ О КАЗАХСТАНЕ НА kazakhstan.travel',
                img: require('../../assets/all/pr_img0.png'),
                uri: 'https://kazakhstan.travel/publications/ru/15/10-must-see-landscapes-in-kazakhstan',
                sub_logo: require('../../assets/all/travelLogo.svg')
            },
            {
                title: 'ОТДЫХ НА Открытом воздухе',
                img: require('../../assets/all/pr_img1.png'),
                uri: 'https://kazakhstan.travel/publications/ru/15/10-must-see-landscapes-in-kazakhstan'
            },
            {
                title: 'АРХИТЕКТУРА',
                img: require('../../assets/all/pr_img2.png'),
                uri: 'https://kazakhstan.travel/publications/ru/108/seven-architectural-wonders-of-kazakhstan'
            },
            {
                title: 'Куда съездить',
                img: require('../../assets/all/pr_img3.png'),
                uri: 'https://kazakhstan.travel/'
            },
        ]
      }
    },
    methods: {
        to_link (to) {
            window.open(to, '_blank')
        },
        scrollMenu (e) {
            e = e || window.event
            let delta = e.deltaY || e.detail || e.wheelDelta
            let menu__item = this.$refs.menu__item
            let last__menu__item = menu__item[Object.keys(menu__item)[Object.keys(menu__item).length - 1]] 
            let style__last__menu__item = window.getComputedStyle(last__menu__item)
            let offset__width = last__menu__item.offsetLeft + parseInt(style__last__menu__item.width.replace('px', ''))
            let margin__left__menu = Number(String(this.menu_count).replace('-', '')) + 1200

            if (margin__left__menu > offset__width) {
                if (delta < 0) {
                    this.menu_count += this.scrollInteval
                } 
                this.scrollBodyLeave()
            } else {
                if (this.menu_count > -1) {
                    delta > 0 ? this.menu_count -= this.scrollInteval : this.menu_count = 0;
                } else {
                    delta > 0 ? this.menu_count -= this.scrollInteval : this.menu_count += this.scrollInteval;
                    
                }
            }
        },
        
        scrollBodyOver () {
            disableScroll.on()
        },
        scrollBodyLeave () {
            disableScroll.off()
        }
    }
}
</script>


<style scoped lang="less">
@mobile: 900px;

.places {
    width: 100%;
    margin-top: 40px;
    font-family: 'MontserratBold';
    @media (max-width: @mobile) {
        margin-top: 0px;
    }

    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 30px;
        @media (max-width: @mobile) {
            font-size: 17px;
            margin-top: 10px;
        }
    }
    
    .mobile {
        display: none;
        @media (max-width: @mobile) {
            display: block;
        }
        .places__type {
            @media (max-width: @mobile) {
                overflow-x: scroll;
                width: 100%;
                white-space: nowrap;
                display: block;
                &::-webkit-scrollbar {
                    width: 0px;
                }
            }

            .places__type__block__parrent {
                margin-right: 10px;
                overflow: hidden;
                border-radius: 15px;
                @media (max-width: @mobile) {
                    width: 185px;
                    height: 250px;
                    display: inline-block;
                    &:first-child {
                        width: 320px;
                    }
                }
                .places__type__block {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    cursor: pointer;
                    background-size: cover;
                    &:hover {
                        transition: .7s;
                        transform: scale(1.04);
                    }
                    .header {
                        position: absolute;
                        background: #FFCE03;
                        border-radius: 50%;
                        @media (max-width: @mobile) {
                            width: 10px;
                            height: 10px;
                            left: 14px;
                            top: 14px;
                        }
                    }
                    .center__logo {
                        position: absolute;
                        top: 33%;
                        left: 14px;
                        img {
                            width: 75px;
                        }
                    }
                    .footer {
                        position: absolute;
                        width: 100%;
                        @media (max-width: @mobile) {
                            bottom: 22px;
                            padding: 5px;
                        }
                        h4 {
                            font-weight: bold;
                            color: #fff;
                            text-transform: uppercase;
                            letter-spacing: -0.05em;
                            @media (max-width: @mobile) {
                                font-size: 10px;
                                line-height: 0;
                            }
                        }
                    }
                }
            }
        }
    }
    .desktop {
        display: block;
        height: 466px;
        position: relative;

        @media (max-width: @mobile) {
            display: none;
        }
        .places__type {
            width: 100%;
            white-space: nowrap;
            position: absolute;
            .places__type__block__parrent {
                width: 370px;
                margin-right: 10px;
                height: 466px;
                overflow: hidden;
                border-radius: 15px;
                display: inline-block;
                &:first-child {
                    width: 700px;
                }
              
                .places__type__block {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    cursor: pointer;
                    background-size: cover;
                    transition: .7s;

                    &:hover {
                        transition: .7s;
                        transform: scale(1.04);
                    }
                    .header {
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        left: 30px;
                        top: 33px;
                        background: #FFCE03;
                        border-radius: 50%;
                    }
                    .center__logo {
                        position: absolute;
                        top: 45%;
                        left: 30px;
                    }
                    .footer {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        padding: 20px;
                        h4 {
                            font-weight: bold;
                            font-size: 20px;
                            line-height: 29px;
                            color: #fff;
                            text-transform: uppercase;
                            letter-spacing: -0.05em;
                        }
                    }
                }
            }
        }
    }
    
}

</style>