




//產生UUID
const getUuid = () => {
    return Number(Math.random().toString().substr(2, 5) + Date.now()).toString(36)
}

//取得資料類型
const getRawType = (value) => {
    return Object.prototype.toString.call(value).slice(8, -1)
}




export default {
    
    getUuid, //產生UUID    
    
}




/**
 * 參考來源
 * https://segmentfault.com/a/1190000019601333
 * https://juejin.cn/post/6844904181761835016
 * 
 * **/