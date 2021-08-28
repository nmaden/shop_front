<template>
  <div>

      <v-text-field
          v-model="name"
          label="Поиск товара"
          hide-details="auto"
          outlined
          class="mb-10 set__category__input"
          @input="searchProduct()"
      ></v-text-field>
      <div class="set__category item__wrap">
          <div class="set__category__item item__column"  v-for="(item,index) in all_products" :key="index">

              <div class="item__column">
                <p>{{ item.name_product}}</p>
                <div class="item__wrap item__ac item__jb">
                  <p>Количество: {{ item.count}} шт</p>
                  <p>Цена: {{ item.price}}  тнг</p>
                  <v-switch
                      v-if="item.show_on_site"
                      v-model="item.show_on_site"
                      label="Показать на сайте"
                      color="success"
                      @change="setShowProduct(item.id,item.show_on_site)"
                  ></v-switch>
                  <v-switch
                      v-else
                      v-model="item.show_on_site"
                      label="Не показать на сайте"
                      color="success"
                      @change="setShowProduct(item.id,item.show_on_site)"
                  ></v-switch>
                </div>
                  <p v-if="item.category && item.category.name!=''">{{'Категория: '+ item.category.name }}</p>
                  <button class="set__category__btn item__abs" v-if="item.category && item.category.name!=''" @click="openSetCategory(item.id,item.category.id)"><p>Изменить категорию</p></button>
                  <button class="set__category__btn item__abs" v-else  @click="openSetCategory(item.id,null)"><p>Добавить категорию</p></button>

              </div>
          </div>

          <div class="main__next item__abs" @click="showMore()" v-if="all_products.length!=total_page" >
            <p v-if="!showLoader">Посмотреть еще</p>
            <v-progress-circular
                indeterminate
                color="white"
                v-if="showLoader"
            ></v-progress-circular>
          </div>


      </div>

      <v-dialog v-model="addCategory" max-width="300">
        <v-card>
          <div class="modal item__column">
            <p>Добавить категорию</p>


            <div class="item__column" v-if="!openedChildren">
              <div class="item__column  modal__v item__jb" v-for="(item,index) in categories" :key="index" >
                <div class="item__row item__ac modal__v item__jb">
                  <p>{{item.name}}</p>
                  <div class="my-2">
                    <v-btn
                        v-if="category_id==item.id"
                        color="warning"
                        fab
                        x-small
                        dark
                        @click="setForProduct(item.id)"
                    >
                      <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn
                        v-else
                        color="primary"
                        fab
                        x-small
                        dark
                        @click="setForProduct(item.id)"
                    >
                      <v-icon>mdi-check</v-icon>
                    </v-btn>
                  </div>
                  <div class="my-2" v-if="item.children.length!=0">
                    <v-btn
                        @click="getChildrens(item.children)"
                        color="primary"
                        fab
                        x-small
                        dark
                    >
                      <v-icon >mdi-format-list-bulleted</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>


            <div class="item__column" v-if="childrens.length!=0 && openedChildren">
              <v-btn
                  color="warning"
                  small
                  dark
                  @click="openedChildren=false"
              >
              Назад
              </v-btn>
              <div class="item__row item__ac modal__v item__jb" v-for="(child) in childrens" :key="child.id">
                <p>{{child.name}}</p>
                <div class="my-2">
                  <v-btn
                      v-if="category_id==child.id"
                      color="warning"
                      fab
                      x-small
                      dark
                      @click="setForProduct(child.id)"
                  >
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                  <v-btn
                      v-else
                      color="primary"
                      fab
                      x-small
                      dark
                      @click="setForProduct(child.id)"
                  >
                    <v-icon>mdi-check</v-icon>
                  </v-btn>
                </div>
                <div class="my-2" v-if="child.children.length!=0">
                  <v-btn
                      @click="getChildrens(child.children)"
                      color="primary"
                      fab
                      x-small
                      dark
                  >
                    <v-icon >mdi-format-list-bulleted</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>




          </div>
        </v-card>
      </v-dialog>
  </div>
</template>


<script>
export default {
  data () {
    return {
      show_on_site: false,
      show_site_text: 'Показать на сайте',
      category_id: '',
      product_id:'',
      addCategory: false,
      token: '',
      products: '',
      childrens: [],
      categories: [],
      openedChildren: false,
      showLoader: false,
      next_page_url: '',
      all_products: [],
      total_page: '',
      name: ''
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      console.log(event);
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        setTimeout(function () { this.showMore() }.bind(this), 100);
      }
    },
    searchProduct() {
      this.all_products = [];
      this.$http.get('/search/product?name='+this.name)
          .then(res => {
            this.products = res.data.data;
            let permanent = this.products;
            this.products = [];
            this.products = permanent;
            for (let index = 0; index < this.products.length; index++) {
              this.all_products.push(this.products[index]);
            }
            this.total_page = res.data.total;
            this.next_page_url = res.data.next_page_url;

          })
    },
    showMore() {
      if(!this.next_page_url) {
        return false;
      }
      const config = {
        headers: { 'Authorization': `Bearer ${this.token}` }
      };

      this.showLoader = true;
      this.$http.get(this.next_page_url+'&name='+this.name,config)
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
    changeSwitch() {

    },
    getChildrens(childrens) {
      this.openedChildren = true;
      this.childrens = childrens;
    },
    openSetCategory(id,category_id) {
      this.openedChildren = false;
      this.category_id=category_id;
      this.product_id = id;
      this.addCategory=true;
    },
    setShowProduct(id,show_on_site) {
      this.$http.post('/set/show/product',
          {
            id: id,
            show_on_site:show_on_site
          }, {
            headers: {
              'Authorization': `Bearer ${this.token}`
            }
          }
      )
          .then(res => {
            this.$toast.open({
              message: res.data.message,
              type: 'success',
              position: 'bottom',
              duration: 5000,
              queue: true
            });
            this.getProducts();
            this.getCategories();
          });
    },
    setForProduct(id) {
      this.$http.post('/set/category',
          {
            id: this.product_id,
            category_id: id
          }, {
            headers: {
              'Authorization': `Bearer ${this.token}`
            }
          }
      )
          .then(res => {
              this.$toast.open({
                message: res.data.message,
                type: 'success',
                position: 'bottom',
                duration: 5000,
                queue: true
              });
              this.getProducts();
              this.getCategories();
              this.addCategory = false;
          });
    },
    getProducts() {
      const config = {
        headers: { 'Authorization': `Bearer ${this.token}` }
      };

      this.$http.get('/get/admin/products',  config)
          .then(res => {
              this.products = res.data.data;
              let permanent = this.products;
              this.products = [];
              this.products = permanent;
              for (let index = 0; index < this.products.length; index++) {
                this.all_products.push(this.products[index]);
              }
              this.total_page = res.data.total;
              this.next_page_url = res.data.next_page_url;

          });
    },
    getCategories() {
      this.$http.get('/get/categories')
          .then(res => {
            this.categories = res.data;
            let permanent = this.categories
            this.categories = [];
            this.categories = permanent;

          });
    }
  },
  computed: {
  },
  mounted() {
    if(localStorage.getItem('access_token')) {
        this.token  = localStorage.getItem('access_token');
        this.getProducts();
    }

    this.getCategories();
  }
}
</script>

<style lang="scss" scoped>
  p {
    margin-bottom: 0;
  }
  .main__next {
    cursor: pointer;
    background: var(--main-kenes-blue);
    padding: 10px;
    margin-bottom: 20px;
    color: white;
    width: 200px;
    font-weight: bold;
    align-self: center;
    @media (max-width: 900px) {
      width: 100%;
    }
  }
  .main__next:hover {
    opacity: 0.8;
    color: black;
  }

  .set__category {
    flex-wrap: wrap;
    .set__category__input {
      width: 500px;
    }
  }
  .set__category__item {
      border-radius: 4px;
      width: 500px;
      padding: 15px;
      border-radius: 3px;
      margin-bottom: 15px;
      background: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
      @media (max-width: 900px) {
        width: 100%;
      }
      .set__category__btn {
         padding: 10px;
         border: 1px solid black;
         color: white;
         background-color: var(--main-kenes-blue);
      }
  }

  .modal {
    padding: 20px;
    .modal__v {
      width: 150px;

      .modal__round {
        width: 10px;
        height: 10px;
        border-radius: 5px;
      }
    }

  }

</style>