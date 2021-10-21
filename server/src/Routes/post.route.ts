import {Router} from 'express'
import { postCreateController } from '../Controllers/post.controller'
import { checkToken } from '../Middlewares/userMiddlewares/user.checkToken'

const postRouter:Router =  Router()

const routing = async() => {
   await postRouter.post('/post/create/:uuid',checkToken,postCreateController)
}

routing()

export default postRouter