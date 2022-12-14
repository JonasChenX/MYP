<template>
  <h1>Step 1</h1>
  <div>
    <label for="name">Name:</label>
    <input v-model="name" type="text" id="name" />
  </div>
  <div>
    <label for="age">Age:</label>
    <input v-model="age" type="number" id="age" />
  </div>
  <button @click="next()">Next</button>
</template>

<script>
export default {
  // 有 name 屬性，keep-alive 的 include 才會有效
  name: "Step1",
  // 不接收父元件傳來的 inputData prop
  inheritAttrs: false,
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  methods: {
    next() {
      this.$emit("change-step", 2);
      this.$emit("update-data", {
        name: this.name,
        age: this.age,
      });
    },
  },
  activated() {
    console.log("Step 1 is activate!");
  },
  deactivated() {
    console.log("Step 1 is deactivated!");
  },
};
</script>

<style></style>
