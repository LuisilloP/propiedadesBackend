import terreno from "#models/terreno.js";
import eliminateImg from "#utilidades/eliminateImg.js";
import combinaImg from "#utilidades/combinaImg.js";
const terrenoRegisterController = async (req, res) => {
  const {
    _id,
    title,
    ubication,
    description,
    type,
    light,
    water,
    meters,
    price,
  } = req.body;
  const registradoID = await terreno.findById(_id).exec();
  if (registradoID) {
    eliminateImg(req.files);
    return res.status(409).send({ errors: ["Id se encuentra registrada"] });
  }
  try {
    let metrosInt = parseInt(meters);
    let precioInt = parseInt(price);
    const url_imagesArray = combinaImg(req.files);
    const nuevoTerreno = new terreno({
      _id,
      title,
      ubication,
      description,
      url_img: url_imagesArray,
      type,
      light,
      water,
      meters: metrosInt,
      price: precioInt,
    });
    //guarda el nuevo usuario con save y envia un mensaje exitoso
    await nuevoTerreno.save();
    return res.send("terreno creada correctamente");
  } catch (err) {
    eliminateImg(req.files);
    return res.send({ errors: "envie datos correctamente" + err });
  }
};
export default terrenoRegisterController;
