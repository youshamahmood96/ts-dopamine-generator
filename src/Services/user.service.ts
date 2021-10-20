import { PrismaClient,Prisma } from "@prisma/client";
import { passwordHash, tokenGenerator } from "./../Helpers/user.helper";
import { userResponseMessages } from "../HttpHandlers/responseMessages";
import { checkIfEmailExists } from "../Helpers/user.helper";
import {  IUserRegistrationServiceReturn, IUserRegistrtaton } from "./../Interfaces/user.interface";
import { StatusCodes } from "../HttpHandlers/statusCodes";
import HttpException from "../HttpHandlers/httpException";

const { user: UserModel } = new PrismaClient();
const userPrismaSelector = {
    id: true,
    email: true,
    firstname: true,
    lastname: true,
    createdAt: true,
    updatedAt: true,
}
const userInfoWithoutPassword = Prisma.validator<Prisma.UserSelect>()(userPrismaSelector)

export const userRegisterService = async (user: IUserRegistrtaton): Promise<IUserRegistrationServiceReturn> => {
    const { firstname, lastname, email, password } = user;
    if (await checkIfEmailExists(email)) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: userResponseMessages.duplicateEmail,
            data:{}
        }
    } else {
      try {
        
        const hashedPassword = passwordHash(password);
        const body = await UserModel.create({
            data: {
                firstname,
                lastname,
                email,
                password: hashedPassword,
            },
            select:userInfoWithoutPassword
        });
        const accessToken = tokenGenerator(body)
        return{
            statusCode: StatusCodes.CREATED,
            message: userResponseMessages.userCreationSuccess,
            data:body,
            accessToken
        }
      } catch (error) {
        console.log(error);
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
      }
    }
};
export const userGetAllService = async () => {
   try {
       const allUsers = await UserModel.findMany({
           select:userInfoWithoutPassword
       })
       return{
        statusCode: StatusCodes.OK,
        message: userResponseMessages.getSuccessMessage,
        data:allUsers
       }
   } catch (error) {
    return{
        statusCode: StatusCodes.BAD_REQUEST,
        message: userResponseMessages.genericFailureMessage,
        data:{}
       }
   }
}