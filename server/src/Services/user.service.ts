import { PrismaClient, Prisma } from "@prisma/client";
import { passwordHash, tokenGenerator } from "./../Helpers/user.helper";
import { userResponseMessages } from "../HttpHandlers/responseMessages";
import { checkIfEmailExists } from "../Helpers/user.helper";
import { IUserLogin, IGenericServiceReturn, IUserRegistrtaton, IUserUpdateModel } from "./../Interfaces/user.interface";
import { StatusCodes } from "../HttpHandlers/statusCodes";
import HttpException from "../HttpHandlers/httpException";
import { compareSync } from "bcrypt";

const { user: UserModel } = new PrismaClient();
const userPrismaSelectorWithoutPassword = {
    id: true,
    uuid: true,
    email: true,
    firstname: true,
    lastname: true,
    nickname: true,
    dob: true,
    bio: true,
    createdAt: true,
    updatedAt: true,
};

const userInfoWithoutPassword = Prisma.validator<Prisma.UserSelect>()(userPrismaSelectorWithoutPassword);

export const userRegisterService = async (user: IUserRegistrtaton): Promise<IGenericServiceReturn> => {
    const { firstname, lastname, email, password } = user;
    if (await checkIfEmailExists(email)) {
        return {
            statusCode: StatusCodes.BAD_REQUEST,
            message: userResponseMessages.duplicateEmail,
        };
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
                select: userInfoWithoutPassword,
            });
            const accessToken = tokenGenerator(body);
            return {
                statusCode: StatusCodes.CREATED,
                message: userResponseMessages.userCreationSuccess,
                data: body,
                accessToken,
            };
        } catch (error) {
            console.log(error);
            throw new HttpException(StatusCodes.INTERNAL_SERVER);
        }
    }
};
export const userGetAllService = async () => {
    try {
        const allUsers = await UserModel.findMany({
            select: userInfoWithoutPassword,
        });
        return {
            statusCode: StatusCodes.OK,
            message: userResponseMessages.getSuccessMessage,
            data: allUsers,
        };
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
};
export const userLoginService = async (user: IUserLogin): Promise<IGenericServiceReturn> => {
    const { email, password } = user;
    let existingUser;
    try {
        existingUser = await UserModel.findUnique({
            where: { email },
        });
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
    if (!existingUser) {
        return {
            statusCode: StatusCodes.NOT_FOUND,
            message: userResponseMessages.userNotFoundDuringLogin,
        };
    }
    if (compareSync(password, existingUser.password)) {
        existingUser.password = "";
        const accessToken = tokenGenerator(existingUser);
        return {
            statusCode: StatusCodes.CREATED,
            message: userResponseMessages.loginSuccess,
            data: existingUser,
            accessToken,
        };
    } else {
        return {
            statusCode: StatusCodes.NOT_FOUND,
            message: userResponseMessages.passwordError,
        };
    }
};
export const userDeleteService = async (uuid: string): Promise<IGenericServiceReturn> => {
    try {
        await UserModel.delete({
            where: { uuid },
        });
        return {
            statusCode: StatusCodes.OK,
            message: userResponseMessages.deletedUser,
        };
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
};
export const userUpdateService = async (body: IUserUpdateModel, uuid: string): Promise<IGenericServiceReturn> => {
    const { firstname, lastname, nickname, dob, bio } = body;
    try {
        await UserModel.update({
            where: {
                uuid,
            },
            data: {
                firstname,
                lastname,
                nickname,
                dob,
                bio,
            },
        });
        return {
            statusCode: StatusCodes.OK,
            message: userResponseMessages.updatedUser,
        };
    } catch (error) {
        throw new HttpException(StatusCodes.INTERNAL_SERVER);
    }
};
