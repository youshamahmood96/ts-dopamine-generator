import { PrismaClient } from "@prisma/client";
import { genSaltSync, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";
export const checkIfEmailExists = async (email: string): Promise<Boolean> => {
    const { user: UserModel } = new PrismaClient();
    let flag = false;
    try {
        const existingUser = await UserModel.findUnique({
            where: { email },
        });
        if (existingUser) {
            flag = true;
        }
    } catch (err) {
        console.error(err);
    }
    return flag;
};

export const passwordHash = (password: string): string => {
    const salt: string = genSaltSync(10);
    return hashSync(password, salt);
};
export const tokenGenerator = (token: object): string => {
    const secret: string = process.env.JWT_SECRET as string;
    return sign({ token }, secret, { expiresIn: "1h" });
};
