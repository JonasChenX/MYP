<template>
  <div class="sidebar bg-dark h-100 d-flex flex-column">
        <div class="list-group rounded-0 p-4 py-3" v-for="(menu,index) in menus" :key="index">
            <div class="rounded-3 list-group-item list-group-item-action fs-6 text-center" :class="{ active: menu.meta.name == curMenuName}" @click="callMenuName(menu.meta.name)">
                {{menu.meta.label}}
            </div>                    
        </div>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
    props:{
        sidebarMenuArr:Array
    },
    setup(props,cxt){

        const menus = reactive(props.sidebarMenuArr)

        const callMenuName = (name) => {
            curMenuName.value = name
            cxt.emit('callMenuName',name)
        }

        onMounted(()=>{
            callMenuName(menus[0].meta.name)
        })

        const curMenuName = ref("");

        return{
            menus,
            callMenuName,
            curMenuName
        }
    }
}
</script>

<style>

.list-group-item.active {
    background-color: #d9e0e6;
    border-color: #d9e0e6;
    color: black;
}

</style>