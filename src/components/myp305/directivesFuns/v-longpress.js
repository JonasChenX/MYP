const longpress = (el, binding, vNode) => {
    if (typeof binding.value !== 'function') {
    throw 'callback must be a function'
    }
    // 定义变量
    let pressTimer = null
    // 创建计时器（ 2秒后执行函数 ）
    let start = (e) => {
    if (e.type === 'click' && e.button !== 0) {
        return
    }
    if (pressTimer === null) {
        pressTimer = setTimeout(() => {
        handler()
        }, 1000)
    }
    }
    // 取消计时器
    let cancel = (e) => {
    if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
    }
    }
    // 运行函数
    const handler = (e) => {
    binding.value(e)
    }
    // 添加事件监听器
    el.addEventListener('mousedown', start)
    // el.addEventListener('touchstart', start)
    // 取消计时器
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
}

   
export default longpress