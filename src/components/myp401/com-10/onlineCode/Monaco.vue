<template>
  <div class="monaco text-start" >
    <div id="onlineCode" ref="container"></div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import { onMounted, ref } from 'vue';
export default {
  props: {
    initContent: {
      type: String
    },
    diffEditor: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props){

    /**
     * 設定文件
     * https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html
     * **/
    const defaultOptions = {
      language: 'javascript',
      autoIndent: "brackets",
      automaticLayout: true,
      theme: 'vs-dark', //設定主題
      wordWrapColumn: 120,
      lineHeight: 20,
      fontSize: 16,
      minimap: {
        enabled: false
      },
      scrollbar: { 
        alwaysConsumeMouseWheel: false //游標停留在editor也能滑動scrollbar
      },
      // overviewRulerLanes: 0,
      renderWhitespace: 'boundary',
      scrollBeyondLastLine:false //滾動到最後一行
    };

    let editor = null;
    const container = ref()

    onMounted(()=>{
      initEditor();
    })

    const updateHeight = () => {
      const onlineCode = document.getElementById('onlineCode');
      const contentHeight = Math.min(1500, editor.getContentHeight());
      if(onlineCode){
        onlineCode.style.height = `${contentHeight}px`;
      }
      editor.layout();
    };

    const initEditor = () => {
      editor = monaco.editor.create(container.value, {
        ...defaultOptions,
        ...props.options,
        // value: props.initContent,
      });
      setContent(props.initContent)
      editor.getModel().updateOptions({ tabSize: 4});
      editor.onDidContentSizeChange(updateHeight);
    }

    const setContent = (propContent) => {
      editor.getModel().setValue(propContent);
    }

    const submit = () => {
      const value = editor.getValue();
      return value;
    }

    return{
      container,
      initEditor,
      submit,
      setContent,
    }
  }
};
</script>

<style lang="less" scoped>
.monaco {
  width: 100%;
}
</style>
