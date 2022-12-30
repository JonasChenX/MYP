//顯示資訊
const showInfo = (req,res) => {

    //後端回報顯示
    const date = formatDate(new Date(req._startTime));
    const api = req.originalUrl
    const method = req.method
    const statusCode = res.statusCode
    const body = JSON.stringify(req.body)

    const Info = `
        date:${date} 
        API:${api}  
        Method:${method} 
        status:${statusCode} 
        body:${body} 
        `
    console.log(Info);
}

//日期格式化
const formatDate = (current_datetime)=>{
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    return formatted_date;
}

const getToPost = (req) => {

    req.method = 'GET';
    req.query = req.body;

    return req
}

module.exports = {
    showInfo,
    formatDate,
    getToPost
}