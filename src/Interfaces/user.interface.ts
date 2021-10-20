import { Prisma } from '@prisma/client';
export interface IUserRegistrtaton{
    firstname:string;
    lastname:string;
    email:string;
    password:string;
}
export interface IServiceReturn{
    statusCode:number;
    message:string;
    data:object;
}
export interface IUserResponseMessage{
    duplicateEmail:string;
    userCreationSuccess:string
}