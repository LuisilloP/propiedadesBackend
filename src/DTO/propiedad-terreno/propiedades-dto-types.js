import { Type } from "@sinclair/typebox";

const StringError = Type.String({
  minLength: 1,
  errorMessage: {
    Type: "el tipo debe ser string",
    minLength: "complete todos los campos ",
  },
});
const NumberError = Type.Number({
  errorMessage: {
    Type: "el tipo debe ser number",
  },
});

const IdError = Type.String({
  format: "uuid",
  errorMessage: {
    Type: "tipo no es valido debe ser string",
    format: "el formato de id no es valido ",
  },
});

export const IdDTOSchema = IdError;
export const TituloDTOSchema = StringError;
export const DescripcionDTOSchema = StringError;

export const ubicacionDTOSchema = StringError;
// export const UrlImgDTOSchema = StringError;
export const HabitacionDTOSchema = StringError; //change formdata

export const BanioDTOSchema = StringError; //change formdata
export const MetrosDTOSchema = StringError; //change formdata
export const PrecioDTOSchema = StringError; //change formdata
export const AguaDTOSchema = StringError;
export const LuzDTOSchema = StringError;

export const TipoDTOSchema = StringError;
