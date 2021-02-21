<template>
    <div class="news">

        <div class="news__row">
            <h1 >
                {{$t('news__title')}}
            </h1>
            <p class="news__yellow" @click="showAll">Посмотреть все</p>
        </div>
       

        <div class="news__block__desktop">

            <div class="news__items">

                <div class="news__item" v-for="(item,index) in news_all" :key="index">
                    <div class="news__item" @click="showDetail(item.id)" >
                        <img v-if="item.file" :src="get_api_back_end+item.file" alt="">
                        <div v-else></div>
                        <p class="news__date" v-if="item.created_at">{{convert_date(item.created_at)}}</p>
                        <p class="news__title" v-if="item.title.length>30">{{item.title.substring(0,45)+'...'}}</p>
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
        showDetail(id) {
            this.$router.push("news-detail-"+id);
        },
        convert_date(date) {
            let day = date.split(" ")[0].split("-")[2];
            let month = date.split(" ")[0].split("-")[1];
            let year = date.split(" ")[0].split("-")[0];

            return day+'.'+month+'.'+year;

        },
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
    .news__row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      
         h1 {
            cursor: pointer;
            font-weight: bold;
            font-size: 48px;
            line-height: 67px;
            font-style: normal;
            letter-spacing: -0.05em;
            color: #000000;
            font-family: 'MontserratBold';
            margin-bottom: 20px;
            @media (max-width: @mobile) {
                margin-top: 0;
            }
        }

        .news__yellow {
            color: #F5C93C;
            font-size: 18px;
            cursor: pointer;
            margin-top: 0;
            margin-right: 10px;
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
            justify-content: flex-end;
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
               font-family: "MediumMedium";
               
               color: white;
               z-index: 10;
               margin-top: 0;

               margin-left: 20px;
               font-weight: normal !important;
                @media (max-width: @mobile__min) {
                    font-size: 16px;
                }
           }
           .news__date {
               margin-top: 0;
               color: #F5C93C;
               font-size: 14px;
               text-transform: uppercase;
            
               z-index: 10;
               margin-left: 20px;
           

               
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