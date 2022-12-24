<template>
  <div class="selector" v-focus>
    <SelectorInput 
        :placeholder ="placeholder"
        :inputVal = "searchVal"
        @setSearchVal = "setSearchVal"
        @search = "search"
    />
    <SelectorMenu
        :data = "data"
        @setItemVal="setItemVal"
        :searchVal="searchVal"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import SelectorInput from './input.vue'
import SelectorMenu from './menuList.vue'
import focus from './v-focus.js'
export default {
    components:{
        SelectorInput,
        SelectorMenu
    },
    props:{
        placeholder:String,
        data:Array,
    },
    directives:{
        focus
    },
    emits: ['getItemVal','search'],
    setup(props,cxt){

        const state = reactive({
            searchVal:'' //查詢參數
        })

        const setItemVal = (item) => {
            state.searchVal = item.label
            cxt.emit('getItemVal',item)
        }

        const setSearchVal = (val) => {
            state.searchVal = val
        }

        const search = (val) => {
            cxt.emit('search',val)
        }

        return{
            props,
            setItemVal,
            setSearchVal,
            search,
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss" scoped>
    .selector{
        position: relative;
        // width: 300px;
    }
</style>