<template>
    <div class="selector-menu">
        <div
            class="menu-item"
            v-for="(item, index) of searchData"
            :key="index"
            @click="setItemVal(item)"
        >
            {{ item.label }}
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
export default {
    name:'SelectorMenu',
    props:{
        searchVal:String,
        data:{
            type:Array,
            default(){
                return [
                    {
                        id:1,
                        value: '1',
                        label: 'JS'
                    }
                ]
            }
        }
    },
    setup(props,ctx){

        const searchData = ref([])

        onMounted(()=>{
            searchData.value = props.data
        })

        watch(()=>{
            return props.searchVal
        },(val)=>{
            filterData(val)
        })

        const filterData = (val) => {
            searchData.value = props.data.filter((item)=>{
                return item.label.toLowerCase().includes(val.toLocaleLowerCase())
            })
        }

        const setItemVal = (item) => {
            ctx.emit('setItemVal',item)
        }

        return{
            setItemVal,
            searchData
        }
    }
}
</script>

<style lang="scss" scoped>
.selector-menu{
    display: none;
    position: absolute;
    left: 0;
    top: 48px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    border-radius: 5px;
    cursor: pointer;
    .menu-item{
        height: 35px;
        text-align: center;
        font-size: 14px;
        color: #666;
        padding: 10px 0;
        transition: background-color .2s linear;
        &:hover{
            background-color: #ededed;
        }
    }
}


</style>