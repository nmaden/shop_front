<template>
    <div class="applications">
        <p>
            Полезные приложения
        </p>
        
        <div class="mobile">
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
            <div 
                class="applications__type"
                :style="'margin-left:' + this.menu_count + 'px'"
            >
                <div 
                    class="applications__type__block"
                    v-for="applications_item in applications"
                    :key="applications_item.title"
                    ref="menu__item"
                    @click="to_link(applications_item.uri)"
                >
                    <div class="image__block">
                        <img :src="applications_item.img">
                    </div>
                    <div class="text__block">
                        <h5>
                            {{applications_item.title}}
                        </h5>
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
        applications: [
            {
                title: 'AstraBus',
                img: require('../../assets/logo/astrabus.png'),
                uri: 'https://play.google.com/store/apps/details?id=kz.itsolutions.businformator'
            },
            {
                title: 'ONAY',
                img: require('../../assets/logo/onay.png'),
                uri: 'https://play.google.com/store/apps/details?id=kz.onay'
            },
            {
                title: '2GIS',
                img: require('../../assets/logo/2gis.png'),
                uri: 'https://play.google.com/store/apps/details?id=ru.dublgis.dgismobile'
            },
            {
                title: 'Yandex GO',
                img: require('../../assets/logo/yandex.png'),
                uri: 'https://play.google.com/store/apps/details?id=ru.yandex.taxi&hl=ru'
            },
            {
                title: 'Smart Astana',
                img: require('../../assets/logo/smartAstana.png'),
                uri: 'https://play.google.com/store/apps/details?id=kz.citysoft.smartastana&hl=ru'
            },
            {
                title: 'Рахмет',
                img: require('../../assets/logo/rahmet.png'),
                uri: 'https://play.google.com/store/apps/details?id=kz.rahmet.app&hl=ru'
            },
        ]
      }
    },
    methods: {
        to_link (to) {
            window.open(to, '_blank');
        },
        scrollMenu (e) {
            e = e || window.event
            let delta = e.deltaY || e.detail || e.wheelDelta
            let menu__item = this.$refs.menu__item
            let last__menu__item = menu__item[Object.keys(menu__item)[Object.keys(menu__item).length - 1]] 
            let style__last__menu__item = window.getComputedStyle(last__menu__item)
            let offset__width = last__menu__item.offsetLeft + parseInt(style__last__menu__item.width.replace('px', ''))
            let margin__left__menu = Number(String(this.menu_count).replace('-', '')) + 1200

            if (offset__width < 1200) {
                return false
            } else {
                if (margin__left__menu > offset__width) {
                    if (delta < 0) {
                        this.menu_count += this.scrollInteval
                    } 
                } else {
                    if (this.menu_count > -1) {
                        delta > 0 ? this.menu_count -= this.scrollInteval : this.menu_count = 0;
                    } else {
                        delta > 0 ? this.menu_count -= this.scrollInteval : this.menu_count += this.scrollInteval;
                    }
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
            margin-top: 25px;
        }
    }

    .mobile {
        display: none;
        @media (max-width: @mobile) {
            display: block;
        }
        .applications__type {
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
                    img {
                        @media (max-width: @mobile) {
                            width: 50px;
                        }
                    }
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

    .desktop {
        display: block;
        position: relative;
        height: 177px;
        @media (max-width: @mobile) {
            display: none;
        }

        .applications__type {
            width: 100%;
            white-space: nowrap;
            position: absolute;

            .applications__type__block {
                width: 233px;
                border-radius: 15px;
                margin-right: 10px;
                box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1);
                background: #fff;
                cursor: pointer;
                display: inline-block;
               
                .image__block {
                    width: 85%;
                    margin: 0 auto;
                    height: 120px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-bottom: 1px solid #E8E8E8;
                    img {
                        width: 60px;
                    }
                }
                .text__block {
                    width: 85%;
                    margin: 0 auto;
                    text-align: center;
                    h5 {
                        color: #000;
                        font-style: normal;
                        font-family: "MediumMedium";
                        font-weight: 600;
                        font-size: 18px;
                        margin-top: 15px;
                        margin-bottom: 15px;
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
                    }
                }
            }
        }
    }
    
}

</style>