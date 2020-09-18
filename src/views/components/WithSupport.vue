<template>
    <div class="withSupport">
        <p> 
            При поддержке
        </p>

        <div class="withSupport__type">
            <div 
                class="withSupport__type__block"
                v-for="withSupport_item in withSupport"
                :key="withSupport_item.title"
            >   
                        <img :src="withSupport_item.img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        withSupport: [
            {
                img: require('../../assets/logo/3.svg'),
            },
            {
                img: require('../../assets/logo/2.svg'),
            },
            
            {
                img: require('../../assets/logo/1.svg'),
            },
        ]
      }
    },
}
</script>

<style scoped lang="less">
@mobile: 900px;

.withSupport {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    font-family: "MontserratBold";
    @media (max-width: @mobile) {
        margin-top: 0;
        margin-bottom: 20px;
    }
    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 30px;
        @media (max-width: @mobile) {
            font-size: 17px;
            margin-top: 20px;
        }
    }

    .withSupport__type {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        @media (max-width: @mobile) {
            overflow-x: scroll;
            width: 100%;
            white-space: nowrap;
            display: block;
            &::-webkit-scrollbar {
                width: 0px;
            }
        }

        .withSupport__type__block {
            width: 233px;
            margin-right: 10px;
            background: #fff;
            cursor: pointer;
            overflow: hidden;
            text-align: center;
            img {
                width: 100%;
            }
            @media (max-width: @mobile) {
                width: 132px;
                display: inline-block;
            }
        }
    }
}

</style>