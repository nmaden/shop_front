<template>
    <div class="places">
        <p>
            Интересные места
        </p>

        <div class="places__type">
            <div 
                class="places__type__block__parrent"
                v-for="places_item in places"
                :key="places_item.title"
                @click="to_link(places_item.uri)"
            >
                <div 
                    class="places__type__block"
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
    </div>
</template>

<script>
export default {
    data () {
      return {
        places: [
            {
                title: 'ОТДЫХ НА Открытом воздухе',
                img: require('../../assets/all/pr_img1.png'),
                uri: 'https://kazakhstan.travel/publications/ru/15/10-must-see-landscapes-in-kazakhstan'
            },
            {
                title: 'АРХИТЕКТУРА',
                img: require('../../assets/all/pr_img2.png'),
                uri: 'https://kazakhstan.travel/publications/ru/108/seven-architectural-wonders-of-kazakhstan'
            },
            {
                title: 'Куда съездить',
                img: require('../../assets/all/pr_img3.png'),
                uri: 'https://kazakhstan.travel/'
            },
        ]
      }
    },
    methods: {
        to_link (to) {
            window.location.href = to
        }
    }
}
</script>


<style scoped lang="less">

.places {
    width: 100%;
    margin-top: 40px;
    font-family: 'MontserratBold';

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

        .places__type__block__parrent {
            width: 370px;
            margin-right: 10px;
            overflow: hidden;
            border-radius: 15px;
            height: 466px;
            .places__type__block {
                width: 100%;
                height: 100%;
                position: relative;
                cursor: pointer;
                &:hover {
                    transition: .7s;
                    transform: scale(1.04);
                }
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
                        letter-spacing: -0.05em;
                    }
                }
            }
        }

        
    }
}

</style>