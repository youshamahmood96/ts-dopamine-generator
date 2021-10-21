export interface IUserRegistrtaton{
    firstname:string;
    lastname:string;
    email:string;
    password:string;
}
export interface IUserUpdateModel{
    firstname?:string;
    lastname?:string;
    nickname?:string;
    dob?:Date;
    bio?:string;
}

export interface IGenericServiceReturn{
    statusCode:number;
    message:string;
    data?:object;
    accessToken?:string;
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
    deletedUser:string;
    updatedUser:string;
}

export interface IUserLogin{
    email:string;
    password:string;
}
