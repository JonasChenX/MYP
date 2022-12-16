<template>
    <div class="ps-step-circle" @click="changeActive">
        <slot></slot>
    </div>
</template>

<script>
export default {
    setup(props,cxt){

        

        // const emit = defineEmits(["on-click"]);
        const changeActive = () => {
            cxt.emit("on-click");
        }

        return{
            changeActive
        }
    }
}
</script>

<style lang="less" scoped>
.ps-step-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 12px;
    background-color: #fff;
    color:#535455;
    border:4px solid #dededf;
    transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
    box-sizing: border-box;
    &.active {
        border-color:#2396ef;
        color:#2396ef;
    }
}
</style>