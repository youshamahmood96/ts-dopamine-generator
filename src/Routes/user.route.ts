import {Router} from 'express'
import { userRegisterController } from '../Controllers/user.controller'

const router:Router =  Router()

const routing = async() => {
    await router.post('/user/registration',userRegisterController)
}

routing()

export default router