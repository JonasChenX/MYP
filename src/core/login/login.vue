<template>
    <div class="border border-3 p-5 col-6 m-auto mt-5">
      <h2>登入頁面</h2>
      <div class="col m-auto">
        <div class="mb-3 row mt-3">
          <label for="staticEmail" class="col-sm-2 col-form-label">UserId</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="staticEmail" v-model="loginInfo.userId">
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" v-model="loginInfo.pwd">
          </div>
        </div>
        <div class="col-12">
            <div v-show="showError" class="text-end text-danger">帳號或密碼輸入錯誤</div>
            <div class="btn btn-primary" @click="login">登入</div>
        </div>
      </div>
    </div>
</template>
  
<script>
import { storageFun } from '@/common/functionMain'
import { useNotificationObj } from '@/components/myp201/useFuns/useNotifications'
import router from '@/router'
import { reactive, ref } from '@vue/reactivity'
import {loginServer} from './loginServer'
import { otherFun } from '@/common/functionMain'
export default {
    name:'login',
    setup(){

        const loginInfo = reactive({
            userId:'user',
            pwd:'1234'
        })

        const showError = ref(false)

        const login = otherFun.debounce( async () => {
            //回傳 登入結果
            const result = await loginServer(loginInfo) 
            if(result){
                //顯示登入成功訊息
                useNotificationObj.success('登入成功')
                //登入成功後 token 存放 sessionStorage
                //token 應只在當前網站打開期間生效
                storageFun.sessionStorageObj.set("mypToken",'test')
                //跳轉到首頁
                router.push('/home')
            }else{
                //顯示登入失敗訊息
                useNotificationObj.error('登入失敗')
                showError.value = true
            }
        })

        return{
            login,
            loginInfo,
            showError,
        }
    }
}
</script>

<style>

</style>