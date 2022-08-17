import { Type } from "@sinclair/typebox"; //objeto que tiene todos los tipos
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import Ajv from "ajv";

import { CorreoDTOSchema, PasswordDTOSchema } from "#DTO/user/dto-types.js";
const loginDto = Type.Object(
  {
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
addFormats(ajv, ["email"]).addKeyword("kind").addKeyword("modifier");
addErrors(ajv);

const validate = ajv.compile(loginDto);

const validateLoginDTO = (req, res, next) => {
  const ISvalidacion = validate(req.body);

  if (!ISvalidacion)
    return res
      .status(400)
      .send(ajv.errorsText(validate.errors, { separator: "\n" }));
  next();
};
export default validateLoginDTO;
