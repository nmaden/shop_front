<template>
    <div>
        <div class="main__base__margin">
            <h2>
                Список моих гостей
            </h2>
            
            <div class="quest__list__margin">
                <div class="quest__list">
                    <div class="quest__list__l">
                        <div class="quest__list__l__header">
                            <h4>
                                Малика К. М.
                            </h4>
                            <img src="../../../assets/icons/russia.png" alt="country">
                        </div>
                        <p>
                            <span>
                                даты прибывания
                            </span>
                        </p>
                        <p>
                            <b>
                                29.07.2020 - 29.07.2020
                            </b>
                        </p>
                    </div>
                    <div class="quest__list__r">
                        <img src="../../../assets/icons/edit.png" alt="edit">
                        <p>
                            <span>
                                статус
                            </span>
                        </p>
                        <p>
                            <b>
                                На рассмотрении
                            </b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
</template>

<script>

export default {
}
</script>

<style scoped lang="less">
.main__base__margin {
    width: 1200px;
    margin: 0 auto;
    margin-top: 30px;

    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: #000;
    }

    .quest__list__margin {
        margin-top: 20px;
        margin-bottom: 20px;
         .quest__list {
            width: 560px;
            background: #F8F8F8;
            border-radius: 5px;
            padding: 15px;
            display: flex;
            justify-content: space-between;

            .quest__list__l {
                width: 70%;
                .quest__list__l__header {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    h4 {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 15px;
                        margin-right: 15px;
                    }
                }
                p {
                    margin: 0;
                    margin-top: 5px;
                    span {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 12px;
                        color: #C0C0C0;
                    }
                    b {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 13px;
                        color: #000000;
                    }
                }
            }
            .quest__list__r {
                width: 27%;
                text-align: right;
                img {
                    cursor: pointer;
                }
                p {
                    margin: 0;
                    
                    span {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 12px;
                        color: #C0C0C0;
                    }
                    b {
                        font-style: normal;
                        font-weight: 300;
                        font-size: 12px;
                        color: #FF9100;
                    }
                }
            }
        }
    }
   
}
</style>