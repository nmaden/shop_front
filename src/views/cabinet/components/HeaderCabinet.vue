<template>
    <div>
        <div class="header">
            <div class="header__l">
                <img src="../../../assets/logo/logo.png" alt="logo">
            </div>
            <div class="header__r">
                <div class="search">
                    <img src="../../../assets/icons/search.png" alt="search">
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
                    <img src="../../../assets/icons/person_default.png" alt="person_default">
                </div>
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
        }
    }
}

</style>