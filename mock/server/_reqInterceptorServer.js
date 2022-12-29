//請求資料攔截器
const reqInterceptor = (req) => {
    if(req.method ==='POST'){
        console.log("-11-");
    }
    
    if(req.method ==='GET'){
        console.log("-22-");
    }
    
    if(req.method ==='PUT'){
        console.log("-33-");

    }
}

module.exports = reqInterceptor;