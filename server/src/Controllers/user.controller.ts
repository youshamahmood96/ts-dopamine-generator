import { Request, Response } from "express";
import {  IUserLogin, IUserRegistrtaton, IGenericServiceReturn } from "../Interfaces/user.interface";
import { userDeleteService, userGetAllService, userLoginService, userRegisterService } from "../Services/user.service";
export const userRegisterController = async(req:Request, res:Response):Promise<Response<any, Record<string, any>>> => {
    const body:IUserRegistrtaton = req.body
    const serviceReturn:IGenericServiceReturn = await userRegisterService(body)
    const responseObject:IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
        accessToken:serviceReturn.accessToken
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}
export const userGetAllController = async(req: Request, res: Response):Promise<Response<any, Record<string, any>>> => {
    const serviceReturn:IGenericServiceReturn = await userGetAllService()
    const responseObject:IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}
export const userLoginController = async(req: Request, res: Response):Promise<Response<any, Record<string, any>>> => {
    const body:IUserLogin = req.body
    const serviceReturn:IGenericServiceReturn = await userLoginService(body)
    const responseObject:IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
        accessToken:serviceReturn.accessToken
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}
export const userDeleteController = async(req: Request, res: Response):Promise<Response<any, Record<string, any>>> => {
    const uuid:string = req.params.uuid
    const serviceReturn:IGenericServiceReturn = await userDeleteService(uuid)
    const responseObject:IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}