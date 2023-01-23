import propiedad from "#models/propiedad.js";
import eliminateImg from "#utilidades/eliminateImg.js";
import combinaImg from "#utilidades/combinaImg.js";
const propiedadUpdateController = async (req, res) => {
  const {
    _id,
    title,
    ubication,
    description,
    type,
    beedrooms,
    toilets,
    meters,
    price,
  } = req.body;
  const registradoID = await propiedad.findById(_id).exec();

  if (!registradoID) {
    eliminateImg(req.files);
    return res.status(409).send({ errors: ["no existe"] });
  }

  //guarda el nuevo usuario con save y envia un mensaje exitoso

  try {
    let metersInt = parseInt(meters);
    let priceInt = parseInt(price);
    let toiletsInt = parseInt(toilets);
    let beedroomsInt = parseInt(beedrooms);

    const url_imagesArray = combinaImg(req.files);
    eliminateImg(registradoID.url_img);
    registradoID.title = title;
    registradoID.ubication = ubication;
    registradoID.description = description;
    registradoID.url_img = url_imagesArray;
    registradoID.type = type;
    registradoID.beedrooms = beedroomsInt;
    registradoID.toilets = toiletsInt;
    registradoID.meters = metersInt;
    registradoID.price = priceInt;
    //guarda el nuevo usuario con save y envia un mensaje exitoso
    await registradoID.save();

    return res.send("propiedad Actualizada");
  } catch (err) {
    eliminateImg(req.files);
    return res.send({ errors: "envie datos correctamente" + err });
  }
};
export default propiedadUpdateController;
