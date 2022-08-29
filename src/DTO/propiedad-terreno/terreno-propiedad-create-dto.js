import { Type } from "@sinclair/typebox";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import Ajv from "ajv";
import eliminateImg from "#utilidades/eliminateImg.js";
import {
  IdDTOSchema,
  TituloDTOSchema,
  DescripcionDTOSchema,
  ubicacionDTOSchema,
  TipoDTOSchema,
  MetrosDTOSchema,
  PrecioDTOSchema,
} from "#DTO/propiedad-terreno/propiedades-dto-types.js";
const DTOPlantilla = Type.Object({
  _id: IdDTOSchema,
  titulo: TituloDTOSchema,
  ubicacion: ubicacionDTOSchema,
  descripcion: DescripcionDTOSchema,
  tipo: TipoDTOSchema,
  metros: MetrosDTOSchema,
  precio: PrecioDTOSchema,
});

const ajv = new Ajv({ allErrors: true });
addFormats(ajv, ["uuid"]).addKeyword("kind").addKeyword("modifier");
addErrors(ajv);
const validateSchema = ajv.compile(DTOPlantilla);
const TerrenoPropiedadDTO = (req, res, next) => {
  try {
    const validDTO = validateSchema(req.body);
    if (!validDTO) {
      eliminateImg(req.files);
      return res
        .status(400)
        .send({ errors: validateSchema.errors.map((error) => error.message) });
    }
    next();
  } catch (errr) {
    eliminateImg(req.files);
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map((error) => error.message) });
  }
};
export default TerrenoPropiedadDTO;
