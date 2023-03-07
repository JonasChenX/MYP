
/**

    解題思路:
    一開始把數值轉成字串反轉
    然後處理負號的部分
    判斷是否超過範圍值返回0

**/

const reverse = (value) => {

    //若個位數 直接返回
    if(0 <= value && value <10) return value

    const str = value.toString()
    
    let rStr = str.split("").reverse().join("")
    
    //若發現有負號 則移到最前面
    if(rStr.indexOf('-') != -1){
        rStr = '-' + rStr.replace('-','')
    }
    //轉換成數值型態
    const result = parseInt(rStr)

    //定義INT 最大範圍值
    const INT_MAX = Math.pow(2,31)-1
    //判斷 是否在範圍值內
    if(result > INT_MAX || result < -( 1 + INT_MAX)){
        return 0
    } 

    return result
}


console.log(reverse(123))
console.log(reverse(-123))
