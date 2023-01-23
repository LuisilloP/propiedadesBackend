import mongoose from "mongoose";
const { model, Schema } = mongoose;
const TerrenoSchema = new Schema({
  _id: { type: String, _id: false },
  title: { type: String, required: true },
  ubication: { type: String, required: true },
  description: { type: String, required: true },
  url_img: [{ type: String, required: true }],
  type: { type: String, required: true },
  water: { type: String, required: true },
  light: { type: String, required: true },
  meters: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default model("terrenos", TerrenoSchema);
