import mongoose from "mongoose";
const { model, Schema } = mongoose;
const UsuarioSchema = new Schema({
  _id: { type: String, _id: false },
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model("usuarios", UsuarioSchema);
