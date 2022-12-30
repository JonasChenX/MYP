import axios from 'axios'
import {aesFun} from '@/common/functionMain'
import CryptoJS from 'crypto-js'
export const loginServer = async (userObj) => {

    const {userId, pwd} = userObj;

    //MD5加密
    const pwdNew = CryptoJS.MD5(pwd).toString();
    console.log(pwdNew);

    const req = {
        userId,
        pwd: pwdNew
    }

    const _API = 'mockAPI'; 
    const result = {
        isVerify: false,
        token: null
    }; 

    await axios.post(`${_API}/login-user`,req).then((res)=>{
        console.log(res);
        //後端定義code-210 代表登入成功
        result['isVerify'] = res.data.code == 210 ? true : false;
        result['token'] = res.data.code == 210 ? res.data.mypJwt : null;
        console.log(result);
    })

    return result
}