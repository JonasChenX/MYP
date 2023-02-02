<template>
  <div class="my-3" style="height:200px;">
    <QRCode
      :width="width"
      :height="height"
      :value="text"
      :qrOptions="qrOptions"
      :imageOptions="imageOptions"
      :dotsOptions="dotsOptions"
      :backgroundOptions="backgroundOptions"
      :cornersSquareOptions="cornersSquareOptions"
      :cornersDotOptions="cornersDotOptions"
      :image="logo"
      fileExt="png"
      containerClass="grid grid-rows-4"
      imageClass="img-qr"
      :key="key"
    />
  </div>
  <div class="col-8 m-auto" >
    <div class="fs-3">設定</div>
     <div class="input-group mb-3">
        <label class="input-group-text">URL</label>
        <input type="text" class="form-control" v-model="text">
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text">typeNumber</label>
        <select class="form-select" v-model="qrOptions.typeNumber" @change="initKey()">
            <option v-for="(val) in 41" :value="val-1" :key="val-1">{{ val-1 }}</option>
        </select>
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text">dotsType</label>
        <select class="form-select" v-model="dotsOptions.type" @change="initKey()">
            <option value="dots" >dots</option>
            <option value="rounded">rounded</option>
            <option value="classy">classy</option>
            <option value="classy-rounded">classy-rounded</option>
            <option value="square">square</option>
            <option value="extra-rounded">extra-rounded</option>
        </select>
        <label class="input-group-text">dotsColor</label>
        <input type="color" class="form-control form-control-color" v-model="dotsOptions.color" @change="initKey()">
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text">backgroundColor</label>
        <input type="color" class="form-control form-control-color" v-model="backgroundOptions.color" @change="initKey()">
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text">cornersSquareType</label>
        <select class="form-select" v-model="cornersSquareOptions.type" @change="initKey()">
            <option value="dot" >dot</option>
            <option value="square">square</option>
            <option value="extra-rounded">extra-rounded</option>
        </select>
        <label class="input-group-text">cornersSquareColor</label>
        <input type="color" class="form-control form-control-color" v-model="cornersSquareOptions.color" @change="initKey()">
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text">cornersDotType</label>
        <select class="form-select" v-model="cornersDotOptions.type" @change="initKey()">
            <option value="dot" >dot</option>
            <option value="square">square</option>
        </select>
        <label class="input-group-text">cornersDotColor</label>
        <input type="color" class="form-control form-control-color" v-model="cornersDotOptions.color" @change="initKey()">
    </div>
    <div class="mb-3">
        <input class="form-control" type="file" id="formFile" @change="setImage">
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode-vue3";
import { otherFun } from '@/common/functionMain'
import { ref } from 'vue';
export default {
    components:{
        QRCode
    },
    setup(){
        //導入URL
        const text = ref('https://www.youtube.com/');
        const width = ref(200);
        const height = ref(200);
        const qrOptions = ref({
            typeNumber: 0, //0-40 預設為0
            mode: 'Byte',
            errorCorrectionLevel: 'H',
        });
        const imageOptions = ref({
            hideBackgroundDots: true, //是否要隱藏圖片背景
            imageSize: 0.5, //圖片大小 不建議超過0.5
            margin: 3,
        });
        const dotsOptions = ref({
            type: 'dots', //QRCode樣式
            color: '#ffffff',
            // gradient: { //顏色漸變設定
            //     type: 'linear',
            //     rotation: 0,
            //     colorStops: [
            //         { offset: 0, color: '#fff' },
            //         { offset: 1, color: '#fff' },
            //     ],
            // },
        });
        const backgroundOptions = ref({ color: '#111111' });
        //三個角border的設定
        const cornersSquareOptions = ref({
            type: 'dot', 
            color: '#ffffff',
        });
        //三個角的content的設定
        const cornersDotOptions = ref({
            type: 'square',
            color: '#ffffff',
        });

        const key = ref("")
        const initKey = () => {
            key.value = otherFun.getUuid()
        }

        const logo = ref("")
        const setImage = (e) => {
            logo.value = window.URL.createObjectURL(e.target.files[0])
            initKey()
        }

        return{
            text,
            width,
            height,
            qrOptions,
            imageOptions,
            dotsOptions,
            backgroundOptions,
            cornersSquareOptions,
            cornersDotOptions,
            key,
            initKey,
            logo,
            setImage
        }
    }
}
</script>

<style>

</style>