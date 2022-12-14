<template>
  <h1>Step 2</h1>
  <div>
    <label for="job">job:</label>
    <input v-model="job" type="text" id="job" />
  </div>
  <div>
    <label for="programmingLanguage">Programming language:</label>
    <input v-model="lang" type="text" id="programmingLanguage" />
  </div>
  <button @click="back()">Back</button>
  <button @click="next()">Next</button>
</template>

<script>
export default {
  // 有 name 屬性，keep-alive 的 include 才會有效
  name: "Step2",
  // 因為沒有根節點，Vue 不知道要把屬性傳給哪個節點，因此會跳這一類的警告: "Extraneous non-props attributes..",
  // 注意，雖然理論上 inputData 是 props，
  // 但因為 Step 2 沒有用到 InputData 這個 Props，這裏也沒有設定 inputData 這個 props，
  // 所以會把 inputData 當作 non-props attribute
  // 以下做法是直接關掉此元件接收父元件傳來的屬性
  inheritAttrs: false,
  // 如果不用以上做法，另一做法是把用一個 <div> 把以上 template 裏的所有內容
  data() {
    return {
      job: "",
      lang: "",
    };
  },
  methods: {
    back() {
      this.$emit("change-step", 1);
    },
    next() {
      this.$emit("change-step", 3);
      this.$emit("update-data", {
        job: this.job,
        lang: this.lang,
      });
    },
  },
};
</script>

<style></style>
