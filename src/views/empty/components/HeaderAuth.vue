<template>
    <div class="header">
        <div @click="$router.go(-1)" class="back__button">
            <img src="../../../assets/icons/left-arrow.png">
            <span>
                Назад
            </span>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
}
</script>

<style scoped lang="less">
.header {
    width: 100%;
    .back__button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 155px;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
        img {
            margin-right: 10px;
            user-select: none;
        }
        span {
            font-style: normal;
            user-select: none;
            font-weight: 500;
            font-size: 24px;
            text-transform: uppercase;
        }
    }
}
</style>