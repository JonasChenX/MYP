<template>
    <div class="ps-step-container">
        <div class="ps-step-progress"></div>
        <slot></slot>
    </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core';
export default {
    props:{
        width:{
            type:Number,
            default:350
        },
        progressWidth:{
            type:Number,
            default:0
        }
    },
    setup(props){

        
        const styleWidth = computed(() => props.width+'px');
        const styleProgressWidth = computed(() => props.progressWidth + '%');
        return{
            styleWidth,
            styleProgressWidth
        }
    }
}
</script>

<style lang="less" scoped>
.ps-step-container {
        display:flex;
        justify-content:space-between;
        position:relative;
        margin-bottom:30px;
        width:v-bind("styleWidth");
        // width:10px;
        box-sizing:border-box;
        &:before,.ps-step-progress {
            height:5px;
            left:0;
            z-index:-1;
            position:absolute;
            transform:translateY(-50%);
            top:50%;
            border-radius:5px;
            box-sizing:border-box;
        }
        &:before {
            content:"";
            width:100%;
            background-color: #2396ef;
        }
        .ps-step-progress {
            background-color:#2396ef;
            transition:all .4s cubic-bezier(.19,1,.22,.33);
            width:v-bind(styleProgressWidth);
        }
}
</style>