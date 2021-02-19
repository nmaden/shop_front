<template>
    <div class="news">
        <p>
            Новости
        </p>

        <div class="news__block__desktop">

            <div class="news__items">

                <div class="news__item" v-for="(item,index) in news_all" :key="index">
                    <div class="news__item" @click="showAll">
                        <img :src="get_api_back_end+item.file" alt="">
                        <p class="news__date" v-if="item.created_at">{{item.created_at}}</p>
                        <p class="news__title" v-if="item.title.length>30">{{item.title.substring(0,50)+'...'}}</p>
                        <p class="news__title" v-else>{{item.title}}</p>

                        <div class="news__black"></div>


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
        news_all: []  
      }
    },
  
    computed: {
      get_api_back_end() {
        return this.$API_URL.substring(0,this.$API_URL.length-4);
      },
    },
    methods: {
        showAll() {
            this.$router.push("/news");
        },
        to_link (to) {
            window.open(to, '_blank')
        },
        scrollMenu (e) {
            this.$scroll(e, 30)
        },
        
        scrollBodyOver () {
            disableScroll.on()
        },
        scrollBodyLeave () {
            disableScroll.off()
        },
        news() {
            this.$axios({ 
                    method: 'get',
                    url: this.$API_URL + 'v2/' + 'news/short', 
                })
                .then((response) => {
                    this.news_all = response.data.data.data
                })
                .catch((error) => {
                    console.warn(error);
                });   
        }
    },
    mounted() {
        this.news();
    },
}
</script>


<style scoped lang="less">
@mobile: 900px;
@mobile__min: 375px;
@planshet: 1200px;



.news  {
    width: 100%;
    margin-top: 40px;
    font-family: 'MontserratBold';
    

    .news__detail {
        .news__block {
            display: flex;
            flex-direction: column;
        }
        .news__date {
            color: #F5C93C;
            font-size: 24px;
            margin-bottom: 15px;
        }
        .news__title {
            font-size: 36px;
            margin-bottom: 35px;
            margin-top: 0;
            line-height: 1;
        }
        .news__image {
            margin-bottom: 35px;
            width: 1140px;
            height: 363px;
            img {
                width: 1140px;
                height: 363px;
                object-fit: cover;
                border-radius: 10px;
            }
        }
        .news__text {
            font-size: 16px;
            margin-top: 0;
        }
    }
    @media (max-width: @mobile) {
        margin-top: 0px;
    }
    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 60px;
        @media (max-width: @mobile) {
            font-size: 17px;
            margin-top: 10px;
        }
    }

    .news__items {

        display: flex;
        flex-wrap: wrap;
        @media (max-width: @mobile) {
            width: 100%;
            justify-content: center;
        
        }
        .news__item:hover {
            transform: scale(1.02);
            transition: 0.7s;
        }
        .news__item {
            cursor: pointer;
            width: 387px;
            height: 288px;
            

            margin-right: 13px;
            margin-bottom: 20px;

            display: flex;
            flex-direction: column;
            position: relative;
            transition:  .0.7s;
          
            @media (max-width: @mobile) {
                width: 100%;
                margin-right: 0;
            }
            @media (max-width: @planshet) {
                width: 100%;
                margin-right: 0;
            }
           img {
             object-fit: cover;
             width: 387px;
             height: 288px; 
             border-radius: 20px;
             position: absolute;
             top: 0;
            @media (max-width: @mobile) {
                width: 100%;
            }
            @media (max-width: @planshet) {
                width: 100%;
            }
            
           }
          
          
           .news__black {
               background-color: black;
               width: 387px;
               height: 288px; 
               border-radius: 20px;
               opacity: 0.4;
               position: absolute;
               top: 0;

                @media (max-width: @mobile) {
                    width: 100%;
                }
                @media (max-width: @planshet) {
                    width: 100%;
                }
           }
           .news__title {
               line-height: 1;
               font-size: 18px;
               text-transform: uppercase;

               position: absolute;
               bottom: 10px;
               left: 25px;
               right: 10px;
               color: white;
               z-index: 10;
               font-weight: normal !important;
                @media (max-width: @mobile__min) {
                    font-size: 16px;
                }
           }
           .news__date {
               position: absolute;
               color: #F5C93C;
               font-size: 14px;
               text-transform: uppercase;
               bottom: 46px;
               left: 25px;
               z-index: 10;

               
           }
        }

    }
    
}


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
        margin-top: 60px;
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
        height: 485px;
        position: relative;
        @media (max-width: @planshet) {
            width: 100%;
            height: 480px;
            &::-webkit-scrollbar {
                width: 0px;
            }
        }
        overflow-x: scroll;
        overflow-y: hidden;
        &::-webkit-scrollbar {
            width: 0px;
        }
        @media (max-width: @mobile) {
            display: none;
        }
        .places__type {
            width: 100%;
            white-space: nowrap;
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