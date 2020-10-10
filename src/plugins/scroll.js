import disableScroll from 'disable-scroll'

export default {
    install(Vue) {
        let menu__count

        Vue.prototype.$scroll = (e, ref__name, count, scrollInteval) => {
            menu__count = count
            e = e || window.event
            let delta = e.deltaY || e.detail || e.wheelDelta
            let menu__item = ref__name
            let last__menu__item = menu__item[Object.keys(menu__item)[Object.keys(menu__item).length - 1]] 
            let style__last__menu__item = window.getComputedStyle(last__menu__item)
            let offset__width = last__menu__item.offsetLeft + parseInt(style__last__menu__item.width.replace('px', ''))
            let margin__left__menu = Number(String(menu__count).replace('-', '')) + 1200

            if (margin__left__menu > offset__width) {
                if (delta < 0) {
                    menu__count += scrollInteval
                } 
                disableScroll.off()
            } else {
                if (menu__count > -1) {
                    delta > 0 ? menu__count -= scrollInteval : menu__count = 0;
                } else {
                    delta > 0 ? menu__count -= scrollInteval : menu__count += scrollInteval;
                }
            }
        }
        Vue.prototype.$menuCount = () => {
            return menu__count
        }
    }
}