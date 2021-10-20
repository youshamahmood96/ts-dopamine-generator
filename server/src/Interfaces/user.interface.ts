export interface IUserModel{
    id:number;
    uuid:string;
    email:string;
    firstname:string;
    lastname:string;
    password:string;
    nickname?:string;
    dob?:Date;
    bio?:string;
    createdAt:Date;
    updatedAt:Date;
}
export interface IUserRegistrtaton{
    firstname:string;
    lastname:string;
    email:string;
    password:string;
}
export interface IUserRegistrationServiceReturn{
    statusCode:number;
    message:string;
    data:object;
    accessToken?:string;
}
export interface IUserGetAllServiceReturn{
    statusCode:number;
    message:string;
    data:object;
}
export interface IUserResponseMessage{
    duplicateEmail:string;
    userCreationSuccess:string;
    errorInValidation:string;
    unAuthorizedUser:string;
    getSuccessMessage:string;
    genericFailureMessage:string;
    userNotFoundDuringLogin:string;
    loginSuccess:string;
    passwordError:string;
}
export interface IUserResponseObject{
    status:number;
    message:string;
    data?:object;
    error?:object;
    accessToken?:string;
}
export interface IUserLogin{
    email:string;
    password:string;
}
export interface IUserLoginServiceReturn{
    statusCode:number;
    message:string;
    data:object;
    accessToken?:string;
}
