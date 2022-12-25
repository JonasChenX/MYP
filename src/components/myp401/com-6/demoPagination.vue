<template>
  <div class="col-6 m-auto mb-5">
    <h3>後端將資料全部丟到前端做分頁處理</h3>
    <ul class="list-group mb-5">
        <li class="list-group-item" v-for="(item,index) in dataArr" :key="index">{{item.label}}</li>
    </ul>
    <div class="d-flex justify-content-center">
        <Pagination 
            @getCurPage="getCurPage" 
            @getPageSize="getPageSize"
            :defaultPageSize="pageConfig.pageSize" 
            :total="pageConfig.total" 
            :defaultCurrentPage="pageConfig.currentPage"/>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import {data} from './data'
import Pagination from './pagination/index.vue'
import { onMounted } from '@vue/runtime-core'
export default {
    components:{
        Pagination
    },
    setup(){

        let dataArr = ref([]) //顯示資料
        const dataOriginArr = [...data] //原始資料陣列

        //初始化
        onMounted(()=>{
            dataArr.value = [...data]
            changeDataByPage(pageConfig.currentPage);
        })

        //分頁設定
        const pageConfig = reactive({
            total: dataOriginArr.length, //總筆數
            pageSize:10, //每頁顯示筆數
            currentPage:1 //當前筆數
        })

        //取得當前分頁並切換顯示資料
        const getCurPage = (val) => {
            console.log(val);
            pageConfig.currentPage = val
            changeDataByPage(pageConfig.currentPage);
        }

        const getPageSize = (val) => {
            pageConfig.pageSize = val
            changeDataByPage(pageConfig.currentPage);
        }
        
        //依照當前頁切換顯示資料
        const changeDataByPage = (curPage) => {
            const minPage = (curPage * pageConfig.pageSize) - pageConfig.pageSize + 1;
            const maxPage = (curPage * pageConfig.pageSize);

            dataArr.value = []
            dataOriginArr.forEach((item,index)=>{
                // 由於 index 是從 0 開始，所以要建立一個變數儲存正確的數量
                let num = index + 1;
                // 接下來寫上判斷式
                // 當 num 比 minPage 大並且比 maxPage 小的時候，就 push 資料進去
                if (num >= minPage && num <= maxPage) {
                    dataArr.value.push(item);
                }
            })
        }

        return{
            dataArr,
            getCurPage,
            pageConfig,
            dataOriginArr,
            getPageSize
        }
    }

}
</script>

<style>

</style>