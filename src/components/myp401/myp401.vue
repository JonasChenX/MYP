<template>
  <div class="row p-0 m-0">
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
import { comNmArr } from '@/components/myp401/comNmArr'
import sidebar from '@/core/sidebar/sidebar.vue'
//進度條元件
import progressStepsMain from '@/components/myp401/com-1/progressStepsMain.vue'
import sameGroup from '@/components/myp401/com-2/sameGroup.vue'
import showStars from '@/components/myp401/com-3/showStars.vue'

import { ref } from '@vue/reactivity'
export default {
    components:{
        sidebar,
        progressStepsMain,
        sameGroup,
        showStars
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