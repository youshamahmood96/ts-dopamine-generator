import { NextFunction, Request, Response } from 'express';
import {validationResult} from 'express-validator'
import { userResponseMessages } from '../HttpHandlers/responseMessages';
import { StatusCodes } from '../HttpHandlers/statusCodes';
import { IGenericResponseObjectWithError } from '../Interfaces/user.interface';

const runValidation = (req:Request, res:Response,next: NextFunction) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const responseObject:IGenericResponseObjectWithError = {
            statusCode:StatusCodes.UNPROCESSABLE_ENTITY,
            message:userResponseMessages.errorInValidation,
            error:errors
        }
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(responseObject)
    }
    next()
}
export default runValidation