<template>
    <reportForm ref="reportFormData" :propId="formId" />
    <div class="row m-0 justify-content-end">
        <div class="col-3">
            <div class="btn btn-info mb-5 px-4" @click="sub">執行</div>
        </div>
    </div>
</template>

<script>
//表單元件
import reportForm from '@/components/myp401/com-2/reportForm.vue'
import { ref } from '@vue/reactivity'
export default {
    components:{
        reportForm
    },
    setup(){

        const formId = 'IM112-0001'

        const reportFormData = ref();

        const sub = () => {
            reportFormData.value.getData()
        }

        return{
            formId,
            sub,
            reportFormData
        }

    }
}
</script>

<style>

</style>