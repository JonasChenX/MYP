
/**
 * 正則表達式判斷
 * @param {value} 判斷值
 * @param {regex} 表達式物件
 * @return {Boolean} 
 * 
*/
export const regexFun = (value, regex) => {
   
    if(typeof regex !== 'object') return;
    //驗證字串前後是否有/
    const charAtLastArr = ['i','g','m','/']
    const isStrStart = !((regex + '').charAt(0) !=='/');
    const isStrLast = !charAtLastArr.includes((regex + '').charAt((regex + '').length-1));
    if(isStrStart && isStrLast) return;
           
    return regex.test(value)
}

