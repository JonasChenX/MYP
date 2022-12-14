/**
 * Storage相關的函數
 * **/

//localStorage相關處理
const localStorageObj = {
    //localStorage儲存
    set: (key, value) => {
        if (typeof (value) === 'object') value = JSON.stringify(value);
        localStorage.setItem(key, value)
    },
    //localStorage讀取
    get: (key) => {
        return localStorage.getItem(key)
    },
    //localStorage移除
    remove: (key) => {
        localStorage.removeItem(key)
    },
    //localStorage儲存後過一段時間失效
    setExpire: (key, value, expire) => {
        if (typeof (value) === 'object') value = JSON.stringify(value);
         localStorage.setItem(key, value);
         setTimeout(() => {
             localStorage.removeItem(key)
         }, expire)
    }
}

//sessionStorage相關處理
const sessionStorageObj = {
    //sessionStorage儲存
    set: (key, value) => {
        if (typeof (value) === 'object') value = JSON.stringify(value);
        sessionStorage.setItem(key, value)
    },
    //sessionStorage獲取
    get: (key) => {
        return sessionStorage.getItem(key)
    },
    //sessionStorage移除
    remove: (key) => {
        sessionStorage.removeItem(key)
    },
    //sessionStorage儲存後過一段時間失效
    setExpire:(key, value, expire) => {
        if (typeof (value) === 'object') value = JSON.stringify(value);
         sessionStorage.setItem(key, value);
         setTimeout(() => {
             sessionStorage.removeItem(key)
         }, expire)
    },
}


export default{
    localStorageObj, //localStorage相關處理
    sessionStorageObj, //sessionStorage相關處理
}