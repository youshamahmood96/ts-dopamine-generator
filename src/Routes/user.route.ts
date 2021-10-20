import {Router} from 'express'
import { userGetAllController, userRegisterController } from '../Controllers/user.controller'
import runValidation from '../middlewares/runValidation'
import { checkToken } from '../middlewares/userMiddlewares/user.checkToken'
import { userSignupValidator } from '../middlewares/userMiddlewares/user.validator'

const router:Router =  Router()

const routing = async() => {
    await router.post('/user/registration',userSignupValidator,runValidation, userRegisterController)
    await router.get('/user/getAllUsers',checkToken,userGetAllController)
}

routing()

export default router