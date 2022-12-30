const _codeStatus = require('../common/_codeStatus')

const reqLogin = (req,res) => {

    //確認使用者是否 有輸入[userId][pwd]這兩個key
    console.log(req.query);
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