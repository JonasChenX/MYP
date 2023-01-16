<template>
    <reportForm ref="reportFormData" :propId="formId" />
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

        return{
            formId,
            reportFormData
        }

    }
}
</script>

<style>

</style>