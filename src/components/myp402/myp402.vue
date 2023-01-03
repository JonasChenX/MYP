<template>
  <div class="row p-0 m-0 vh-100">
        <div class="col-2 p-0">
            <sidebar :sidebarMenuArr="comNmArr" @callMenuName="getMenuName" />
        </div>
        <div class="col-10 p-0">
            <keep-alive>
            <component
                :is="curSideBarName"
            ></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import { comNmArr } from '@/components/myp402/comNmArr'
import sidebar from '@/core/sidebar/sidebar.vue'
import scrollAnimation from '@/components/myp402/com-1/scrollAnimation'

import { ref } from '@vue/reactivity'
export default {
    components:{
        sidebar,
        scrollAnimation
    },
    setup(){

        const curSideBarName = ref()
        const getMenuName = (e) => {
            curSideBarName.value = e
        }

        return{
            comNmArr,
            getMenuName,
            curSideBarName,
        }
    }
}
</script>

<style>

</style>