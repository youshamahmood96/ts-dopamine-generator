import express from "express";
import userRouter from "./Routes/user.route";
import postRouter from './Routes/post.route'
import cors from 'cors'
const init = async():Promise<void> =>{
    const app = express();
    app.use(cors());
    app.use(express.json());
    await app.use('/api/v1',userRouter,postRouter)
    await app.listen(process.env.PORT,()=>{
        console.log(`Listening at ${process.env.PORT}`);
    })
}
export default init