<template>
    <div class="eds">
        <div class="eds__form">
            <button class="eds__button">Выбрать сертификат</button>
            
            <button>Войти</button>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
             
        }
    },
     
    methods: {
        
    }
}
</script>

<style scoped lang="less">
.eds {
    width: 100%;
    .eds__form {
        width: 100%;
        .eds__button {
            width: 100%;
            margin-bottom: 20px;
        }
        button {
            padding: 15px 50px;
            background: #FDE88D;
            border: 3px solid #FDE88D;
            box-sizing: border-box;
            border-radius: 30px;
            font-style: normal;
            font-weight: bold;
            outline: none;
            font-size: 16px;
            text-transform: uppercase;
            &:hover {
                opacity: .7;
            }
        }
    }
}
</style>