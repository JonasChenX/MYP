<template>
  <label for="job">Job: </label>
  <input v-model="job" type="text" id="job" />
  <button @click="$router.push('/myp301')">Home</button>
</template>

<script>
export default {
  data() {
    return {
      job: "",
    };
  },
};
</script>

<style>
</style>