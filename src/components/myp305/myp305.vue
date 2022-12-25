<template>
    <div>myp305</div>
    <div class="flex">
        <div class="btn btn-info me-2" v-copy="copyText">v-copy 複製</div>
        <div class="btn btn-info me-2" v-longpress="longpress">v-longpress 長壓按鈕</div>
        <div class="btn btn-info me-2" v-debounce="debounceClick">v-debounce 防抖函式</div>
        <div class="btn btn-info me-2" v-drag >v-drag 拖曳</div>
    </div>
    <div class="flex mt-5 col-6 m-auto">
        <h1>v-input</h1>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">v-input 限制輸入格式</span>
            <input type="text" class="form-control"  v-input:number="testStr1" v-model="testStr1">
        </div>
        <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">v-input 限制輸入格式-自訂義</span>
            <input type="text" class="form-control" v-input:customize="testStr2" data-rule="/[^\D]/" v-model="testStr2">
        </div>
    </div>
    <div class="flex mt-5 col-6 m-auto">
        <h1>v-tooltip</h1>
        <div class="btn btn-info me-2" v-tooltip.left="'顯示左邊'">顯示左邊</div>
        <div class="btn btn-info me-2" v-tooltip.right="'顯示右邊'">顯示右邊</div>
        <div class="btn btn-info me-2" v-tooltip.top="'顯示上邊'">顯示上邊</div>
        <div class="btn btn-info me-2" v-tooltip.bottom="'顯示下邊'">顯示下邊</div>
    </div>
    
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const copyText = "複製成功"

        const longpress = () => {
            alert('長按生效')
        }

        const debounceClick = () => {
            console.log('只觸發一次')
        }

        const testStr1 = ref("")
        const testStr2 = ref("")
        return{
            copyText,
            longpress,
            debounceClick,
            testStr1,
            testStr2,
        }
    }

}
</script>

<style>
.box{
    height: 200px;
    width: 200px;
}

</style>