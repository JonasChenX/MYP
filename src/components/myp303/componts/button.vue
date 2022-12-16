<template>
    <input v-model="message">
    <button type="button" @click="sendMessage">傳送訊息</button>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    sendMessage() {
        console.log("Button元件 =>" + this.message);
        this.$eventBus.emit("click-send-msg", this.message);
    },
  },
};
</script>

<style>
</style>