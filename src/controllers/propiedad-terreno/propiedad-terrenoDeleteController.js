import propiedad from "#models/propiedad.js";
import terreno from "#models/terreno.js";
import eliminateImg from "#utilidades/eliminateImg.js";
const propiedadDeleteController = async (req, res) => {
  const { _id, type } = req.body;
  console.log(_id + "    " + type);
  let result;
  if (!type) res.status(401).send({ errors: ["error"] });
  if (type === "casa") result = await propiedad.findById(_id).exec();
  if (type === "terreno") result = await terreno.findById(_id).exec();
  if (!result) return res.status(401).send({ errors: ["no existe propiedad"] });
  eliminateImg(result.url_img);
  await result.delete();
  return res.send(`${type} ha sido eliminado`);
};
export default propiedadDeleteController;
