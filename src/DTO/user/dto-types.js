import { Type } from "@sinclair/typebox";
export const IdDTOSchema = Type.String({
  format: "uuid",
  errorMessage: {
    Type: "tipo no es valido debe ser string",
    format: "el formato de id no es valido ",
  },
});
export const NombreDTOSchema = Type.String({
  errorMessage: {
    Type: "tipo no es valido debe ser string",
  },
});
export const CorreoDTOSchema = Type.String({
  format: "email",
  errorMessage: {
    Type: "tipo no es valido debe ser mail",
    format: "el formato de mail no es valido ",
  },
});
export const PasswordDTOSchema = Type.String({
  errorMessage: {
    Type: "tipo no es valido debe ser string",
  },
});
