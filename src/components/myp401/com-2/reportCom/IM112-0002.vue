<template>
    <reportForm :propId="formId" />
</template>

<script>
//表單元件
import reportForm from '@/components/myp401/com-2/reportForm.vue'
export default {
    components:{
        reportForm
    },
    setup(){

        const formId = 'IM112-0002'

        return{
            formId
        }

    }
}
</script>

<style>

</style>