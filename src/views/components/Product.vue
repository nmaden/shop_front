<template>
    <div class="item__column" style="width: 100%;">
    <div class="main__bottom item__column item__ac " v-if="description.name" >
        
        <div class="main__block__title product__title">
            <div class="main__block__round"></div>
            <p>{{description.name}}</p>
        </div>

      <div class="product product__row">

          <div class="product__column produc__column__c product__gallery">
              <div class="product__item product__column">
                  <!-- <div class="product__sale">
                    <p>%</p>
                  </div> -->
                
                  <img v-if="!description.corousel_index"  :src="'http://127.0.0.1:8000'+description.images[0].image_path"  >
                  <img v-else :src="'http://127.0.0.1:8000'+description.images[description.corousel_index].image_path" alt="">
              </div>

              <div class="product__row product__corousels">
                  <div class="product__corousel" v-for="(cor,i) in description.images" :key="i" @click="corousel_img(i)">
                      <img  :src="'http://127.0.0.1:8000'+cor.image_path" v-if="!description.corousel_index"  v-bind:class="{product__corousel__active: i==0}">
                      <img  :src="'http://127.0.0.1:8000'+cor.image_path" v-else v-bind:class="{product__corousel__active: description.corousel_index==i}">
                  </div>

              </div>

              <div class="product__levels">
                <div class="product__level"></div>
                <div class="product__level"></div>
                <div class="product__level"></div>
              </div>
          </div>

          

          <div class="product__column product__info">
              <div class="product__stars main__mb__s">

                <!-- <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star main__mr__xs"></i>
                <i class="fas fa-star"></i> -->
              </div>
              <div class="product__row product__price main__mb__s">

                <div class="product__row product__row__c">
                  <!-- <p class="main__mr__xs">62 900 tng</p> -->
                  <p class="main__mr__xs product__price__l">Цена: {{description.price}} тнг</p>
                  <!-- <div class="product__sale">
                      <p>20%</p>
                  </div> -->
                </div>
                
              </div>

              <div class="product__size main__mb__xl" v-if="description.size">
                  <p class="pr__size__text">Размеры, мм</p>
                  <p class="pr__size__value"  >{{description.size}}</p>
              </div>

              <div class="item__row item__ac">
                  <div></div>
                  <p></p>
                  <div></div>
              </div>

              <!-- <div class="pr__val  product__row product__row__c main__mb__s">
                <i class="fas fa-share-alt main__mr__s ab_center "></i>
                <p>Механизм: еврокнижка</p>
              </div>

              <div class="pr__val product__row product__row__c main__mb__xl" >
                <i class="fas fa-stream main__mr__s ab_center"  ></i>
                <p>Кожа,велюр,алькантара</p>
              </div> -->
              <div class="product__order" @click="sendBasket()"> 
                    <i class="fas fa-cart-arrow-down"></i>
                    <p>В корзину</p>
              </div>
             
          </div>
        
      </div>
    </div>

    <div class="main__bottom" v-else >

            <div class="main__bottom item__column item__ac">
                    <v-skeleton-loader
                    type="card-avatar,list-item-three-line,list-item-three-line"
                    ></v-skeleton-loader>
            </div>
    </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props:['openBasket'],
    data () {
      return {
          description: [],
          open_description:false,
          basket_amount: 0,
          basket: []
      }
    },
    methods: {
        basketAmount() {
            this.basket_amount = 0;
            for (let index = 0; index < this.basket.length; index++) {
                this.basket_amount = this.basket_amount +this.basket[index].order_price;
            }

            let p = this.basket_amount;
            this.basket_amount = 0;
            this.basket_amount = p;
            localStorage.setItem("basket_amount",this.basket_amount);
        }, 
        corousel_img(index) {
            this.description.corousel_index = index;

            let permanent = this.description;
            this.description = [];
            this.description = permanent;
        },
        sendBasket() {
              if(this.basket.length!=0) {
                if (!this.checkHasEl()) {
                    this.description.order_price = this.description.price;
                    this.bsket.push(this.description);
                    this.$parent.getCount(1);
                }
            }
            else {
            this.description.order_price = this.description.price;
            this.basket.push(this.description);
            this.$parent.getCount(1);
            }
            localStorage.setItem("goods",JSON.stringify(this.basket));
            this.basketAmount();
        },
        checkHasEl() {
            var found = false;
            for(var i = 0; i < this.basket.length; i++) {
                if (this.basket[i].id == this.description.id) {
                    found = true;
                    break;
                }
            }
            return found;
        }
    },
    computed: {
        ...mapGetters(['GET_TOKEN', 'GET_USER_DATA']),
    },
    created () {
      
    },
    mounted() {
        if(localStorage.getItem("goods")) {
            this.basket = JSON.parse(localStorage.getItem("goods"));
            this.basketAmount();        
        }
        if(localStorage.getItem("basket_amount")) {
            this.basket_amount = parseInt(localStorage.getItem("basket_amount"));
        }
        let data = {
            product_id: this.$route.params.id,
            category_id: this.$route.params.category
        };
        this.$http.post('/get/product/description',data)
        .then(res => {
            this.open_description  = true;
            this.description = res.data;

            console.log(this.description)
        });
    }
}
</script>

<style  lang="less">
@mobile: 900px;
@planshet: 1200px;


.main__bottom {
        .v-skeleton-loader--is-loading {
            width: 100%;
        }
        width: 100%;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
   
        .product__title {
            width: 100%;
            margin-top: 20px;
        }
        .main__close {
            cursor: pointer;
            position: absolute;
            right: 10px;
            top: 10px;

            width: 30px;
            height: 30px;
            border-radius: 15px;
            background: #ccc;
            i {
                color: white;
            }
            i:hover {
              color: var(--main-kenes-blue);
            }
        }
    }


.product__row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    @media (max-width: @mobile) {
       justify-content: flex-start;
    }

    .product__gallery {
      width: 100%;
      margin-right: 30px;

      @media (max-width: @mobile) {
        width: 100%;
        margin-right: 0;
    
      }

    }
    .product__item {
      width: 100%;
      height: 300px;
      
      background-color: #f5f5f5;
      border-radius: 10px;
      margin-bottom: 20px;
      @media (max-width: @mobile) {
        height: unset;
      }
      img {
        width: 100%;
        height: 300px;
        align-self: center;
        object-fit: cover;
        border-radius: 10px;
        @media (max-width: @mobile) {
          width: 80%;
          height: 100%;

        }
      }
      .product__sale {
        align-self: flex-end;
        padding: 10px;
        background-color: var(--main-kenes-red);
        width: 10px;
        height: 10px;
        border-radius: 10px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;

        p {
          color: white;
        }
      }
    }

    .product__corousels {
      width:100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
      justify-content:flex-start;
      overflow-x: auto;
      .product__corousel {
        cursor: pointer;
        padding: 30px;
        border-radius: 10px;
        background-color: #f5f5f5;
        width: 120px;
        height: 100px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 120px;
          height: 100px;
          object-fit: cover;
          border-radius: 10px;
          border: 3px solid white;
          
          // border: 5px solid var(--main-kenes-blue);
        }
      }
      .product__corousel__active {
        border: 3px solid #a5c137 !important;
      }
    }

    .product__info {
      width: 230px;
      border-radius: 10px;
      background-color: #f5f5f5;
      padding: 20px;
      @media (max-width: @mobile) {
        width: 100%;
        align-items: center;
      }

      .product__price__l {
        font-size: 20px;
        font-weight: bold;
      } 
      .pr__val {

        i {
          width: 15px;
          height: 15px;
          color: var(--main-kenes-red);
          font-size: 24px;
        }
        p {
          color: #333;
        }
      }
      .product__stars {
        i {
          margin-right: 5px;
          color: #fdcc3a;
        }
      }

      .product__size {
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        .pr__size__text {
          color: var(--main-kenes-gray);  
          font-size: 12px;
        }
        .pr__size__value {
          font-size: 22px;
          font-weight: bold;
          color: var(--main-kenes-blue);
        }
      }
    
    }
  }
    .product {
      @media (max-width: @mobile) {
        flex-direction: column;
        width: 100%;
        overflow-y: scroll;
      }
  }
</style>
