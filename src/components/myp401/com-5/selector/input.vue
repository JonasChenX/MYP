<template>
  <div class="selector-input">
    <label class="_placeholder ms-1">{{props.placeholder}}</label>
    <input 
        type="text"
        class="_input"
        :value="inputVal"
        @input="setSearchVal($event)"
        @focus="setSearchVal($event)"
    />
    <span class="iconfont" @click="search(inputVal)">
        <font-awesome-icon class="icon-search" icon='magnifying-glass'/>
    </span>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name:'SelectorInput',
    props:{
        placeholder:{
            type: String,
            default: '請選擇'
        },
        inputVal:{
            type: String,
            default:''
        }
    },
    setup(props,ctx){

        const setSearchVal = (e) => {
            ctx.emit('setSearchVal',e.target.value)
        }

        const search = (val) => {
            ctx.emit('search',val)
        }

        return{
            props,
            setSearchVal,
            search,
        }
    }
}
</script>

<style lang="scss" scoped>
.selector-input{
    position: relative;
    width: 100%;
    height: 38px;
    ._input{
        width: 100%;
        height: 100%;
        padding: 0px 15px;
        box-sizing: border-box;
        background-color: #fff;
        border: 1 solid #999;
        border-radius: 5px;
        outline: none;
        transition: all .2s linear;

        &:focus {
            border-color: #626568;
            box-shadow: 0 0 3px #626568;
        }
    }

    ._placeholder,
    .iconfont{
        position: absolute;
    }

    ._placeholder{
        left: 15px;
        top: 8px;
        color: #999;
        pointer-events: none; //穿透元素
    }

    .iconfont{
        right: 15px;
        top: 8px;
        color: #999;
        &:active{
            transform: scale(1.2);
        }
    }
}

</style>