//DEFAULT
import { Router } from "express";
import userJWTDTOP from "#DTO/user/userJWTDTO.js";
//CREATE
import TerrenoPropiedadDTO from "#DTO/propiedad-terreno/terreno-propiedad-create-dto.js";
import PropiedadDTO from "#DTO/propiedad/propiedadCreateDTO.js";
import TerrenoDTO from "#DTO/terreno/terrenoCreateDto.js";
import propiedadRegisterController from "#controllers/propiedad/propiedadRegisterController.js";
import terrenoRegisterController from "#controllers/terreno/terrenoRegisterController.js";

//DELETE
import propiedadTerrenoDeleteDTO from "#DTO/propiedad-terreno/propiedad-terrenoValidaID.js";
import propiedadTerrenoDeleteController from "#controllers/propiedad-terreno/propiedad-terrenoDeleteController.js";

//PATCH
import propiedadUpdateController from "#controllers/propiedad/propiedadUpdateController.js";
import terrenoUpdateController from "#controllers/terreno/terrenoUpdateController.js";
//POST READ
import propiedadReadAllController from "#controllers/propiedad-terreno/propiedadReadAllController.js";
import propiedadTerrenoReadAOneController from "#controllers/propiedad-terreno/propiedad-terrenoReadOneController.js";
import propiedadesGetImagesController from "#controllers/propiedad-terreno/propiedadesGetImagesController.js";

import multer from "multer";
import storage from "#config/multer.js";

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
const propiedadRouter = Router();

propiedadRouter.post(
  "/crearpropiedad",
  userJWTDTOP,
  upload.array("images", 5),
  TerrenoPropiedadDTO,
  PropiedadDTO,
  propiedadRegisterController
);
propiedadRouter.post(
  "/crearterreno",
  userJWTDTOP,
  upload.array("images", 5),
  TerrenoPropiedadDTO,
  TerrenoDTO,
  terrenoRegisterController
);
propiedadRouter.patch(
  "/actualizarpropiedad",
  userJWTDTOP,
  TerrenoPropiedadDTO,
  PropiedadDTO,
  propiedadUpdateController
);
propiedadRouter.patch(
  "/actualizarterreno",
  userJWTDTOP,
  TerrenoPropiedadDTO,
  TerrenoDTO,
  terrenoUpdateController
);

propiedadRouter.delete(
  "/borrarpropiedadterreno",
  userJWTDTOP,
  propiedadTerrenoDeleteDTO,
  propiedadTerrenoDeleteController
);

propiedadRouter.post(
  "/mostrarpropiedades",
  //userJWTDTOP,
  propiedadReadAllController
);
propiedadRouter.post(
  "/mostrarpropiedad",
  userJWTDTOP,
  propiedadTerrenoReadAOneController
);
propiedadRouter.get("/get/images/:image", propiedadesGetImagesController);

//terreno
export default propiedadRouter;
