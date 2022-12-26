<template>
    <div ref="target" class="target d-flex" :style="'height:'+ height+';'" >
        <div class="mx-auto mt-3" v-show="showLoading">
            <slot name="loading"></slot>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, onBeforeUnmount } from 'vue'
export default {
  name: 'Observer',
  props:{
    height:{
        type: String,
        default: '500px'
    },
    showLoading:{
        type: Boolean,
        default: false
    }
  },
  setup(props, ctx){

    const target = ref()

    const observer = new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting){
            ctx.emit('intersect')
        }
    });

    onMounted(()=>{
        observer.observe(target.value);          
    })

    onBeforeUnmount(()=>{
        observer.disconnect()
    })

    return {
        target,
    }
  },
}
</script>
