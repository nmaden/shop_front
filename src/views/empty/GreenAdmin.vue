<template>
    <div class="green__admin green__column green__100">   
        <a @click="logout" class="green__logout">Выйти</a>
        <div class="green__row green__100 green__admin__inner">

            <div class="green__left green__column">

                <div class="green__row green__ac green__mb__s green__btn">
                    <i class="fas fa-directions green__mr__xs"></i>
                    <p class="" @click="page=1">Категории</p>
                </div>
                <div class="green__row green__ac green__mb__s green__btn">
                    <i class="fas fa-directions green__mr__xs"></i>
                    <p class="" @click="page=2">Закупки</p>
                </div>
                <div class="green__row green__ac green__mb__s green__btn">
                    <i class="fas fa-directions green__mr__xs"></i>
                    <p class="" @click="page=3">Список заявок</p>
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

                        <div class="green__column green__edit" v-for="(item,index) in categories" :key="index" v-else>

                            <p class="green__data" v-if="item.edit==true">{{item.name}}</p>

                            <form  class="green__mb__s" action="" @submit.prevent="editSaveCategory(index)" v-else >
                

                                <div class="green__column green__input" >
                                    <p>Категория</p>
                                    <v-text-field
                                        v-model="item.name"
                                        label="Категория"
                                        
                                        outlined
                                    ></v-text-field>
                                </div>

                                
                                <button type="submit">Сохранить</button>
                            </form>
                            
                            <div class="green__row green__ac">
                                <div  class="green__btn green__pointer green__row green__ac green__mb__s green__mr__xs" @click="editCategory(index)">
                                    <i class="fas fa-pencil-alt green__mr__xs"></i>
                                    <p>Редактировать</p>
                                </div>
                                 
                                <div  class="green__btn green__pointer green__row green__ac green__mb__s" @click="openDelete(1,item.id)">
                       
                                    <i class="fas fa-trash-alt green__mr__xs"></i>
                                    <p>Удалить</p>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>

                <div class="green__purchases" v-if="page==2">

                    <div class="green__row green__ac">
                        <div @click="seePurchase=false"  class="green__btn green__mr__xs green__pointer green__see green__row green__ac green__mb__s">
                            <i class="fas fa-plus green__mr__xs"></i>
                            <p>Добавить закуп</p>
                        </div>
                        <div @click="seePurchase=true"  class="green__btn  green__pointer green__see green__row green__ac green__mb__s">
                            <i class="fas fa-eye green__mr__xs"></i>
                            <p>Список закупок</p>
                        </div>
                        
                    </div>
                    


                    <div class="green__column" v-if="seePurchase">
                       
                        <div class="green__column green__edit" v-for="(item,index) in purchases" :key="index">

                            <p class="green__data">{{item.title}}</p>

                            <p class="green__data">{{item.description}}</p>
                            <p class="green__data">Количество заявок:{{item.count_purchase}}</p>
                            <p class="green__data">{{convert_date(item.created_at)}}</p>
                            

                            <div class="green__btn green__pointer green__row green__ac green__mb__xs">
                                <i class=" fas fa-download green__mr__xs"></i>
                                <p class="" @click="downloadDoc(item.link_document)">Скачать документ</p>

                            </div>
                            
                            <form  class="green__mb__s" action="" @submit.prevent="editSave(index)" v-if="item.edit">
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
                                        v-model="item.title"
                                        label="Название категории"
                                        required
                                        outlined
                                    ></v-text-field>
                                </div>
                                <div class="green__column green__input">
                                    <p>Описание</p>
                                    <v-text-field
                                        v-model="item.description"
                                        label="Описание"
                                        
                                        outlined
                                    ></v-text-field>
                                </div>
                                <div class="green__column green__input">
                                    <p>Количество заявок</p>
                                    <v-text-field
                                        v-model="item.count_purchase"
                                        label="Количество заявок"
                                        
                                        outlined
                                    ></v-text-field>
                                </div>
                                <div class="green__column green__input green__mb__s">
                                        <p>Добавить файл</p>
                                        <input type="file"   @change="uploadDoc" required/> 
                                </div>
                                
                                <button type="submit">Сохранить</button>
                            </form>
                            
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
                    <form action="" @submit.prevent="createPurchase" v-else>
                        <div class="green__column green__input">
                            <p>Выберите категорию</p>
                            <v-select
                                v-model="cat"
                                :items="categories"
                                item-text="name"
                                item-value="id"
                                label="Выберите категорию"
                                outlined
                            ></v-select>
                        </div>

                        <div class="green__column green__input">
                            <p>Название закупа</p>
                            <v-text-field
                                v-model="title"
                        
                                label="Название закупа"
                                required
                                outlined
                            ></v-text-field>
                        </div>
                        <div class="green__column green__input">
                            <p>Описание</p>
                            <v-text-field
                                v-model="description"
                        
                                label="Описание"
                                required
                                outlined
                            ></v-text-field>
                        </div>

                        <div class="green__column green__input green__mb__s">
                                <p>Добавить файл</p>
                                <input type="file"   @change="uploadDoc" /> 
                        </div>
                        <button type="submit">Сохранить</button>
                    </form>
                    
                   
                </div>

                <div class="green__purchases" v-if="page==3">

                    <div class="green__row green__ac">
                        
                        <!-- <div @click="seeApplication=true"  class="green__btn  green__pointer green__see green__row green__ac green__mb__s">
                            <i class="fas fa-eye green__mr__xs"></i>
                            <p>Список заявок</p>
                        </div> -->
                        
                    </div>

                    <div class="green__column green__edit" v-for="(data,j) in purchases" :key="j">
                        <p class="green__data green__mb__xs" >Название: {{data.title}}</p>
                        <p class="green__data green__mb__xs" >Количество заявок: {{data.count_purchase}}</p>
                        <p class="green__data green__mb__xs" >Дата создание: {{convert_date(data.created_at)}}</p>
                        <div class="green__btn green__pointer green__row green__ac green__mb__xs">
                                <i class=" fas fa-download green__mr__xs"></i>
                                <p class="" @click="downloadDoc(item.link_document)">Скачать документ</p>
                        </div>
        
                        <div class="green__ml__l green__column green__edit" v-for="(item,index) in purchases[j].applications" :key="index">

                            <p class="green__data green__mb__xs" >Название: {{item.name}}</p>
                            <p class="green__data green__mb__xs" >БИН: {{item.bin}}</p>
                            <p class="green__data green__mb__xs" >Адрес: {{item.address}}</p>
                            <p class="green__data green__mb__xs" >Телефон: {{item.phone}}</p>
                            <p class="green__data green__mb__xs" >Email: {{item.email}}</p>
                            <div class="green__btn green__pointer green__row green__ac green__mb__xs" v-if="item.link_file">
                                <i class=" fas fa-download green__mr__xs"></i>
                                <p class="" @click="downloadDoc(item.link_file)">Скачать документ</p>
                            </div>
                            

                       
                            
                            <div class="green__row green__ac green__last__action">

                                <div @click="okApplication(item.id,item.purcase_id)" class="green__btn green__btn__color green__pointer green__row green__ac green__mb__s green__mr__xs" >
                                    <i class="fas fa-check-circle green__mr__xs"></i>
                                    <p class="" >Принять предложение</p>
                                </div>
                                 
                                <div  class="green__btn green__pointer green__row green__ac green__mb__s" @click="openDelete(3,item.id)">
                       
                                    <i class="fas fa-trash-alt green__mr__xs"></i>
                                    <p>Удалить</p>
                                </div>
                            </div>
                
                        </div>
                    </div>

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
            
            max-width="290"
            >
            
            <v-card>
                <v-card-title class="headline">
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
                
                    @click="deleteCategory(delete_type,delete_index)"
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
                        <img class="green__pointer" src="../../assets/all/x.svg" alt="" @click="dialogApplication=false">
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
export default {
    data () {
        return {
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
            purchases: [],
            user: {
                role: ''
            },
            delete_index: '',
            delete_type: '',
            document: null,
            applications: [],
            application_index: null,
            purchase_index: null,
            message: 'Здравствуйте,'
        }
    },
    computed: {
      filteredData(key){
          return this.categories.filter(item => item.id === key)
      }
    },
    methods: {
        closeDialog() {
            this.dialogApplication = false;
        },
        convert_date(date) {
     
            let day = date.split("T")[0].split("-")[2];
            let month = date.split("T")[0].split("-")[1];
            let year = date.split("T")[0].split("-")[0];

            let hour = date.split("T")[1].split(":")[0];
            let minute = date.split("T")[1].split(":")[1];
            let ready  = day+'.'+month+'.'+year;

            return ready+' '+hour+':'+minute;
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

                this.getPurchases();
                this.getCategories();
                this.getApplications();
                window.setInterval(() => {
                    this.savedData = false;
                }, 4000); 
            })
        },
        downloadDoc(link) {
            window.open('https://api.greenclinic.kz'+link,"_blank");
        },
        uploadDoc(e) {
            this.document =e.target.files[0];
        },
        createPurchase() {
            let fd= new FormData()
            fd.append('document', this.document);
            fd.append('category_id',this.cat);
            fd.append('title',this.title);
            fd.append('description',this.description);
            this.$http.post('/create/purchase',fd,
                {
                    headers: {
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then(res => {
                    this.document = [];
                    this.message_notif = res.data.message;
                    this.savedData = true;

                    this.getPurchases();
                    this.getCategories();
                    
                    window.setInterval(() => {
                        this.savedData = false;
                    }, 4000); 
                    this.seePurchase = true;
            });
        },

        getApplications() {
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.get('/get/applications',  config)
            .then(res => {
                this.applications = res.data
            });
        },
        addCategory() {
            this.page = 1;

            let data = {
                name: this.category_name
            };

            this.$http.post('/create/category',data,
                {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                })
            .then(res => {
                this.message_notif = res.data.message;
                this.savedData = true;

                this.getPurchases();
                this.getCategories();
                window.setInterval(() => {
                    this.savedData = false;
                },4000); 
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
            this.purchases[index].edit = !this.purchases[index].edit;
            let p = this.purchases;
            this.purchases = [];

            this.purchases = p;
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
        getPurchases() {
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.get('/get/purchases',  config)
            .then(res => {
                this.purchases = res.data

            })
        },
        editSaveCategory(index) {
            let data = {
                id: this.categories[index].id,
                name: this.categories[index].name,
            };

            this.$http.post('/update/category',data,
                {
                headers: {
                    'Authorization': `Bearer ${this.token}` 
                    }
                })
            .then(res => {
                this.message_notif = res.data.message;
                this.savedData = true;
                window.setInterval(() => {
                    this.savedData = false;
                }, 4000); 
            })
        },
        editSave(index) {
          

            let fd= new FormData();
            fd.append('document', this.document);
            fd.append('id',  this.purchases[index].id);
            fd.append('category_id',this.purchases[index].category_id);
            fd.append('title',this.purchases[index].title);
            fd.append('description',this.purchases[index].description);
            fd.append('count_purchase',this.purchases[index].count_purchase);

      
            this.$http.post('/update/purchase',fd,
                {
                    headers: {
                        'Authorization': `Bearer ${this.token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then(res => {
                    this.message_notif = res.data.message;
                    this.savedData = true;

                    this.getPurchases();
                    this.getCategories();
                    window.setInterval(() => {
                        this.savedData = false;
                    }, 4000); 
                    
                    
            });
        },
       
        openDelete(index,id) {
            this.dialog = true;

            this.delete_index = id;
            this.delete_type = index;
        },
        deleteCategory(index,id) {
            let type = 'category';
            if(index==2) {
                type='purchase';
            }
            if(index==3) {
                type='application';
            }
          
            const config = {
                headers: { 'Authorization': `Bearer ${this.token}` }
            };
            this.$http.get('/delete/'+type+'?id='+id,  config)
            .then(res => {
                this.purchases = res.data
                this.message_notif = res.data.message;
                
                this.getPurchases();
                this.getCategories();
                this.getApplications();

                this.savedData = true;

                window.setInterval(() => {
                    this.savedData = false;
                }, 4000);
                this.dialog = false;
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
                if(this.user.role == "Администратор системы") {
                    this.getPurchases();
                    this.getCategories();
                    this.getApplications();
                    this.$router.push("/green/admin");
                }else {
                    this.$router.push("/login");
                }
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
        color: #85C418;
    }
    .green__btn__color {
        color: #85C418; 
    }
    .green__btn__color:hover {
        opacity: 0.6;
    }

    .green__admin {
        background: url("../../assets/all/green_bg.jpg");
        min-height: 100vh;

        align-items: center;
        justify-content: center;

        .green__logout {
            align-self: flex-end;
            padding: 10px;
            background: #85C418;
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
                color: #85C418;
            }
        }

        .green__right {
            padding: 20px;
            background: #FFFFFF;
            box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
            border-radius: 2px;


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
                background-color: #85C418;
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
                }
                .green__save__btn {
                    color:#85C418;
                }

                button {
                    width: 300px;
                    outline: none;
                    border:none;
                    background-color: #85C418;
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
            background-color: #85C418;
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