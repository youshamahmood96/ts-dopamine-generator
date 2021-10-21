import {Router} from 'express'
import { userDeleteController, userGetAllController, userLoginController, userRegisterController, userUpdateController } from '../Controllers/user.controller'
import runValidation from '../Middlewares/runValidation'
import { checkToken } from '../Middlewares/userMiddlewares/user.checkToken'
import { userLoginValidator, userSignupValidator } from '../Middlewares/userMiddlewares/user.validator'

const userRouter:Router =  Router()

const routing = async() => {
    await userRouter.post('/user/registration',userSignupValidator,runValidation, userRegisterController)
    await userRouter.get('/user/getAllUsers',checkToken,userGetAllController)
    await userRouter.post('/user/login',userLoginValidator,runValidation,userLoginController)
    await userRouter.delete('/user/delete/:uuid',checkToken,userDeleteController)
    await userRouter.patch('/user/update/:uuid',checkToken,userUpdateController)
}

routing()

export default userRouter