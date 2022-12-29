<template>
    <!-- 參考來源: https://gitee.com/monoplasty/vue-monoplasty-slide-verify/tree/master -->
    <div class="d-flex justify-content-center">
        <div>
            <slide-verify ref="slideblock" @success="onSuccess" @again="onAgain" @fulfilled="onFulfilled" @fail="onFail" @refresh="onRefresh" :slider-text="text" :accuracy="accuracy">
                <template #mask>
                    <font-awesome-icon icon='arrow-right' class="me-1" />
                </template>
                <template #refreshIcon>
                    <font-awesome-icon icon='rotate-right' class="me-1" />
                </template>
            </slide-verify>
            <div>{{msg}}</div>
        </div>
    </div>
</template>

<script>
import slideVerify from './slide/slideVerify.vue';
export default {
    components:{
        slideVerify
    },
    data(){
            return {
                msg: '',
                text: '向右滑動=>',
                accuracy: 100, //精准度小 誤差範圍小,為1時 必須完全重疊
            }
        },
        methods: {
            onSuccess(times){
                console.log('驗證通過');
                this.msg = `login success, 花費時間${(times / 1000).toFixed(1)}s`;
            },
            onFail(){
                console.log('驗證不通過');
                this.msg = ''
            },
            onRefresh(){
                console.log('點擊刷新小圖示');
                this.msg = ''
            },
            onFulfilled() {
                console.log('刷新成功！');
            },
            onAgain() {
                console.log('檢測到非人為操作');
                this.msg = 'try again';
                // 刷新
                this.handleClick();
            },
            handleClick() {
                this.$refs.slideblock.reset();
                this.msg = ''
            },
        }
}
</script>

<style>

</style>