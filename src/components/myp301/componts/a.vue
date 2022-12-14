<template>
  <label for="name">Name: </label>
  <input v-model="name" type="text" id="name" />
  <button @click="$router.push('/myp301')">Home</button>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style>
</style>