/**
 * 參考資料
 * https://billyyyyy3320.com/zh/2019/07/21/create-json-server-with-multiple-files/
 * https://github.com/typicode/json-server#cli-usage
 * https://blog.csdn.net/m0_56069948/article/details/122402884?ops_request_misc=&request_id=&biz_id=102&utm_term=json-server%E4%B8%AD%E9%97%B4%E4%BB%B6&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-6-122402884.nonecase&spm=1018.2226.3001.4187
 * https://hackmd.io/@leonsnoopy/json-server
 * https://ithelp.ithome.com.tw/articles/10299073
 * **/


//抓取mock/data 的路徑
const Path = require("path");
const glob = require("glob");
const apiFiles = glob.sync(Path.resolve(__dirname, "./") + "/**/[!_]*.js", {
  nodir: true
});

//在node裡面使用json-server包
const jsonServer = require('json-server');

//創建伺服器
const server = jsonServer.create();//创建jsonserver 服务对象

console.log("===========> API <========");
let dataObj = {};
apiFiles.forEach(filePath => {
    const apiData = require(filePath);

    let [, url] = filePath.split("data/"); //  blog/posts.js
    url = url.slice(0, url.length - 3); //  blog/posts
    apiName = url.replace(/\//g, "-"); //   blog-posts
    dataObj[apiName] = apiData; 

    //api名稱
    console.log(apiName);
});
const router = jsonServer.router(dataObj);//創建路由物件


//配置jsonserver攔截器
const _addFieldServer = require('./server/_addFieldServer')
const _reqInterceptorServer = require('./server/_reqInterceptorServer')
const _codeStatus = require('./common/_codeStatus')
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {

    try{
        if (req.method === 'POST') {
            //創建共用欄位
            req['body'] = _addFieldServer(req['body'])    
        }
        //請求資料攔截器
        _reqInterceptorServer(req)

        next()
    }catch(err){

        //回傳錯誤訊息
        res.jsonp({
            err: err.message,
            code: _codeStatus.EXRCUTION_ERROR
        })
    }
})

//響應mock接口 定義返回結構
const _commonFun = require('./common/_comFun')
const _resResultServer = require('./server/_resResultServer')
router.render = (req, res) => {//自訂義回傳架構

    //show資料
    _commonFun.showInfo(req,res)
    
    //回傳攔截器
    _resResultServer(res)
        
};
  
server.use(router);//路由響應

//開啟jsonserver服務
const _PORT = 3000
server.listen(_PORT, () => {
    console.log(`=======> port:${_PORT} <==========`)
    console.log('=======> mock server is running <==========')
});



