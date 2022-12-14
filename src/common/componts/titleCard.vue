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
    props:{
        title:String
    },
    setup(props){

        let pathName = ref(props.title);
        // watch(router.currentRoute, to => {
        //     console.log(to);
        //     pathName.value = to.meta.label
        // })

        return{
            pathName
        }
    }
}
</script>

<style>

</style>