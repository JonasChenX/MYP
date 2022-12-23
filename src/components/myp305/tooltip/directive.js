
// 參考資料: https://juejin.cn/post/7043623645444309005

// 引入组件
import { nextTick, createApp } from "vue";
import tooltip from '@/components/myp305/tooltip/tooltip.vue'
import { tokenFun } from '@/components/myp305/tooltip/token'


// 清除监听
function clearEvent(el) {
    if (el._tipHandler) {
        el.removeEventListener('mouseenter', el._tipHandler)
    }
    if (el._tipMouseleaveHandler) {
        el.removeEventListener('mouseleave', el._tipMouseleaveHandler)
    }
    delete el._tipHandler
    delete el._tipMouseleaveHandler
    delete el._tipOptions
    delete el._tipInstance
}

// 位置定位
function calculationLocation(el, target, placements) {
    if (!el || !target) return;
    el.tooltipPostiton.y = 0;
    el.tooltipPostiton.x = 0;
    let el_dom = el.$el.nextElementSibling.getBoundingClientRect()
    let target_dom = target.getBoundingClientRect()

    if (placements === "left") {
        el.tooltipPostiton.x = target_dom.x - el_dom.width - 10
        el.tooltipPostiton.y = target_dom.y - el_dom.height / 2 + target_dom.height / 2
    } else if (placements === "bottom") {
        el.tooltipPostiton.x = target_dom.x + target_dom.width / 2 - el_dom.width / 2
        el.tooltipPostiton.y = target_dom.y + el_dom.height + 10
    } else if (placements === "right") {
        el.tooltipPostiton.x = target_dom.x + target_dom.width + 10
        el.tooltipPostiton.y = target_dom.y - el_dom.height / 2 + target_dom.height / 2
    } else if (placements === "top") {
        el.tooltipPostiton.x = target_dom.x + target_dom.width / 2 - el_dom.width / 2
        el.tooltipPostiton.y = target_dom.y - el_dom.height - 10
    }
}

// 方向
const allPlacements = ['left', 'bottom', 'right', 'top']

export default {
    install(app) {
        app.directive('tooltip', {
            mounted(el, binding) {
                clearEvent(el)
                el._tipOptions = binding.value
                el._tipHandler = () => {
                    const limitPlacementQueue = allPlacements.filter(placement => binding.modifiers[placement])
                    const placements = limitPlacementQueue.length ? limitPlacementQueue : allPlacements
                    if (!el._tipInstance) {
                        el._synopsis = createApp(tooltip)
                        el._root = document.createElement('div')
                        document.body.appendChild(el._root)
                        el._root.id = `tooltip_${tokenFun()}`
                        el._tipInstance = el._synopsis.mount(el._root)
                    }
                    el._tipInstance.placements = placements[0]
                    el._tipInstance.showTip()
                    el._tipInstance.text = el._tipOptions
                    nextTick(() => {
                        calculationLocation(el._tipInstance, el, placements[0])
                    })
                    el._scrollHandler = () => {
                        if (el._tipInstance.tooltipShow)
                            calculationLocation(el._tipInstance, el, placements[0])
                    }
                    window.addEventListener('scroll', el._scrollHandler)
                }
                el._tipMouseleaveHandler = () => {
                    if (el._tipInstance) {
                        el._tipInstance.hiddenTip()
                    }
                }
                el.addEventListener('mouseenter', el._tipHandler)
                el.addEventListener('mouseleave', el._tipMouseleaveHandler)
            },
            updated(el, binding) {
                el._tipOptions = binding.value
            },
            unmounted(el) {
                if (el._tipInstance) {
                    el._synopsis.unmount()
                    document.body.removeChild(el._root)
                }
                window.removeEventListener('scroll', el._scrollHandler)
            }
        })
    }
}
