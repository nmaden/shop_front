<!-- template -->
<template>
  <div class="main">
        <div class="header">
            <div class="header__menu header__tab">
                <p class="header__logo__text" @click="$router.push('/')">KENES</p>
                <!-- <router-link to="#">О нашем магазине</router-link>
                <router-link to="#">О доставке</router-link>
                <router-link to="#">Об оплате</router-link> -->
                <!-- <router-link to="#">Отзывы</router-link> -->
            </div>
            <div class="header__menu">
                <!-- <p class="header__purple">Перезвоните нам</p> -->
                <!-- <p class="header__purple">Задать вопрос</p> -->

                <div class="item__row item__ac header__basket">

                    <div class="div header__count" @click="openB">
                        <div class="header__round item__abs">
                            <span>{{all_count}}</span>
                        </div>
                        <i class="mdi mdi-shopping"></i>
                    </div>
                    
                    <div class="header__menu__last">
<!--                        <p class="header__purple">8 777 777 777</p>-->
                        <p class="header__gray">по будням с 9:00 - 21:00</p>
                    </div>
                </div>
                
            </div>
        </div>

        <Slider/>


        <div class="item__column main__links">
          <a @click="openBlank(1)">
            <i class="mdi mdi-whatsapp"></i>
          </a>
          <a @click="openBlank(2)">
            <i class="mdi mdi-instagram"></i>
          </a>
        </div>


        <div class="main__row" style="margin-top: 20px">
            <div class="main__block">
               

                <div class="main__block__title">
                    <div class="main__block__round"></div>
                    <p>Категории</p>
                </div>
                <div class="item__column">
                <div class="main__block__categories" v-if="!subcategory && showLoaderCategory">
                        <div class="main__block__category" v-for="(i,j) in 10" :key="j">
                            <v-skeleton-loader type="card-avatar" ></v-skeleton-loader>     
                        </div>      
                </div>
                <div class="main__block__categories" v-if="!subcategory && !showLoaderCategory">
                      <div  v-for="(item,index) in categories" :key="index">
                        <div class="main__block__category" >
                          <p @click="openSubCategory(item,item.id,categories)">{{item.name}}</p>
                        </div>
                      </div>

                </div>    
                <i class="mdi mdi-keyboard-backspace main__category__back" v-if="!subcategory"></i>
                </div>
                <div class="main__block__categories" v-if="subcategory">
                    <div class="item__column">
                        <div class="item__row main__block__bread">  
                            <p  class="main__link" v-for="(link,l) in bread" :key="l" @click="openBread(link.id,l)">{{ link.name+' / '}}</p>
                        </div>
                        <div class="item__row">
                        <div class="main__block__category" v-for="(item,index) in nested" :key="index" >
                            

                            <p @click="openSubCategory(item,item.id,nested)">{{item.name}}</p>
                        </div>
                        </div>
                        <i class="mdi mdi-keyboard-backspace main__category__back"></i>
                    </div>
                </div>



                <router-view :openBasket="openBasket"></router-view>

<!--                <div class="main__block__title" >-->
<!--                    <div class="main__block__round"></div>-->
<!--                    <p>О нашем магазине</p>-->
<!--                </div>-->
<!--                <div class="main__block__description">-->
<!--                    <p class="main__block__description">-->
<!--                      Более 15 лет мы ответственно работаем вместе с несколькими тщательно отобранными фермерскими хозяйствами центральной части-->
<!--                      Казахстана и вместе производим по-настоящему лучшее мясо для наших покупателей по доступной цене.-->
<!--                    </p>-->
<!--                </div>-->

<!--                <div class="main__block__title">-->
<!--                    <div class="main__block__round"></div>-->
<!--                    <p>Почему с нами работают?</p>-->
<!--                </div>-->


<!--                <div class="main__block__pluses">-->

<!--                    <div class="main__block__plus center__column">-->
<!--                        -->
<!--                       -->
<!--                        <div class="main__block__star center__row__g">-->
<!--                            <i class="mdi mdi-shield-star-outline"></i>-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <i class="fas fa-truck"></i>-->
<!--                        </div>-->
<!--                        <p class="plus__title">Бесплатная доставка до квартиры</p>-->
<!--                        -->
<!--                        <p class="plus__description">-->
<!--                            Бесплатно выезжаем на обьект и замеряем параметры изделия-->
<!--                        </p>-->
<!--                    </div>-->

<!--                    <div class="main__block__plus center__column">-->
<!--                        -->
<!--                        <div class="main__block__star center__row__g">-->
<!--                             <i class="mdi mdi-shield-star-outline"></i>-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <i class="fas fa-cubes"></i>-->
<!--                        </div>-->
<!--                        <p class="plus__title">Качественная фурнитура и компоненты</p>-->
<!--                       -->
<!--                        <p class="plus__description">-->
<!--                            Идеальная фурнитура и компоненты для сборки-->
<!--                        </p>-->
<!--                    </div>-->
<!--                    <div class="main__block__plus center__column">-->
<!--                        -->
<!--                        <div class="main__block__star center__row__g">-->
<!--                             <i class="mdi mdi-shield-star-outline"></i>-->
<!--                        </div>-->
<!--                        <div>-->
<!--                            <i class="fas fa-truck"></i>-->
<!--                        </div>-->
<!--                        <p class="plus__title">Бесплатная доставка до квартиры</p>-->
<!--                        -->
<!--                        <p class="plus__description">-->
<!--                            Бесплатно выезжаем на обьект и замеряем параметры изделия-->
<!--                        </p>-->
<!--                    </div>-->
<!--                    <div class="main__block__plus center__column">-->
<!--                        <div class="main__block__star center__row__g">-->
<!--                             <i class="mdi mdi-shield-star-outline"></i>-->
<!--                        </div>-->
<!--                         <div>-->
<!--                            <i class="fas fa-cubes"></i>-->
<!--                        </div>-->
<!--                        <p class="plus__title">Качественная фурнитура и компоненты</p>-->
<!--                        -->
<!--                        <p class="plus__description">-->
<!--                            Идеальная фурнитура и компоненты для сборки-->
<!--                        </p>-->
<!--                    </div>-->

<!--                </div>-->



            </div>
        </div>

        <div class="footer">
            <div class="footer__first">
                <p class="footer__phone"></p>

                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                </div>

                <p></p>

                <div>
                    <p></p>
                    <p></p>
                </div>

                <div>
                    <p></p>
                    <div>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
            <div class="footer__first"></div>
            <div class="footer__first"></div>
            <div class="footer__first"></div>

        </div>
  </div>  
</template>

<!-- scripts -->
<script>
import Slider from "./Slider";

    export default {
      components: {
        Slider
      },
        data() {
            return {
                amount: 0,
                orders:[],
                count: 0,
                all_count: 0,
                isActive: true,
                openBasket: false,
                subcategory: false,
                showLoaderCategory:true,
                categories: [],
                nested:  [],
                bread: [],
                bread_categories: []
                
            }
        },

        mounted() {
            if(localStorage.getItem("goods")) {
                this.all_count =  JSON.parse(localStorage.getItem("goods")).length;
            }
            this.getCategories();   
           
    
        },
        methods: {
              openBlank(type) {
                  if(type==1) {
                    window.open('https://www.instagram.com/kenes_mebel_aktobe/','_blank')
                  }else {
                    window.open('https://wa.me/+77762906435','_blank')
                  }
              },
              getCount() {
                this.all_count =  JSON.parse(localStorage.getItem("goods")).length;
              },
             getCategories(){
                
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/get/categories',  config)
                .then(res => {
                    this.categories = res.data
                    this.showLoaderCategory = false;
                })
            },
            openBread(id,index) {       
              this.nested = this.bread_categories[index];
              this.bread = this.bread.filter((item) => item.id !== id);

              this.bread.length = index;
              if(index==0) {
                this.$router.push('/').catch(()=>{});
                this.bread_categories = [];
              }

            },
            openSubCategory(item,id,before) {
              item.active = true;
              this.$router.push('/category/'+id).catch(()=>{});
              let obj = this.categories.filter((item) => item.id === id);
              if(obj.length==0) {
                obj = this.nested.filter((item) => item.id === id);
                if(!obj) {
                  this.$router.push('/category/'+id).catch(()=>{});
                }
              }
              if(obj[0].children.length!=0) {
                  this.bread.push(obj[0]);
                  this.bread_categories.push(before);

                  this.nested = obj[0].children;
                  this.subcategory = true;
              }
              else {
                this.$router.push('/category/'+id).catch(()=>{});
              }
            },
            openB() {
                this.$router.push("/basket");
            },
        },
        get_api_back_end() {
          return process.env.BACK_END;
        },
    }
    
</script>

<style lang="scss">

//#449DED;

p,a,input,.v-select__selections,v-text-field__slot,label {
    font-family: "MontserratRegular" !important;
}
p {
    margin-bottom: 0 !important;
}
.item__abs {
    display: flex;
    justify-content: center;
    align-items: center;
}
.item__column {
    display: flex;
    flex-direction: column;
}
.item__ac {
    align-items: center;
}
.item__row {
    display: flex;
    flex-direction: row;
}
.main__column {
    display: flex;
    flex-direction: column;
}

.v-image {
  @media(max-width: 900px) {
    height: unset !important;
  }
}
    .product__order {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        padding: 10px;
        margin-top: 10px;
        border-radius: 20px;
        width: 150px;
        justify-content: center;
        background-color: var(--main-kenes-blue);
        @media (max-width: 900px) {
          width: 100%;
          padding: 7px;

        }
        i {
            margin-right: 10px;
            font-size: 16px;
            color: white;
        }
        p {
            font-size: 14px;
            color: white;
            font-weight: bold;
            @media (max-width: 900px) {
             font-size: 12px;

            }
        }
    }
    .product__order:hover {
        opacity: 0.8;
    }
    .center__row__g {
        display: flex;
        flex-direction: row;
        align-items: center; 
        justify-content: center;
    }
    .center__column__g {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center;
    }
    .centered__row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .center__column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main {
        font-family: Lato;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        position: relative;

        .main__links {
          position: fixed;
          right: 15px;
          bottom: 40px;
          i {
            font-size: 28px;
            color: gray;
          }
          i:hover {
            opacity: 0.4;
          }
        }
        .header {
            background: white;
            position: fixed;
            top: 0;
            z-index: 2;
            width: 80%;
            
            padding: 10px 20px;
            display: flex;
            flex-direction: row;
            align-items: center;

            justify-content: space-between;
            border-bottom: 4px solid #fcfbfb;
            margin-bottom: 20px;

            @media (max-width: 1200px) {
                width: 100%;
            }
            @media (max-width: 900px) {
                width: 100%;
                padding: 10px 0;
                justify-content: space-between;
            }

        .header__menu {
            display: flex;
            flex-direction: row;
            align-items: center;
            .header__logo__text {
                cursor: pointer;
                font-size: 24px;
                font-weight: bold;
                color: #0e0c0c;
                @media (max-width: 900px) {
                    font-size: 18px;
                    padding-left: 10px;
                    font-weight: bold;
                }
            }
            a {
                cursor: pointer;
                margin-right: 10px;
                text-decoration: none;
            }
            a:hover {
                color: var(--main-kenes-text-color);
            }
            .header__basket {
                .header__count {
                    cursor: pointer;
                    position: relative;
                    .header__round {
                        width: 15px;
                        height: 15px;
                        border-radius: 7.5px;
                        background: #a5c137;
                        position: absolute;
                        right: -10px;
                        top: 0px;
                        span {
                            line-height: 1;
                            font-size: 12px;
                            color: white;
                        }
                        
                    }
                }
              
                i {
                    font-size: 24px;
                    color: gray;
                }
                i:hover {
                    opacity: 0.8;
                }
            }
            .header__menu__last {
                margin-left: 20px;
                @media (max-width: 900px) {
                    padding: 10px 15px 10px 0;
                    margin-left: 20px;
                }
            }
            .header__purple {
                cursor: pointer;
                margin-right: 40px;
                text-decoration: none;
                border-bottom: 2px solid white;
                @media (max-width: 900px) {
                    font-size: 14px;
                }
            }
            .header__purple:hover {
                color: var(--main-kenes-text-color);
                border-bottom: 2px solid var(--main-kenes-text-color);
            }
            .header__gray {
                color: gray;
                font-size: 14px;
            }

        }
        .header__tab {
                       
            @media (max-width: 900px) {
            
            }
        }
     
        }
        .main__row {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            .main__actions {
                width: 28%;
                display: flex;
                flex-direction: column;
                align-items:center;

                .main__actions__title {
                    cursor: pointer;
                    font-size: 30px;
                    font-weight: 900;
                    margin-bottom: 20px;
                    align-self: center;
                }
                .main__sale {
                    margin: 0 20px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 20px 30px;
                    height: 230px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    background-color: var(--main-kenes-text-color);
                    .main__sale__title {
                        color: white;
                        font-size: 32px;
                        margin-bottom: 20px;
                        font-weight: 700;
                        
                    }
                    .main__sale__button {
                        border-radius: 10px;
                        border:none;
                        outline: none;
                        padding: 10px 20px;
                        width: 120px;
                        background: #a7c23b;

                        i {
                            color: white;
                            margin-right: 4px;
                        }
                        p {
                            font-weight: 400;
                            font-size: 12px;
                            color: white;
                            text-transform: uppercase;
                        }
                    }
                    .main__sale__mini {
                        font-size: 12px;
                        color: white;
                    }
                }
            }

            .main__block {
                width: 80%;
                display: flex;
                flex-direction: column;
                 @media (max-width: 900px) {
                    width: 100%;
                  
                }
                .main__block__header {
                    margin-bottom: 20px;
                    @media (max-width: 900px) {
                        text-align: center;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    
                    }
                }
                .main__filter {
                    font-size: 32px;
                    color: #000;
                    margin-left: 15px;
                    cursor: pointer;
                }
                .main__filter:hover {
                    opacity: 0.8;
                }
                .main__block__search {
                    width: 97%;
                    border-radius: 10px;
                    background-color: #f5f5f5;
                    padding: 10px;
                    padding-left: 20px;
                    @media (max-width: 900px) {
                        width: 90%;
                        align-self: center;
                    }
                
                    ::placeholder {
                        color:gray;
                    }
                    i {
                        color: gray;
                    }
                    input {
                        color: gray;
                        outline: none;
                        width: 400px;
                        padding: 10px;
                        border: none;
                        background-color: #f5f5f5;
                        @media (max-width: 900px) {
                            width: 90%;
                        }
                    }
                }
                .main__next {
                    cursor: pointer;
                    background: var(--main-kenes-blue);
                    padding: 10px;
                    margin-bottom: 20px;
                    border-radius: 20px;
                    color: white;
                    width: 200px;
                    font-weight: bold;
                    align-self: center;
                }
                .main__next:hover {
                    opacity: 0.8;
                    color: black;
                }
                .main__block__title {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 20px;
                    color: #333;
                    font-size: 28px;
                    font-weight: bold;
                    
                    @media (max-width: 900px) {
                        font-size: 22px;
                        width: 90%;
                        align-self: center;
                    }
                    .main__block__round {
                        width: 16px;
                        height: 16px;
                        border-radius: 8px;
                        background-color: var(--main-kenes-blue);
                        margin-right: 10px;
                    }
                }
                .main__block__description {
                    font-size: 18px;
                    color: #ccc;
                    margin-bottom: 40px;
                    @media (max-width: 900px) {
                        width: 90%;
                        overflow-x:scroll;
                        align-self: center;
                    }

                }

                

                .main__block__categories::-webkit-scrollbar {
                    height: 5px;
                }

                .main__block__categories::-webkit-scrollbar-track {
                    border-radius: 2px;
                    background-color: transparent;
                }
                .main__block__categories::-webkit-scrollbar-thumb {
                    background-color: transparent;
                    border-radius: 2px;
                    height: 24px;
                    width: 50px;
                }
                .main__category__back {
                    font-size: 32px;
                    align-self: flex-end;
                    color: var(--main-kenes-blue);

                    -webkit-transform:rotate(180deg);
                    -moz-transform: rotate(180deg);
                    -ms-transform: rotate(180deg);
                    -o-transform: rotate(180deg);
                    transform: rotate(180deg);
                }
                .main__block__categories {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    overflow-x: auto;
                    margin-bottom: 20px;
                    
                  
                    .item__column {
                        width: 100%;
                    }
                    .main__link {
                        cursor: pointer;
                        color: gray;
                        font-weight: bold;
                        margin-right: 2px;
                        margin-left: 2px;
                    }
                    .main__link:hover {
                        opacity: 0.8;
                       
                    }
                    @media (max-width: 900px) {
                        width: 100%;
                        overflow-x:scroll;
                    }

                    .main__block__arrow {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        i {
                            color: #333;
                        }
                    }

                    .main__block__category {
                        cursor: pointer;
                        text-align: center;
                        width: 150px;
                        height: 120px;
                        margin-right: 10px;
                        margin-top: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        border-radius: 5px;
                        background-color: #f5f5f5;
                        p {
                            font-weight: bold;
                            color: var(--main-kenes-blue);
                        }
                        p:hover {
                            opacity: 0.8;
                        }
                        @media (max-width: 900px) {
                            padding: 10px 40px 10px 40px;
                            margin-bottom: 0;
                            margin-left: 15px;

                        }
                    }
                    .main__block__category__active {
                        background: var(--main-kenes-blue) !important;
                        color: white;
                    }
                }

                ///
                .main__select {
                    border: 1px solid #ccc;
                    padding: 15px;
                    width: 200px;
                }
                .main__block__products {
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 20px;
                    @media(max-width: 900px) {
                        width: 90%;
                        align-self: center;
                        justify-content: space-between;
                    }
                    .main__block__product:hover {
                      box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
                    }
                    .main__block__product {
                        cursor: pointer;
                        width: 266px;
                        border-radius: 5px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        background-color: #f5f5f5;
                        padding: 20px;
                        margin-right: 40px;
                        margin-bottom: 20px;
                        position: relative;
                        // box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
                        @media(max-width: 900px) {
                            width: 48%;
                            margin: 0;
                            margin-bottom: 20px;
                            padding: 15px;
                            
                        }
                        .main__empty {
                          font-size: 120px;
                          color: #ccc;
                          @media(max-width: 900px) {
                            font-size: 60px;
                          }
                        }
                        .main__empty__text {
                          color: #ccc !important;
                        }
                        .v-skeleton-loader--is-loading {
                                width: 100%;
                        }
                        .product__item {
                            width: 90%;
                            align-self:center;
                        
                        }
                        .product__sale {
                            position: absolute;
                            left: 20px;
                            top:20px;
                            margin: 10px;
                            text-align: center;
                            padding: 2px 8px;
                            border-radius: 5px;
                            background-color: rgb(115, 190, 111);
                            i {
                                color: white;
                            }
                            p   {
                                color: white;
                                font-size: 12px;
                                font-weight: bold;
                            }
                        }
                        .product__images {
                            cursor:pointer;
                            display: flex;
                            flex-direction: column;
                            
                            background-color: white;
                            width: 100%;
                            height: 250px;
                            border-radius: 10px;
                            margin-bottom: 20px;
                            position:relative;

                            @media(max-width: 900px) {
                              height: unset;
                            }
                            .product__slider {
                                width: 100%;
                                height: 250px !important;
                                @media(max-width: 900px) {
                                  height: 100px !important;
                                }
                                img {
                                  cursor: pointer;
                                }
                            }
                            .product__slider__img {
                              object-fit: cover;
                              width: 100%;
                              height: 250px;
                              border-radius: 10px;
                              @media(max-width: 900px) {
                                height: 100px;
                              }
                            }
                            @media(max-width: 900px) {
                                height: unset;
                            }
                            .product__img {
                                //height: 250px;
                                object-fit: cover;
                                border-radius: 5px;
                                @media(max-width: 900px) {
                                   height: 150px;
                                }
                            }
                            .product__levels {
                                
                                display: flex;
                                flex-direction: row;
                                align-self: center;
                                position: absolute;
                                bottom: 10px;
                                .product__level {
                                    width: 16px;
                                    height: 16px;
                                    border-radius: 8px;
                                    background-color: #f5f5f5;
                                    margin: 5px;
                                }
                                .product__level__active {
                                    background-color: #a5c137 !important;
                                }
                            }

                        }
                        .product__has {


                        }
                        .product__has__yellow {

                        }
                        .product__name {
                            cursor: pointer;
                            color: var(--main-kenes-blue);
                            font-size: 16px;
                            font-weight: bold;
                            margin-bottom: 5px;
                            @media(max-width: 900px) {
                              font-weight: bold;
                              font-size: 16px;
                            }
                            @media(max-width: 320px) {
                              font-weight: bold;
                              font-size: 14px;
                            }
                        }
                        .product__name:hover {
                          opacity: 0.7;
                        }
                        .product__size {
                            font-size: 14px;
                            color: gray;
                            margin-bottom: 10px;
                        }
                       
                        .product__prices {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            .product__price {
                                margin-right: 3px;
                                font-weight: bold;
                                font-size: 20px;
                            }
                            .product__price__sale {

                            }
                           .product__price__has__sale {
                               font-size: 16px;
                               color: gray;
                            }
                        }
                    } 
                }

                .main__block__pluses {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    @media(max-width:900px) {
                        width: 100%;
                        margin-bottom: 40px;
                        overflow-x: scroll;
                    }
                    .plus__title {
                        color: var(--main-kenes-blue);
                        font-size: 18px;
                        font-weight: 700;
                        margin-bottom: 20px;
                    }
                    .plus__description {
                        @media(max-width:900px) {
                            width: 290px;
                      
                        }  
                    }
                  
                    .main__block__plus {
                        width: 200px;
                        border-radius: 10px;
                        padding: 20px;
                        background-color: #f7f6f7;
                        text-align: center;
                        @media(max-width:900px) {
                            width: 100%;
                            margin-right: 20px;
                            margin-left: 20px;
                      
                        }

                        .fa-truck,.fa-cubes {
                            font-size: 36px;
                            align-self: center;
                            margin-bottom: 20px;
                        }
                        
                        .main__block__star {
                            align-self: flex-start;
                            width: 50px;
                            height: 50px;
                            border-radius: 25px;
                            background-color: var(--main-kenes-blue);
                            margin-bottom: 40px;
                            .fa-star,i {
                                color: white;
                                font-size: 26px;
                            }
                        }
                    }
                    // .main__block__plus:last-child {
                    //     margin-left: 0;
                    //     margin-right: 40px;
                    // }
                }
            }

            
        }
    }
</style>

