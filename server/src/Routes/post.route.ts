import {Router} from 'express'
import { deleteOnePostController, getAllPostsOfSingleUserController, postCreateController } from '../Controllers/post.controller'
import { checkToken } from '../Middlewares/userMiddlewares/user.checkToken'

const postRouter:Router =  Router()

const routing = async() => {
   await postRouter.post('/post/create/:uuid',checkToken,postCreateController)
   await postRouter.get('/post/getAllPosts/:id',checkToken,getAllPostsOfSingleUserController)
   await postRouter.delete('/post/delete/:uuid',checkToken,deleteOnePostController)
}

routing()

export default postRouter