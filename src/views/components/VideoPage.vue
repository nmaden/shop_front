<template>
    <div class="video__main">
        <div class="video__fixed">
            <div class="video__fixed__l">
                <h2>
                    Небольшое видео о системе eQonaq
                </h2>
                <p>
                    Небольшое видео о нашей системе, кто мы, как начать работу с eQonaq
                </p>
            </div>
            <div class="video__fixed__r">
                <a href="https://www.youtube.com/watch?v=cl5LyPF5TRs&feature=youtu.be" target="_blank">
                    <img src="../../assets/all/img__video__play.svg" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
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