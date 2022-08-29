import userRouter from "#routes/usuario.routes.js";
import userRouterPropiedad from "#routes/propiedad.routes.js";
// import fileUpload from "express-fileupload";
import multer from "multer";
import express from "express";
//import bodyParser from "body-parser"
import cors from "cors";
const expressApp = express();
expressApp.use(cors());
//midelwares

expressApp.use(express.json());

// expressApp.use(
//   fileUpload({

//   })
// );
///rutas

expressApp.use("/user", userRouter);
expressApp.use("/propiedad", userRouterPropiedad);

export default expressApp;
