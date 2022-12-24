<template>
  <div class="search-com">
    <div class="col-6 m-auto">
        <div class="input-group">
            <input 
                class="form-control"
                type="number"
                placeholder="請輸入分數"
                @input="setScore"
                :value="searchedScore"
            >
            <div class="btn btn-outline-secondary" :class="{active: filterRegular === 'up'}" @click="setFilterRegular('up')">以上</div>
            <div class="btn btn-outline-secondary" :class="{active: filterRegular === 'down'}" @click="setFilterRegular('down')">以下</div>
        </div>
    </div>
    <div class="col-6 m-auto mt-4" v-show="menuShow">
        <div class="d-flex">
            <h3 class="m-auto">勾選項目</h3>
            <div class="btn-sm btn btn-secondary me-1" @click="setAllChecked">全選</div>
            <div class="btn-sm btn btn-secondary" @click="setAllNotChecked">取消全選</div>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="item of menuList" :key="item.id">
                <input class="form-check-input me-2" type="checkbox" :id="'check_'+item.id" :checked="getChecked(item.id)" @click="setChecked(item)">
                <label class="form-check-label" :for="'check_'+item.id">
                    {{ item.name }} - 分數:{{ item.score }}
                </label>
            </li>
        </ul>
    </div>
    <div class="col-6 m-auto mt-4">
        <div class="d-flex">
            <h3 class="m-auto">已選項目</h3>
            <div class="btn-sm btn btn-secondary me-1" @click="removeAllChecked()" v-show="checkedList.length >0">全部移除</div>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="item of checkedList" :key="item.id">
                <label class="form-check-label">
                    {{ item.name }} - 分數:{{ item.score }}
                </label>
                <span class="btn badge bg-primary ms-5" @click="removeChecked(item.id)">移除</span>
            </li>
        </ul>
    </div>

    
    
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import data from './data'
import { onMounted } from '@vue/runtime-core';
export default {
    setup(){

        //渲染初始化
        onMounted(()=>{
            filterData()
        })

        const searchedScore = ref(60);
        const setScore = (e) =>{
            searchedScore.value = Number(e.target.value)
            filterData()
        }

        const filterRegular = ref('up');
        const setFilterRegular = (regular) => {
            filterRegular.value = regular
            filterData()
        }

        const menuShow = ref(false);
        let menuList = ref([]);

        const filterData = () => {
            switch (filterRegular.value){
                case 'up':
                    menuList.value = data.filter(item => item.score >= searchedScore.value)
                    break;
                case 'down':
                    menuList.value = data.filter(item => item.score <= searchedScore.value)
                    break;
                default:
                    break;
            }

            menuShow.value = menuList.value.length > 0;
        }

        let checkedList = ref([]);
        const setChecked = (info) => {
            const hasThisItem = getChecked(info.id)
            //若有移除 否則新增 
            if(hasThisItem){
                removeChecked(info.id)
            } else{
                addChecked(info)
            }
        }

        //返回Boolean 確認已選擇列表是否有該item
        const getChecked = (id) => {
            return checkedList.value.some(item=> item.id === id)
        }

        //新增
        const addChecked = (info) => {
            checkedList.value.push(info)
        }

        //移除
        const removeChecked = (id) => {
            checkedList.value = checkedList.value.filter(item=> item.id !== id)
        }

        //全部移除
        const removeAllChecked = () => {
            checkedList.value = []
        }

        //全選
        const setAllChecked = () => {
            menuList.value.forEach(item => {
                const hasThisItem = getChecked(item.id)
                if(!hasThisItem){
                    checkedList.value.push(item)
                }
            })
        }

        //取消全選
        const setAllNotChecked = () => {
            menuList.value.forEach(item => {
                const hasThisItem = getChecked(item.id)
                if(hasThisItem){
                    removeChecked(item.id)
                }
            })
        }

        return{
            searchedScore,
            setScore,
            setFilterRegular,
            filterRegular,
            menuShow,
            menuList,
            setChecked,
            getChecked,
            removeChecked,
            checkedList,
            setAllChecked,
            setAllNotChecked,
            removeAllChecked
        }
    }
}
</script>

<style>

</style>