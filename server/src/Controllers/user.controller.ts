import { Request, Response } from "express";
import {  IGenericServiceReturn } from "../Interfaces/user.interface";
import { userDeleteService, userGetAllService, userLoginService, userRegisterService, userUpdateService } from "../Services/user.service";
export const userRegisterController = async(req:Request, res:Response):Promise<Response<any, Record<string, any>>> => {
    const serviceReturn:IGenericServiceReturn = await userRegisterService(req.body)
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
    const serviceReturn:IGenericServiceReturn = await userLoginService(req.body)
    const responseObject:IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
        accessToken:serviceReturn.accessToken
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}
export const userDeleteController = async(req: Request, res: Response):Promise<Response<any, Record<string, any>>> => {
    const serviceReturn:IGenericServiceReturn = await userDeleteService(req.params.uuid)
    const responseObject:IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}
export const userUpdateController = async(req: Request, res: Response):Promise<Response<any, Record<string, any>>> => {
    const serviceReturn:IGenericServiceReturn = await userUpdateService(req.body,req.params.uuid)
    const responseObject:IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}