<template>
    <div class="green__admin green__column green__100">   
        <a @click="logout" class="green__logout">Выйти</a>
        <div class="green__row green__100 green__admin__inner">

            <div class="green__left green__column">

                <div class="green__row green__ac green__mb__s green__btn">
                    <i class="fas fa-directions green__mr__xs" v-bind:class="{'green__active':page==1}"></i>
                    <p class="" @click="openPage(1)" v-bind:class="{'green__active':page==1}">Категории</p>
                </div>
                <div class="green__row green__ac green__mb__s green__btn">
                    <i class="fas fa-directions green__mr__xs" v-bind:class="{'green__active':page==2}"></i>
                    <p class="" @click="openPage(2)" v-bind:class="{'green__active':page==2}">Товары</p>
                </div>

                <div class="green__row green__ac green__mb__s green__btn">
                  <i class="fas fa-directions green__mr__xs" v-bind:class="{'green__active':page==5}"></i>
                  <p class="" @click="openPage(5)" v-bind:class="{'green__active':page==5}">Товары от 1C</p>
                </div>


              <div class="green__row green__ac green__mb__s green__btn">
                    <i class="fas fa-directions green__mr__xs" v-bind:class="{'green__active':page==3}"></i>
                    <p class="" @click="openPage(3)" v-bind:class="{'green__active':page==3}">Список заказов</p>
                </div>


                <div class="green__row green__ac green__mb__s green__btn">
                  <i class="fas fa-directions green__mr__xs" v-bind:class="{'green__active':page==4}"></i>
                  <p class="" @click="openPage(4)" v-bind:class="{'green__active':page==4}">Слайдер</p>
                </div>
            </div>

            <div class="green__right green__100">

                <div class="green__categories" v-if="page==1">

                    <div class="green__column">

                      
                        <div class="green__row green__ac">
                            <div @click="seeСategory=false"  class="green__btn green__mr__xs green__pointer green__see green__row green__ac green__mb__s">
                                <i class="fas fa-plus green__mr__xs"></i>
                                <p>Добавить категорию</p>
                            </div>
                            <div @click="seeСategory=true"  class="green__btn  green__pointer green__see green__row green__ac green__mb__s">
                                <i class="fas fa-eye green__mr__xs"></i>
                                <p>Список категории</p>
                            </div>
                        </div>

                        
                        <form action="" @submit.prevent="addCategory" class="green__column" v-if="!seeСategory" >
                              <div class="green__choose item__row item__ac">
                                    <p class="green__category__choose"  @click="chooseParentMain(1)" v-bind:class="{green__category__active: page_category==1 }">Главный элемент</p>
                                    <p class="green__category__choose"  @click="chooseParentMain(2)"  v-bind:class="{green__category__active: page_category==2 }">Дочерный элемент</p>
                             </div>


                            <div class="item__column green__parents" v-if="page_category==2">

                                <div class="item__wrap item__ac">
                                    <div class="item__row item__ac green__mb__xs green__parents" v-for="(cat,c) in categories" :key="c">
                                        <p  class="green__category__el green__mr__xs" >{{cat.name}}</p>
                                        <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i class="mdi mdi-keyboard-return green__pointer"   v-bind="attrs" v-on="on" @click="chooseParent(cat.id,'parent')"></i></template><span>Выбрать категорию</span></v-tooltip>
                                        <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i v-bind="attrs" v-on="on" class="mdi mdi-format-list-bulleted green__mr__xs green__pointer" @click="getChilds(cat.id,'parent')"></i></template><span>Показать список</span></v-tooltip>
                                    </div>
                                </div>

                                <div class="item__column"  v-if="nested.length!=0">
                                    <div class="item__row item__ac green__mb__xs green__parents" v-for="(cat,c) in nested" :key="c">
                                        <p  class="green__category__el green__mr__xs" >{{cat.name}}</p>
                                        <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i class="mdi mdi-keyboard-return green__pointer"   v-bind="attrs" v-on="on" @click="chooseParent(cat.id,'child')"></i></template><span>Выбрать категорию</span></v-tooltip>
                                        <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i v-bind="attrs" v-on="on" class="mdi mdi-format-list-bulleted green__mr__xs green__pointer" @click="getChilds(cat.id,'child')"></i></template><span>Показать список</span></v-tooltip>
                                    </div>
                                </div>

                                <p v-if="parent_category_name" class="green__mb__s">Выбранный категория: <b>{{parent_category_name}}</b></p>
                            
                            </div>

                            
                            <div class="green__column green__input">
                            <p>Название категории</p>
                            <v-text-field
                                v-model="category_name"
                        
                                label="Название категории"
                                required
                                outlined
                            ></v-text-field>
                            </div>
                            <button type="submit">Сохранить</button>
                        </form>

                        <div class="green__column green__edit" v-else>
                            <div   class="green__btn  green__pointer green__see green__row green__ac green__mb__s">
                                <p>Выберите категорию</p>
                            </div>
                            <div class="item__column green__parents" >
                                <div class="item__wrap item__ac">
                                    <div class="item__row item__ac green__mb__xs green__parents" v-for="(cat,c) in categories" :key="c">
                                        <p  class="green__category__el green__mr__xs" >{{cat.name}}</p>
                                        <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i class="mdi mdi-keyboard-return green__pointer"   v-bind="attrs" v-on="on" @click="getCategoryEdit(cat.id,'parent')"></i></template><span>Выбрать категорию</span></v-tooltip>
                                        <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i v-bind="attrs" v-on="on" class="mdi mdi-format-list-bulleted green__mr__xs green__pointer" @click="getChilds(cat.id,'parent')"></i></template><span>Показать список</span></v-tooltip> 
                                        
                                    </div>
                                </div>

                                <div class="item__column"  v-if="nested.length!=0">
                                    <div class="item__row item__ac green__mb__xs green__parents" v-for="(cat,c) in nested" :key="c">
                                        <p  class="green__category__el green__mr__xs" >{{cat.name}}</p>  
                                        <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i class="mdi mdi-keyboard-return green__pointer"   v-bind="attrs" v-on="on" @click="getCategoryEdit(cat.id,'child')"></i></template><span>Выбрать категорию</span></v-tooltip>
                                        <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i v-bind="attrs" v-on="on" class="mdi mdi-format-list-bulleted green__mr__xs green__pointer" @click="getChilds(cat.id,'child')"></i></template><span>Показать список</span></v-tooltip> 
                                    </div>
                                </div>
                                <p v-if="selected_category" class="green__mb__s">Выбранный  категория: <b>{{selected_category}}</b></p>
                            </div>


                            <form  class="green__mb__s" action="" @submit.prevent="editSaveCategory()" v-if="category_name_edit!=''">
                                <div class="green__column green__input" >
                                    <p>Выбранный категория</p>
                                    <v-text-field
                                        v-model="category_name_edit"
                                        label="Категория"
                                        outlined
                                    ></v-text-field>
                                </div> 
                                <button type="submit">Сохранить</button>
                            </form>
                            <div class="green__row green__ac" v-if="category_name_edit!=''">
                                <div  class="green__btn green__pointer green__row green__ac green__mb__s" @click="openDelete(1,category_id_edit)">
                                    <i class="fas fa-trash-alt green__mr__xs"></i>
                                    <p>Удалить</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="green__products" v-if="page==2">
                    <div class="green__row green__ac">
<!--                        <div @click="seePurchase=false"  class="green__btn green__mr__xs green__pointer green__see green__row green__ac green__mb__s">-->
<!--                            <i class="fas fa-plus green__mr__xs"></i>-->
<!--                            <p>Добавить товар</p>-->
<!--                        </div>-->
                        <div @click="showListCategories()"  class="green__btn  green__pointer green__see green__row green__ac green__mb__s">
                            <i class="fas fa-eye green__mr__xs"></i>
                            <p>Список товаров</p>
                        </div>
                    </div>
                    <div class="green__column">

                        <div   class="green__btn  green__pointer green__see green__row green__ac green__mb__s">
                            <p>Выберите категорию</p>
                        </div>
                        <div class="item__column green__parents" >

                            <div class="item__wrap item__ac">
                                <div class="item__row item__ac green__mb__xs green__parents" v-for="(cat,c) in categories" :key="c">
                                    <p  class="green__category__el green__mr__xs" >{{cat.name}}</p>
                                    <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i class="mdi mdi-keyboard-return green__pointer"   v-bind="attrs" v-on="on" @click="getProductByCategory(cat.id,'parent')"></i></template><span>Выбрать категорию</span></v-tooltip>
                                    <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i v-bind="attrs" v-on="on" class="mdi mdi-format-list-bulleted green__mr__xs green__pointer" @click="getChilds(cat.id,'parent')"></i></template><span>Показать список</span></v-tooltip> 
                                    
                                </div>
                            </div>

                            <div class="item__column"  v-if="nested.length!=0">
                                <div class="item__row item__ac green__mb__xs green__parents" v-for="(cat,c) in nested" :key="c">
                                    <p  class="green__category__el green__mr__xs" >{{cat.name}}</p>  
                                    <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i class="mdi mdi-keyboard-return green__pointer"   v-bind="attrs" v-on="on" @click="getProductByCategory(cat.id,'child')"></i></template><span>Выбрать категорию</span></v-tooltip>
                                    <v-tooltip bottom><template  v-slot:activator="{ on , attrs }"><i v-bind="attrs" v-on="on" class="mdi mdi-format-list-bulleted green__mr__xs green__pointer" @click="getChilds(cat.id,'child')"></i></template><span>Показать список</span></v-tooltip> 
                                </div>
                            </div>
                            <p v-if="selected_category" class="green__mb__s">Выбранный  категория: <b>{{selected_category}}</b></p>
                        </div>


                      <div class="green__column" v-if="showSkeleton">
                        <v-skeleton-loader type="card-avatar, actions" ></v-skeleton-loader>
                        <v-skeleton-loader type="card-avatar, actions" ></v-skeleton-loader>
                        <v-skeleton-loader type="card-avatar, actions" ></v-skeleton-loader>
                        <v-skeleton-loader type="card-avatar, actions" ></v-skeleton-loader>

                      </div>


                      <div class="green__column">
                        <div class="green__column green__edit"   v-for="(item,index) in products" :key="index">

                          <p class="green__data"><b>Название:</b>  {{item.name_product}}</p>
                          <p class="green__data"><b>Описание:</b> {{item.description}}</p>
                          <p class="green__data"><b>Создано:</b> {{convert_date(item.created_at)}}</p>
                          <form  class="green__mb__s"  @submit.prevent="editSave(index)" v-if="item.edit">
                            <div class="green__column green__input">
                              <p>Выберите категорию</p>

                              <p>{{ item.category_id }}</p>
                              <v-select

                                  v-model="item.category_id"
                                  :items="categories"
                                  item-text="name"
                                  item-value="id"
                                  label="Выберите категорию"
                                  outlined
                              ></v-select>
                            </div>
                            <div class="green__column green__input">
                              <p>Название</p>
                              <v-text-field
                                  v-model="item.name_product"
                                  label="Название"
                                  required
                                  outlined
                              ></v-text-field>
                            </div>

                            <div class="green__row green__ac">
                              <div class="green__column  green__mr__xs green__input">
                                <p>Цена</p>
                                <v-text-field
                                    v-model="item.price"
                                    label="Цена"
                                    required
                                    outlined
                                ></v-text-field>
                              </div>

                              <div class="green__column green__input">
                                <p class="green__mb__xs">Измерение</p>
                                <v-select
                                    v-model="item.count_type"
                                    :items="count_types"
                                    item-text="name"
                                    item-value="id"
                                    label="Выберите измерение"
                                    outlined
                                    required
                                ></v-select>
                              </div>
                            </div>

                            <div class="green__column green__input">
                              <p>Артикул</p>
                              <v-text-field
                                  v-model="item.articul"
                                  label="Артикул"
                                  outlined
                              ></v-text-field>
                            </div>

                            <div class="green__column green__input">
                              <p>Описание</p>
                              <v-textarea
                                  v-model="item.description"
                                  label="Описание"
                                  outlined
                              ></v-textarea>
                            </div>

                            <div class="green__column green__input green__mb__s">
                              <p>Добавить файл</p>
                              <input type="file" multiple  @change="uploadDoc" />
                            </div>

                            <button type="submit">Сохранить</button>
                          </form>


                          <p class="green__images__title">Фотографий</p>

                          <div class="item__row green__product__images__main">
                            <div class="green__product__images green__row green__ac green__mr__xs" v-for="(image,i) in item.images" :key="i">

                              <img :src="'https://api.kenesmebel.kz'+image.image_path" alt="">
                              <div  class="green__btn green__pointer green__row green__ac green__mb__s" @click="openDelete(4,image.id)">
                                <i class="fas fa-trash-alt green__mr__xs"></i>
                                <p>Удалить</p>
                              </div>
                            </div>
                          </div>

                          <div class="green__row green__ac">
                            <div  class="green__btn green__pointer green__row green__ac green__mb__s green__mr__xs" @click="editPurchase(index)">
                              <i class="fas fa-pencil-alt green__mr__xs"></i>
                              <p>Редактировать</p>
                            </div>

                            <div  class="green__btn green__pointer green__row green__ac green__mb__s" @click="openDelete(2,item.id)">
                              <i class="fas fa-trash-alt green__mr__xs"></i>
                              <p>Удалить</p>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                </div>

                <div class="green__products" v-if="page==3">
                    <div class="green__row green__ac">
                        <div  class="green__btn  green__pointer green__see green__row green__ac green__mb__s">
                            <p>Список заказов</p>
                        </div>
                    </div>

                    <div class="green__purchases" v-if="page==3">

                        <div class="green__row green__ac">
                            
                        </div>

                      <div class="green__column green__edit" v-for="(data,j) in orders" :key="j">
                        <p class="green__data green__mb__xs" >Имя заказщика: {{data.name_user}}</p>
                        <p class="green__data green__mb__xs" v-if="data.delivery_type==1">Доставка</p>
                        <p class="green__data green__mb__xs" v-if="data.delivery_type==2">Самовывоз</p>
                        <p class="green__data green__mb__xs"  v-if="data.delivery_type==1">Адрес: {{data.address}}</p>
                        <a class="green__data green__mb__xs" :href="'tel:'+data.phone">Телефон: {{data.phone}}</a>
                        <p class="green__data green__mb__xs" >Дата заказа: {{convert_date(data.created_at)}}</p>

                          <div class="item__column green__user__orders" v-for="(item,j) in data.orders" :key="j">
                            <p class="green__user__title">Заказы:</p>
                            <div class="item__column">
                              <p class="green__data green__mb__xs" >Название: {{item.name}}</p>
                              <p class="green__data green__mb__xs" >Количество: {{item.count}}</p>
                              <p class="green__data green__mb__xs" >Цена заказа: {{item.price}} тнг.</p>
<!--                          <p class="green__data green__mb__xs" >Дата заказа: {{convert_date(data.created_at)}}</p>-->

                            </div>
                          </div>
                      </div>


                      <i class="mdi mdi-close"></i>

                    </div>
                </div>


                <div  class="green__products" v-if="page==4">

                  <form action="" @submit.prevent="createSlider" class="green__column green__message" style="padding: 20px" >
                    <div class="green__column green__input item__mb">
                      <b class="item__mb">Загрузить рисунок для банера</b>
                      <input type="file" multiple  @change="uploadBanner" />
                    </div>
                    <button type="submit" >Отправить</button>
                  </form>



                  <div class="item__row item__ac banners">
                    <div class="item__column green__mr__xs" v-for="item in banner_images" :key="item.id">
                      <img class="item__mb"  :src="'https://api.kenesmebel.kz'+item.image_path" alt="">
                      <i class="fas fa-trash-alt" @click="deleteBanner(item.id)"></i>
                    </div>
                  </div>
                </div>

                <div  class="green__products" v-if="page==5">
                    <setCategory></setCategory>
                </div>


              </div>



        </div>
        <v-alert
            class="green__notif_position"
            type="success"
            :value ="savedData"
            transition="fade-transition"
         
        >  {{message_notif}}</v-alert>

        <v-row justify="center">
            <v-dialog
            v-model="dialog"
            
            max-width="400"
            >
            
            <v-card>
                <v-card-title class="headline" v-if="delete_type==1">
                    Удалить запись?<br> (Если удалить данную категорию удаляеся все дочерный категорий и товары)
                </v-card-title>
                  <v-card-title class="headline" v-else>
                    Удалить запись? 
                </v-card-title>
            
            
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                > 
                    Нет
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                
                    @click="deleteProcess(delete_type,delete_index)"
                >
                    Да
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>

            <v-dialog
            v-model="dialogApplication"
            
            max-width="500"
            >
            
            <v-card>
                <v-card-title class="headline">

                    <div class="green__row green__ac green__jb green__100 ">
                        <p>Форма</p>
                        <p @click="dialogApplication=false">Закрыть</p>
                    </div>
                    
                </v-card-title>

                <form action="" @submit.prevent="acceptApplication" class="green__column green__message" style="padding: 20px" >
                        <div class="green__column green__input">
                        <p>Сообщение на почту</p>
                        <v-text-field
                            v-model="message"
                    
                            label="Сообщение"
                            required
                            outlined
                        ></v-text-field>
                        </div>
                        <button type="submit">Отправить</button>
                </form>
            </v-card>
            </v-dialog>
        </v-row>
        
    </div>
</template>

<script>
import setCategory from '../components/setCategory';
export default {
    components: {
      setCategory
    },
    data () {
        return {
            choosen_type: '',
            showSkeleton: false,
            category_type: null,
            count_type: null,
            count_types:[
              {
                id: 1,
                name: 'Шт'
              },
              {
                id: 2,
                name: 'Кг'
              },
              {
                id: 3,
                name: 'Литр'
              }
            ],
            documents: [],
            rules: {
                select: [(v) => !!v || "Выберите категорию"],
                select2: [(v) =>  v.length>0 || "Item is required in select 2"],
            },
            name: null,
            price: null,
            count: null,
            articul: null,
            message_notif : null,
            dialogApplication:false,
            dialog: false,
            savedData:false,
            seeСategory: false,
            seePurchase: false,
            cat: null,
            title: '',
            description: '',
            category_name: '',
            page: 1,
            token: '',
            categories: [],
            user: {
                role: ''
            },
            delete_index: '',
            delete_type: '',
            document: null,
            applications: [],
            application_index: null,
            purchase_index: null,
            message: 'Здравствуйте,',
            products: [],
            orders: [],
            page_category: 1,
            nested: [],
            p_id:null,
            parent_category_name: null,
            category_for_product: null,
            selected_category: null,
            category_name_edit: '',
            category_id_edit: null,
            banners: [],
            banner_images: []
        }
    },
    computed: {
      filteredData(key){
          return this.categories.filter(item => item.id === key)
      }
    },
    methods: {
       showListCategories() {
         this.seePurchase=false;
         this.getCategories();
       },
        deleteBanner(id) {
          let data = {
            id: id
          };
          this.$http.post('/del/banner',data,
              {
                headers: {
                  'Authorization': `Bearer ${this.token}`
                }
              })
              .then(res => {
                this.$toast.open({
                  message: res.data.message,
                  type: 'success',
                  position: 'bottom',
                  duration: 5000,
                  queue: true
                });
                this.getBanner()
              })
        },
        uploadBanner(e) {
          const file = e.target.files
          for (var i=0; i < file.length; i++) {
            this.banners.push(file[i])
          }
        },
        getBanner() {
          const config = {
            headers: { 'Authorization': `Bearer ${this.token}` }
          };
          this.$http.get('/get/banners',  config)
              .then(res => {
                this.banner_images = res.data
              });
        },
        createSlider() {
          let fd= new FormData()
          for (var i = 0; i < this.banners.length; i++) {
            fd.append('images[]', this.banners[i])
          }
          this.$http.post('/create/banner',fd,
              {
                headers: {
                  'Authorization': `Bearer ${this.token}`,
                  'Content-Type': 'multipart/form-data'
                }
              }
          ).then(res => {
            this.$toast.open({
              message: res.data.message,
              type: 'success',
              position: 'bottom',
              duration: 5000,
              queue: true
            });
            this.getBanner();
          });
        },
        openPage(type) {
            this.page = type;

            this.nested = [];
        },
        getCategoryEdit(id,type) {
            let t = '';
            if(type=='child') {
                   t = this.nested.filter(item => item.id === id);
            }
            else {
                   t = this.categories.filter(item => item.id === id);
            }
            this.category_name_edit = t[0].name;

            this.category_id_edit = id;
        },
        chooseCategoryForProduct(id,type) {
            this.category_id = id;
            let t = '';
            if(type=='child') {
                   t = this.nested.filter(item => item.id === id);
            }
            else {
                   t = this.categories.filter(item => item.id === id);
            }
            this.category_for_product = t[0].name;
        },
        getProductByCategory(id,type) {

            this.showSkeleton = true;
            let t = ''
            if(!type) {
              type = this.category_type;
            }
            this.choosen_type = type;

            if(type=='child') {
              t = this.nested.filter(item => item.id == id);
            }
            else {
              t = this.categories.filter(item => item.id == id);
            }
            this.selected_category = t[0].name;
            this.dialogApplication = false;
            let data = {
                category_id: id
            };
            this.$http.post('/get/products/admin/by/category',data, {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                }
            })
            .then(res => {
                this.message_notif = res.data.message;
                this.products = res.data;
                this.showSkeleton = false;
            })
        },
        getProductByCategorySecond(id,type) {
          this.showSkeleton = true;
          let t = ''
          if(!type) {
            type = this.category_type;
          }
          if(type=='child') {
            t = this.nested.filter(item => item.id == id);
          }
          else {
            t = this.categories.filter(item => item.id == id);
          }
          this.selected_category = t[0]['name'];
          this.dialogApplication = false;
          let data = {
            category_id: id
          };
          this.$http.post('/get/products/admin/by/category',data, {
            headers: {
              'Authorization': `Bearer ${this.token}`
            }
          })
              .then(res => {
                this.message_notif = res.data.message;
                this.products = res.data;
                this.showSkeleton = false;
              })
        },
        chooseParentMain(type) {
            this.nested = [];
            this.page_category =type;
            this.p_id = null;

            this.getCategories();
        },
        chooseParent(id,type) {
            this.p_id = id;

            let t = '';
            if(type=='child') {
                   t = this.nested.filter(item => item.id === id);
            }
            else {
                   t = this.categories.filter(item => item.id === id);
            }
            this.parent_category_name = t[0].name;
        },
        getChilds(id,type) {
          
            let t = '';
            if(type=='child') {
                   t = this.nested.filter(item => item.id === id);
            }
            else {
                   t = this.categories.filter(item => item.id === id);
            }

            if(!t[0].p_id) {
                t = this.categories.filter(item => item.id === id);
            }
            if(t[0].children) {
                this.nested = t[0].children;
            }
        },
        getOrders() {
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.get('/get/orders/list',  config)
            .then(res => {
                this.orders = res.data
            })
        },
        closeDialog() {
            this.dialogApplication = false;
        },
        convert_date(date) {

          if(date) {
            let day = date.split("T")[0].split("-")[2];
            let month = date.split("T")[0].split("-")[1];
            let year = date.split("T")[0].split("-")[0];

            let hour = date.split("T")[1].split(":")[0];
            let minute = date.split("T")[1].split(":")[1];
            let ready  = day+'.'+month+'.'+year;

            return ready+' '+hour+':'+minute;
          }

        },
        okApplication(app_id,purchase_id) {

            this.application_index = app_id;
            this.purchase_index = purchase_id;
            this.dialogApplication = true;
        },
        acceptApplication() {
            this.dialogApplication = false;

            let data = {
                message: this.message,
                purchase_id: this.purchase_index,
                id: this.application_index
            };
            this.$http.post('/accept/application',data,
                {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                }
            })
            .then(res => {
                 this.purchase_index = null;
                 this.application_index = null;
                this.message_notif = res.data.message;
                this.savedData = true;
                this.getCategories();
                window.setInterval(() => {
                    this.savedData = false;
                }, 4000); 
            })
        },
        downloadDoc(link) {
            window.open('https://api.greenclinic.kz'+link,"_blank");
        },
        uploadDoc(e) {
            
            const file = e.target.files
            for (var i=0; i < file.length; i++) {
                this.documents.push(file[i])
            }

        },
        createProduct() {

            if(!this.category_id) {
                alert("Выберите категорию");
            }
            let fd= new FormData()
            fd.append('name', this.title);
            fd.append('category_id',this.category_id);
            fd.append('price',this.price);
            fd.append('count',this.count);
            fd.append('count_type',this.count_type);
            fd.append('articul',this.articul);
        
            for (var i = 0; i < this.documents.length; i++) {
                fd.append('images[]', this.documents[i])
            }
            fd.append('description',this.description);
            this.$http.post('/create/product',fd,
                {
                    headers: {
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then(res => {
                    this.document = [];
                    this.message_notif = res.data.message;
                    this.getCategories();

                    this.getProductByCategory(this.category_id,null);
                    this.$toast.open({
                      message: res.data.message,
                      type: 'success',
                      position: 'bottom',
                      duration: 5000,
                      queue: true
                    });
                    this.seePurchase = true;
            });
        },
        addCategory() {
            this.page = 1;

            let data = {
                name: this.category_name,
                p_id: this.p_id
            };

            this.$http.post('/create/category',data,
                {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                })
            .then(res => {
                this.getCategories();
                this.$toast.open({
                  message: res.data.message,
                  type: 'success',
                  position: 'bottom',
                  duration: 5000,
                  queue: true
                });

            })
        },
        logout() {
            localStorage.removeItem("access_token");
            this.$router.push("/login");
        },
        editCategory(index) {
            this.categories[index].edit = !this.categories[index].edit;
            let p = this.categories;
            this.categories = [];
            this.categories = p;
        },
        editPurchase(index) {
            this.products[index].edit = !this.products[index].edit;
            let p = this.products;
            this.products = [];

            this.products = p;
        },
        getCategories(){
                const config = {
                    headers: { 'Authorization': `Bearer ${this.token}` }
                };
                this.$http.get('/get/categories',  config)
                .then(res => {
                    this.categories = res.data
                })
        },
        editSaveCategory() {

 
            let data = {
                id: this.category_id_edit,
                name: this.category_name_edit
            };

            this.$http.post('/update/category',data,
                {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                })
            .then(res => {
                this.$toast.open({
                  message: res.data.message,
                  type: 'success',
                  position: 'bottom',
                  duration: 5000,
                  queue: true
                });
                this.getCategories();

            })
        },
        editSave(index) {
            let fd= new FormData();
            fd.append('id', this.products[index].id);
            fd.append('name_product', this.products[index].name_product);
            fd.append('category_id', this.products[index].category_id);
            fd.append('price',this.products[index].price);
            fd.append('count',this.products[index].count);
            fd.append('count_type',this.products[index].count_type);
            for (var i = 0; i < this.documents.length; i++) {
                fd.append('images[]', this.documents[i])
            }
            fd.append('description',this.description);
            this.$http.post('/update/product',fd,
                {
                    headers: {
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then(res => {
                    this.$toast.open({
                      message: res.data.message,
                      type: 'success',
                      position: 'bottom',
                      duration: 5000,
                      queue: true
                    });
                    this.document = [];
                    this.message_notif = res.data.message;
                    this.getCategories();
                    this.getProductByCategorySecond(this.products[index].category_id,this.choosen_type);


                    this.seePurchase = false;
            });
        },
       
        openDelete(index,id) {
            this.dialog = true;
            this.delete_index = id;
            this.delete_type = index;
        },
        deleteProcess(index,id) {

            this.dialog = false;
            let type = 'category';
            if(index==2) {
                type='product/admin';
            }
            if(index==3) {
                type='application';
            }
            if(index==4) {
                type='product/image';
            }
          
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.get('/delete/'+type+'?id='+id,  config)
            .then(res => {
                this.products = res.data
                this.message_notif = res.data.message;
                this.getCategories();
                this.getProductByCategory(this.category_id,null)
                this.savedData = true;

                window.setInterval(() => {
                    this.savedData = false;
                }, 4000);
            })
        },
       
    },
    mounted() {

        if(localStorage.getItem("access_token")) {

           this.token = localStorage.getItem("access_token");
           this.$http.post('/get/user/me', 
            {
                
            }, {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                }
            }
            )
            .then(res => { 
                this.user.role = res.data.name;
                // if(this.user.name == "Администратор системы") {
                    this.getOrders();
                    this.getCategories();
                    this.getBanner();
                    this.$router.push("/admin");
                // }else {
                //     this.$router.push("/login");
                // }
            });
        }
        else {  
            this.$router.push("/login");
        }
    }
}
</script>
<style scoped lang="less">
@mobile: 900px;
@planshet: 1200px;

.green__active {
  color: #0069ff;
}
    .banners {
      overflow-x: scroll;
      i {
        cursor: pointer;
      }
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    }
    .green__notif_position {
        bottom: 200px;
    }
    p {
        margin-bottom: 0  !important;
    }

    .green__mb__xs {
        margin-bottom: 10px;
    }
    .green__mb__s {
        margin-bottom: 20px  !important;
    }
    .green__ml__l {
        margin-left: 20px;
    }
    .green__mr__xs {
        margin-right: 10px;
    }
    .green__100 {
        width: 100%;
    }
    .green__row {
        display: flex;
        flex-direction: row;
    }
    .green__ac {
        align-items: center;
    }
    .green__jb {
        justify-content: space-between;
    }
    .green__column {
        display: flex;
        flex-direction: column;
        @media (max-width: @mobile) {
           width: 100%;
        }
    }
    .green__abs {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .green__pointer {
        cursor: pointer;
    }
    .green__btn:hover {
        color: #0069ff;
    }
    .green__btn__color {
        color: #0069ff; 
    }
    .green__btn__color:hover {
        opacity: 0.6;
    }

    .green__admin {
        min-height: 100vh;

        align-items: center;
        justify-content: center;


        .green__see {
            font-size: 24px;
            font-weight: bold;
            @media (max-width: 900px) {
              font-size: 12px;
              white-space: nowrap;
            }
        }
        .green__images__title {
            margin-top: 40px;
            color: #0069ff;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
         
        }

        .green__product__images__main::-webkit-scrollbar {
            height: 5px;
        }

        .green__product__images__main::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: #ccc;
        }
        .green__product__images__main::-webkit-scrollbar-thumb {
            background-color: #0069ff;
            border-radius: 2px;
            height: 24px;
            width: 50px;
        }
        .green__product__images__main {
            overflow-x: auto;
            width: 50%;
        }
        .green__product__images {
            margin-bottom: 5px;
            margin-top: 5px;
            img {
            
                width: 70px;
                height: 70px;
                border-radius: 10px;
                object-fit: cover;
                margin-right: 30px;
            }
        }

        .green__logout {
            align-self: flex-end;
            padding: 10px;
            background: #0069ff;
            color: white;
            margin-bottom: 20px;
            width: 140px;
            text-align: center;

        }
        .green__logout:hover {
            background: #5c8a0d;
        }

        .green__left {
            width: 20%;
            padding: 20px;
            background: #FFFFFF;
            box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
            border-radius: 2px;

            margin-right: 20px;

            @media (max-width: @mobile) {
                width: 100%;
                margin-left: 0;
                margin-bottom: 20px;
            }

            p {
                cursor: pointer;
            }
            p:hover {
                color: #0069ff;
            }
        }

        .green__right {
            padding: 20px;
            background: #FFFFFF;
            box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
            border-radius: 2px;


            .green__parents {
                p {
                    font-size: 20px;

                }
                i {
                    font-size: 22px;
                }
                i:hover {
                    color: #0069ff;
                }
            }
            .green__choose  {
                 margin-bottom: 20px;
                .green__category__choose {
                    cursor: pointer;
                    padding: 20px;
                    background:black;
                    margin-right: 10px;
                    color: white;
                    @media (max-width: @mobile) {
                      font-size: 14px;
                    }
                   
                }
                .green__category__active {
                    background: #0069ff;
                }

            }

            .green__input {
                width: 300px;
                @media (max-width: @mobile) {
                    width: 100%;
                }
            }
            button {
                width: 300px;
                outline: none;
                border:none;
                background-color: #0069ff;
                color: white;
                padding: 20px;
                @media (max-width: @mobile) {
                    width: 100%;
                    
                }
            }

            .green__edit {
                margin-bottom: 20px;
                border-radius: 2px;
                border: 1px solid #ccc;
                padding: 20px;

                a {
                  color: #0069ff !important;
                }


                .green__user__orders {
                  margin-top: 30px;
                  margin-left: 10px;

                  .green__user__title {
                    font-weight: bold;
                    font-size: 18px;
                  }

                }

                @media (max-width: @mobile) {
                    margin-left: 0;  
                }
                .green__last__action {
                    p {
                        font-size: 12px;
                    }
                }

                .green__data {
                    margin-bottom: 10px;
                    color: #0069ff;
                    font-size: 18px;
                }
                .green__save__btn {
                    color:#0069ff;
                }

                button {
                    width: 300px;
                    outline: none;
                    border:none;
                    background-color: #0069ff;
                    color: white;
                    padding: 20px;
                    @media (max-width: @mobile) {
                        width: 100%; 
                    }
                }
            }
        }
    }

    .green__message {
        button {
            outline: none;
            border:none;
            background-color: #0069ff;
            color: white;
            padding: 20px;
        }
    }

    .green__admin__inner {
        @media (max-width: @mobile) {
            flex-direction: column;
        }
    }
</style>