import mongoose from "mongoose";
const { model, Schema } = mongoose;
const TerrenoSchema = new Schema({
  _id: { type: String, _id: false },
  titulo: { type: String, required: true },
  ubicacion: { type: String, required: true },
  descripcion: { type: String, required: true },
  url_img: [{ type: String, required: true }],
  tipo: { type: String, required: true },
  agua: { type: String, required: true },
  luz: { type: String, required: true },
  metros: { type: Number, required: true },
  precio: { type: Number, required: true },
});

export default model("terrenos", TerrenoSchema);
