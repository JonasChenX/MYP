import CryptoJS from 'crypto-js'
import apiMain from '@/api/index'
export const loginServer = async (userObj) => {

    const {userId, pwd} = userObj;

    //MD5加密
    const pwdNew = CryptoJS.MD5(pwd).toString();

    const req = {
        userId,
        pwd: pwdNew
    }

    const result = {
        isVerify: false,
        token: null
    }; 

    const {data} = await apiMain.postLogin(req);

    //後端定義code-210 代表登入成功
    if(data['code'] === 210){
        result['isVerify'] = true
        result['token'] = data.mypJwt
    }

    return result
}