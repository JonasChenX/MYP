
const setResult = (isValid, errorMsg = '') => {
    const result = {}
    result['isValid'] = isValid
    result['errorMsg'] = errorMsg
    return result
}

//驗證長度
const lengthValid = (val, len) => {
    if(val.length >= len){
        return setResult(true)
    }
    return setResult(false, `此欄位必須大於等於${len}位數`)
}

//必填
const requiredValid = (val) => {
    if(val.length >0){
        return setResult(true)
    }
    return setResult(false, '必填')
}

//年度不可以超過當前年
const dateYrValid = (val) => {
    const dateSysYYY = new Date().getFullYear() - 1911
    if(val < dateSysYYY+1){
        return setResult(true)
    }

    return setResult(false, '不可大於今年時間')
} 

export {
    lengthValid,
    requiredValid,
    dateYrValid
}