import userRouter from "#routes/usuario.routes.js";
import express from "express";
import cors from "cors";
const expressApp = express();
expressApp.use(cors());
//midelwares
expressApp.use(express.json());

///rutas

expressApp.use("/user", userRouter);

export default expressApp;
