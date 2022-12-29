const _codeStatus = require('../common/_codeStatus')

//統一回傳方法
const resResult = (res,codeStatus) => { 
    res.jsonp({
        code: codeStatus.code,
        msg: codeStatus.msg,
        data: res.locals.data
    })
}

//回傳資料攔截器
const resResultServer = (res) => {

    //有沒有資料則回傳 code-900
    if(res.locals.data.length <= 0){
        resResult(res,_codeStatus.NOT_DATA)
        return
    }

    //有沒有資料則回傳 code-200
    if(res.locals.data){
        resResult(res,_codeStatus.EXRCUTION_SUCCEED)
        return
    }

}


module.exports = resResultServer;