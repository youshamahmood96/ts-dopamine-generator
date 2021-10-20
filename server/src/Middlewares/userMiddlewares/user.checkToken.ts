import { IUserResponseObject } from '../../Interfaces/user.interface';
import { StatusCodes } from '../../HttpHandlers/statusCodes';
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken'
import { userResponseMessages } from '../../HttpHandlers/responseMessages';
export const checkToken = async (req: Request, res: Response, next: NextFunction) => {
    const invalidResponse:IUserResponseObject = {
        status:StatusCodes.UNAUTHORIZED,
        message:userResponseMessages.unAuthorizedUser
    }
    let token = req.get('authorization')
    if(token){
        token = token.slice(7)
        try {
            const secret = process.env.JWT_SECRET as string
            await jwt.verify(token,secret)
            next()
        } catch (error) {
            return res.status(StatusCodes.UNAUTHORIZED).json(invalidResponse)
        }
    }
    else{
        return res.status(StatusCodes.UNAUTHORIZED).json(invalidResponse)
    }
};
