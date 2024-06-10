import {Router} from 'express';
import { postCreateUser, postLogin } from '../controller/user';

const userRouter = Router();

userRouter.get("/", ()=>{})
userRouter.post("/", postCreateUser)
userRouter.post("/login", postLogin)
userRouter.put("/", ()=>{})
userRouter.delete("/", ()=>{})

export default userRouter;