/**
 * 瀏覽器and系統相關函數
 * **/


//取得可視範圍視窗高度
const getClientHeight = () => {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}
//取得可視範圍視窗寬度
const getPageViewWidth = () => {
    let d = document,
        a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
    return a.clientWidth;
}
//取得滾動條與頂部高度距離
const getPageScrollTop = () => {
    let a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}
//取得滾動條與左側距離
const getPageScrollLeft = () => {
    let a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}
//滾動到指定元素區域
const smoothScroll = element => {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};
//頁面底部是否可見
const isBottomVisible = () =>{
    return document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};

//取得瀏覽器版本
const getExplorerInfo = () => {
    let t = navigator.userAgent.toLowerCase();
    return 0 <= t.indexOf("msie") ? { //ie < 11
        type: "IE",
        version: Number(t.match(/msie ([\d]+)/)[1])
    } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie 11
        type: "IE",
        version: 11
    } : 0 <= t.indexOf("edge") ? {
        type: "Edge",
        version: Number(t.match(/edge\/([\d]+)/)[1])
    } : 0 <= t.indexOf("firefox") ? {
        type: "Firefox",
        version: Number(t.match(/firefox\/([\d]+)/)[1])
    } : 0 <= t.indexOf("chrome") ? {
        type: "Chrome",
        version: Number(t.match(/chrome\/([\d]+)/)[1])
    } : 0 <= t.indexOf("opera") ? {
        type: "Opera",
        version: Number(t.match(/opera.([\d]+)/)[1])
    } : 0 <= t.indexOf("Safari") ? {
        type: "Safari",
        version: Number(t.match(/version\/([\d]+)/)[1])
    } : {
        type: t,
        version: -1
    }
}


//判斷是Windows還是Mac系统
const getOsType = () => {
    const agent = navigator.userAgent.toLowerCase();
    console.log(navigator.userAgent);
    const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  	const isWindows = agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0 || agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0;
    if (isWindows) {
        return "windows";
    }
    if(isMac){
        return "mac";
    }
}


//判斷是否是 行動裝置
const isAppleMobileDevice = () => {
    let reg = /iphone|ipod|ipad|Macintosh/i;
    return reg.test(navigator.userAgent.toLowerCase());
}




export default{
    getClientHeight, //取得可視範圍視窗高度
    getPageViewWidth, //取得可視範圍視窗寬度
    getPageScrollTop, //取得滾動條與頂部高度距離
    getPageScrollLeft, //取得滾動條與左側距離
    smoothScroll, //滾動到指定元素區域
    isBottomVisible, //頁面底部是否可見

    getExplorerInfo, //取得瀏覽器版本

    getOsType, //判斷是Windows還是Mac系统
    isAppleMobileDevice, //判斷是否是 行動裝置

}