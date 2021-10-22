import { Request,Response } from "express";
import { IGenericServiceReturn } from "../Interfaces/user.interface";
import { startFollowingUserService } from "../Services/follwer.service";

export const startFollowingUserController = async (req: Request, res: Response):Promise<Response> => {
    const {uuIdOfFollower,uuIdOfFollwee} = req.body
    const serviceReturn:IGenericServiceReturn = await startFollowingUserService(uuIdOfFollower,uuIdOfFollwee)
    const responseObject: IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
    };
    return res.status(serviceReturn.statusCode).json(responseObject);
}