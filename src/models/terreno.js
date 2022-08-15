import mongoose from "mongoose";
const { model, Schema } = mongoose;
const TerrenoSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
  titulo: { type: String, required: true },
  direccion: { type: String, required: true },
  urlimg: { type: String, required: true },
  agua: { type: String, required: true },
  luz: { type: String, required: true },
  metros: { type: String, required: true },
  precio: { type: String, required: true },
});

export default model("usuario", TerrenoSchema);
