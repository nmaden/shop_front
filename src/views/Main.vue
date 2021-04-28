<template>
    <div class="main">
        <Header />
        <div class="applications ">

            <div class="applications__menu item__row item__ac">
                <a href="https://greenclinic.kz/ru/"  >Главная</a>
                <p v-bind:class="{active__menu: page==1}" @click="openPurchases"> Закупки</p>
                <p v-bind:class="{active__menu: page==2}" v-if="page==2">Подать заявку</p>
            </div>

            <div class="applications__top item__row item__mb">
                <div class="purchase__line"></div>
                <p class="purchase__title">Закупки</p>
            </div>
            

            <div class="applications__line" v-if="page==1" >

                    <div class="applications__l">
                        <p v-for="(item,index) in categories" :key="index" @click="getByCategory(item.id)">{{item.name}}</p>
                    </div>

                    <div class="applications__r">


                        <div class="applications__item" v-for="(item,index) in purchases" :key="index">
                            <div class="item__l" @click="downloadDoc(item.link_document)">
                                <img src="../assets/all/ico_pdf.jpg" alt="">
                            </div>
                            <div class="item__r">
                                <div class="item__row item__ac">
                                    <p class="item__date item__mr__l">{{convert_date(item.created_at)}}</p>
                                    <p class="item__count">Количество заявок: {{item.count_purchase?item.count_purchase:0}}</p>
                                </div>
                                <p class="item__title">{{item.title}}</p>
                                <p class="item__description">{{item.description}}</p>

                                <div class="item__row  item__ac item__actions">
                                    <p class="item__download item__mr__xs" @click="downloadDoc(item.link_document)">Скачать документ</p>
                                    <p class="item__purchase" @click="openApplication(item.id)">Подать заявку</p>
                                </div>
                            </div>
                            
                        </div>

                    </div>
            </div>


            <div class="item__column application__form" v-if="page==2">
                <p class="form__title">Подать заявку</p>
                

                <form @submit.prevent="sendApplication">
                    <div class="form__wrap">
                        <div class="form__name item__column">
                            <p>Наименование компании</p>
                            <input type="text" required v-model="name">
                        </div>
                        <div class="form__bin item__column">
                            <p>БИН</p>
                            <input type="number" v-model="bin">
                        </div>
                        <div class="form__ur item__column">
                            <p>Юридический адрес</p>
                            <input type="text" v-model="address" required>
                        </div>
                        <div class="form__phone item__column">
                            <p>Телефон</p>
                            <input type="text" v-model="phone" required>
                        </div>
                        <div class="form__email item__column">
                            <p>Email</p>
                            <input type="email" v-model="email" required>
                        </div>
                    </div>

                    <div class="form__file item__column item__mb__s">
                        <p class="form__file__text">Прикрепить коммерческое предложение</p>

                        <p class="form__inside__text">Загрузить документ</p>
                        <div class="item__row item__ac">
                            <div class="item__column">
                                <input type="file"  style="width: 255px" @change="uploadDoc" class="custom-temp-input"  name="image" required >
                            </div>
                    
                            <div class="item__paper">
                                <img src="../assets/all/file.png" alt="">
                            </div>
                        </div>
                        <div class="item__row" >
                            <p v-for="(i,index) in imageNames" :key="index">{{i}}</p>
                        </div>
                    </div>
                    <div class=" item__row item__ac item__mb__s">
                        <v-checkbox
                        style="margin-top: 0"
                        color="success"
                        value="success"
                        required
                        ></v-checkbox>
                        <p class=" item__checkbox__text" style="margin-bottom: 20px">Продукция соответствует требованиям технической спецификации</p>
                    </div>
                
                    <button type="submit" class="form__send">Отправить</button>
                    
                    <div class="item__row item__ac item__mb__xs">
                        <p class="form__agree__first">Правила подачи заявки на участие в тендеры. Для того чтобы подробно ознакомиться со всеми этапами работы, вы можете посмотреть инструкцию.</p>
                    </div>
                    
                    <p class="form__agree__second">По правилам подачи заявки, документация на участие в закупках разрабатывается на двух языках, соответственно государственном и русском языках по правилам оформления конкурсной документации.</p>
                
                </form>
                
            </div>


            
            <div class="item__column item__100 applications__contact ">
                <div class="applications__top item__row item__mb">
                        <div class="purchase__line"></div>
                        <p class="purchase__title">Контакты</p>
                </div>

                <div class="applications__contact item__row item__100 item__ac item__mb__s item__jb">
                    <div class="contact__l">
                        

                        <div class="item__row ">
                            <img class="contact__i" src="../assets/all/location_i.png" alt="">

                            <div class="item__column">
                                <p class="contact__b__title">Адрес</p>
                                <a href="https://yandex.kz/maps/-/CCUUqJFm~D"   class="contact__text">г.Нур-Султан, ул. Хусейн бен Талал 25/1</a>
                                <a href="https://yandex.kz/maps/-/CCUUqJFm~D"   class="contact__text">г. Нур-Султан, ул. Сарайшык 11/1 (филиал)</a>
                            </div>
                        </div>
                        <div class="item__row ">
                            <img class="contact__i" src="../assets/all/contact_i.png" alt="">
                            <div class="item__column">
                                <p class="contact__b__title">Телефон</p>
                                <a href="tel:+7 (7172) 79 77 22" class="contact__text">+7 (7172) 79 77 22</a>   
                                <!-- <a href="tel:+7(71-72) 79-77-20" class="contact__text">+7(71-72) 79-77-20 (отделение лучевой диагностики)</a>
                                <a href="tel:+7 776 898 38 00" class="contact__text"> +7 776 898 38 00</a>
                                <a href="te:+7(771)-033-55-59" class="contact__text"> +7(771)-033-55-59 (отделение лучевой диагностики)</a> -->
                            </div>
                        </div>
                        <div class="item__row  item__ac">
                            <img class="contact__i" src="../assets/all/calendar_i.png" alt="">
                            
                            <div class="item__row item__days">
                                <p class="contact__text item__mr__m">Пн-Пт: 08:00 - 20:00</p>
                                <p class="contact__text item__red item__mr__m">  Сб: 08:00 - 18.00</p>
                                <p class="contact__text item__red">Вс: 09:00 - 14.00</p>
                            </div>
                        </div>

                        <div class="item__row  item__ac">
                            <img class="contact__i" src="../assets/all/post_i.png" alt="">
                            <div class="item__column">
                                <p class="contact__b__title">Электронная почта</p>
                                <a href="mailto:info@greenclinic.kz" class="contact__text">info@greenclinic.kz</a>
                            </div>
                        </div>

                    </div>
                    <div class="contact__r">
                        <!-- <img src="../assets/all/contact_map.png" alt=""> -->
                          <div id="map" style="width: 600px; height: 400px"></div>
                    </div>
                </div>
       
            </div>
            <div class="item__call" @click="contactDialog=true">
                <img   src="../assets/all/call.svg" alt="">
            </div>
        </div>

        <div class=" text-center">
            <v-dialog
            v-model="contactDialog"
            width="700"
            class="rounded-0"
            >
        
            <v-card class="rounded-0 modal item__column item__ac">
              
                <div class="modal__header">
                      <h2>Заказать звонок</h2>
                </div>
                <svg class="modal__close" @click="contactDialog=false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>

               
                <input type="text"  v-model="nameModal" class="modal__input" placeholder="Ваше имя"/>
                <input type="text" v-model="phoneModal"  v-mask="mask" class="modal__input" placeholder="Ваш телефон*"/>

                <button class="modal__submit" @click="sendRequest">Отправить</button>
                <p class="modal__text">Нажмите “Отправить” наши консультанты с вами свяжуться и помогут</p>
            </v-card>
            </v-dialog>
        </div>
        <v-row justify="center" >
            <v-alert
                type="success"
                :value ="savedData"
                transition="fade-transition"
            
            >  {{'Успешно сохранен'}}
            </v-alert>
        </v-row>
        <v-row justify="bottom" >
            <v-alert
                type="success"
                :value ="savedData2"
                transition="fade-transition"
            
            >  {{'Успешно сохранен'}}
            </v-alert>
        </v-row>
        <v-dialog
            v-model="dialogAccept"
            max-width="500"
            >
            
            <v-card>
                <div class="item__finish item__column item__ac">
                    <p class="item__finish__text">Ваше коммерческое предложение отправлено успешно!</p>
                    <button @click="dialogAccept=false">Вернуться на главную</button>
                </div>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="dialogAccept2"
            max-width="500"
            >
            
            <v-card>
                <div class="item__finish item__column item__ac">
                    <p class="item__finish__text">Ваша заявка отправлено успешно!</p>
                    <button @click="dialogAccept2=false">Вернуться на главную</button>
                </div>
            </v-card>
        </v-dialog>
        <Footer />

       
         
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

import { required, numeric } from 'vuelidate/lib/validators'

export default {
    components: {
        Header,Footer
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
            savedData2: false,
            nameModal: '',
            contactDialog: false,
            imageNames: [],
            dialogAccept: false,
            dialogAccept2: false,
            savedData: false,
            support: false,
          
            message: '',
         
            purchases: [],
            page: 1,
            name: null,
            bin: null,
            address: null,
            phone: null,
            email: null,
            document: [],
            categories: [],
            mask: ['+7(', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
            phoneModal: '+7'

        }
    },
    methods: {
        sendRequest() {
          
            let data = {
                name: this.nameModal,
                phone: this.phoneModal
            };
            this.$http.post('/send/request',data,
                {
              
            })
            .then(res => {
                console.log(res);
               
                this.savedData = true;


                this.contactDialog = false;
                this.dialogAccept2 = true;
         

                this.phoneModal = '';
                this.nameModal = '';
                
            })
        },
        openModal() {
            this.contactDialog = true;
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
        uploadDoc(e) {
            this.document =e.target.files[0];

            const file = e.target.files
            for (var i=0; i < file.length; i++) {
                this.imageNames.push(file[i].name);
            }
        },
        downloadDoc(link) {
            window.open('https://api.greenclinic.kz'+link,"_blank");
        },
        openPurchases() {
            this.page = 1;
        },
        openApplication(id) {
            this.page = 2;
            this.purchase_id = id;
        },
        getByCategory(id) {
         
            this.$http.get('/get/by/category?id='+id)
            .then(res => {
                this.purchases = res.data
            });
        },
        sendApplication() {

            let fd= new FormData();
            fd.append('purchase_id', this.purchase_id);
            fd.append('name', this.name);
            fd.append('bin',this.bin);
            fd.append('address',this.address);
            fd.append('phone',this.phone);
            fd.append('email',this.email);
            fd.append('document',this.document);
            this.$http.post('/create/application',fd,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                ).then(res => {
                    this.page = 1;
                   
                    console.log(res);
                    this.savedData = true;

                    window.setInterval(() => {
                        this.savedData = false;
                    }, 2000); 
                    this.dialogAccept = true;
                    this.imageNames = [];
                    this.name = null;
                    this.bin=  null;
                    this.address=null;
                    this.phone=null;
                    this.email = null;
                    this.purchase_id = null;
                    this.document = [];
               
            });
        },
    },
    mounted() {
        this.$http.get('/get/categories')
        .then(res => {
           
            this.purchases = res.data[0].purchases;

            this.categories = res.data;

        });
    }
}
</script>

<style scoped lang="less">

.item__100 {
    width: 100%;
}
@mobile: 900px;
@planshet: 1200px;
.applications  {
    max-width: 1420px;
}

.item__finish__text {
    
        font-family: "MontserratRegular" !important;
}
.modal {
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 60px 46px;
    justify-content: center;
    background-color: #fff;
    position:relative;
    .modal__close {
        position:absolute;
        right: 30px;
        top: 20px;
        cursor: pointer;
    }
    button,input {
        border: none;
        outline: none;
    }
   .modal__header {
       h2 {
            font-family: 'MontserratBold';
            font-style: 'bold';
            font-weight: bold;
            font-size: 31px;
            line-height: 42px;
            letter-spacing: -0.03em;
            margin: 0;
            text-align: center;
            margin-bottom: 23px;
       }
   } 
   .modal__input {

        font-family: "MontserratRegular";
        background: #ffffff;
        border: 1px solid #f2f2f2;
        box-sizing: border-box;
        border-radius: 2px;
        width: 100%;
        padding: 15px 25px;
        color: #0f1721;
        height: 58px;
        margin-bottom: 15px;
   }
   .modal__submit {
        width: 100%;
        padding: 15px 25px;
        color: #0f1721;
        height: 58px;
        background: #ffcf55;
        border-radius: 2px;
        font-weight: normal;
        font-size: 18px;
        border: 0;
        font-family: "MontserratRegular";
   }
   .modal__submit:hover {
       opacity: 0.8;
   }
   .modal__text {
      

        font-family: "MontserratRegular";
        text-align: center;
        margin-top: 25px;
        font-weight: normal;
        font-size: 18px;
        color: #9c9c9c;
}
   
}
.item__call {
    cursor: pointer;
    position: fixed;
    right: 50px;
    z-index: 5;
    bottom: 50px;
    animation: circle-fill-anim 2.3s infinite ease-in-out;
}
@keyframes circle-fill-anim {
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
.item__paper {
    background-color: #85C418;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.custom-temp-input {
    outline: none;
    color: transparent;
    height: 44px;
}
.custom-temp-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-temp-input::before {
  cursor: pointer;
  content: 'Загрузить документ';
 
  display: inline-block;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  padding-right: 30px;
  height: 44px;
  background-color: white;
  border: 1px solid #D4D4D4;
  border-right:none;
  border-radius: 2px 0 0 2px;
  width: 260px;
  outline: none;
}
.item__mb__none {
    margin-bottom: 0;
}
  /* ---  checkbox  --- */

  /* The container2 */
  .container2 {
    
    display: block;
    position: relative;
    margin-top: 5px;
    padding-left: 28px;
    padding-right: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    p {
      color: black;
    }
  }
  
  /* Hide the browser's default checkbox */
  .container2 input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid  #D4D4D4;
    border-radius: 2px;
  
  }

  /* When the checkbox is checked, add a blue background */
  .container2 input:checked ~ .checkmark {
    border: 1px solid   #85C418;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  
  }
  
  /* Show the checkmark when checked */
  .container2 input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .container2 .checkmark:after {
      
    left: 5px;
    top: 3px;
    width: 7px;
    height: 10px;
    border: solid #85C418;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  
    .checkmark__text__color {
      color: var(--main-red-color) !important;
    }
    /* Create a custom checkbox */
    .checkmark .checkmark--red {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      border: 1px solid  #D4D4D4;
      border-radius: 2px;
    
    }
  
    /* When the checkbox is checked, add a blue background */
    .container2 input:checked ~ .checkmark--red {
      border: 1px solid   var(--main-red-color);
      
    }
    
    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    
    }
    
    /* Show the checkmark when checked */
    .container2 input:checked ~ .checkmark:after {
      display: block;
    }
    
    /* Style the checkmark/indicator */
    .container2 .checkmark--red:after {
      left: 5px;
      top: 3px;
      width: 7px;
      height: 10px;
      border: solid var(--main-red-color);
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
/*--- --- */

.main {
    background: url("../assets/all/green_bg.jpg");


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

     @media (max-width: @planshet) {
          width: 100%;
    }
    @media (max-width: @mobile) {
          width: 100%;
    }
}

.item__finish {
    padding: 20px;
    text-align: center;
    p {
        font-size: 24px;
        font-family: 'Monserrat';
    }
    button {
        outline: none;
        border:none;
        background-color: #85C418;
        color: white;
        padding: 20px;
    }
}

.item__mb__s {
    margin-bottom: 20px;
}

.item__row {
    display: flex;
    flex-direction: row;
}
.item__ac {
    align-items: center;
}
.item__column {
    display: flex;
    flex-direction: column;
}
.item__jb {
    justify-content: space-between;
}
.applications {
   
    display: flex;
    flex-direction: column;
    align-self: center;
    @media (max-width: @planshet) {
          width: 100%;
    }
    @media (max-width: @mobile) {
          width: 100%;
    }

    .applications__contact {
        @media (max-width: @planshet) {
          width: 100%;
          
        }
        @media (max-width: @mobile) {
            width: 100%;
            flex-direction: column;
        }
        .contact__l {
            .item__row {
                padding: 10px;
            }
            margin-right: 100px;
            @media (max-width: @planshet) {
                    margin-right: 0;
            }
            @media (max-width: @mobile) {
                 margin-right: 0;
            }
           
        }
        .contact__r {
           
            #map {
                width: 690px;
                height: 452px;
                @media (max-width: @planshet) {
                    width: 100%;
                    height: 100%;
                }
                @media (max-width: @mobile) {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .contact__i {
            color: #0F1721;
            margin-right: 20px;
            width: 51px;
            height: 40px;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: @mobile) {
                width: 31px;
                height: 25px;
            }
        }
        .contact__b__title {
            color: #85C418;
            font-family: 'MontserratBold';
            margin-bottom: 2px;
            font-size: 20px;
             @media (max-width: @mobile) {
                font-size: 14px;
            }
        }

        .item__days {
            @media (max-width: @mobile) {
                flex-direction: column;
            }
        }
        .contact__text {
           font-family: 'MontserratRegular'; 
           margin-bottom: 2px;
           text-decoration: none;
           color: #0F1721;
           font-size: 16px;
            @media (max-width: @mobile) {
                font-size: 12px;
            }
        }
  
    }
    .active__menu {
        color: #85C418 !important;
    }

    .applications__menu {
        margin-top: 35px;
        background:  #FAFAFA;
        p,a {
            text-decoration: none;
            margin: 11px 0 12px 26px;
            cursor: pointer;
            color: #BEBEBE;  
            font-family: 'MontserratRegular';
            font-size: 14px;
        }
        p:hover,a:hover {
            color: #85C418;
        }
        .active {
            color: #85C418;
        }
    }
    .applications__top {
        margin-bottom: 35px;
    }
    
    .purchase__line {
        background: rgba(133, 196, 24, 0.13);
        height: 5px;
        margin-right: 30px;
        width: 215px;
        margin-top: 22px;
        @media (max-width: @mobile) {
            width: 49px;
            height: 3px;
        }
    }
    .purchase__title {
        
        font-size: 48px;
        line-height: 65px;
        color: #85C418;

        margin-bottom: 0;
        font-family: 'MontserratBold';
        @media (max-width: @mobile) {
            font-size: 32px;
        }
    }
    .item__red {
        color: #da3f3f !important;
    }
    .item__mr__m {
        margin-right: 20px;
    }
    .item__mr__xs {
        margin-right: 10px;
    }
    .item__mr__l {
        margin-right: 40px;
    }
    .item__mb__xs {
        margin-bottom: 10px;
    }

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
    p {
        font-weight: normal;
    }
    .application__form {
        padding: 60px;
        background: #FFFFFF;
        box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
        border-radius: 2px;
        margin-bottom: 30px;

        animation: fadein 1s;
        -moz-animation: fadein 1s; /* Firefox */
        -webkit-animation: fadein 1s; /* Safari and Chrome */
        -o-animation: fadein 1s; /* Opera */

        @media (max-width: @mobile) {
           padding: 30px;
        }
        input {
             font-family: "MontserratRegular";
        }
        .item__checkbox__text {
            font-size: 14px;
            font-family: 'MontserratRegular';
        }
        .form__title {
            color: #0F1721;
            font-size: 24px;
            font-family: 'MontserratBold'; 
        }

        .form__wrap {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 25px;
            border-bottom: 1px solid #E6E6E6;
            margin-bottom: 20px;
            
            .item__column {
                p {
                    font-family: 'MontserratRegular'  !important;
                }
            }
            div {
                margin-bottom: 10px;
                p {
                    margin-bottom: 2px;
                }
            }
            input {
                
                height: 42px;
                border: 1px solid #737373;
                border-radius: 2px;
                margin-right: 10px;
                padding-left: 10px;

                @media (max-width: @mobile) {
                    width: 100% !important;
                }
            }
            .form__name {
                width: 543px;
            
            }
            .form__bin {
                width: 276px;
            }
            .form__ur {
                width: 407px;
            }

            
            .form__phone,.form__email {
                input {
                border: 1px solid #737373;
                border-radius: 2px;
                }
                width: 220px;
                @media (max-width: @mobile) {
                    width: 100% !important;
                }
            }
        }
        .form__file {
            position: relative;
            .form__file__text {
                margin-bottom: 2px ;
                font-family: "MontserratRegular";
            }
            .form__inside__text {
                position:absolute;
                top: 38px;
                left: 10px;
                color: #0F1721;
                opacity: 0.9;
                font-family: "MontserratRegular";
                font-size: 14px;
                
            }
        }
       
        button {
            outline: none;
            border:none;
            padding: 16px 123px;
            background: #FFCF55;
            font-size: 18px;
            margin-bottom: 35px;
            border-radius: 2px;
            font-family: "MontserratRegular";
            @media (max-width: @mobile) {
                width: 100%;
                text-align: center;
                padding: 0;
                height: 48px;
            }
        }

        button:hover {
            opacity: 0.9;
            color: white;
        }

        .form__agree__first {
            font-family: "MontserratRegular";
            margin-bottom: 0;
        }
        .form__agree__second {
            font-family: "MontserratRegular";
        }
    
    }

    .applications__line {
        width: 1420px;
        min-height: 50vh;
        display: flex;
        flex-direction: row;
        margin-bottom: 30px;
        @media (max-width: @planshet) {
            width: 100%;
            
        }

        @media (max-width: @mobile) {
            width: 100%;
            flex-direction: column;
        }
      

        .applications__l {
            width: 338px;
            display: flex;
            flex-direction: column;
            background: #FFFFFF;
            box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
            margin-right: 20px;
            padding: 40px 20px 44px 48px;
            animation: fadein 1s;
            -moz-animation: fadein 1s; /* Firefox */
            -webkit-animation: fadein 1s; /* Safari and Chrome */
            -o-animation: fadein 1s; /* Opera */

            @media (max-width: @planshet) {
                width: 30%;
             
            }
            @media (max-width: @mobile) {
                width: 100%;
                margin-left: 0;
                margin-bottom: 20px;
                align-items: flex-start;
            }
            p {
                margin-bottom: 15px;
                cursor: pointer;
                font-family: 'MontserratSemiBold';
            }
            p:hover {
                color: #85C418;
            }
        }

        .applications__r {
            display: flex;
            flex-direction: column;
            animation: fadein 1s;
            -moz-animation: fadein 1s; /* Firefox */
            -webkit-animation: fadein 1s; /* Safari and Chrome */
            -o-animation: fadein 1s; /* Opera */

            @media (max-width: @planshet) {
                width: 70%;
            }
             @media (max-width: @mobile) {
                width: 100%;
            }

            .applications__item {
                width: 1080px;
                padding: 30px 40px;
                display: flex;
                flex-direction: row;
                background: #FFFFFF;
                box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
                margin-bottom: 20px;
                @media (max-width: @planshet) {
                    width: 100%;
                    flex-direction: column;
                }
                @media (max-width: @mobile) {
                    width: 100%;
                    flex-direction: column;
                }
                .item__download {
                    font-family: 'MontserratBold';
                    color: #85C418;
                    font-size: 18px;
                    cursor: pointer;
                    @media (max-width: @mobile) {
                        font-size: 14px;
                        white-space: nowrap;
                    }
                }
                .item__download:hover {
                    opacity: 0.6;
                }

                .item__purchase {
                    color: #DBC926;
                    font-size: 18px;
                    cursor: pointer;
                    
                    font-family: 'MontserratBold';
                    @media (max-width: @mobile) {
                        font-size: 14px;
                        white-space: nowrap;
                    }
                }
                .item__purchase:hover {
                    opacity: 0.6;
                }

                .item__l {
                    margin-right: 40px;
                    cursor: pointer;
                    p {
                        font-family: 'MontserratBold';
                    }
                }
                .item__r {
                    display: flex;
                    flex-direction: column;

                    .item__count,.item__date {
                        color: #C0C0C0;
                        font-family: 'MontserratLight';
                      
                    }
                    .item__title {
                        font-size: 16px;
                        font-family: 'MontserratBold';
                    }
                    .item__description {
                        font-size: 14px;
                        font-family: 'MontserratLight';
                    }
                  
                }

            }
        }
    }
}

</style>