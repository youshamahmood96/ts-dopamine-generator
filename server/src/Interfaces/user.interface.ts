export interface IUserRegistrtaton{
    firstname:string;
    lastname:string;
    email:string;
    password:string;
}

export interface IGenericServiceReturn{
    statusCode:number;
    message:string;
    data?:object;
}
export interface IGenericServiceReturnWithAccessToken extends IGenericServiceReturn{
    accessToken?:string;
}
export interface IGenericResponseObjectWithError extends IGenericServiceReturnWithAccessToken{
    error?:object;
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
