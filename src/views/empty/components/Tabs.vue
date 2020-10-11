<template>
    <div class="tab__main">

        <div class="header__tabs">
            <div 
                v-for="tab_item in tabs_array"
                :key="tab_item.id"
                @click="tabs(tab_item.id)"
                :class="tab_item.active == true ? 'header__tabs__block__active' : 'header__tabs__block'"
            >
                <p>
                    {{tab_item.name}}
                </p>
            </div>
        </div>

        <div class="header__tabs__content active__content">
            <Eds />
        </div>
        <div class="header__tabs__content">
            <Login />
        </div>
    </div>
</template>

<script>
import Login from './Login'
import Eds from './Eds'

export default {
    components: {
        Login, Eds
    },
    data() {
        return {
            tabs_array: [
                {
                    name: 'ЭЦП',
                    id: 0,
                    active: true,
                },
                {
                    name: 'Логин',
                    id: 1,
                    active: false,
                }
            ]
        }
    },
    methods: {
        tabs (id) {
            let tab_content = document.querySelectorAll('.header__tabs__content')
            for (let i = 0; i < tab_content.length; i++) {
                tab_content[i].classList.remove('active__content')
                this.tabs_array[i].active = false
            }
            this.tabs_array[id].active = true
            tab_content[id].classList.add('active__content')
        }
    }
}
</script>

<style lang="less">
@mobile: 900px;

.tab__main {
    width: 87%;
    @media (max-width: @mobile) {
        width: 100%;
    }
    .header__tabs {
        border-radius: 10px;
        border: 2px solid #FDE88D;
        display: flex;
        justify-content: space-between;
        background: #FDE88D;
        overflow: hidden;
        .header__tabs__block {
            width: 50%;
            height: 46px;
            background: #fff;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: @mobile) {
                height: 35px;
            }
            p {
                margin: 0;
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
                user-select: none;
                color: #000;
                @media (max-width: @mobile) {
                    font-size: 14px;
                }
            }
        }
        .header__tabs__block__active {
            width: 50%;
            height: 46px;
            background: #FDE88D;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: @mobile) {
                height: 35px;
            }
            p {
                margin: 0;
                font-weight: 600;
                font-size: 16px;
                line-height: 20px;
                user-select: none;
                color: #000;
                @media (max-width: @mobile) {
                    font-size: 14px;
                }
            }
        }
    }
    .header__tabs__content {
        display: none;
        margin-top: 20px;
    }
    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .active__content {
        display: block;
        opacity: 1;
        animation-name: fadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.4s;
    }
    
}
</style>