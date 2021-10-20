import { PrismaClient,Prisma } from "@prisma/client";
import { passwordHash } from "./../Helpers/user.helper";
import { userResponseMessages } from "../HttpHandlers/responseMessages";
import { checkIfEmailExists } from "../Helpers/user.helper";
import { IUserRegistrationServiceReturn, IUserRegistrtaton } from "./../Interfaces/user.interface";
import { StatusCodes } from "../HttpHandlers/statusCodes";
import HttpException from "../HttpHandlers/httpException";
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
        const { user: UserModel } = new PrismaClient();
        const hashedPassword = passwordHash(password);
        const userInfoWithoutPassword = Prisma.validator<Prisma.UserSelect>()({
            id: true,
            email: true,
            firstname: true,
            lastname: true,
            createdAt: true,
            updatedAt: true,
        })
        const body = await UserModel.create({
            data: {
                firstname,
                lastname,
                email,
                password: hashedPassword,
            },
            select:userInfoWithoutPassword
        });
        return{
            statusCode: StatusCodes.OK,
            message: userResponseMessages.userCreationSuccess,
            data:body
        }
      } catch (error) {
        console.log(error);
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
      }
    }
};
