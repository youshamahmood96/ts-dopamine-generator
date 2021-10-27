import axios from 'axios';
import {  IUserRegister, IUserLogin } from '../Interface/user.interface';

const url:string = process.env.REACT_APP_SERVER_URL

export const userRegistrationApiCall = async(user: IUserRegister) => {
    const response = await axios({
        method: 'POST',
        url:`${url}/api/v1/user/registration`,
        data:user
    })
    return response
}

export const userLoginApiCall = async(user: IUserLogin) => {
    const response = await axios({
        method: 'POST',
        url:`${url}/api/v1/user/login`,
        data:user
    })
    return response
}
export const getAllPosts = async(id:number,uuid:string,token:string) => {
    const response = await axios({
        method: 'GET',
        url:`${url}/api/v1/post/all/${id} ${uuid}`,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response
}
export const getSingleUser = async(id:number,token:string) => {
    const response = await axios({
        method: 'GET',
        url:`${url}/api/v1/user/getSingleUser/${id}`,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return response
}