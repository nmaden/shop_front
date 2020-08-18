<template>
    <div class="places">
        <p>
            Интересные места
        </p>

        <div class="places__type">
            <div 
                class="places__type__block"
                v-for="places_item in places"
                :key="places_item.title"
                :style="'background: url(' + places_item.img + ') no-repeat'"
            >
                <div class="header">

                </div>
                <div class="footer">
                    <h4>
                        {{places_item.title}}
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        places: [
            {
                title: 'ОТДЫХ НА Откртом воздухе',
                img: require('../../assets/all/pr_img1.png'),
            },
            {
                title: 'АРХИТЕКТУРА',
                img: require('../../assets/all/pr_img2.png'),
            },
            {
                title: 'Куда съездить',
                img: require('../../assets/all/pr_img3.png'),
            },
        ]
      }
    },
}
</script>

<style scoped lang="less">

.places {
    width: 100%;
    margin-top: 40px;

    p {
        font-weight: bold;
        font-size: 24px;
        margin-top: 30px;
    }

    .places__type {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        .places__type__block {
            width: 370px;
            height: 466px;
            border-radius: 15px;
            margin-right: 10px;
            overflow: hidden;
            position: relative;

            .header {
                position: absolute;
                width: 20px;
                height: 20px;
                left: 30px;
                top: 33px;
                background: #FFCE03;
                border-radius: 50%;
            }
            .footer {
                position: absolute;
                bottom: 0;
                width: 100%;
                padding: 20px;
                h4 {
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 29px;
                    color: #fff;
                    text-transform: uppercase;
                }
            }
        }
    }
}

</style>