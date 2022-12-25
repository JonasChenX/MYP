import {userData} from '@/core/login/userData'
export const loginServer = (userObj) => {

    const { id, pwd } = userObj

    const result = userData.some((item)=>{
        return item.id === id && item.pwd === pwd
    })

    return result
}