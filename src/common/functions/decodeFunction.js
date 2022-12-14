/**
 * 判斷的函數
 * **/

//判斷資料是不是除了symbol外的原始資料
const isStatic = (value) => {
    return(
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'undefined' ||
        value === null
    )
}
//判斷資料是不是原始資料
const isPrimitive = (value) => {
    return isStatic(value) || typeof value === 'symbol'
}
//判斷是不是引用類型的資料
const isObject = (value) => {
    let type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
//判斷資料是不是Object類型的資料
const isPlainObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
//檢查value是不是函數
const isFunction = (value) => {
    return Object.prototype.toString.call(value) === '[object Function]'
}
//檢查value是否為有效的類陣列長度
const isLength = (value) => {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= Number.MAX_SAFE_INTEGER;
}
//檢查value是否是類陣列
const isArrayLike = (value) => {
    return value != null && isLength(value.length) && !isFunction(value);
}
//檢查value是否為負數
const isNegativeNum = (value) => {
    return /^-[1-9]\d*$/.test(value);
};
//檢查value是否為整數
const  isInteger = (value) => {
	return /^(-|\+)?\d+$/.test(value);
};
//檢查value是否為浮點數
const isNotNegativeFloatNum = (value) => {
	return /^\d+(\.\d+)?$/.test(value);
};

export default{
    isStatic, //判斷資料是不是除了symbol外的原始資料
    isPrimitive, //判斷資料是不是原始資料
    isObject, //判斷是不是引用類型的資料
    isPlainObject, //判斷資料是不是Object類型的資料
    isFunction, //檢查value是不是函數
    isLength, //檢查value是否為有效的類陣列長度
    isArrayLike, //檢查value是否是類陣列
    isNegativeNum, //檢查value是否為負數
    isInteger, //檢查value是否為整數
    isNotNegativeFloatNum, //檢查value是否為浮點數
}

export const decodeFunMenus = [
    {
        "meta":{
            "label": "判斷資料是不是除了symbol外的原始資料",
            "content": "isStatic(value)",
            "fun":isStatic
        },
    },
    {
        "meta":{
            "label": "判斷資料是不是原始資料",
            "content": "isPrimitive(value)",
            "fun":isPrimitive
        },
    },
    {
        "meta":{
            "label": "判斷是不是引用類型的資料",
            "content": "isObject(value)",
            "fun":isObject
        },
    },
    {
        "meta":{
            "label": "判斷資料是不是Object類型的資料",
            "content": "isPlainObject(value)",
            "fun":isPlainObject
        },
    },
    {
        "meta":{
            "label": "檢查value是不是函數",
            "content": "isFunction(value)",
            "fun":isFunction
        },
    },
    {
        "meta":{
            "label": "檢查value是否為有效的類陣列長度",
            "content": "isLength(value)",
            "fun":isLength
        },
    },
    {
        "meta":{
            "label": "檢查value是否是類陣列",
            "content": "isArrayLike(value)",
            "fun":isArrayLike
        },
    },
    {
        "meta":{
            "label": "檢查value是否為負數",
            "content": "isNegativeNum(value)",
            "fun":isNegativeNum
        },
    },
    {
        "meta":{
            "label": "檢查value是否為整數",
            "content": "isInteger(value)",
            "fun":isInteger
        },
    },
    {
        "meta":{
            "label": "檢查value是否為浮點數",
            "content": "isNotNegativeFloatNum(value)",
            "fun":isNotNegativeFloatNum
        },
    },
]