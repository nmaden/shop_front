<template>
    <div class="video__main">
        <div class="video__fixed">
            <div class="video__fixed__l">
                <h2> 
                    {{$t('video__title')}}
                </h2>
                <p>
                    {{$t('video__description')}}
                </p>
            </div>
            <div class="video__fixed__r">
                <a @click="video__md = true">
                    <img src="../../assets/all/img__video__play.svg" alt="">
                </a>
            </div>
        </div>
        <v-dialog
            v-model="video__md"
            max-width="1160"
            overlay-opacity="0.9"
        >
            <div class="video__modal">
                <div class="video__modal__header">
                    <span class="mdi mdi-close" @click="video__md = false"></span>
                </div>
                <div class="video__modal__iframe">
                    <iframe class="video__iframe" src="https://www.youtube.com/embed/-iQ1lpnD-M8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            video__md: false,
        }
    }
}
</script>
 
<style lang="less">
.v-dialog {
    border-radius: 4px;
    margin: 24px;
    overflow-y: auto;
    pointer-events: auto;
    transition: 0;
    width: 100%;
    z-index: inherit;
    box-shadow: none;
}
.video__modal {
    width: 100%;
    background: transparent;
    .video__modal__header {
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: right;
        span {
            font-size: 30px;
            color: #fff;
            cursor: pointer;
            &:hover {
                opacity: .7;
            }
        }
    }
    .video__modal__iframe {
        width: 100%;
        height: 500px;
        .video__iframe {
            width: 100%;
            height: 100%;
        }
    }
}
.video__main {
    width: 100%;
    height: 255px;
    border-radius: 10px;
    background: url('../../assets/all/img__video.svg') no-repeat;
    overflow: hidden;
    position: relative;
    .video__fixed {
        position: absolute;
        border-radius: 11px;
        width: 95.2%;
        height: 255px;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        padding: 50px;
        justify-content: space-between;
        align-items: center;
        .video__fixed__l {
            width: 35%;
            h2 {
                font-size: 24px;
                line-height: 32px;
                color: #fff;
                font-style: normal;
            }
            p {
                color: #fff;
                font-size: 16px;
                line-height: 20,39px;
                margin-top: 10px;
            }
        }
        .video__fixed__r {
            width: 40%;
            text-align: center;
            img {
                cursor: pointer;
            }
        }
    }
}
</style>