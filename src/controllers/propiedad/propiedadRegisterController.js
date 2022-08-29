import propiedad from "#models/propiedad.js";
import eliminateImg from "#utilidades/eliminateImg.js";
import combinaImg from "#utilidades/combinaImg.js";
const propiedadRegisterController = async (req, res) => {
  const {
    _id,
    titulo,
    ubicacion,
    descripcion,
    tipo,
    habitacion,
    banio,
    metros,
    precio,
  } = req.body;

  const registradoID = await propiedad.findById(_id).exec();
  if (registradoID) {
    eliminateImg(req.files);
    return res
      .status(409)
      .send({ errors: ["Id se encuentra registrada eerr"] });
  }
  try {
    let metrosInt = parseInt(metros);
    let precioInt = parseInt(precio);
    let banioInt = parseInt(banio);
    let habitacionInt = parseInt(habitacion);
    const url_imagesArray = combinaImg(req.files);

    const nuevaPropiedad = new propiedad({
      _id,
      titulo,
      ubicacion,
      descripcion,
      url_img: url_imagesArray,
      tipo,
      habitacion: habitacionInt,
      banio: banioInt,
      metros: metrosInt,
      precio: precioInt,
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
