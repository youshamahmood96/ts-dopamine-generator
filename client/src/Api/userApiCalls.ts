import axios from 'axios';
import {  IUserRegister, IUserLogin, IUserModel } from '../Interface/user.interface';

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