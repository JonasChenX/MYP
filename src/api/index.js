import axios from 'axios'

const _API = 'mockAPI'; 
//登入api
const postLogin = async (req) => {
    return await axios.post(`${_API}/login-user`,req)
}

export default {
    postLogin
}

