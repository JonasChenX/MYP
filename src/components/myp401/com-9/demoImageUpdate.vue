<template>
    <!-- 參考資料：
        https://ithelp.ithome.com.tw/articles/10270889
        https://blog.csdn.net/tuoniaoxs/article/details/116070695
    -->
    <div class="col-8 m-auto mt-5">
        <div class="border border-2 row" style="min-height: 200px;">
            <div
            v-if="Object.values(previewMap).length !== 0"
            class="overflow-hidden col-3 p-0"
            v-for="item in previewMap"
            :key="item"
            >
                <div class="bg-black m-2 d-flex">
                    <img class="img-fluid align-self-center"  :src="item" alt="" />
                </div>
            </div>
            <div v-else class="align-self-center"> 
                <button class="btn btn-outline-primary" @click="uploadImages">上傳照片</button>
            </div>
        </div>

        <div class="mb-3">
            <input ref="inputDOM" class="form-control mt-3" type="file" id="formFile" multiple="multiple" @change="fileChange">
        </div>

        <div
        v-if="Object.values(previewMap).length !== 0" 
        class="mb-3 d-flex justify-content-end"
        >
            <div class="btn btn-info" @click="clearFile">清除</div>
        </div>
        
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useFileUpdate } from '@/components/myp401/com-9/imageUpdate/useFileUpdate'
export default {
    setup(){
        const { setFile, previewMap, validFileType, validFileSize } = useFileUpdate();

        const inputDOM = ref(null);

        const fileChange = (e) => {
            //驗證圖片型態
            const isImageType =  validFileType(e.target.files)
            //驗證圖片大小(MB) 若型態驗證沒過直接給false
            const isOverImageSize = isImageType ? validFileSize(e.target.files, 1) : false
            if(isImageType && isOverImageSize){
                setFile(e.target.files);
            }else{
                clearFile()
            } 
        };

        const uploadImages = () => {
            inputDOM.value.click();
        };
        
        const clearFile = () => {
            setFile(); //將顯示畫面的資料刪除
            inputDOM.value.value = '' //將input裡的值刪除
        }
        
        return{
            inputDOM,
            fileChange,
            uploadImages,
            previewMap,
            clearFile
        }
    }
}
</script>
