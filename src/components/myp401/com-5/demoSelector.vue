<template>
    <div class="col-6 m-auto">
        <Selector 
            :placeholder="'請輸入程式語言'"
            :data="menuData"
            @getItemVal="getItemVal"
            @search = "search"
        />
    </div>
</template>

<script>
import Selector from '@/components/myp401/com-5/selector/index.vue'
import menuData from '@/components/myp401/com-5/data'
export default {
    components:{
        Selector
    },
    setup(){

        //取得下拉選單該item資料
        const getItemVal = (value) => {
            console.log(value);
        }

        //執行查詢
        const search = (val) => {
            console.log("執行"+val);
        }


        return{
            menuData,
            getItemVal,
            search
        }
    }
}
</script>

<style>

</style>