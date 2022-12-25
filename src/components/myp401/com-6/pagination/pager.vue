//Pager元件程式碼：

<template>
    <ul class="pager">
        <!--        首頁-->
        <li class="number"
            :class="{active: this.current===1}"
            @click="setPage(1)">1</li>

        <!--        左邊更多-->
        <li class="more left"
            v-if="totalPage>centerSize+2 && current-centerSize/2-1>1"
            @click="setPage(current-jumpSize)">...</li>

        <!--        中間頁碼-->
        <li class="number"
            v-for="(page,index) in centerPages"
            :class="{active: current===page}"
            :key="index"
            @click="setPage(page)">{{ page }}</li>

        <!--        右邊更多-->
        <li class="more right"
            v-if="totalPage>centerSize+2 && current+centerSize/2+1<totalPage"
            @click="setPage(current+jumpSize)">...</li>

        <!--        最後一頁-->
        <li class="number"
            v-if="totalPage!==1"
            :class="{active: this.current=== totalPage}"
            @click="setPage(totalPage)">{{ totalPage }}</li>
    </ul>
</template>

<script>
  export default {
    name: "Pager",
    props:{
      totalPage:Number,//資料總頁數
      defaultCurrentPage:Number,//預設當前頁碼
      //中間頁碼數預設為5
      centerSize:{
        type:Number,
        default(){
          return 5;
        }
      },
      jumpSize:{
        type:Number,
        default(){
          return 5;
        }
      }
    },
    computed:{
      // 中間頁碼計算
      centerPages(){
        let centerPage=this.current;
        // 若當前頁面大於this.current+2(以current為中心右邊加兩頁) +1(尾頁)>this.totalPage，則取this.totalPage-3為中心
        if(this.current>this.totalPage-3){
          centerPage=this.totalPage-3;//注意這裡是centerPage，不是this.current
        }
        // 若當前頁面小於或等於4，則取4為中心
        if(this.current<4){
          centerPage=4;
        }

        if(this.totalPage<=this.centerSize+2){
          // 總頁碼較少時，則全部顯示出來
          const centerArr=[];
          for(let i=2;i<this.totalPage;i++){
            centerArr.push(i);
          }
          return centerArr;
        }
        else{
          // 總頁數較大時，只顯示中間centerSize個頁碼
          const centerArr=[];
          for(let i=centerPage-2;i<=centerPage+2;i++){
            centerArr.push(i);
          }
          return centerArr;
        }
      }
    },

    data(){
      return{
        // 因為不可以直接修改props傳過來的值，所以在data中用current儲存props中預設頁面頁數defaultCurrentPage的值，用watch監聽props中defaultCurrentPage值的改變
        // （前一頁、後一頁按鈕被點選時，會傳入新的值，但是data中的current不會更新，用watch監聽並賦新的值，可解決該bug）
        current:this.defaultCurrentPage,
      }
    },

    watch:{
      // 監聽props中defaultCurrentPage值的改變，更新current的值
      defaultCurrentPage:function(newValue,oldValue){
        this.current=newValue;
      }
    },

    methods:{
      // 上一頁、下一頁按鈕被點選時，頁碼發生改變，且要傳出被點選的頁碼
      setPage(page){
        // 左邊越界
        if(page<1) this.current=1;
        // 右邊越界
        else if(page>this.totalPage){
          this.current=this.totalPage;
        }
        // 正常情況
        else{
          this.current=page;
        }
        // 發出pager中頁碼被改變的事件
        this.$emit('change',this.current);
      },
    }
  }
</script>

<style lang="scss" scoped>
ul{
    padding: 0px;
    list-style: none;
    height: 32px;
    display: flex;
}
ul li{
    width:30px;
    height:30px;
    line-height: 30px;
    margin:0 8px 0 0;
    padding:0 6px;
    text-align: center;
    border:1px solid #d9d9d9;
    border-radius:2px;
    &:hover{
        cursor: pointer;
        background-color: #eee;
    }
}
.active{
    border:1px solid #7d3990;
}

.more left:hover, .more right:hover{
    background: #7d3990;
}
</style>