
//數字
export const NUM_REG = /^[0-9]*$/;

//十六進制顏色
export const HEX_COLOR = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g;

//Linux"文件夾"路徑
export const isLinuxFolderPath = /^(\/[^/]+)+\/?$/g;
//Linux"文件"路徑
export const isLinuxFilePath =  /^(\/[^/]+)+$/g;
//window"文件夾"路徑
export const isWindowsFolderPath = /^[a-zA-Z]:\\(?:\w+\\?)*$/g;
//window"文件"路徑
export const isWindowsFilePath = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g;

//影片連結網址
export const videoUrl = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i;
//圖片連結網址
export const imageUrl = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;

//中文名稱
export const chineseName = /^(?:[\u4e00-\u9fa5·]{2,16})$/g;
//英文名稱
export const englishName = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g;
//Email信箱
export const isEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
//護照
export const passport = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g;






