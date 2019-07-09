import users from './user.server.service'
import {userApis} from './user.server.api'

const usersControl={
    getUsers:()=>{
        return users
    },
    getUserByUsername:(userName)=>{
        return new Promise((resolve,reject)=>{
            const user=users.find(user=>
                user.userName==userName
            )
            if(!user){
                resolve({
                    status:'error',
                    message:'User not found!'
                })
            }
            resolve({
                status:'success',
                data:user
            })
        })
    },
    getUserApiKey:(userName)=>{
        return new Promise((resolve,reject)=>{
            const user=users.find(user=>
                user.userName==userName
            )
            if(!user){
                resolve({
                    success:false,
                    message:'User not found!'
                })
            }
            resolve({
                success:true,
                data:user.apiKey
            })
        })
    },
    getAccountInfo:async (userName)=>{
        const res=await usersControl.getUserApiKey(userName)
        if(res.success){
            console.log(userApis)
            const account=await userApis.reqAccount(res.data)
            // console.log('account:'+JSON.stringify(account))
            return account
        }
    }
}

    export default  usersControl
