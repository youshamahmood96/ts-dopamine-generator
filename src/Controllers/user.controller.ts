import { Request, Response } from "express";
import { IUserRegistrtaton, IUserResponseObject } from "../Interfaces/user.interface";
import { userRegisterService } from "../Services/user.service";
export const userRegisterController = async(req:Request, res:Response):Promise<Response<any, Record<string, any>>> => {
    const body:IUserRegistrtaton = req.body
    const serviceReturn = await userRegisterService(body)
    const responseObject:IUserResponseObject = {
        status: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}