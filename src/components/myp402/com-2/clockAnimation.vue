<template>
  <div class="box">
    <p class="bg-dark text-light fs-3 mx-1 px-2 py-2 rounded">{{ showDate }}</p>
    <div class="d-flex justify-content-center">
        <p class="clock mx-1 px-2 py-2 rounded" v-for="(item, idx) in showTime" :key="idx">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
export default {
    setup(){

        const showDate = ref('')
        const showTime = ref('')

        const newTime = () => {
            //補0方法
            const zeroPadding = (num, len) => {
                return (Array(len).join('0') + num).slice(-len);
            }
            const toDayZn = (value) => {
                switch(value){
                    case 0:
                        return '日'
                    case 1:
                        return '一'
                    case 2:
                        return '二'
                    case 3:
                        return '三'
                    case 4:
                        return '四'
                    case 5:
                        return '五'
                    case 6:
                        return '六'
                }
            }

            const time = new Date();
            const yyyy = zeroPadding(time.getFullYear(),4);
            const mo = zeroPadding(time.getMonth()+1,2);
            const dd = zeroPadding(time.getDate(),2);
            const day = toDayZn(time.getDay());

            const hh = zeroPadding(time.getHours(),2);
            const mm = zeroPadding(time.getMinutes(),2);
            const ss = zeroPadding(time.getSeconds(),2);
          
            showDate.value = `${yyyy}-${mo}-${dd}  週${day}`
            showTime.value = `${hh}:${mm}:${ss}`
        }
        onMounted(()=>{
            newTime();
            setInterval(newTime,1000);

        })
        return{
            showTime,
            showDate
        }
    }
}
</script>

<style scoped>

.clock{
    background-color: black;
    min-width: 40px;
    text-align: center;
    font-family: Kanit;
    font-size: 30px;
    color: #fff;
}
</style>