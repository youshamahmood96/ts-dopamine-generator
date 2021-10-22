import { IUserModel } from './../../Interface/user.interface';
import { IUserAction } from "../../Interface/user.interface";
import { userActiontypes } from '../ActionTypes/userActionTypes';

export const registerUser = (user:IUserModel):IUserAction => {
    return {
        type:userActiontypes.REGISTER_USER,
        payload:user
    }
}