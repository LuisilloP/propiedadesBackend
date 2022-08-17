import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import { PasswordDTOSchema } from "#DTO/user/dto-types.js";
const DeleteSchema = Type.Object({ password: PasswordDTOSchema });
const avj = new Ajv({ allErrors: true })
  .addKeyword("kind")
  .addKeyword("modifier");
addErrors(avj);
const validaDel = avj.compile(DeleteSchema);
const validateDeleteDTO = (req, res, next) => {
  const IsValid = validaDel(req.body);
  if (!IsValid)
    res.status(400).send({
      errors: validaDel.errors.map((error) => error.message + "here"),
    });
  next();
};
export default validateDeleteDTO;
