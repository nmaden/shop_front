<template>
    <div class="search">
        <Header />
        <div class="main__base__margin">
            <h1>
                Поиск по сайту
            </h1>
            <div class="search__block">
                <input type="text">
                <img src="../../assets/icons/search.svg" alt="search">
            </div>
            <div class="search__result">
                <img src="../../assets/all/result__search.png" alt="result__search">
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    components: {
        Header,
    },
    data () {
      return {
         
      }
    },
}
</script>

<style scoped lang="less">

.search {
    width: 100%;
    height: 100%;
    font-family: "MontserratBold";

    .main__base__margin {
        width: 1200px;
        margin: 0 auto;
        margin-top: 65px;

        h1 {
            font-style: normal;
            font-weight: 500;
            font-size: 48px;
        }
        .search__block {
            width: 100%;
            height: 70px;
            background: #F7F7F7;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
            padding: 0 20px;
            input {
                background: transparent;
                width: 97%;
                border: none;
                outline: none;
                font-size: 20px;
            }
            img {
                cursor: pointer;
            }
        }
        .search__result {
            width: 100%;
            text-align: center;
            margin-top: 42px;
        }
    }
     
}


</style>