import userRouter from "#routes/usuario.routes.js";
import express from "express";
const expressApp = express();

//midelwares
expressApp.use(express.json());

///rutas

expressApp.use("/user", userRouter);

export default expressApp;
