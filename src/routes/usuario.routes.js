import { Router } from "express";

//DTO
import userRegisterDTO from "#DTO/user/validateCreateDTO.js";
import validateLoginDTO from "#DTO/user/validateLoginDTO.js";
import userJWTDTOP from "#DTO/user/userJWTDTO.js";
import validateDeleteDTO from "#DTO/user/validateDeleteDTO.js";
//CONTROLLERS
import userRegisterController from "#controllers/user/userRegisterController.js";
import userLoginController from "#controllers/user/userLoginController.js";

import userPerfilController from "#controllers/user/userPerfilController.js";

import userDeleteController from "#controllers/user/userDeleteController.js";
const userRouter = Router();

userRouter.post("/register", userRegisterDTO, userRegisterController);

userRouter.post("/login", validateLoginDTO, userLoginController); //userLoginController

//pregunta cabecera
userRouter.get("/perfil", userJWTDTOP, userPerfilController);

userRouter.delete(
  "/delete",
  userJWTDTOP,
  validateDeleteDTO,
  userDeleteController
);

export default userRouter;
