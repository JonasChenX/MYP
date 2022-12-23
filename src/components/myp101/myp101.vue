<template>
    <title-card :title="pathName" />
    <div class="row p-0 m-0">
        <div class="col-2 p-0">
            <sidebar :sidebarMenuArr="funMainMenu" @callMenuName="getMenuName"/>
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
import router from '@/router'
import { reactive, ref } from '@vue/reactivity';
import sidebar from '@/core/sidebar/sidebar.vue'
import {funMainMenu} from '@/common/functionMain';
import titleCard from '@/common/componts/titleCard.vue'

// 元件
import decodeFunCom from '@/components/myp101/componts/decodeFunCom.vue'
import strFunCom from '@/components/myp101/componts/strFunCom.vue'
import numAndDateFunCom from '@/components/myp101/componts/numAndDateFunCom.vue'
import arrFunCom from '@/components/myp101/componts/arrFunCom.vue'
import bowserFunCom from '@/components/myp101/componts/bowserFunCom.vue'
import otherFunCom from '@/components/myp101/componts/otherFunCom.vue'
import storageFunCom from '@/components/myp101/componts/storageFunCom.vue'
import enumFunCom from '@/components/myp101/componts/enumFunCom.vue'
export default {
    components:{
        titleCard,
        sidebar,
        decodeFunCom,
        strFunCom,
        numAndDateFunCom,
        arrFunCom,
        bowserFunCom,
        otherFunCom,
        storageFunCom,
        enumFunCom,
    },
    setup(){

        const curRoute = reactive(router.currentRoute);
        const pathName = curRoute.value.meta.label

        const curSideBarName = ref()
        const getMenuName = (e) => {
            curSideBarName.value = e
        }

        return{
            pathName,
            funMainMenu,
            getMenuName,
            curSideBarName
        }
    }
}
</script>

<style>

</style>