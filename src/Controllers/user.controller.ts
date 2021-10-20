import { Request, Response } from "express";
import { IUserRegistrtaton } from "../Interfaces/user.interface";
import { userRegisterService } from "../Services/user.service";
export const userRegisterController = async(req:Request, res:Response) => {
    const body:IUserRegistrtaton = req.body
    const response = await userRegisterService(body)
    res.status(response.statusCode).json({
        status: response.statusCode,
        message: response.message,
        data: response.data
    })
}