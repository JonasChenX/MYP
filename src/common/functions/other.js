




//產生UUID
const getUuid = () => {
    return Number(Math.random().toString().substr(2, 5) + Date.now()).toString(36)
}

//取得資料類型
const getRawType = (value) => {
    return Object.prototype.toString.call(value).slice(8, -1)
}

//將map相反過來
const createReversedMap = (map) => {
    return Object.keys(map).reduce((prev, key) => {
      const value = map[key]
      prev[value] = key
      return prev
    }, {})
}

//篩選物件中符合key的值
const objFilterForKey = (mainObject, filterFunction) => {
    return  Object.keys(mainObject)
        .filter( (ObjectKey) => filterFunction( ObjectKey ))
        .reduce( (result, ObjectKey)=> ( result[ObjectKey] = mainObject[ObjectKey], result ), {} );
}

//篩選物件中符合value的值
const objFilterForVal = (mainObject, filterFunction) => {
    return  Object.keys(mainObject)
        .filter( (ObjectKey) => filterFunction( mainObject[ObjectKey] ))
        .reduce( (result, ObjectKey)=> ( result[ObjectKey] = mainObject[ObjectKey], result ), {} );
}

//防抖函式
const debounce = (func, timeout = 500) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}





export default {
    
    getUuid, //產生UUID    
    createReversedMap, //將map相反過來
    objFilterForKey,
    objFilterForVal,
    debounce, //防抖函式
    
}




/**
 * 參考來源
 * https://segmentfault.com/a/1190000019601333
 * https://juejin.cn/post/6844904181761835016
 * 
 * **/