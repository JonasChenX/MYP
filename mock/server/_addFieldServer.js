const commonField = require('../common/_commonField')

const addCommonField = (obj) => {

    const creatObj = Object.assign({}, obj);
    const ctx = commonField
    Object.keys(ctx).forEach((key)=>{
        creatObj[key] = ctx[key]
    })

    return creatObj
}

module.exports = addCommonField
