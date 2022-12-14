
//加減乘除 (處理精度丟失問題)
const calcObj ={
    add: (arg1, arg2) => {
        let r1, r2, m;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m
    },
    sub: (arg1, arg2) => {
        let r1, r2, m, n;
        try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
     },
    div: (num1,num2) => {
        let t1,t2,r1,r2;
        try{
            t1 = num1.toString().split('.')[1].length;
        }catch(e){
            t1 = 0;
        }
        try{
            t2=num2.toString().split(".")[1].length;
        }catch(e){
            t2=0;
        }
        r1=Number(num1.toString().replace(".",""));
        r2=Number(num2.toString().replace(".",""));
        return (r1/r2)*Math.pow(10,t2-t1);
     },
    mcl: (num1,num2) => {
        let m=0,s1=num1.toString(),s2=num2.toString();
         try{m+=s1.split(".")[1].length}catch(e){}
         try{m+=s2.split(".")[1].length}catch(e){}
         return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
    },
}

//取得隨機數(小數)
const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
}

//取得隨機數(整數)
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 時間戳格式化
// dateFormater('YYYY-MM-DD HH:mm', t) ==> 2019-06-26 18:30
// dateFormater('YYYYMMDDHHmm', t) ==> 201906261830
const dateFormater = (formater, t) =>{
    let date = t ? new Date(t) : new Date(),
        Y = date.getFullYear() + '',
        M = date.getMonth() + 1,
        D = date.getDate(),
        H = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    return formater.replace(/YYYY|yyyy/g,Y)
        .replace(/YY|yy/g,Y.substr(2,2))
        .replace(/MM/g,(M<10?'0':'') + M)
        .replace(/DD/g,(D<10?'0':'') + D)
        .replace(/HH|hh/g,(H<10?'0':'') + H)
        .replace(/mm/g,(m<10?'0':'') + m)
        .replace(/ss/g,(s<10?'0':'') + s)
}

//計算兩天日期間的天數
//diffDays("2021-06-01", "2021-06-23") ==> 22
const diffDays = (startDate, endDate) =>{
    return Math.ceil(
            Math.abs(new Date(startDate) - new Date(endDate)) /
                (1000 * 60 * 60 * 24)
        );
}

//時間格式化 轉化為幾分鐘前，幾秒鐘前
const timeFormat = (timestamp) => {
    var mistiming = Math.round((Date.now() - timestamp) / 1000);
    var arrr = ['年', '個月', '星期', '天', '小時', '分鐘', '秒'];
    var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
    for (var i = 0; i < arrn.length; i++) {
        var inm = Math.floor(mistiming / arrn[i]);
        if (inm != 0) {
            return inm + arrr[i] + '前';
        }
    }
}



export default{
    calcObj,
    getRandom, //取得隨機數(小數)
    getRandomInt, //取得隨機數(整數)
    dateFormater, //格式化時間
    diffDays, //計算兩天日期間的天數
    timeFormat, //轉化為幾分鐘前，幾秒鐘前
}