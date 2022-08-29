import propiedad from "#models/propiedad.js";

const propiedadUpdateController = async (req, res) => {
  const {
    _id,
    titulo,
    ubicacion,
    descripcion,
    url_img,
    tipo,
    habitacion,
    banio,
    metros,
    precio,
  } = req.body;
  const registradoID = await propiedad.findById(_id).exec();
  if (!registradoID) return res.status(409).send({ errors: ["no existe"] });
  registradoID.titulo = titulo;
  registradoID.ubicacion = ubicacion;
  registradoID.descripcion = descripcion;
  registradoID.url_img = url_img;
  registradoID.tipo = tipo;
  registradoID.habitacion = habitacion;
  registradoID.banio = banio;
  registradoID.metros = metros;
  registradoID.precio = precio;
  //guarda el nuevo usuario con save y envia un mensaje exitoso
  await registradoID.save();
  return res.send("propiedad Actualizada");
};
export default propiedadUpdateController;
