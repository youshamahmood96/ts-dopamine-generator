import { IUserAction, IUserState } from "../../../Interface/user.interface";
import { userActiontypes } from "../../ActionTypes/userActionTypes";

const initialState:IUserState = {}

const userReducer = (state:IUserState=initialState,action:IUserAction) => {
    switch (action.type) {
        case userActiontypes.REGISTER_USER:
            return {
                ...state,
                user:action.payload
            }
        case userActiontypes.LOGIN_USER:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}
export default userReducer;