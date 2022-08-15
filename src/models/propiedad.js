import mongoose from "mongoose";
const { model, Schema } = mongoose;
const PropiedadSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  titulo: { type: String, required: true },
  direccion: { type: String, required: true },
  urlimg: { type: String, required: true },
  habitacion: { type: Number, required: true },
  banio: { type: Number, required: true },
  metros: { type: Number, required: true },
  precio: { type: Number, required: true },
});

export default model("propiedades", PropiedadSchema);
