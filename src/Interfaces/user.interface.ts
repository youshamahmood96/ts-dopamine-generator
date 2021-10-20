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
}
export interface IUserResponseMessage{
    duplicateEmail:string;
    userCreationSuccess:string;
    errorInValidation:string;
}
export interface IUserResponseObject{
    status:number;
    message:string;
    data?:object;
    error?:object;
}