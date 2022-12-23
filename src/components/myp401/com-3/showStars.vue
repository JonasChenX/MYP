<template>
  <div>
    <stars :num="stateNum" :size="stateSize" @getStarNum="getStarNum"/>
  </div>
</template>

<script>
import stars from '@/components/myp401/com-3/stars.vue'
import { reactive, toRefs } from '@vue/reactivity'
export default {
    components:{
        stars
    },
    setup(){
        const state = reactive({
            stateNum:2,
            stateSize:50
        })


        const getStarNum = (num) =>{
            console.log(num);
        }

        return{
            ...toRefs(state),
            getStarNum
        }
    }
}
</script>

<style>

</style>