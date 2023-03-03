<template>
  <div class="container">
    <Monaco ref="monaco" :initContent="props.initContent"/>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="badge btn btn-dark mt-1" @click="runCode()">執行Code</button>
    </div>
  </div>
  <iframe
    style="display: none;"
    ref="iframe">
  </iframe>
</template>

<script>
import { ref } from 'vue';
import Monaco from './onlineCode/Monaco.vue';
import codeTpl from './onlineCode/codeTemplate';
export default {
  components:{
    Monaco
  },
  props:{
    initContent: {
      type: String,
      default: `// Input javascript code here
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
console.error('Works fine, no error!')
`,
    },
  },
  setup(props){

    const monaco = ref()
    const iframe = ref()

    const runCode = () => {
      const code = monaco.value.submit();
      const iframeDoc = iframe.value.contentDocument;
      iframeDoc.open();
      iframeDoc.write(codeTpl(code));
      iframeDoc.close();
    }

    const setContent = (propContent) => {
      monaco.value.setContent(propContent);
    }

    return{
      monaco,
      iframe,
      runCode,
      props,
      setContent
    }
  }
}
</script>