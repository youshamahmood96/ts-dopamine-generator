import { Request, Response } from "express";
import { IGenericServiceReturn } from "../Interfaces/user.interface";
import {
    deleteOnePostService,
    getAllPostsOfSingleUserService,
    getAllPostsService,
    postCreateService,
    updatePostService,
} from "../Services/post.service";

export const postCreateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const serviceReturn: IGenericServiceReturn = await postCreateService(req.params.uuid, req.body);
    const responseObject: IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
    };
    return res.status(serviceReturn.statusCode).json(responseObject);
};
export const getAllPostsOfSingleUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const serviceReturn: IGenericServiceReturn = await getAllPostsOfSingleUserService(parseInt(req.params.id));
    const responseObject: IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
    };
    return res.status(serviceReturn.statusCode).json(responseObject);
};
export const deleteOnePostController = async (req: Request, res: Response): Promise<Response> => {
    const serviceReturn: IGenericServiceReturn = await deleteOnePostService(req.params.uuid);
    const responseObject: IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
    };
    return res.status(serviceReturn.statusCode).json(responseObject);
};
export const updatePostController = async (req: Request, res: Response): Promise<Response> => {
    const serviceReturn: IGenericServiceReturn = await updatePostService(req.params.uuid, req.body);
    const responseObject: IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
    };
    return res.status(serviceReturn.statusCode).json(responseObject);
};
export const getAllPostsController = async (req: Request, res: Response): Promise<Response> => {
    const serviceReturn:IGenericServiceReturn = await getAllPostsService(req.params.uuid);
    const responseObject: IGenericServiceReturn = {
        statusCode: serviceReturn.statusCode,
        message: serviceReturn.message,
        data: serviceReturn.data,
    };
    return res.status(serviceReturn.statusCode).json(responseObject);
};

