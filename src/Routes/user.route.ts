import {Router} from 'express'
import { userRegisterController } from '../Controllers/user.controller'
import runValidation from '../middlewares/runValidation'
import { userSignupValidator } from '../middlewares/userMiddlewares/user.validator'

const router:Router =  Router()

const routing = async() => {
    await router.post('/user/registration',userSignupValidator,runValidation, userRegisterController)
}

routing()

export default router