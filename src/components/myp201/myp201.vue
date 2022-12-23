<template>
    <!-- 參考資料: https://github.com/kyvg/vue3-notification -->
    <h5 class="mt-5 ">類型</h5>
    <div class="flex mt-3">
        <div class="btn btn-success me-3" @click="useNotificationObj.success('成功')">成功</div>
        <div class="btn btn-warning me-3" @click="useNotificationObj.warn('警告')">警告</div>
        <div class="btn btn-info me-3" @click="useNotificationObj.info('通知')">通知</div>
        <div class="btn btn-danger me-3" @click="useNotificationObj.error('失敗')">失敗</div>
    </div>
    <h5 class="mt-5 ">位置</h5>
    <div class="flex mt-3">
        <div class="btn btn-success me-3" @click="testPosistionObj.bottomRight()">右下</div>
        <div class="btn btn-warning me-3" @click="testPosistionObj.topRight()">右上</div>
        <div class="btn btn-info me-3" @click="testPosistionObj.bottomLeft()">左下</div>
        <div class="btn btn-danger me-3" @click="testPosistionObj.topLeft()">左上</div>
        <div class="btn btn-info me-3" @click="testPosistionObj.topCenter()">中上</div>
    </div>
    <div class="btn btn-dark mt-5" @click="callAPI()">axios成功跳出訊息</div>

    <div v-show="false" id="test">
        <h1>哈哈哈哈哈</h1>
    </div>
</template>

<script>
import axios from 'axios'
import { useNotificationObj, testPosistionObj } from '@/components/myp201/useFuns/useNotifications'
export default {
    setup(){
       
        const callAPI = () =>{
            //會遇到CROSS問題 由vue.config.js設定網域
            let url = "/try/ajax/json_demo.json"
            axios
            .get('/runoobFttps'+url)
            .then(response => {
                console.log(response);

                //可以顯示HTML樣式
                const h1 = document.getElementById('test')
                useNotificationObj.success("回傳成功",h1.innerHTML)
            })
            .catch((error) =>{ // 請求失敗處理
                useNotificationObj.error(error)
                console.log(error);
            });
        }
        return{
            callAPI,
            useNotificationObj,
            testPosistionObj
        }
    }
}
</script>

<style>

</style>