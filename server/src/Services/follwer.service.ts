import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import HttpException from "../HttpHandlers/httpException";
import { userResponseMessages } from '../HttpHandlers/responseMessages';
import { StatusCodes } from "../HttpHandlers/statusCodes";
import { IGenericServiceReturn } from "../Interfaces/user.interface";

const {user: UserModel} = new PrismaClient();


const userId = Prisma.validator<Prisma.UserSelect>()({
    id: true
});

export const startFollowingUserService = async (uuIdOfFollower:string,uuIdOfFollwee:string): Promise<IGenericServiceReturn>=> {
    try {
        const existingFollowee = await UserModel.findUnique({
            where:{
                uuid:uuIdOfFollwee
            },
            select:userId
        })
        const existingFollower = await UserModel.findUnique({
            where:{
                uuid:uuIdOfFollower
            },
            select:userId
        })
        if(!existingFollowee || !existingFollower){
            return {
                statusCode: StatusCodes.NOT_FOUND,
                message: userResponseMessages.userNotFoundDuringLogin,
            };
        }
        await UserModel.update({
            where:{
                uuid:uuIdOfFollower
            },
            data:{
                following:{
                    connect:{
                        id:existingFollowee.id
                    }
                }
            }
        })
        await UserModel.update({
            where:{
                uuid:uuIdOfFollwee
            },
            data:{
                followedBy:{
                    connect:{
                        id:existingFollower.id
                    }
                }
            }
        })
        return{
            statusCode: StatusCodes.OK,
            message: userResponseMessages.startedToFollow,
        }
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
}