/**
 * 字串相關的函數
 * **/


//手機中間四位變*
const telFormat = (tel) => {
    tel = String(tel); 
  return tel.substr(0,3) + "****" + tel.substr(7);
}

//駝峰轉短橫線
const getKebabCase = (str) => {
    return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase())
}
//短橫線轉駝峰
const getCamelCase = (str) => {
    return str.replace( /-([a-z])/g, (i, item) => item.toUpperCase())
}

//全型轉半型
const toCDB = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 65281 && code <= 65374) {
        result += String.fromCharCode(str.charCodeAt(i) - 65248);
      } else if (code == 12288) {
        result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
      } else {
        result += str.charAt(i);
      }
    }
    return result;
}

//半型轉全型
const toDBC = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 33 && code <= 126) {
        result += String.fromCharCode(str.charCodeAt(i) + 65248);
      } else if (code == 32) {
        result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
      } else {
        result += str.charAt(i);
      }
    }
    return result;
}

//數字轉大寫金額
const digitUppercase = (n) => {
    const fraction = ['角', '分'];
    const digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    const unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    n = Math.abs(n);
    let s = '';
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
};

//數字轉中文數字
const intToChinese = (value) => {
    const str = String(value);
    const len = str.length-1;
    const idxs = ['','十','百','千','万','十','百','千','亿','十','百','千','万','十','百','千','亿'];
    const num = ['零','一','二','三','四','五','六','七','八','九'];
    return str.replace(/([1-9]|0+)/g, ( $, $1, idx, full) => {
       let pos = 0;
       if($1[0] !== '0'){
         pos = len-idx;
         if(idx == 0 && $1[0] == 1 && idxs[len-idx] == '十'){
              return idxs[len-idx];
         }
            return num[$1[0]] + idxs[len-idx];
       } else {
            let left = len - idx;
            let right = len - idx + $1.length;
            if(Math.floor(right / 4) - Math.floor(left / 4) > 0){
                 pos = left - left % 4;
            }
            if( pos ){
                 return idxs[pos] + num[$1[0]];
            } else if( idx + $1.length >= len ){
                 return '';
            }else {
                 return num[$1[0]]
            }
       }
    });
}

//金額千分位
const format = (n) => {
    let num = n.toString();
    let decimals = '';
    // 是否有小数
    num.indexOf('.') > -1 ? decimals = num.split('.')[1] : decimals;
    let len = num.length;
    if (len <= 3) {
        return num;
    } else {
        let temp = '';
        let remainder = len % 3;
        decimals ? temp = '.' + decimals : temp;
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp;
        } else { // 3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp; 
        }
    }
}

const inputOnlyNum = (newVal) => {
    const oldVal = newVal.substr(0,newVal.length-1)
    if(isNaN(Number(newVal))){
        return oldVal
    }else{
        return newVal
    }
}

//截取字符串並加...
const subText = (str, length) => {
    if (str.length === 0) {
        return '';
    }
    if (str.length > length) {
        return str.substr(0, length) + "...";
    } else {
        return str;
    }
}

//大小寫轉換 1-全大寫 2-全小寫 3-首字母大寫 其他-不轉換
const turnCase = (str, type) => {
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        default:
            return str;
    }
}

//數字超過上限值會添加+
// outOfNum(100,99) ==> 99+
const outOfNum = (val, maxNum) =>{
    val = val ? val-0 :0;
    if (val > maxNum ) {
        return `${maxNum}+`
    }else{
        return val;
    }
 }

 //去除空格
 //去除空格類型 1-所有空格  2-前後空格  3-前空格 4-後空格 莫認為1
const trim = (str, type = 1) => {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    switch (type) {
        case 1:
            return str.replace(/\s/g, "");
        case 2:
            return str.replace(/(^\s)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s)/g, "");
        case 4:
            return str.replace(/(\s$)/g, "");
        default:
            return str;
    }
 }





export default{
    telFormat, //手機中間四位變*
    getKebabCase, //駝峰轉短橫線
    getCamelCase, //短橫線轉駝峰
    toCDB, //全型轉半型
    toDBC, //半型轉全型
    digitUppercase, //數字轉大寫金額
    intToChinese, //數字轉中文數字
    subText, //截取字符串並加...
    turnCase, //大小寫轉換
    outOfNum, //數字超過上限值會添加+
    format, //金額千分位
    trim,
    inputOnlyNum
}