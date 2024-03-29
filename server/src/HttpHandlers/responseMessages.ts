import { IPostResponseMessage } from "../Interfaces/post.interface";
import { IUserResponseMessage } from "../Interfaces/user.interface";

export const userResponseMessages: IUserResponseMessage = {
    duplicateEmail: "Email already exists.",
    userCreationSuccess: "User created successfully",
    errorInValidation: "Some fields have failed passing the validation middleware.Please check the errors key",
    unAuthorizedUser: "Invalid Token.Access Denied",
    getSuccessMessage: "Users fetched successfully",
    genericFailureMessage: "Sorry, something went wrong",
    userNotFoundDuringLogin: "User doesnt exist under this email",
    loginSuccess: "User logged in successfully",
    passwordError: "Password doesnt match",
    deletedUser: "User Deleted Successfully",
    updatedUser: "User Updated Successfully",
    startedToFollow:"Started following"
};
export const postResponseMessages: IPostResponseMessage = {
    postCreated: "Post created successfully",
    getSuccessMessage: "Posts fetched successfully",
    postDeletedMessage: "Post deleted successfully",
    postUpdated: "Post updated successfully",
};
