import axios from 'axios'
export const loginServer = async (userObj) => {
    console.log(userObj);

    const _API = 'mockAPI'; 
    let result = false; 

    await axios.post(`${_API}/login-user`,userObj).then((res)=>{
        console.log(res);
        //後端定義code-210 代表登入成功
        result = res.data.code == 210 ? true : false
        console.log(result);
    })

    return result
}