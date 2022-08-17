import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import {
  IdDTOSchema,
  NombreDTOSchema,
  CorreoDTOSchema,
  PasswordDTOSchema,
} from "#DTO/user/dto-types.js";
const loginDtoSchema = Type.Object(
  {
    _id: IdDTOSchema,
    nombre: NombreDTOSchema,
    correo: CorreoDTOSchema,
    password: PasswordDTOSchema,
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "formato no valido",
    },
  }
);
const ajv = new Ajv({ allErrors: true });

addFormats(ajv, ["uuid", "email"]).addKeyword("kind").addKeyword("modifier");
addErrors(ajv);

const validateSchema = ajv.compile(loginDtoSchema);

const userRegisterDTO = (req, res, next) => {
  const validDTO = validateSchema(req.body);
  if (!validDTO)
    return res
      .status(400)
      .send({ errors: validateSchema.errors.map((error) => error.message) });
  next();
};
export default userRegisterDTO;
