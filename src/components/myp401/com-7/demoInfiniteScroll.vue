<template>
  <div class="root d-flex flex-column">
    <ul class="list-group">
        <li class="list-group-item" v-for="item in count" :key="item">{{item}}</li>
    </ul>
    <!-- 偵測到畫面有該元素會執行函數 -->
    <Observer @intersect="intersected" :height="'200px'" :showLoading="isLoading" >
        <template #loading>
            <div class="fs-4">Loading...</div>
        </template>
    </Observer>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Observer from './infiniteScroll/observe.vue'
export default defineComponent({
  components: {
    Observer,
  },
  setup(){

    //仿data內容
    let count = ref(20)
    let isLoading = ref(false)

    //仿API行為
    const axiosAPI = () => {
        return new Promise(()=>{
            //發送時顯示Loading
            isLoading.value = true
            console.log("請求");
            setTimeout(()=>{
                console.log("回傳");
                count.value += 5
                //回傳時不顯示Loading
                isLoading.value = false
            },1000)
        })
    }

    //觸發執行的函數
    const intersected = () => {
        console.log("執行");
        axiosAPI()
    }
    
    return {
        intersected,
        count,
        isLoading
    }
  },
})
</script>

<style>
.box{
    margin-top: 50px;
    width: 10px;
    height: 10px;
    background-color: #fff;
}

.root {
    height: 100%;
    /* background: pink; */
}
</style>