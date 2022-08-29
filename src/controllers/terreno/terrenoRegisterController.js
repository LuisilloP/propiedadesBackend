import terreno from "#models/terreno.js";
import eliminateImg from "#utilidades/eliminateImg.js";
import combinaImg from "#utilidades/combinaImg.js";
const terrenoRegisterController = async (req, res) => {
  const {
    _id,
    titulo,
    ubicacion,
    descripcion,
    tipo,
    luz,
    agua,
    metros,
    precio,
  } = req.body;
  const registradoID = await terreno.findById(_id).exec();
  if (registradoID) {
    eliminateImg(req.files);
    return res
      .status(409)
      .send({ errors: ["Id se encuentra registrada eerr"] });
  }
  try {
    let metrosInt = parseInt(metros);
    let precioInt = parseInt(precio);
    const url_imagesArray = combinaImg(req.files);
    const nuevoTerreno = new terreno({
      _id,
      titulo,
      ubicacion,
      descripcion,
      url_img: url_imagesArray,
      tipo,
      luz,
      agua,
      metros: metrosInt,
      precio: precioInt,
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
