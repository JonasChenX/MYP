const _codeStatus = require('../common/_codeStatus')

//統一回傳方法
const resResult = (res,codeStatus) => { 
    res.jsonp({
        code: codeStatus.code,
        msg: codeStatus.msgC,
        data: res.locals.data
    })
}

//回傳資料攔截器
const resResultServer = (res) => {

    const sCodeStr = res.statusCode+''
    console.log(`====>狀態碼: ${sCodeStr.split('')[0]}XX <====`)

    if(res.req.originalUrl === '/login-user'){

        let token = '';

        if(res.locals.data.length > 0){
            const jwtObj = {
                userId: res.locals.data[0].userId
            }
    
            //JWT產生token 
            const jwtConfig = require("../../jwt/config");
            const jwt = require('jsonwebtoken');
            token = jwt.sign(jwtObj, jwtConfig['JWT_SIGN_SECRET'], {
                expiresIn: 60*60*24
            })

        }

        //若有查到資料 代表帳密正確
        const result = res.locals.data.length > 0 ? true : false
        res.send({
            code: result ? _codeStatus.LOGIN_SUCCEED.code : _codeStatus.NOT_LOGIN.code,
            msg: result ? _codeStatus.LOGIN_SUCCEED.msgC : _codeStatus.NOT_LOGIN.msgC,
            mypJwt: result ?  token : null
        })
        return
    }

    //有沒有資料則回傳 code-900
    else if(res.locals.data.length <= 0){
        resResult(res,_codeStatus.NOT_DATA)
        return
    }

    //有沒有資料則回傳 code-200
    else if(res.locals.data){
        resResult(res,_codeStatus.EXRCUTION_SUCCEED)
        return
    }

}


module.exports = resResultServer;