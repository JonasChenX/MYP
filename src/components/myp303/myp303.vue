<template>
  <!-- 參考資料: https://ithelp.ithome.com.tw/articles/10268987 -->
  <title-card :title="pathName" />
  <p>使用 mitt 套件</p>
  <div class="mt-5">
    <Button />
    <Message />
  </div>
</template>

<script>
import titleCard from '@/common/componts/titleCard.vue'
import Button from '@/components/myp303/componts/button.vue'
import Message from '@/components/myp303/componts/message.vue'
import { reactive } from '@vue/reactivity';
import router from '@/router';
export default {
    components:{
        Button,
        Message,
        titleCard
    },
    setup(){
      const curRoute = reactive(router.currentRoute);
      const pathName = curRoute.value.meta.label;
      return{
        pathName
      }
    }
}
</script>

<style>

</style>