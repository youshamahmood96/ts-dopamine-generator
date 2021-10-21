import {Router} from 'express'
import { deleteOnePostController, getAllPostsOfSingleUserController, postCreateController, updatePostController } from '../Controllers/post.controller'
import { checkToken } from '../Middlewares/userMiddlewares/user.checkToken'

const postRouter:Router =  Router()

const routing = async() => {
   await postRouter.post('/post/create/:uuid',checkToken,postCreateController)
   await postRouter.get('/post/getAllPosts/:id',checkToken,getAllPostsOfSingleUserController)
   await postRouter.delete('/post/delete/:uuid',checkToken,deleteOnePostController)
   await postRouter.patch('/post/update/:uuid',checkToken,updatePostController)
}

routing()

export default postRouter