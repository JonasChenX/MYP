<template>
    <!-- 參考資料:
        https://cloud.tencent.com/developer/article/1908057
        https://stackoverflow.com/questions/70601332/how-to-use-marked-plugins-in-vue3-project
        https://github.com/markedjs/marked/issues/2229
     -->
    <div class="row p-0 m-0 vh-100">
        <div class="col-2 p-0">
            <sidebar :sidebarMenuArr="blogMenu" @callMenuName="getMenuName"/>
        </div>
        <div class="col-10 p-0">
            <div class="text-start markdown-body p-4" v-html="showMd" ></div>
        </div>
    </div>
</template>

<script>
import { marked } from "marked";
import { ref } from '@vue/runtime-core';
import { blogMenu } from '@/components/myp102/blogMenu'
import axios from 'axios';
import sidebar from '@/core/sidebar/sidebar.vue'
export default {
    components:{
        sidebar
    },
    setup(){
        let showMd = ref()

        const curSideBarName = ref()
        const getMenuName = (e) => {
            curSideBarName.value = e
            axios.get(`static/blog/${curSideBarName.value}.md`).then((res)=>{
                showMd.value = marked(res.data)
            })
        }

        return{
            blogMenu,
            getMenuName,
            curSideBarName,
            showMd
        }
    }
}
</script>

<style scoped>
@import 'github-markdown-css';
</style>