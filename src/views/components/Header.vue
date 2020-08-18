<template>
    <div>
        <div class="header">
            <div class="header__l">
                <img src="../../assets/logo/logo.png" alt="logo">
            </div>
            <div class="header__r">
                <div class="search">
                    <img src="../../assets/icons/search.png" alt="search">
                </div>
                <div class="lang">
                    <v-select
                        v-model="selectLangs"
                        :items="langs"
                        item-text="state"
                        item-value="abbr"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                    ></v-select>
                </div>
                <div class="user">
                    <router-link to="/login">
                        <img src="../../assets/icons/person_default.png" alt="person_default">
                    </router-link>
                </div>
            </div>
        </div>
        <div class="scroll__menu">
            <div class="menu">
                <a 
                    class="menu__item"
                    v-for="menu_item in menu"
                    :key="menu_item.name"
                >
                        {{menu_item.name}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        selectLangs: { state: 'Русский', abbr: 'ru' },
        langs: [
          { state: 'Русский', abbr: 'ru' },
          { state: 'Англиский', abbr: 'en' },
        ],
        menu: [
            {
                name: 'номера телефонов',
            },
            {
                name: 'Связь',
            },
            {
                name: 'МИГРАЦИОННЫЙ СПРАВОЧНИК',
            },
            {
                name: 'ВАЛЮТА',
            },
            {
                name: 'ГОСТИНИЦЫ',
            },
            {
                name: 'ИСТОРИЯ КАЗАХСТАНА',
            },
        ]
      }
    },
}
</script>

<style scoped lang="less">

.header {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;

    .header__l {
        width: 50%;
    }
    .header__r {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .search {
            margin-right: 15px;
            border-right: 2px solid #000;
            padding-right: 15px;
            img {
                cursor: pointer;
                &:hover {
                    opacity: .7;
                }
            }
        }
        .lang {
            width: 120px;
        }
        .user {
            margin-left: 15px;
            img {
                cursor: pointer;
                &:hover {
                    opacity: .7;
                }
            }
        }
    }
}

.scroll__menu {
    width: 100%;
    .menu {
        width: 100%;
        padding-left: 13%;
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
        overflow: auto;
        white-space: nowrap;
        &::-webkit-scrollbar {
            height: 0px;
        }
        &::-webkit-scrollbar-track {
            background: #fff; 
        }
        &::-webkit-scrollbar-thumb {
            background: #ffce03; 
            border-radius: 5px;
        }
        &::-webkit-scrollbar-thumb:hover {
            opacity: 0.7;
        }
        .menu__item {
            padding: 15px 40px;
            border: 3px solid #FDE88D;
            border-radius: 30px;
            font-size: 16px;
            font-weight: bold;
            margin-right: 10px;
            text-transform: uppercase;
            user-select: none;
            color: #000;
            display: block;
            cursor: pointer;
            &:hover {
                opacity: .7;
            }
        }
    }
}

</style>