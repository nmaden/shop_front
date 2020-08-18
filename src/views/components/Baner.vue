<template>
    <div class="banner">
        <div class="banner_l">
            <div class="banner_user">
                <img src="../../assets/all/banner_user.png" alt="banner_user">
            </div>
        </div>
        <div class="banner_c">
            <h1>
                Qus jetken jerine qonar, Qonaq qalag’an uıine qonar
            </h1>
            <button>
                Отправить уведомление о прибытии гостя
            </button>
        </div>
        <div class="banner_r">
            <img src="../../assets/all/hotpng.png" alt="hotpng">
        </div>
    </div>
</template>

<style scoped lang="less">

.banner {
    width: 100%;
    background: #FDE88D;
    margin-top: 63px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 5px;

    .banner_l {
        width: 17%;
        display: flex;
        justify-content: center;
        align-items: center;

        .banner_user {
            background: #FFCC47;
            border-radius: 50%;
            width: 112px;
            height: 112px;
            img {
                position: relative;
                top: -50px;
            }
        }
    }
    .banner_c {
        width: 65%;
        h1 {
            font-weight: bold;
            font-size: 26px;
            text-transform: uppercase;
        }
        button {
            padding: 15px 50px;
            background: #FFCC47;
            border-radius: 25px;
            font-weight: bold;
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
            outline: none;
            &:hover {
                opacity: .7;
            }
        }
    }
    .banner_r {
        width: 17%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
}

</style>