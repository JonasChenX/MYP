<template>
  <div>
    <h1>Confirm form:</h1>
    <p>Name:</p>
    <p>{{ inputData.name }}</p>
    <p>Age:</p>
    <p>{{ inputData.age }}</p>
    <p>Job:</p>
    <p>{{ inputData.job }}</p>
    <p>Programming Language:</p>
    <p>{{ inputData.lang }}</p>
    <button @click="back">Back</button>
    <button @click="confirm">Confirm</button>
  </div>
</template>

<script>
export default {
  // 有 name 屬性，keep-alive 的 include 才會有效
  name: "Step3",
  props: {
    inputData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    back() {
      this.$emit("change-step", 2);
    },
    confirm() {
      window.location.reload();
    },
  },
};
</script>
