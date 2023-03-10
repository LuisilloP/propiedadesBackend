import propiedad from "#models/propiedad.js";
import eliminateImg from "#utilidades/eliminateImg.js";
import combinaImg from "#utilidades/combinaImg.js";
const propiedadRegisterController = async (req, res) => {
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
  if (registradoID) {
    eliminateImg(req.files);
    return res.status(409).send({ errors: ["Id se encuentra registrada"] });
  }
  try {
    let metersInt = parseInt(meters);
    let priceInt = parseInt(price);
    let toiletsInt = parseInt(toilets);
    let beedroomsInt = parseInt(beedrooms);
    const url_imagesArray = combinaImg(req.files);

    const nuevaPropiedad = new propiedad({
      _id,
      title,
      ubication,
      description,
      url_img: url_imagesArray,
      type,
      beedrooms: beedroomsInt,
      toilets: toiletsInt,
      meters: metersInt,
      price: priceInt,
    });
    //guarda el nuevo usuario con save y envia un mensaje exitoso
    await nuevaPropiedad.save();
    return res.send("propiedad creada correctamente");
  } catch (err) {
    eliminateImg(req.files);
    return res.send({ errors: "envie datos correctamente" + err });
  }
};
export default propiedadRegisterController;
