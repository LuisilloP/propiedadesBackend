import propiedad from "#models/propiedad.js";
import terreno from "#models/terreno.js";
const propiedadTerrenoReadAllController = async (req, res) => {
  try {
    let result;
    const { _id, tipo } = req.body;
    if (!tipo) res.status(401).send({ errors: ["error"] });
    if (tipo === "propiedad") result = await propiedad.findById(_id).exec();
    if (tipo === "terreno") result = await terreno.findById(_id).exec();

    if (!result)
      return res.status(401).send({ errors: ["no existe propiedad"] });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
export default propiedadTerrenoReadAllController;
