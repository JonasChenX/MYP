<template>

    <!-- 參考資料: https://juejin.cn/post/7154704730789249038 -->
    <title-card :title="pathName" /> 
    <div class="demo1-container mt-5">
        <p>透過ref直接拿到DOM</p>
        <div ref="sectionRef" class="ref-section m-auto"></div>
        <button @click="higherAction1" class="btn mt-2">變高</button>
    </div>


    <div class="demo2-container mt-5 mb-5">
        <p>透過父容器遍歷拿到DOM</p>
        <div ref="listRef" class="list-section m-auto">
            <div @click="higherAction2(index)" class="list-item" v-for="(item, index) in state.list" :key="index">
                <span>{{item}}</span>
            </div>
        </div>
    </div>

</template>

<script>
import titleCard from '@/common/componts/titleCard.vue'
import { reactive, ref } from '@vue/reactivity';
import router from '@/router';
import { otherFun } from '@/common/functionMain'
export default {
    components:{
        titleCard
    },
    setup(){
        
        
        const curRoute = reactive(router.currentRoute);
        const pathName = curRoute.value.meta.label;

        //Dome1
        const sectionRef = ref()
        let height = 100;
        const higherAction1 = () => {
            height += 50;
            sectionRef.value.style = `height: ${height}px`;
        }

        //Dome2
        const listRef = ref()
        const state = reactive({
            list: [1, 2, 3, 4, 5, 6, 7, 8]
        })
        const higherAction2 = (index) => {
            let height = listRef.value.children[index].style.height ? listRef.value.children[index].style.height : '20px';
            height = Number(height.replace('px', ''));
            listRef.value.children[index].style = `height: ${height + 20}px`;
        }





        return{
            pathName,
            higherAction1,
            sectionRef,

            listRef,
            state,
            higherAction2
        }
    }
}
</script>

<style lang="scss" scoped>
.demo1-container {
    width: 100%;
    height: 100%;

    .ref-section {
        width: 200px;
        height: 100px;
        background-color: pink;
        transition: all .5s ease-in-out;
    }

    .btn {
        width: 200px;
        height: 50px;
        background-color: gray;
        color: #fff;
        margin-top: 100px;
    }
}

.demo2-container {
    width: 100%;
    height: 100%;

    .list-section {
        width: 200px;
        .list-item {
            width: 200px;
            height: 20px;
            background-color: pink;
            color: #333;
            transition: all .5s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

</style>