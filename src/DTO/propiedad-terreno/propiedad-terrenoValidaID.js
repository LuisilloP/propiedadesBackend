import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";
import { IdDTOSchema } from "#DTO/propiedad-terreno/propiedades-dto-types.js";
const DeleteSchema = Type.Object({ id: IdDTOSchema });
const ajv = new Ajv({ allErrors: true })
  .addKeyword("kind")
  .addKeyword("modifier");
addFormats(ajv);
addErrors(ajv);
const validaDel = ajv.compile(DeleteSchema);
const propiedadTerrenoValidaIdDTO = (req, res, next) => {
  const IsValid = validaDel(req);
  if (!IsValid)
    res.status(400).send({
      errors: validaDel.errors.map((error) => error.message + "here"),
    });
  next();
};
export default propiedadTerrenoValidaIdDTO;
