import { Router } from "express";
const userRouter = Router();

userRouter.post("/register");

userRouter.post("/login");

userRouter.get("/perfil");

userRouter.delete("delete");

export default userRouter;
