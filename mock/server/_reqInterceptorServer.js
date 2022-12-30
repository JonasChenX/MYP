const loginServer = require('../reqServer/_loginServer')

const _comFun = require('../common/_comFun')

//請求資料攔截器
const reqInterceptor = (req,res) => {
    const getToPostUrlArr = ['/login-user'] //依照API 判斷哪些是POST方式查資料
    if(req.method ==='POST'){
        if(getToPostUrlArr.includes(req.url)){
            req = _comFun.getToPost(req)
            console.log(req.query);
            if(req.url ==='/login-user'){
                loginServer.reqLogin(req,res)
            }
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