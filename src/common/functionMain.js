
//判斷方法
import decodeFun from '@/common/functions/decodeFunction'
//字串相關方法
import strFun from '@/common/functions/strFunction'
//數字日期相關方法
import numAndDateFun from '@/common/functions/numAndDateFunction'
//陣列相關方法
import arrFun from '@/common/functions/arrayFunction'
//瀏覽器相關方法
import bowserFun from '@/common/functions/browserOrSysFunction'
//其他常用方法
import otherFun from '@/common/functions/other'

//儲存暫存相關方法
import storageFun from '@/common/functions/storageFunction'
//創建枚舉方法
import enumFun from '@/common/functions/createEnum'
//正則表達式匹配方法
import { regexFun } from '@/common/functions/regFunction'


export{
    decodeFun,
    strFun,
    numAndDateFun,
    arrFun,
    bowserFun,
    otherFun,
    storageFun,
    enumFun,
    regexFun
}

export const funMainMenu = [
    {
        "id":1,
        "meta":{
            "label": "判斷方法",
            "name": "decodeFunCom",
        },
    },
    {
        "id":2,
        "meta":{
            "label": "字串相關方法",
            "name": "strFunCom",
        },
    },
    {
        "id":3,
        "meta":{
            "label": "數字日期相關方法",
            "name": "numAndDateFunCom",
        },
    },
    {
        "id":4,
        "meta":{
            "label": "陣列相關方法",
            "name": "arrFunCom",
        },
    },
    {
        "id":5,
        "meta":{
            "label": "瀏覽器相關方法",
            "name": "bowserFunCom",
        },
    },
    {
        "id":6,
        "meta":{
            "label": "其他常用方法",
            "name": "otherFunCom",
        },
    },
    {
        "id":7,
        "meta":{
            "label": "儲存暫存相關方法",
            "name": "storageFunCom",
        },
    },
    {
        "id":8,
        "meta":{
            "label": "創建枚舉方法",
            "name": "enumFunCom",
        },
    },
    {
        "id":9,
        "meta":{
            "label": "正則表達式匹配方法",
            "name": "regexFunCom",
        },
    },
]