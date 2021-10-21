import { PrismaClient } from '@prisma/client';
import HttpException from '../HttpHandlers/httpException';
import { postResponseMessages } from '../HttpHandlers/responseMessages';
import { StatusCodes } from '../HttpHandlers/statusCodes';
import { IPostCreate } from '../Interfaces/post.interface';
import { IGenericServiceReturn } from "../Interfaces/user.interface";

const { user: UserModel } = new PrismaClient();

export const postCreateService = async(uuid:string,post:IPostCreate): Promise<IGenericServiceReturn>=> {
    const {title,body} = post
    try {
        await UserModel.update({
            where:{
                uuid
            },
            data:{
                posts:{
                    create:{
                        title,
                        body
                    }
                }
            }
        })
        return{
            statusCode: StatusCodes.OK,
            message: postResponseMessages.postCreated,
        }
    } catch(error){
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
}