
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

//AES加密解密
import aesFun from '@/common/functions/aes'


export{
    decodeFun,
    strFun,
    numAndDateFun,
    arrFun,
    bowserFun,
    otherFun,
    storageFun,
    enumFun,
    aesFun
}

export const funMainMenu = [
    {
        "meta":{
            "label": "判斷方法",
            "name": "decodeFunCom",
        },
    },
    {
        "meta":{
            "label": "字串相關方法",
            "name": "strFunCom",
        },
    },
    {
        "meta":{
            "label": "數字日期相關方法",
            "name": "numAndDateFunCom",
        },
    },
    {
        "meta":{
            "label": "陣列相關方法",
            "name": "arrFunCom",
        },
    },
    {
        "meta":{
            "label": "瀏覽器相關方法",
            "name": "bowserFunCom",
        },
    },
    {
        "meta":{
            "label": "其他常用方法",
            "name": "otherFunCom",
        },
    },
    {
        "meta":{
            "label": "儲存暫存相關方法",
            "name": "storageFunCom",
        },
    },
    {
        "meta":{
            "label": "創建枚舉方法",
            "name": "enumFunCom",
        },
    }
]