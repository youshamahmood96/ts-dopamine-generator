import { Prisma,PrismaClient } from "@prisma/client";
import HttpException from "../HttpHandlers/httpException";
import { postResponseMessages } from "../HttpHandlers/responseMessages";
import { StatusCodes } from "../HttpHandlers/statusCodes";
import { IPostCreate } from "../Interfaces/post.interface";
import { IGenericServiceReturn } from "../Interfaces/user.interface";

const { user: UserModel } = new PrismaClient();

const { post: PostModel } = new PrismaClient();

const following = Prisma.validator<Prisma.UserSelect>()({
    following:{
        select:{
            id:true
        }
    }
});

export const postCreateService = async (uuid: string, post: IPostCreate): Promise<IGenericServiceReturn> => {
    const { title, body } = post;
    try {
        await UserModel.update({
            where: {
                uuid,
            },
            data: {
                posts: {
                    create: {
                        title,
                        body,
                    },
                },
            },
        });
        return {
            statusCode: StatusCodes.OK,
            message: postResponseMessages.postCreated,
        };
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
};
export const getAllPostsOfSingleUserService = async (userId: number): Promise<IGenericServiceReturn> => {
    try {
        const posts = await PostModel.findMany({
            where: {
                userId,
            },
        });
        return {
            statusCode: StatusCodes.OK,
            message: postResponseMessages.getSuccessMessage,
            data: posts,
        };
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
};
export const deleteOnePostService = async (uuid: string): Promise<IGenericServiceReturn> => {
    try {
        await PostModel.delete({
            where: { uuid },
        });
        return {
            statusCode: StatusCodes.OK,
            message: postResponseMessages.postDeletedMessage,
        };
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
};
export const updatePostService = async (uuid: string, post: IPostCreate): Promise<IGenericServiceReturn> => {
    const { title, body } = post;
    try {
        await PostModel.update({
            where: { uuid },
            data: {
                title,
                body,
            },
        });
        return {
            statusCode: StatusCodes.OK,
            message: postResponseMessages.postUpdated,
        };
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
};

export const getAllPostsService = async (params:string):Promise<IGenericServiceReturn> => {
    const paramsArray = params.split(" ")
    const id:number = parseInt(paramsArray[0])
    const uuid:string = paramsArray[1]
    try {
        // 1
        const userFollowing = await UserModel.findUnique({
            where:{
                uuid
            },
            select:following
        })
        let followerIdArray:Array<number> = [];
        userFollowing?.following.forEach(({id}) => {
            followerIdArray.push(id)
        })
        let postArray:Array<object> = []
        // 2
        const selfPostsCall = async() => {
            const post = await PostModel.findMany({
                where:{
                    userId:id
                }
            })
            postArray.push(await post)
        }
        
        const followingPostsCall = async() => {
            for(let i=0;i<followerIdArray.length; i++){
                const posts = await PostModel.findMany({
                    where: {
                        userId:followerIdArray[i]
                    },
                });
                
                postArray.push(await posts)
            }
        }
        await selfPostsCall()
        await followingPostsCall()
        
        return {
            statusCode: StatusCodes.OK,
            message: postResponseMessages.getSuccessMessage,
            data:postArray
        };
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
}

