import { IUserResponseMessage } from "../Interfaces/user.interface";

export const userResponseMessages:IUserResponseMessage = {
    duplicateEmail:"Email already exists.",
    userCreationSuccess:"User created successfully",
    errorInValidation:"Some fields have failed passing the validation middleware.Please check the errors key",
    unAuthorizedUser:"Invalid Token.Access Denied",
    getSuccessMessage:"Users fetched successfully",
    genericFailureMessage:"Sorry, something went wrong"
}