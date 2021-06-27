<template>
  <div class="main__column">
     <div class="main__block__header">
          
          <div class="item__row item__ac item__90">
            <div class="main__block__search">
                <i class="mdi mdi-briefcase-search-outline"></i>
                <input type="text" v-model="nameProduct" placeholder="Название или модель изделия" @input="searchProduct">
                
            </div>
            <i class="mdi mdi-filter-variant main__filter" ></i>
          </div>
          <div>
              <i></i>
              <p></p>
          </div>
          <div>

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

                    <transition name="fade" mode="out-in">
                        <img v-if="product.images.length!=0 && !product.scroll_index && products.length!=0"  class="product__img" :src="'https://api.sogym-aktobe.kz'+product.images[0].image_path"  >
                        <img v-if="product.images.length!=0 && product.scroll_index && products.length!=0" class="product__img" :src="'https://api.sogym-aktobe.kz'+product.images[product.scroll_index].image_path"  >
                    </transition>
                    

                    <div class="item__column" v-if=" product.images.length>=2">
                      <div class="product__levels" v-if="!product.scroll_index && product.images.length<2">
                          <div v-for="(active,a) in  product.images" :key="a" class="product__level" v-bind:class="{product__level__active: a==0}" @click="scrollImage(index,a)"></div>
                      </div>
                      <div class="product__levels" v-if="!product.scroll_index && product.images.length>=2">
                          <div v-for="(active,a) in  3" :key="a" class="product__level" v-bind:class="{product__level__active: a==0}" @click="scrollImage(index,a)"></div>
                      </div>
                   
                      <div class="product__levels"  v-if="product.scroll_index && product.images.length>=2">
                          <div v-for="(active,a) in  3" :key="a" class="product__level" v-bind:class="{product__level__active: a==product.scroll_index}" @click="scrollImage(index,a)"></div>
                      </div>
   
                    </div>


                </div>

                <p class="product__name">{{product.name}}</p>
                <p class="product__size" v-if="product.size">Размеры: {{product.size}}</p>
                
                <div class="product__prices">
                    

                    <div class="item__row item__ac">
                        <p class="product__price">{{product.price+' тнг '}}</p>
<!--                        <i class="fas fa-tenge"></i>-->


                        <p class="product__price" v-if="product.count_type==2">{{'/ '}}кг</p>
                        <p class="product__price" v-if="product.count_type==3">{{'/ '}}литр</p>


                    </div>
                    <!-- <div class="product__sale">
                        <p>-20%</p>
                    </div> -->
                </div>
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
                total_page: 0
            }
        },
        mounted() {
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
                this.$http.get('guest/get/products/by/category?category_id='+this.$route.params.id)
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
    margin-bottom: 10px;
  }
  .main__mb__s {
    margin-bottom: 15px;
  }
  .main__mb__m {
    margin-bottom: 20px;
  }
  .main__mb__l {
    margin-bottom: 25px;
  }
  .main__mb__xl {
    margin-bottom: 30px;
  }



  
</style>