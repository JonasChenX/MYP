
import copy from '@/components/myp305/directivesFuns/v-copy'
import longpress from '@/components/myp305/directivesFuns/v-longpress'
import debounce from '@/components/myp305/directivesFuns/v-debounce'
import drag from '@/components/myp305/directivesFuns/v-drag'
import input from '@/components/myp305/directivesFuns/v-input'

// 自定义指令
const directives = {
  copy,
  longpress,
  debounce,
  drag,
  input,
}
   
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}
