const CryptoJS = require('crypto-js') 

// AES-128-CBC偏移量
const jwtConfig = require('../jwt/config')
const CBCIV = jwtConfig['JWT_SIGN_SECRET'];

module.exports = {
    //加密
    encrypt(data){
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