<template>
    <div class="auth">
        <div class="auth__margin">
            <Header />
            <div class="registrations">
                <h2>
                    Отправит уведомление о прибытии гостя в МВД
                </h2>

                <div class="registrations__form">
                    <div class="input__block">
                        <label for="date_arrival">
                            Дата заезда - выезда <span>*</span>
                        </label>
                        <div class="data_input_block">
                            <p @click="dialog = true">20.20.2020</p>
                            <p>-</p>
                            <p @click="dialog = true">20.20.2020</p>
                            <img src="../../assets/icons/date.png" alt="date">
                        </div>
                    </div>
                    <div class="input__block select__input">
                        <label for="stay_addres">
                            Адрес прибывания <span>*</span>
                        </label>
                        <div class="data_input_block">
                            <img src="../../assets/icons/search.png" alt="date">
                            <input class="search_input" type="text" id="stay_addres">
                            <img class="icon__size" src="../../assets/icons/down.png" alt="date">
                        </div>
                    </div>
                    <div class="input__block">
                        <label for="flat">
                            Квартира <span>*</span>
                        </label>
                        <input class="input" type="text" id="flat">
                    </div>
                </div>

                <button>Сканировать документ</button>

                <h3>Данные гостя</h3>


                <div class="registrations__form">
                    <div class="input__block">
                        <label for="name">
                            Имя <span>*</span>
                        </label>
                        <input class="input" type="text" id="name">
                    </div>

                    <div class="input__block">
                        <label for="surname">
                            Фамилия <span>*</span>
                        </label>
                        <input class="input" type="text" id="surname">
                    </div>

                    <div class="input__block">
                        <label for="middle_name">
                            Отчество
                        </label>
                        <input class="input" type="text" id="middle_name">
                    </div>

                    <div class="input__block">
                        <label for="citizenship">
                            Гражданство <span>*</span>
                        </label>
                        <input class="input" type="text" id="citizenship">
                    </div>

                    <div class="input__block__child">
                        <label for="date_birth">
                            Дата рожденья <span>*</span>
                        </label>
                        <input class="input" type="text" id="date_birth">    
                    </div>

                    <div class="input__block__child">
                        <label for="floor">
                            Пол <span>*</span>
                        </label>
                        <input class="input" type="text" id="floor">    
                    </div>
                    
                </div>


                <div class="registrations__form">
                    <div class="input__block">
                        <label for="phone">
                            Телефон  <span>*</span>
                        </label>
                        <input class="input" type="text" id="phone">
                    </div>
                    <div class="input__block">
                        <label for="email">
                            E-mail <span>*</span>
                        </label>
                        <input class="input" type="text" id="email">
                    </div>
                </div>

                <h3>Документы, удостоверяющие личность</h3>


                <div class="registrations__form">
                    <div class="input__block">
                        <label for="type_document">
                            Тип документа  <span>*</span>
                        </label>
                        <input class="input" type="text" id="type_document">
                    </div>
                    <div class="input__block__child">
                        <label for="document_number">
                            Номер документа <span>*</span>
                        </label>
                        <input class="input" type="text" id="document_number">
                    </div>
                    <div class="input__block__child">
                        <label for="series_documents">
                            Серия документа <span>*</span>
                        </label>
                        <input class="input" type="text" id="series_documents">
                    </div>
                </div>

                <div class="registrations__form">
                    <div class="input__block__child">
                        <label for="date_issuing">
                            Дата выдачи <span>*</span>
                        </label>
                        <input class="input" type="text" id="date_issuing">
                    </div>
                    <div class="input__block__child">
                        <label for="date_endings">
                            Дата окончания <span>*</span>
                        </label>
                        <input class="input" type="text" id="date_endings">
                    </div>
                </div>

                <h3>Данные о пребывании</h3>

                <div class="registrations__form">
                    <div class="input__block">
                        <label for="purpose_visit">
                            Цель визита  <span>*</span>
                        </label>
                        <input class="input" type="text" id="purpose_visit">
                    </div>
                </div>

                <button>ОТПРАВИТЬ</button>
            </div>
        </div>


        <!-- modal window -->

        <v-dialog
            v-model="dialog"
            max-width="290"
        >
            <v-card>
                <v-date-picker 
                    locale="ru-in"
                    v-model="picker"
                ></v-date-picker>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
import Header from './components/Header'

export default {
    components: {
        Header,
    },
     data () {
        return {
            picker: new Date().toISOString().substr(0, 10),
            dialog: false
        }
    },
}
</script>

<style scoped lang="less">
.auth {
    width: 100%;

    .auth__margin {
        width: 85%;
        margin: 0 auto;
        margin-top: 40px;

        .registrations {
            width: 100%;
            margin-top: 40px;

            h2 {
                font-style: normal;
                font-weight: 500;
                font-size: 48px;
                color: #000;
            }
            h3 {
                font-style: normal;
                color: #000;
                font-weight: 500;
                font-size: 20px;
                margin-top: 20px;
            }
            button {
                padding: 15px 50px;
                background: #FDE88D;
                border: 3px solid #FDE88D;
                box-sizing: border-box;
                font-style: normal;
                font-weight: bold;
                margin-top: 20px;
                margin-bottom: 20px;
                font-size: 16px;
                border-radius: 30px;
                &:hover {
                    opacity: 0.7;
                }
            }
            .registrations__form {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                margin-top: 20px;
                .select__input {
                    cursor: pointer;
                }
                .input__block {
                    width: 345px;
                    margin-right: 10px;
                    span {
                        color: red;
                    }
                    
                    .input {
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                        margin-bottom: 10px;
                    }
                    
                    
                    .data_input_block {
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 10px;
                        .search_input {
                            height: 26px;
                            border: none;
                            width: 81%;
                            outline: none;
                        }
                        p {
                            cursor: pointer;
                            color: #000;
                            margin: 0;
                            &:hover {
                                opacity: .7;
                            }
                        }
                        img {
                            cursor: pointer;
                            &:hover {
                                opacity: .7;
                            }
                        }
                        .icon__size {
                            height: 7px;
                            width: 10px;
                        }
                    }
                    label {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                    }
                }
                .input__block__child {
                    width: 201px;
                    margin-right: 10px;
                    span {
                        color: red;
                    }
                    input {
                        width: 100%;
                        height: 46px;
                        background: #fff;
                        border-radius: 10px;
                        outline: none;
                        border: 2px solid #000000;
                        padding: 10px;
                        margin-bottom: 10px;
                    }
                    label {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        color: #000;
                    }
                }
            }
        }
    }
}
</style>