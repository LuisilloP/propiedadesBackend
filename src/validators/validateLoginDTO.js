import { Type } from "@sinclair/typebox";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import Ajv from "ajv";
const loginDto = Type.Object(
  {
    correo: Type.String({
      format: "email",
      errorMessage: {
        type: "El tipo debe ser string",
        format: "debe contener correo valido",
      },
    }),
    pass: Type.String({
      errorMessage: {
        type: "tipo de password debe ser string",
      },
    }),
  },
  {
    additionalProperties: false,
    errorMessage: {
      additionalProperties: "formato no valido,solo correo y password",
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
