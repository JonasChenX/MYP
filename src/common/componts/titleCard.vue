<template>
    <div class="card fs-3">
        <div class="card-body">
            {{pathName}}
        </div>
    </div>
</template>

<script>
import router from '@/router'
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
export default {
    setup(){

        let pathName = ref("");
        watch(router.currentRoute, to => {
            pathName.value = to.meta.label
        })

        return{
            pathName
        }
    }
}
</script>

<style>

</style>