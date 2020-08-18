<template>
    <div class="profile">
        <Header />
        <div class="main__base__margin">
            <h1>
                Елдос Сейдулаев
            </h1>
        </div>
        <div class="profile__data">
            <div class="profile__data__margin">
                <div class="profile__data__flex">
                    <div class="profile__data__text"> 
                        <p>
                            ИИН:
                        </p>
                        <h4>
                            950912354465
                        </h4>
                    </div>
                    <div class="profile__data__text"> 
                        <p>
                            Почта:
                        </p>
                        <h4>
                            black63squad@gmail.com
                        </h4>
                    </div>
                </div>
                <div class="profile__data__flex">
                    <div class="profile__data__text"> 
                        <p>
                            Номер телефона
                        </p>
                        <h4>
                            7 707 683 45 33
                        </h4>
                    </div>
                    <div class="profile__data__text"> 
                        <p>
                            Адрес:
                        </p>
                        <h4>
                            г. Нур-Султан, Сарыаркинский район, ул Акмешит 7, кв 56
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="main__base__margin">
            <button>РЕДАКТИРОВАТЬ</button>
            <ListGuest />
        </div>
    </div>
</template>

<script>
import Header from './components/HeaderCabinet'
import ListGuest from './components/ListGuest'

export default {
    components: {
        Header,
        ListGuest,
    },
}
</script>

<style scoped lang="less">

.profile {
    width: 100%;
    height: 100%;
    background: url('../../assets/all/hotpng_bg.png') no-repeat;
    background-position: right bottom;
    background-size: 15%;

    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        margin-top: 30px;

        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
        }
        button {
            padding: 15px 50px;
            background: #FDE88D;
            border: 3px solid #FDE88D;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            border-radius: 30px;
            &:hover {
                opacity: 0.7;
            }
        }
    }
    .profile__data {
        width: 100%;
        margin-top: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        background: #FFF5CB;

        .profile__data__margin {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .profile__data__flex {
                margin-right: 30px;

                .profile__data__text {
                    margin-bottom: 15px;
                    p {
                        margin: 0;
                        font-style: normal;
                        font-weight: 500;
                        color: #000;
                        font-size: 14px;
                        margin-bottom: 5px;
                    }
                    h4 {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 20px;
                        color: #000;
                    }
                }
            }
        }
    }
}


</style>