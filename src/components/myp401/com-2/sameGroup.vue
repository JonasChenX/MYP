<template>
    <div class="row m-0">
        <div class="col-6 m-auto">
            <select class="form-select " v-model="selectForm.selectId">
                <option :value="val.value" v-for="val in selectForm.option" :key="val.label">{{val.label}}</option>
            </select>
        </div>

        <div class="col-12 p-0">
            <keep-alive>
                <component
                    :is="selectForm.selectId"
                ></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import IM112_0001 from '@/components/myp401/com-2/reportCom/IM112-0001.vue'
import IM112_0002 from '@/components/myp401/com-2/reportCom/IM112-0002.vue'
import IM112_0003 from '@/components/myp401/com-2/reportCom/IM112-0003.vue'
export default {
    components:{
        "IM112-0001":IM112_0001,
        "IM112-0002":IM112_0002,
        "IM112-0003":IM112_0003,
    },
    setup(){

        const selectForm = reactive({
            option:[
                {
                    label:'報表一',
                    value:'IM112-0001'
                },
                {
                    label:'報表二',
                    value:'IM112-0002'
                },
                {
                    label:'報表三',
                    value:'IM112-0003'
                },
            ],
            selectId:null
        })

        return{
            selectForm
        }
    }
}
</script>

<style>

</style>