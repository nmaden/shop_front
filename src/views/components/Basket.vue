<template>

<div class="item__column">
     <div class="main__basket item__column" >
              
                <div class="item__row item__ac basket__top">
                  <i class="mdi mdi-keyboard-backspace main__basket__close" @click="$router.push('/')"></i>
                  <p class="main__basket__title">Корзина</p>
                </div>  
                <div class="basket__lists item__column"> 
                    
                    <div class="basket__list item__row" v-for="(item,b) in basket" :key="b">
                        <div class="item__column">
                          <img :src="'http://127.0.0.1:8000'+item.images[0].image_path" alt="">
                          <div class="item__row item__ac basket__actions">
                            <div class="item__row item__ac basket__addition">
                              <i class="mdi mdi-minus" @click="addCount(-1,item.id,b)"></i>
                              <p v-if="!item.order_count">1</p>
                              <p v-else>{{item.order_count}}</p>
                              <i class="mdi mdi-plus" @click="addCount(1,item.id,b)"></i>
                            </div>

                            <div class="basket__delete item__abs" @click="deleteEl(item.id,b)">
                              <i class="mdi mdi-close "></i>
                            </div>
                          </div>
                        </div>
                        <div class="item__row item__ac basket__right__side">
                          <div class="item__column basket__info">
                            <p class="basket__name">{{item.name}}</p>

                            <p class="baset__description">Размер: {{item.size}}</p>
                            
                            <p class="baset__description">{{item.description}}</p>
                            
                            <div class="item__row item__ac ">
                              <p class="basket__price" v-if="!item.order_count">{{item.price}}</p>
                              <p class="basket__price" v-else>{{item.order_price}}</p>
                              <i class="fas fa-tenge"></i>
                            </div>
                          </div>


                        
                        </div>
                    </div>

                    <div class="item__column basket__contact">


                        <div class="item__column">
                          <p>Имя</p>
                          <input type="text" v-model="name" class="sms__digits">
                        </div>

                        <div class="item__column">
                          <p>Телефон</p>
                          <masked-input class="sms__digits" v-model.trim="phone_number" mask="8(111) 111-11-11" />
                        </div>

                        <div class="item__row item__ac basket__delivery item__jb">
                          <div class="basket__delivery__type" v-bind:class="{basket__delivery__type__active: delivery_type==1}"  @click="chooseDelivery(1)"><p>Доставка</p></div>
                          <div class="basket__delivery__type" v-bind:class="{basket__delivery__type__active: delivery_type==2}" @click="chooseDelivery(2)"><p>Самовывоз</p></div>
                        </div>

                        <div class="item__column" v-if="delivery_type==1">
                          <p>Адрес</p>
                          <input type="text" v-model="address" class="sms__digits">
                        </div>
                    </div>

                    <div class="item__row item__ac basket__amount" >
                        <p class="basket__amount__t">Сумма</p>
                        <div class="item__row item__ac basket__amount__value">
                            <p>{{ basket_amount}}</p>
                            <i class="fas fa-tenge"></i>
                        </div>
                    </div>

                    <button :disabled="isActive" class="basket__buy item__abs" @click="createOrder"><p>Купить</p></button>
                </div>
            </div>


               <!-- <v-dialog
                class="modal"
                v-model="orderCreated"
                max-width="400"
            >
              <v-card >
                  <v-row justify="center">
                    <v-card-title class="">
                        Заказ успешно создано
                    </v-card-title>
                  </v-row>
                  
                  <v-row justify="center">
                      <div class="modal__ok item__abs">
                          <i class="mdi mdi-checkbox-marked-circle-outline"></i>
                      </div>
                  </v-row>
              

                  <v-row justify="center">
                    <v-card-actions>
                    <v-spacer></v-spacer>
                  
                      <v-btn
                          depressed
                          color="success"
                          @click="orderCreated=false"
                      >
                          Закрыть
                      </v-btn>
                      <v-spacer></v-spacer>
                  
                
                      
                    </v-card-actions>
                  </v-row>
             
              </v-card>
            </v-dialog> -->
</div>
    
</template>

<script>
import { mapGetters } from 'vuex'
import MaskedInput from 'vue-masked-input'
import { required } from 'vuelidate/lib/validators'

export default {
    components: {
        MaskedInput
    },
    validations: {
        phone_number: {
            required
        },
        // address: {
        //   required
        // },
        name: {
          required
        },
        delivery_type: {
          required
        }
    },
    data () {
      return {
          isActive: false,
          delivery_type: null,
          basket: [],
          basket_amount: 0,
          orderCreated: false,
          address: '',
          phone_number: '',
          name: ''
      }
    },
    methods: {
         chooseDelivery(type) {
            this.delivery_type = type;
         },
        createOrder() {

                if(this.delivery_type==1 && this.address=='') {
                    this.$toast.open({
                      message: 'Заполните поле адрес',
                      type: 'warning',
                      position: 'bottom',
                      duration: 5000,
                      queue: true
                    });
                }

                if (this.$v.$invalid) {
                    this.$toast.open({
                        message: 'Заполните необходимые поля',
                        type: 'warning',
                        position: 'bottom',
                        duration: 5000,
                        queue: true
                    });
                    this.$v.$touch()
                    return 
                }else {
                  let data = {
                      orders: this.basket,
                      delivery_type: this.delivery_type,
                      address: this.address,
                      name: this.name,
                      phone_number: this.phone_number
                  };
                  this.isActive = true;

                  this.$http.post('/create/order',data,
                  {
                  
                  })
                  .then(res => {

                      this.$toast.open({
                          message:  res.data.message,
                          type: 'success',
                          background: '#449DED',
                          position: 'bottom',
                          duration: 5000,
                          queue: true
                      });


                  })
                }
                
        },
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
        addCount(count,id,index) {
            if(!this.basket[index].order_count) {
                this.basket[index].order_count = 1;
                this.basket[index].order_price = this.basket[index].price;
            }
            
            this.basket[index].order_count = this.basket[index].order_count+count;
            if (this.basket[index].order_count<=0) {
                this.basket[index].order_count = 1;
            }
            
            this.basket[index].order_price = this.basket[index].price*this.basket[index].order_count;

            let p = this.basket;
            this.basket = [];
            this.basket = p;

            localStorage.setItem("goods",JSON.stringify(this.basket));
            this.basketAmount(); 
        },
        deleteEl(id,index) {

            this.basket_amount =this.basket_amount- this.basket[index].order_price;
            this.basket = this.basket.filter((item) => item.id !== id);

            localStorage.setItem("goods",JSON.stringify(this.basket));
            localStorage.setItem("basket_amount",this.basket_amount);

            this.$parent.getCount(-1);
        },
    },
    computed: {
        ...mapGetters(['GET_TOKEN', 'GET_USER_DATA']),
    },
    created () {
      
    },
    mounted() {
        if(localStorage.getItem("goods")) {
            this.basket = JSON.parse(localStorage.getItem("goods"));
            for (let i = 0; i <this.basket.length; i++) {
              if(!this.basket[i].order_count) {
                this.basket[i].order_count = 1;
              }

            }
            this.basketAmount();        
        }

        console.log(this.basket);
    }
}
</script>

<style scoped lang="less">
@mobile: 900px;
@planshet: 1200px;


.basket__delivery {
   width: 400px;
   margin-bottom: 20px;

  @media (max-width: 900px) {
    width: 100%;

  }

  .basket__delivery__type {
    text-align: center;
    width: 180px;
    border-radius: 25px;
    cursor: pointer;
    color: white;
    padding: 15px;
    background: var(--main-kenes-blue);
    @media (max-width: 900px) {
      width: 44%;
      margin-bottom: 15px;
      font-size: 14px;
    }
  }
  .basket__delivery__type__active {
    background: #9a0f0f;
  }

  .basket__delivery__type:hover {
    opacity: 0.8;
  }
}

.basket__contact {
  @media (max-width: 900px) {
    padding: 20px;
  }
  p {
    font-weight: bold;
  }
  .sms__digits {
    padding: 10px;
    margin-bottom: 20px;
    outline: none;
    border: 1px solid #ccc;
    color: gray;
    width: 40%;
    @media (max-width: 900px) {
          width: 100%;
    }
  }
}
  .modal__ok {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: white;
    margin-bottom: 20px;
    i {
      font-size: 30px;
      color: #a5c137;
    }
  }

  .main__basket {
      display: flex;
      background: white;
      width: 100%;
      margin-bottom: 20px;
      .basket__top {
        width: 90%;
        align-self: center;
        margin-bottom: 20px;
        color: var(--main-kenes-blue);
        i {
          font-size: 34px;
        }

        .main__basket__title {
          font-size: 22px;
        }

      }

      .main__basket__title {
        font-size: 28px;
        font-weight: bold;
        margin-left: 20px;
      }

      .main__basket__close {
        cursor: pointer;
        font-size: 50px;
      }
      .main__basket__close:hover {
         opacity: 0.8;
      }

      .basket__lists {
         width: 90%;
        align-self: center;
          @media (max-width: 900px) {
                width: 100%;
          }
        .basket__amount {
          margin-bottom: 20px;
          @media (max-width: 900px) {
            padding: 20px;
            margin-bottom: 0;
            padding-top: 0;
          }
          .basket__amount__t {
            margin-right: 20px;
            font-size: 22px;
            font-weight: bold;
          }
          .basket__amount__value {
              p {
                font-size: 22px;
                line-height: 1;
                font-weight: bold;
                color: var(--main-kenes-blue);
              }
              i {
                color: var(--main-kenes-blue);
                margin-left: 3px;
              }
          }
        }
        .basket__buy {
           cursor: pointer;
           width: 200px;
           padding: 15px;
           border-radius: 30px;
           background: var(--main-kenes-blue);
           
            @media (max-width: 900px) {
              width: 90%;
              align-self: center;

              margin-bottom: 50px;
            }
           p {
             color: white;
             font-weight: bold;
           }
        }
        .basket__buy:hover {
           opacity: 0.8;
        }
        .basket__list {
           position: relative;
           background: #f8f8f8;
           padding: 20px;
           border-radius: 10px;
           margin-bottom: 20px;
            @media (max-width: 900px) {
              width: 90%;
              align-self: center;
            }
         
           img {
             width: 200px;
             height: 140px;
             object-fit: cover;
             border-radius: 10px;
             margin-right: 20px;
             @media (max-width: 900px) {
               width: 180px;
               height: 120px;
             }
           }
          .basket__right__side {
             @media (max-width: 900px) {
               flex-direction: column;
               align-items: flex-start;
            }
          }
            .basket__actions {
              margin-top: 20px;

              @media (max-width: 900px) {

              }
            }
           .basket__info {
              margin-right: 30px;
              .basket__name {
                 font-size: 20px;
                 font-weight: bold;
                 margin-bottom: 10px;
              }
              .basket__description {
                font-size: 14px;
                margin-bottom: 10px;
                color: gray;
              }
              .basket__price {
                font-size: 22px;
                font-weight: bold;
                margin-right: 5px;
              }
           }

            .basket__delete {
                position: absolute;
                bottom: 20px;
                right: 10px;
                width: 44px;
                height: 44px;
                border-radius: 22px;
                background: white;

                i {
                  font-size: 24px;
                  cursor: pointer;
                  color: #9a0f0f;
                }

                @media (max-width: 900px) {
                    position: unset;
                }
            }
           .basket__addition {
             position: absolute;
             bottom: 20px;
             right: 20px;
             background: white;
             padding: 5px;
             border-radius: 20px;
             width: 100px;
             justify-content: center;
             margin-right: 50px;
              @media (max-width: 900px) {
                  width: 80px;
                  position: unset;
                  margin-right: 10px;
              }
             i {
               font-weight: bold;
               font-size: 22px;
               cursor: pointer;
               color: var(--main-kenes-blue);
               margin-left: 3px;
               margin-right: 3px;
             }
             i:hover {
               opacity: 0.8;
             }
           }
        }
      }
  }
  
</style>
