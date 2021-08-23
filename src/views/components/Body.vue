<template>
  <div class="main__column">
     <div class="main__block__header">

          <div class="item__row item__ac item__90 main__mb__m">
            <div class="main__block__search">
                <i class="mdi mdi-briefcase-search-outline"></i>
                <input type="text" v-model="nameProduct" placeholder="Название или модель изделия" @input="searchProduct">
            </div>

            <svg focusable="false" viewBox="0 0 24 24" class="plp-svg-icon plp-pill__icon" v-bind:class="{'main__color__filter':showSort==true}" @click="showSort=!showSort" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5h2v1h12v2H8v1H6V8H4V6h2V5zm12 8h2v-2h-2v-1h-2v1H4v2h12v1h2v-1zm-5.94 5H20v-2h-7.94v-1h-2v1H4v2h6.06v1h2v-1z"></path></svg>
          </div>
          <div class="item__row main__sorts" v-if="showSort">
            <div class="item__column main__mr__m main__sort">
              <p class="">Сортировка</p>
              <v-col
                  class="d-flex pa-0"
                  cols="12"
                  sm="11"
              >
              <v-select
                  @change="getCategory"
                  v-model="sort"
                  :items="sorts"
                  item-text="value"
                  item-value="id"
                  label="Сортировка"
                  outlined
                  required
                  dense
              ></v-select>
              </v-col>
            </div>

            <div class="item__column main__mr__m main__sort">
              <p class="">Цена</p>
              <div class="item__row">
                <div class="main__mr__s">
                  <v-text-field
                      type="number"
                      v-model="priceFrom"
                      label="От"
                      outlined
                      @input="getCategory"
                      dense
                  ></v-text-field>
                </div>
                <v-text-field
                    type="number"
                    v-model="priceTo"
                    label="До"
                    outlined
                    @input="getCategory"
                    dense
                ></v-text-field>
              </div>
            </div>
          </div>
      </div>

      <!-- <div class="item__row item__ac">
          
          <v-col
            class="d-flex"
            cols="12"
            sm="2"
          >
            <v-select
              v-model="filter.filter"
              :items="items"
              label="Сортировка"
              solo
              item-text="label"

            ></v-select>
          </v-col>
      </div> -->

    <div class="main__block__title">
          <div class="main__block__round"></div>
          <p>Новинки</p>
    </div>

      <div class="main__block__products">
            <div class="main__block__product" v-for="(product,index) in all_products" :key="index"  >

                <div class="product__images">

<!--                    <transition name="fade" mode="out-in">-->
<!--                        <img v-if="product.images.length!=0 && !product.scroll_index && products.length!=0"  class="product__img" :src="'https://api.kenesmebel.kz'+product.images[0].image_path"  >-->
<!--                        <img v-if="product.images.length!=0 && product.scroll_index && products.length!=0" class="product__img" :src="'https://api.kenesmebel.kz'+product.images[product.scroll_index].image_path"  >-->
<!--                    </transition>-->


                  <v-carousel
                      v-if="product.images.length!=0"
                      class="product__slider"
                      cycle
                      hide-delimiter-background
                  >
                    <v-carousel-item
                        v-for="(slide, i) in product.images"
                        :key="i"
                    >
                      <img :src="'https://api.kenesmebel.kz'+slide.image_path" alt="">
                    </v-carousel-item>
                  </v-carousel>
                </div>

                <p class="product__name">{{product.name_product}}</p>

                <p class="product__size" v-if="product.size">Размеры: {{product.size}}</p>


                <div class="product__prices">
                    

                    <div class="item__row item__ac">
                        <p class="product__price">{{formatNumber(product.price)+' ₸ '}}</p>
<!--                        <i class="fas fa-tenge"></i>-->


                        <p class="product__price" v-if="product.count_type==2">{{'/ '}}кг</p>
                        <p class="product__price" v-if="product.count_type==3">{{'/ '}}литр</p>


                    </div>
                    <!-- <div class="product__sale">
                        <p>-20%</p>
                    </div> -->
                </div>

              <p class="product__has" v-if="product.count>2">Есть в наличии</p>
              <p class="product__has__yellow" v-if="product.count<=2">Уточните у менеджера</p>

              <div class="product__order" @click="openProduct(product.id,product.category_id,index)">
                    <!-- <i class="fas fa-cart-arrow-down"></i> -->
                    <p>Подробнее</p>
                </div>
            </div>
    </div>


     <div class="main__block__products"  v-if="showLoaderProducts" >

            <div class="item__column item__ac main__block__product item__js__c">
                    <v-skeleton-loader type="card-avatar, actions"></v-skeleton-loader>
            </div>
            <div class="item__column item__ac main__block__product item__js__c">
                <v-skeleton-loader
            
                    type="card-avatar, actions"
                    ></v-skeleton-loader>
                
            </div>
    
            <div class="item__column item__ac main__block__product item__js__c">
                <v-skeleton-loader
            
                    type="card-avatar, actions"
                ></v-skeleton-loader>
            </div>

            <div class="item__column item__ac main__block__product item__js__c">
                <v-skeleton-loader
                
                    type="card-avatar, actions"
                    ></v-skeleton-loader>
            </div>

            <div class="item__column item__ac main__block__product item__js__c">
                <v-skeleton-loader
        
                    type="card-avatar, actions"
                    ></v-skeleton-loader>
            </div>

        </div>

<!--    v-if="all_products.length!=total_page"-->
    <div class="main__next item__abs" @click="showMore()" v-if="all_products.length!=total_page" >
        <p v-if="!showLoader">Посмотреть еще</p>
        <v-progress-circular
        indeterminate
        color="white"
        v-if="showLoader"
        ></v-progress-circular>
    </div>

   
  </div>
</template>

<script>
 
    export default {
        props:['openBasket'],
        data() {
            return {
              showSort: true,
              priceTo: '',
              priceFrom: '',
              sort: null,
              sorts:[
                {
                  id:1,
                  value: 'Популярные'
                },
                {
                  id:2,
                  value: 'Новинки'
                },
                {
                  id:3,
                  value: 'Сначала дешевые'
                },
                {
                  id:4,
                  value: 'Сначала дорогие'
                }
              ],
                items: [
                  {
                    value: 1,
                    label: 'Сначала дешевые'
                  },
                  {
                    value: 2,
                    label: 'Сначала дорогие'
                  }
                ],
                filter: {
                  filter: true
                },
                nameProduct: '',
                showLoader: false,
                showLoaderCategory: true,
                showLoaderProducts: true,
                orderCreated: false,
                basket: [],
                bread: [],
                subcategory: false,
                nested: [],
                amount: 0,
                orders:[],
                count: 0,
                all_count: 0,
                isActive: true,
                open_description: false,
                categories: [],
                products: [],
                description: [],
                basket_amount: 0,
                before_category: [],
                bread_categories: [],
                all_products: [],
                next_page_url: '',
                total_page: 0,
                resized: false
            }
        },
        mounted() {
              if(window.screen.width<900) {
                  this.resized = true;
              }
              if(localStorage.getItem("goods")) {
                  this.basket = JSON.parse(localStorage.getItem("goods"));
                  this.basketAmount();
              }
              if(localStorage.getItem("basket_amount")) {
                this.basket_amount = parseInt(localStorage.getItem("basket_amount"));
              }
              this.getProducts();
        },
        watch: {
            $route() {
              if(this.$route.params.id) {
                  this.getCategory();
              }
            }
        },

        methods: {
            formatNumber(number) {
              if(!number) {
                return 0;
              }
              let parts = number.toString().split(".");
              parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
              return parts.join(".");
            },
            searchProduct() {
                this.all_products = [];
                this.$http.get('/search/product?name='+this.nameProduct)
                .then(res => {

                    this.total_page = res.data.total;
                    this.next_page_url = res.data.next_page_url;

                    this.products = res.data.data;

                    for (let index = 0; index < this.products.length; index++) {
                      this.all_products.push(this.products[index]);
                    }
                    this.showLoaderProducts = false;
                })
            },
            showMore() {
                if(!this.next_page_url) {
                  return false;
                }
                this.showLoader = true;
                this.$http.get(this.next_page_url)
                .then(res => {

                    this.products = res.data.data;
                    this.showLoader = false;
                    this.next_page_url = res.data.next_page_url;


                    if(this.all_products.length!=res.data.total) {
                        for (let index = 0; index < this.products.length; index++) {
                            this.all_products.push(this.products[index]);
                        }
                    }
                })

            },
    
            deleteEl(id,index) {

                this.basket_amount =this.basket_amount- this.basket[index].order_price;
                this.basket = this.basket.filter((item) => item.id !== id);

                localStorage.setItem("goods",JSON.stringify(this.basket));
                localStorage.setItem("basket_amount",this.basket_amount);

                // this.$parent.getCount(-1);
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
            corousel_img(index) {
                this.description.corousel_index = index;

                let permanent = this.description;
                this.description = [];
                this.description = permanent;
            },
            scrollImage(index,img_index) {
                this.products[index].scroll_index = img_index;

                let permanent = this.products;
                this.products = [];
                this.products = permanent;
            },
            getProducts() {
                this.$http.get('/guest/get/products')
                .then(res => {

                    this.total_page = res.data.total;
                    this.next_page_url = res.data.next_page_url;

                    console.log(this.next_page_url);
                    this.products = res.data.data;

                    for (let index = 0; index < this.products.length; index++) {
                      this.all_products.push(this.products[index]);
                    }
                    this.showLoaderProducts = false;
                })
            },
           
            openProduct(id,category_id,index) {

                this.open_description = true;
                this.description = this.products[index];

                this.$router.push("/category/"+category_id+"/product/"+id);

            },
           
            getCategory(){
                this.all_products = [];
                this.showLoaderProducts = true;
                let data = {
                  category_id:this.$route.params.id,
                  sort: this.sort,
                  priceFrom: this.priceFrom,
                  priceTo: this.priceTo
                };
                this.$http.post('guest/get/products/by/category',data,{})
                .then(res => {

                  this.next_page_url = res.data.next_page_url;
                  this.total_page = res.data.total;

                    this.products = res.data.data;
                    let permanent = this.products;
                    this.products = [];
                    this.products = permanent;

                    for (let index = 0; index < this.products.length; index++) {
                      this.all_products.push(this.products[index]);
                    }

                  this.showLoaderProducts = false;

                })
            },
   
        }
    }
    
</script>

<style lang="less" >
@mobile: 900px;
@planshet: 1200px;
.modal {
  display: flex;
  justify-content: center;
}
.main__color__filter {
  color: var(--main-kenes-blue) !important;
}
.plp-svg-icon {
  font-size: 14px;
  width: 35px;
  margin-left: 10px;
  cursor: pointer;
}

  .main__sort {
    width: 300px;
    @media (max-width: 900px) {
      align-items: flex-start;
      justify-content: center;
      width: 80%;
      margin-right: 0;
    }
    p {
      font-weight: bold;
      margin-bottom: 8px !important;
    }
    v-select__selections {
      @media (max-width: 900px) {
        width: 100%;
      }
    }
  }


  .main__sorts {
    @media (max-width: 900px) {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
  }

  .ab_center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .product__row__c {
    align-items: center;
  }
  .product__row__jb {
    justify-content: space-between;
  }
  .product__column {
    display: flex;
    flex-direction: column;
  }
  .produc__column__c {
    align-items: center;
  }


  .main__mr__xs {
    margin-right: 5px;
  }
  .main__mr__s {
    margin-right: 15px;
  }
  .main__mr__m {
    margin-right: 20px;
  }
  .main__mb__xs {
    margin-bottom: 10px !important;
  }
  .main__mb__s {
    margin-bottom: 15px !important;
  }
  .main__mb__m {
    margin-bottom: 20px !important;
  }
  .main__mb__l {
    margin-bottom: 25px;
  }
  .main__mb__xl {
    margin-bottom: 30px;
  }



  
</style>