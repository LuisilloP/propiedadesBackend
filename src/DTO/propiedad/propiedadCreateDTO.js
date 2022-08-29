import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import eliminateImg from "#utilidades/eliminateImg.js";
import {
  HabitacionDTOSchema,
  BanioDTOSchema,
} from "#DTO/propiedad-terreno/propiedades-dto-types.js";
const PlantillaPropiedad = Type.Object({
  habitacion: HabitacionDTOSchema,
  banio: BanioDTOSchema,
});
const ajv = new Ajv({ allErrors: true });

addFormats(ajv).addKeyword("kind").addKeyword("modifier");
addErrors(ajv);
const validateSchema = ajv.compile(PlantillaPropiedad);
const PropiedadDTO = (req, res, next) => {
  const validDTO = validateSchema(req.body);
  if (!validDTO) {
    eliminateImg(req.files);
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map((error) => error.message) });
  }
  next();
};
export default PropiedadDTO;
