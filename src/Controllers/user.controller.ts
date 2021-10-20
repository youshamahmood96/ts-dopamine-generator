import { Request, Response } from "express";
import { IUserGetAllServiceReturn, IUserRegistrationServiceReturn, IUserRegistrtaton, IUserResponseObject } from "../Interfaces/user.interface";
import { userGetAllService, userRegisterService } from "../Services/user.service";
export const userRegisterController = async(req:Request, res:Response):Promise<Response<any, Record<string, any>>> => {
    const body:IUserRegistrtaton = req.body
    const serviceReturn:IUserRegistrationServiceReturn = await userRegisterService(body)
    const responseObject:IUserResponseObject = {
        status: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
        accessToken:serviceReturn.accessToken
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}
export const userGetAllController = async(req: Request, res: Response):Promise<Response<any, Record<string, any>>> => {
    const serviceReturn:IUserGetAllServiceReturn = await userGetAllService()
    const responseObject:IUserResponseObject = {
        status: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}