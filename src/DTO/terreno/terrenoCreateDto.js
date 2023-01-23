import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import eliminateImg from "#utilidades/eliminateImg.js";
import {
  AguaDTOSchema,
  LuzDTOSchema,
} from "#DTO/propiedad-terreno/propiedades-dto-types.js";
const PlantillaTerreno = Type.Object({
  water: AguaDTOSchema,
  light: LuzDTOSchema,
});
const ajv = new Ajv({ allErrors: true });

addFormats(ajv).addKeyword("kind").addKeyword("modifier");
addErrors(ajv);
const validateSchema = ajv.compile(PlantillaTerreno);
const TerrenoDTO = (req, res, next) => {
  const validDTO = validateSchema(req.body);
  if (!validDTO) {
    eliminateImg(req.files);
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map((error) => error.message) });
  }
  next();
};
export default TerrenoDTO;
