import { ref } from "vue";

window.URL = window.URL || window.webkitURL;

// 讀取 image 資料
function useImageFilePreview(file) {
  return window.URL.createObjectURL(file);
}

// 本地預覽
function useQueuePreview(fileArr) {
  // 多圖多影片列表
  const previewMap = {};

  // 排序索引
  let idx = 0;
  for (const file of fileArr) {
    const fileData = useImageFilePreview(file);
    previewMap[idx] = fileData;
    idx++;
  }

  return previewMap;
}

export function useFileUpdate() {
  // 預覽用檔案
  const previewMap = ref({});

  // 初始化
  const initData = () => {
    previewMap.value = {};
  };

  // 選擇多個檔案
  const setFile = async (file = []) => {
    initData();
    previewMap.value = useQueuePreview(file);
    console.log(previewMap.value);
  };

  //驗證圖片格式
  const validFileType = (files) => {
    const rgxExp = /image\//;
    let isNext = true
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(file.type);
      isNext = rgxExp.test(file.type)
      if(!isNext){
        alert('不接受此文件類型')
        return false;
      }
    }
    return true;
  }

  const validFileSize = (files,setMaxSizeMB) => {
    let isNext = true
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileSizeMb = Number(file.size / 1024 / 1024).toFixed(2)
      isNext = fileSizeMb < setMaxSizeMB
      if(!isNext){
        alert(`該圖檔大小為${fileSizeMb},不得超過${setMaxSizeMB}MB`)
        return false;
      }
    }
    return true;
  }

  return { setFile, previewMap, validFileType, validFileSize };
}