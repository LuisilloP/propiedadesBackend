import propiedad from "#models/propiedad.js";
import terreno from "#models/terreno.js";
const propiedadDeleteController = async (req, res) => {
  const { _id, tipo } = req.body;
  let result;
  if (!tipo) res.status(401).send({ errors: ["error"] });
  if (tipo === "propiedad") result = await propiedad.findById(_id).exec();
  if (tipo === "terreno") result = await terreno.findById(_id).exec();
  if (!result) return res.status(401).send({ errors: ["no existe propiedad"] });
  await result.delete();
  return res.send(`${tipo} ha sido eliminado`);
};
export default propiedadDeleteController;
