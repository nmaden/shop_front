<template>
    <div class="widget">
        <div class="widget__block">
            <div class="widget__image__mr">
                <img src="../../assets/all/mr.svg" alt="widget">
            </div>
            <p class="mr__text">
                МИГРАЦИОННЫЙ <br>
                СПРАВОЧНИК
            </p>
        </div>
        <div class="widget__block">
            <img src="../../assets/all/sun.svg" alt="widget">
            <p class="sun__text">
                28 ℃
            </p>    
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.widget {
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    .widget__block {
        width: 163px;
        height: 50px;
        cursor: pointer;
        background: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border: 1px solid #f5f5f5;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        margin-right: 10px;
        align-items: center;
        .widget__image__mr {
            width: 35px;
            height: 35px;
            position: relative;
            border-radius: 50%;
            background: #FDE88D;
            img {
                position: absolute;
                left: 7px;
                top: -2px;
                width: 23px;
            }
        }
        p {
            margin: 0;
        }
        .mr__text {
            font-size: 11px;
            font-weight: bold;
            margin: 5px;
            line-height: 11px;
        }
        .sun__text {
            font-weight: bold;
            font-size: 32px;
            margin: 5px;
        }
    }
}
</style>