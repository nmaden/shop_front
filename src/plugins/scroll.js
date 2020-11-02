import disableScroll from 'disable-scroll'

export default {
    install(Vue) {
        Vue.prototype.$scroll = (e, speed) => {
            function schekScroll () {
                let scroll__width = e.currentTarget.scrollWidth - e.currentTarget.clientWidth
                if (e.currentTarget.scrollLeft === scroll__width) {
                    disableScroll.off()
                }
                if (e.currentTarget.scrollLeft == 0) {
                    disableScroll.off()
                }
            }

            let delta = e.deltaY || e.detail || e.wheelDelta
            if (delta <= 0) {
                e.currentTarget.scrollLeft -= speed
                schekScroll()
            } else {
                e.currentTarget.scrollLeft += speed
                schekScroll()
            }
        }
    }
}