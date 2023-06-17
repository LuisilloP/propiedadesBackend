import propiedad from "#models/propiedad.js";
import terreno from "#models/terreno.js";
const propiedadTerrenoReadAllController = async (req, res) => {
  try {
    let result;
    const { _id } = req.body;

    result = await propiedad.findById(_id).exec();
    if (!result)
      result = await terreno.findById(_id).exec();

    if (!result)
      return res.status(401).send({ errors: ["no existe propiedad"] });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
export default propiedadTerrenoReadAllController;
