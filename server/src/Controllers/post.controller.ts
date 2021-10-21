import { Request, Response } from "express";
import { IGenericServiceReturn } from "../Interfaces/user.interface";
import { postCreateService } from "../Services/post.service";

export const postCreateController = async(req:Request, res:Response):Promise<Response<any, Record<string, any>>> => {
    const serviceReturn:IGenericServiceReturn = await postCreateService(req.params.uuid,req.body)
    const responseObject:IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
    }
    return res.status(serviceReturn.statusCode).json(responseObject)
}