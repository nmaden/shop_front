<template>
    <div class="main">
        <Header />
        <div class="main__base__margin">
            <Nav />
            <div class="news">
                <div class="news__detail">


                    <div class="news__block">
                        <p class="news__date">{{convert_date(news[0].created_at)}}</p> 
                        <p class="news__title">{{news[0].title}}</p>

                        <div class="news__image">
                           <img  v-if="news[0].file" :src="get_api_back_end+news[0].file" alt="">
                        </div>

                    
                        <div v-if="news.text && news.text.includes('/*')">
                          <div v-for="(i, index) in news.text.split('/*')" :key="index" >
                                    <div v-if="i.length<=2"><br></div>
                                    <p   v-else>{{i}}</p>
                          </div>  
                        </div>
                        <p v-else>
                          {{news.text}}
                        </p>
                    </div>
                    <div class="eq__column news__right__side">
                          <p class="rq__mb--l news__left__title">Другие новости</p>

                          <div class="news__items" >
                            
                              <div class="eq__column news__item  rq__mb--l"  v-for="(item,index) in news_all" :key="index">

                                  <div class="eq__column news__item news__item__line" @click="show_new(item.id)">

                                    <div class="eq__row eq__ac eq__mb__xs">
                                        <p class="news__date" v-if="item.created_at">{{convert_date(item.created_at)}}</p>
                                        <div class="eq__row eq__ac news__view">
                                            <img src="../../assets/icons/eye.svg" alt="">
                                            <p v-if="item.view_count">{{item.view_count}}</p>
                                            <p v-else>0</p>
                                        </div>
                                    </div>
                    
                                    <p class="rq__mb--xs news__item__title">{{item.title}}</p>

                                    <div class="eq__row">
                                        
                                       <!-- <div class="news__owner rq__mb--xs eq__mr--xl news__view">
                                          <q-icon class="eq__table--eye" name="mdi-eye-outline"></q-icon>
                                          <p v-if="item.view_count">{{item.view_count}}</p>
                                          <p v-else>0</p>
                                      </div> -->
                                      <!-- <div class="news__owner rq__mb--xs ">
                                        <q-icon name="mdi-account-outline"></q-icon>
                                      </div> -->
                                     
                                    </div>
                                    

                                    <p class="rq__mb--s news__descr"> {{ item.text  }}</p>

                                   
                                  </div>
                              </div>
                          </div>
                      </div>


                </div>

                

            </div>

            <Applications />
        </div>
        <Footer />
        
         <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <div 
                    class="support__service"
                    v-bind="attrs"
                    v-on="on"
                    @click="supportModal"
                >
                    <img src="../../assets/icons/call__icon.svg" alt="">
                </div>
            </template>
            <span>
                {{$t('fead__back__toast')}}
            </span>
        </v-tooltip>


        <v-dialog
            v-model="support"
            max-width="570"
        >
            <div class="support__modal">
                <div class="support__modal__header">
                    <h2>
                       {{$t('modal__title')}}
                    </h2>
                    <p class="description">
                       {{$t('modal__feadback')}}
                    </p>

                    <a target="_blank" href="mailto:support@eqonaq.kz" class="support__description"> {{$t('support__description__one')}} support@eqonaq.kz </a>
                    <a target="_blank" href="tel:+7 7172 79-04-39" class="support__description" >{{$t('support__description__two')}} +7/7172/79-04-39</a>
                </div>
                <div class="support__modal__form">
                    <div class="form__group">
                        <label for="name">{{$t('notif__input__label__name')}}</label>
                        <input type="text" v-model.trim="name" id="name">
                        <div class="error__text" v-if="$v.name.$dirty && !$v.name.required">{{$t('modal_name_error')}}</div>
                    </div>
                    <div class="form__group">
                        <label for="phone">{{$t('notif__input__label__phone')}}</label>
                        <input type="text" v-model.trim="phone" id="phone">
                        <div class="error__text" v-if="$v.phone.$dirty && !$v.phone.required">{{$t('modal_phone_error')}}</div>
                        <div class="error__text" v-if="!$v.phone.numeric">Поле 'Телефон' введите только цифры</div>
                    </div>
                    <div class="form__group">
                        <label for="message">{{$t('modal_title_message')}}</label>
                        <textarea id="message" v-model.trim="message"></textarea>
                        <div class="error__text" v-if="$v.message.$dirty && !$v.message.required">{{$t('modal_message_error')}}</div>
                    </div>
                    <div class="form__group__button">
                        <button @click="sendFeadback">
                            {{$t('forgot__password__page__btn')}}
                        </button>
                    </div>
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<script>
import Header from '../components/Header'

import Footer from '../components/Footer'

import Applications from '../components/Applications'
import Nav from '../components/NavHeader'
import { required, numeric } from 'vuelidate/lib/validators'

export default {
    components: {
        Header, Footer,Nav,Applications
    },
    validations: {
        phone: {
            required, 
            numeric
        },
        name: {
            required, 
        },
        message: {
            required, 
        }
    },
    data () {
        return {
            news_all: null,
            news: null,
            support: false,
            phone: '',
            message: '',
            name: '',
           
        }
    },
    computed: {
      get_api_back_end() {
        return this.$API_URL.substring(0,this.$API_URL.length-4);
      },
    },
    mounted() {
        this.show_new(this.$route.params.id);
        this.all_news();
    },
    methods: {

        all_news() {
            this.$axios({ 
                method: 'get',
                url: this.$API_URL + 'v2/' + 'news/all', 
            })
            .then((response) => {
                this.news_all = response.data.data
            })
            .catch((error) => {
                console.warn(error);
            });  
        },
        convert_date(date) {
            let day = date.split(" ")[0].split("-")[2];
            let month = date.split(" ")[0].split("-")[1];
            let year = date.split(" ")[0].split("-")[0];

            return day+'.'+month+'.'+year;
        },
        show_new(id) {
             this.$axios({ 
                    method: 'get',
                    url: this.$API_URL + 'v2/' + 'news/detail?id='+id, 
                })
                .then((response) => {
                    this.news = response.data.data
                    this.add_view_count(id);
                })
                .catch((error) => {
                    console.warn(error);
                }); 
        },
        add_view_count(id) {
         
            this.$axios({ 
                method: 'post',
                url: this.$API_URL + 'v2/' + 'news/add/count',
                data: {
                    id:id
                }
            })
            .then(() => {
                
                this.all_news();
            })
            .catch((error) => {
                console.warn(error);
            }); 
        },
        showNews() {

        },
        showDetail() {
            this.$route.push("news-detail");
        },
        supportModal () {
            this.support = true
        },
        sendFeadback () {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return 
            } else {
                this.$axios({ 
                    method: 'post',
                    url: this.$API_URL + this.$API_VERSION + 'feedback/main_page', 
                    data: {
                        name: this.name,
                        phone: this.phone,
                        message: this.message,
                    }
                })
                .then((response) => {
                    this.support = false
                    this.$toast.open({
                        message: response.data.message,
                        type: 'success',
                        position: 'bottom',
                        duration: 5000,
                        queue: true
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });              
            }
        }
    }
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
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
       
        .news__tit {
            font-size: 48px;
        }
        .news__yellow {
            color: #F5C93C;
            font-size: 18px;
            cursor: pointer;
        }
    }

    .news__detail {
        display: flex;
        flex-direction: row;

        .news__right__side {
            @media (max-width: @mobile) {
               display: none;
            }
            @media (max-width: @planshet) {
               width: 300px;
            }
            .news__left__title {
                margin-top: 0;
            }
            
        }
        .news__items {
            overflow-y: auto;
            height: 700px;
            .eq__mb__xs {
                margin-bottom: 10px;
            }
            .eq__row {
                display: flex;
                flex-direction: row;
                .news__view {
                    img {
                        margin-right: 5px;
                    }
                    p {
                        font-size: 12px;
                        margin-bottom: 0;
                    }
                }
                .news__date {
                    margin-bottom: 0;
                    margin-right: 10px;
                }
            }
            .eq__ac {
                align-items: center;
            }
            .news__item__line {
                border-bottom: 1px solid #EAF3F9;
            }
            .news__item {
                transition: all 5s;
                cursor: pointer;
                
                padding-bottom: 10px;
                p {
                    margin-top: 0;
                }
                .news__date {
                    color: #ccc;
                    font-family: 'MediumExtraLight' !important;
                    font-size: 14px;
                }
                .news__item__title {
                    color: #2C2C2C;
                    font-weight: 700;
                    font-size: 16px;
                }
                .news__item__title:hover {
                    color: #F5C93C;
                }
                
                .news__title:hover {
                    color: var(--main-text-hover-color);
                }
                .news__descr {
                    font-family: 'MediumExtraLight' !important;
                    color: #808080;
                    font-size: 14px;
                    overflow-y: auto;
                    max-height: 80px;
                    -webkit-mask-image: -webkit-gradient(linear,left 10%,left bottom,from(black),to(rgba(0,0,0,0)));
                }
                .news__descr::-webkit-scrollbar {
                    width: 7px;
                }

                .news__descr::-webkit-scrollbar-track {
                    border-radius: 2px;
                    background-color: white;
                }
                .news__descr::-webkit-scrollbar-thumb {
                    background-color: white;
                    border-radius: 2px;
                    height: 24px;
                }
            }
        }
        .news__items::-webkit-scrollbar {
            width: 7px;
        }

        .news__items::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: white;
        }
        .news__items::-webkit-scrollbar-thumb {
            background-color: white;
            border-radius: 2px;
            height: 24px;
        }

        .news__block {
            display: flex;
            flex-direction: column;
            margin-right: 20px;
        }
        .news__date {
            color: #F5C93C;
            font-size: 20px;
            margin-top: 0;
            @media (max-width: @mobile) {
                font-size: 16px;
            
            }
        }
        .news__title {
            font-size: 36px;
            margin-bottom: 35px;
            margin-top: 0;
            line-height: 1;
            @media (max-width: @mobile) {
                font-size: 22px;
            
            }   
        }
        .news__image {
            margin-bottom: 35px;
            width: 1140px;
            height: 363px;
            img {
                width: 1140px;
                height: 363px;
                object-fit: cover;
                border-radius: 15px;
                @media (max-width: @mobile) {
          
                width: 100%;
                }
                @media (max-width: @planshet) {
            
                    width: 100%;
                }
            }
            @media (max-width: @mobile) {
          
                width: 100%;
            }
            @media (max-width: @planshet) {
          
                width: 100%;
            }
        }
        .news__text {
            font-size: 16px;
            margin-top: 0;
            font-family: "MediumExtraLight";
            letter-spacing: 1px;
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
}

.support__modal {
    width: 100%;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    .support__modal__header {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        h2 {
            margin: 0;
           font-family: "MontserratBold";
           font-size: 30px;
           margin-top: 25px;
           line-height: 36,57px;
        }
        a {
            margin: 0;
            font-family: "MediumMedium";
            font-size: 14px;
            line-height: 17px;
            margin-top: 15px;
            text-decoration: none;
        }
        .description {
            font-weight: 400;
        }
        .support__description {
            font-weight: 700;
            color: #000000;

        }
    }
    .support__modal__form {
        width: 100%;
        margin-top: 15px;
        .form__group {
            width: 100%;
            margin-bottom: 10px;
            .error__text {
                color: red;
                font-size: 12px;
                margin-bottom: 10px;
            }
            label {
                font-family: "MediumMedium";
                font-size: 14px;
                line-height: 17px;
                color: #000;
            }
            input {
                width: 100%;
                background: #FFFFFF;
                border: 2px solid #000000;
                border-radius: 10px;
                outline: none;
                height: 46px;
                padding: 10px;
            }
            textarea {
                width: 100%;
                background: #FFFFFF;
                border: 2px solid #000000;
                border-radius: 10px;
                outline: none;
                height: 126px;
                resize: none;
                padding: 10px;
            }
        }
        .form__group__button {
            width: 100%;
            text-align: center;
            button {
                width: 163px;
                outline: none;
                height: 50px;
                background: #FDE88D;
                border: 3px solid #FDE88D;
                border-radius: 30px;
                font-size: 16px;
                font-family: "MediumMedium";
                letter-spacing: -0.05em;
                &:hover {
                    opacity: .7;
                }
            }
        }
    }
}

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