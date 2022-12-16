<template>
    <!-- 參考資料: https://github.com/eveningwater/my-web-projects/tree/master/vue/25/src -->
    <!-- 參考資料: https://juejin.cn/post/7144929568132956174 -->
    <div class="col-6 m-auto">
        <step :progressWidth="pWidth">
            <step-item 
                v-for="(item,index) in state.stepList" 
                :key="item.value + index"
                :class="{ active:state.current >= index }"
                @on-click="onClickHandler(item.value)"
            >{{ item.value }}</step-item>
        </step>
        <div>
            <button class="ps-btn ps-btn-primary" :disabled="state.current === 0" @click="onPrevHandler">上一步</button>
            <button class="ps-btn ps-btn-primary" :disabled="state.current === state.stepList.length - 1" @click="onNextHandler">下一步</button>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { reactive } from '@vue/reactivity';
import step from '@/components/myp401/com-1/step.vue';
import stepItem from '@/components/myp401/com-1/stepItem.vue';
export default {
    components:{
        step,
        stepItem
    },
    setup(){

        const state = reactive({
            stepList:[
                { value:"1"},
                { value:"2"},
                { value:"3"},
                { value:"4"},
            ],
            current:0
        });
        

        const pWidth = computed(() => Math.floor(100 / 3) * state.current);
        const onClickHandler = (value) => {
            alert("請看控制台查看你選中的值")
            const consoleText = "選擇的是:" + value;
            console.log("%c " + consoleText,"background:#0ca6dc;padding:4px 10px;border-radius:3px;color:#fff");
        }

        const onNextHandler = () => {
            if(state.current > state.stepList.length - 1){
                return;
            }
            state.current++;
        }
        const onPrevHandler = () => {
            if(state.current <= 0){
                return;
            }
            state.current--;
        }


        return{
            state,
            pWidth,
            onClickHandler,
            onNextHandler,
            onPrevHandler
        }
    }
}
</script>
