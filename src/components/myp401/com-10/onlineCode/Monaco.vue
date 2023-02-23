<template>
  <div class="monaco text-start">
    <div class="onlineCode" ref="container"></div>
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
      tabSize: 2,
      autoIndent: true,
      theme: 'vs-dark', //設定主題
      automaticLayout: true,
      wordWrap: 'wordWrapColumn',
      wordWrapColumn: 120,
      lineHeight: 20,
      fontSize: 16,
      minimap: {
        size: 'fill',
      },
      renderWhitespace: 'boundary'
    };

    let editor = null;
    const container = ref()

    onMounted(()=>{
      if (props.diffEditor) {
        initDiffEditor();
      } else {
        initEditor();
      }
    })

    const initEditor = () => {
      editor = monaco.editor.create(container.value, {
        ...defaultOptions,
        ...props.options,
        value: props.initContent,
      });
      editor.getModel().updateOptions({ tabSize: 8 });
    }

    const initDiffEditor = () => {
      editor = monaco.editor.createDiffEditor(container.value, {
        ...defaultOptions,
        ...props.options,
        readOnly: true,
      });
      editor.setModel({
        original: monaco.editor.createModel(props.diffEditor.original),
        modified: monaco.editor.createModel(props.diffEditor.modified),
      });
    }

    const submit = () => {
      const value = editor.getValue();
      return value;
    }

    return{
      container,
      initDiffEditor,
      initEditor,
      submit
    }
  }
};
</script>

<style lang="less" scoped>
.monaco {
  width: 100%;
  .onlineCode {
    height: 40vh;
  }
}
</style>
