import { Router } from "express";
import { startFollowingUserController } from "../Controllers/follwer.controller";
import { checkToken } from "../Middlewares/userMiddlewares/user.checkToken";

const followerRouter:Router = Router()

const routing = async () => {
    await followerRouter.post('/user/follower',checkToken,startFollowingUserController)
}

routing()

export default followerRouter