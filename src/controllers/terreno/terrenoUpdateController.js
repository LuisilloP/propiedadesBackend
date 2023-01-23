import terreno from "#models/terreno.js";
import eliminateImg from "#utilidades/eliminateImg.js";
import combinaImg from "#utilidades/combinaImg.js";
const terrenoUpdateController = async (req, res) => {
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
  if (!registradoID) {
    eliminateImg(req.files);
    return res.status(409).send({ errors: ["no existe"] });
  }
  try {
    let metersInt = parseInt(meters);
    let priceInt = parseInt(price);
    const url_imagesArray = combinaImg(req.files);
    eliminateImg(registradoID.url_img);
    registradoID.title = title;
    registradoID.ubication = ubication;
    registradoID.description = description;
    registradoID.url_img = url_imagesArray;
    registradoID.type = type;
    registradoID.water = water;
    registradoID.light = light;
    registradoID.meters = metersInt;
    registradoID.price = priceInt;
    //guarda el nuevo usuario con save y envia un mensaje exitoso
    await registradoID.save();
    return res.send("terreno Actualizada");
  } catch {
    eliminateImg(req.files);
    return res.send({ errors: "envie datos correctamente" + err });
  }
};
export default terrenoUpdateController;
