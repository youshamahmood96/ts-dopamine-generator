import { IPostModel } from "./post.interface";

export interface IUserModel {
    id:number
    uuid:string
    email:string
    password?:string
    firstname:string
    lastname:string
    nickname?:string
    dob?:Date
    bio?:string
    posts?:Array<IPostModel>
    createdAt:Date
    updatedAt:Date
    accessToken:string 
}
export interface IUserAction{
    type: string
    payload:IUserModel
}
export interface IUserActionTypes{
    REGISTER_USER:string
}
export interface IUserState {
    user?:IUserModel
}