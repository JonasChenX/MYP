const loginServer = require('../reqServer/_loginServer')

const _comFun = require('../common/_comFun')


const aes = require('../../jwt/aes')

//請求資料攔截器
const reqInterceptor = (req,res) => {
    // const getToPostUrlArr = ['/login-user'] //依照API 判斷哪些是POST方式查資料
    if(req.method ==='POST' && req.url ==='/login-user'){
            
        //ASE加密 比對資料庫用的
        const pwdNew = aes.encrypt(req.body.pwd)
        req.body.pwd = pwdNew
        
        req = _comFun.getToPost(req)
        if(req.url ==='/login-user'){
            loginServer.reqLogin(req,res)
        }
    }

    if(req.method ==='GET'){
        console.log("-22-");
    }
    
    if(req.method ==='PUT'){
        console.log("-33-");
    }

  
    
}

module.exports = reqInterceptor;