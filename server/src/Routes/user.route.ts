import {Router} from 'express'
import { userDeleteController, userGetAllController, userLoginController, userRegisterController, userUpdateController } from '../Controllers/user.controller'
import runValidation from '../Middlewares/runValidation'
import { checkToken } from '../Middlewares/userMiddlewares/user.checkToken'
import { userLoginValidator, userSignupValidator } from '../Middlewares/userMiddlewares/user.validator'

const router:Router =  Router()

const routing = async() => {
    await router.post('/user/registration',userSignupValidator,runValidation, userRegisterController)
    await router.get('/user/getAllUsers',checkToken,userGetAllController)
    await router.post('/user/login',userLoginValidator,runValidation,userLoginController)
    await router.delete('/user/delete/:uuid',checkToken,userDeleteController)
    await router.patch('/user/update/:uuid',checkToken,userUpdateController)
}

routing()

export default router