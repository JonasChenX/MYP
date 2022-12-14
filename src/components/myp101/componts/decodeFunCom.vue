<template>
  <div>
    <accordion :itemArr="itemArr"/>
  </div>
</template>

<script>
import {decodeFunMenus} from '@/common/functions/decodeFunction'
import accordion from '@/common/componts/accordion.vue'
export default {
  components:{
    accordion
  },
  setup(){

    const formetFun = (value) => {
      let str = ""
      if(typeof value != 'string'){
        str = String(value)
      } else{
        str = value
      }
      str = str.replaceAll("||","||\n")
      str = str.replaceAll("&&","&&\n")
      return str
    }

    const itemArr = decodeFunMenus.map(item=>{
      return {
        directions: item.meta.label,
        funName: item.meta.content,
        fun: formetFun(item.meta.fun)
      }
    })



    return{
      itemArr
    }    
  }
}
</script>

<style>

</style>