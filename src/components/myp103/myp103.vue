<template>
    <!-- 參考資料:
        https://cloud.tencent.com/developer/article/1908057
        https://stackoverflow.com/questions/70601332/how-to-use-marked-plugins-in-vue3-project
        https://github.com/markedjs/marked/issues/2229
     -->
    <div class="row p-0 m-0 vh-100">
        <div class="col-2 p-0">
            <sidebar :sidebarMenuArr="leetCodeMenu" @callMenuName="getMenuName"/>
        </div>
        <div class="col-10 p-0 mb-4">
            <div v-if="exampleMd">
                <h3 class="text-start px-4 pt-2">題目</h3>
                <div class="text-start markdown-body px-4 pb-4" v-html="exampleMd" ></div>
            </div>
            <!-- 有值的時候再渲染onlineCode元件 解決非同步傳入子元件問題 -->
            <div v-if="codeMd">
                <h3 class="text-start px-4 py-2">解答方法</h3>
                <div class="text-start pb-4">
                    <onlineCode :initContent="codeMd" ref="onlineCodeRef"/>
                </div>
            </div>
            <div v-if="commentaryeMd">
                <h3 class="text-start px-4 py-2">分析</h3>
                <div class="text-start markdown-body px-4 pb-4" v-html="commentaryeMd" ></div>
            </div>
        </div>
    </div>
</template>

<script>
import { marked } from "marked";
import { onMounted, ref } from '@vue/runtime-core';
import { leetCodeMenu } from '@/components/myp103/leetCodeMenu'
import axios from 'axios';
import sidebar from '@/core/sidebar/sidebar.vue'
import onlineCode from '@/components/myp401/com-10/demoOnlineCode.vue'
export default {
    components:{
        sidebar,
        onlineCode
    },
    setup(){
        let exampleMd = ref('')
        let codeMd = ref('')
        let commentaryeMd = ref('')

        const onlineCodeRef = ref()

        const curSideBarName = ref()
        const getMenuName = async(e) => {
            curSideBarName.value = e
            const leetCodeMeta = leetCodeMenu.find(item => item.meta.name === curSideBarName.value) 
            //抓example 題目
            if(leetCodeMeta.meta.file.example){
                await axios.get(`static/leetCode/${curSideBarName.value}/example.md`).then((res)=>{
                    exampleMd.value = marked(res.data)
                })
            }
            //抓code 
            if(leetCodeMeta.meta.file.code){
                await axios.get(`static/leetCode/${curSideBarName.value}/code.md`).then((res)=>{
                    codeMd.value = res.data
                    if(onlineCodeRef.value){
                        onlineCodeRef.value.monaco.setContent(codeMd.value)
                    }
                })
            }
            //抓commentary 解說
            if(leetCodeMeta.meta.file.commentary){
                await axios.get(`static/leetCode/${curSideBarName.value}/commentary.md`).then((res)=>{
                    commentaryeMd.value = marked(res.data)
                })
            }
        }

        const leetCodeMenuReSet = () => {
            //Label前面加LeetCode編號
            leetCodeMenu.forEach((item)=>{
                item.meta.label = item.meta.leetCodeNm + '. ' + item.meta.label
            })
            //依照LeetCode編號排序
            leetCodeMenu.sort((a, b)=>{
                return a.meta.leetCodeNm < b.meta.leetCodeNm ? -1 : 1
            })
        }

        onMounted(()=>{
            leetCodeMenuReSet()
        })

        return{
            leetCodeMenu,
            getMenuName,
            curSideBarName,
            exampleMd,
            codeMd,
            commentaryeMd,
            onlineCodeRef
        }
    }
}
</script>

<style scoped>
@import 'github-markdown-css';
</style>