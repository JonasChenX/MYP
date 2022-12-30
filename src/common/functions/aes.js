import CryptoJS from 'crypto-js'

// AES-128-CBC偏移量
const CBCIV = "abcdefgabcdefg12";

export default {
    //加密
    encrypt(data){
        // data = CryptoJS.MD5(data).toString();
        console.log("MD5加密:"+ data);
        let key = CryptoJS.enc.Utf8.parse(CBCIV);
        let secretData = CryptoJS.enc.Utf8.parse(data);
        let encrypted = CryptoJS.AES.encrypt(
            secretData,
            key,
            {
                iv: CryptoJS.enc.Utf8.parse(CBCIV),
                mode:CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }
        );
        return encrypted.toString();
    },

    //解密
    decrypt(data){
        let key = CryptoJS.enc.Utf8.parse(CBCIV);
        let decrypt = CryptoJS.AES.decrypt(
            data,
            key,
            {
                iv: CryptoJS.enc.Utf8.parse(CBCIV),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
}