<template>
    <div id="pagination">
        <select class="select" @input="setPageSize" v-model="pageSize">
            <option value="1">顯示筆數:1</option>
            <option value="5">顯示筆數:5</option>
            <option value="10">顯示筆數:10</option>
            <option value="20">顯示筆數:20</option>
        </select>
        <!-- 前一頁按鈕 -->
        <input class="btn-prev" type="button" value="<" @click="setPage(current-1)">
        <!-- 分頁器 -->
        <pager :total-page="totalPage" :default-current-page="current" @change="pageChange"></pager>
        <!-- 後一頁按鈕 -->
        <input class="btn-next" type="button" value=">" @click="setPage(current+1)">
    </div>
</template>

<script>
import Pager from "./pager.vue";
export default {
    name: "Pagination",
    components:{
        Pager
    },
    props:{
        // 預設當前頁碼
        defaultCurrentPage:{
            type:Number,
            default:1
        },
        // 預設每頁資料的條數
        defaultPageSize:{
            type:Number,
            default:5
        },
        // 資料的總條數
        total:{
            type:Number,
            default:100
        },
    },
    data(){
        return{
            current:this.defaultCurrentPage,
            pageSize:this.defaultPageSize
        }
    },
    computed:{
        // 計算資料總頁數
        totalPage(){
            return Math.ceil(this.total/this.defaultPageSize);
        }
    },
    methods:{
        // 上一頁、下一頁按鈕被點選時，頁碼發生改變，且要傳出被點選的頁碼
        setPage(page){
        // 左邊越界
            if(page<1)this.current=1;
            // 右邊越界
            else if(page>this.totalPage){
                this.current=this.totalPage;
            }
            // 正常情況
            else{
                this.current=page;
            }
            // 發出事件，讓外部知道頁碼改變了
            this.$emit('getCurPage',this.current);
        },
        setPageSize(e){
            this.pageSize = Number(e.target.value)
            this.setPage(1) //每次更新顯示筆數 要重置當前頁數
            this.$emit('getPageSize',this.pageSize)
        },

        // 接收pager中發出的改變頁碼事件，並再次傳送出去
        pageChange(page){
            this.current = page;
            this.$emit('getCurPage',page);
        }
    }
}
</script>

<style lang="scss" scoped>
#pagination{
    display: flex;
}
.btn-prev, .btn-next{
    width:30px;
    height:30px;
    line-height: 30px;
    margin:0 8px 0 0;
    padding:0 6px;
    text-align: center;
    border:1px solid #d9d9d9;
    border-radius:2px;
    background: #fff;
    &:hover{
        cursor: pointer;
        background-color: #eee;
    }
}
.select{
    height:30px;
    width:120px;
    margin-right: 10px;
    text-align: center;
}

</style>