<template>
    <div class="header">
        <div @click="$router.go(-1)"  class="back__button">
            <img src="../../assets/icons/left-arrow.svg">
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
@mobile: 900px;

.header {
    width: 100%;
    .back__button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
        img {
            margin-right: 10px;
            user-select: none;
            width: 30px;
            @media (max-width: @mobile) {
                width: 20px;
                margin-right: 5px;
            }
        }
        span {
            font-style: normal;
            user-select: none;
            font-weight: 500;
            font-size: 20px;
            text-transform: uppercase;
            @media (max-width: @mobile) {
                font-size: 14px;
            }
        }
    }
}
</style>