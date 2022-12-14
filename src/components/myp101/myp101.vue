<template>
    <div>
        myp101
    </div>
</template>

<script>
import router from '@/router'
import { reactive } from '@vue/reactivity';
export default {
    setup(){

        const curRoute = reactive(router.currentRoute);
        const pathName = curRoute.value.meta.label

        return{
            pathName
        }
    }
}
</script>

<style>

</style>