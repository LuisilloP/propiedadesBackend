import mongoose from "mongoose";
const { model, Schema } = mongoose;
const PropiedadSchema = new Schema({
  _id: { type: String, _id: false },
  title: { type: String, required: true },
  ubication: { type: String, required: true },
  description: { type: String, required: true },
  url_img: [{ type: String, required: true }],
  type: { type: String, required: true },
  beedrooms: { type: Number, required: true },
  toilets: { type: Number, required: true },
  meters: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default model("propiedades", PropiedadSchema);
