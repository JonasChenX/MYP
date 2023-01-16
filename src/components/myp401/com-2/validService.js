import {
    lengthValid,
    requiredValid,
    dateYrValid
} from '@/components/myp401/com-2/vaildFun'

//共同回傳
// type => 0返回物件  1返回訊息 2返回boolean
const toValid = (type, result) => {
    switch(type){
        case 0:
            return result
        case 1:
            return result['errorMsg']
        case 2:
            return result['isValid']
    }
}

/**
 * 驗證都在這做處理
 * 驗證方法拆出來 
*/
const Config = {

}

export const vaildService = (type, val, model) => {
    let result = {
        errorMsg: '', 
        isValid: null,
    }
    
    //依照必填區分
    if(val != undefined && model['required']){
        result = requiredValid(val)
        if(!result.isValid) return toValid(type, result) 
    }

    //依照model區分
    if(model.model === 'dataYr'){
        result = lengthValid(val, 3)
        if(!result.isValid) return toValid(type, result)  
        
        result = dateYrValid(val)
        if(!result.isValid) return toValid(type, result)
    }
    
    //依照inputType區分

    
    
    
    
    return toValid(type, result)
}