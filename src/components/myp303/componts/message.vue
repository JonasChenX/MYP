<template>
  <p>Button 傳來的 Message： {{ msg }}</p>
</template>

<script>
import { getCurrentInstance, onMounted } from '@vue/runtime-core';
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    // 監聽事件
    console.log("this的指向");
    console.log(this);
    this.$eventBus.on("click-send-msg", (msgData) => {
        console.log("Message元件 =>"+msgData);
        this.msg = msgData
    });
  },
  // Vue 3 不建議用 beforeDestory
  beforeUnmount() {
    // 銷毁監聽
    this.$eventBus.off("click-send-msg");
  },
  setup(){

    const {proxy, ctx} = getCurrentInstance()
    onMounted(()=>{
        console.log("this的替代方案getCurrentInstance()的proxy");
        console.log(proxy);
    })

    
  }
};
</script>

<style>
</style>