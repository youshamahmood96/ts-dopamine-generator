import {  PrismaClient } from "@prisma/client";
import { genSaltSync, hashSync } from "bcrypt";

export const checkIfEmailExists = async (email: string):Promise<Boolean> => {
    const { user: UserModel } = new PrismaClient();
    let flag = false;
    try {
        const existingUser = await UserModel.findUnique({
            where: { email },
        });
        if(existingUser){
            flag = true;
        }
    } catch (err) {
        console.error(err);
    }
    return flag
};

export const passwordHash = (password: string):string => {
    const salt:string = genSaltSync(10)
    return hashSync(password, salt)
}

