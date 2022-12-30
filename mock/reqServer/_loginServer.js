const _codeStatus = require('../common/_codeStatus')


const _comFun = require('../common/_comFun')
const aes = require('../../jwt/aes')


const reqLogin = (req,res) => {

    //ASE加密 比對資料庫用的
    const pwdNew = aes.encrypt(req.body.pwd)
    req.body.pwd = pwdNew
    req = _comFun.getToPost(req)

    //確認使用者是否 有輸入[userId][pwd]這兩個key
    console.log("reqLogin-----------");
    if(!req.query.userId || !req.query.pwd){
        console.log("沒有輸入帳密");
        res.writeHead(_codeStatus.NOT_LOGIN.code, _codeStatus.NOT_LOGIN.msgE, {'content-type' : 'text/plain'})
        res.end(_codeStatus.NOT_LOGIN.msgE);
        return
    }

    return
}

module.exports = {
    reqLogin
}