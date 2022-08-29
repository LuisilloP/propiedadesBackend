import propiedad from "#models/propiedad.js";
import terreno from "#models/terreno.js";
const propiedadReadAllController = async (req, res) => {
  try {
    let result;
    const { tipo } = req.body;
    if (tipo === "propiedad") result = await propiedad.find({}).exec();
    if (tipo === "terreno") result = await terreno.find({}).exec();
    if (tipo === "terreno-propiedad") {
      const resultOne = await propiedad.find({}).exec();
      const resultTwo = await terreno.find({}).exec();
      result = resultOne.concat(resultTwo);
    }
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
export default propiedadReadAllController;
