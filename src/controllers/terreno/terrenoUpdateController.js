import terreno from "#models/terreno.js";

const terrenoUpdateController = async (req, res) => {
  const {
    _id,
    titulo,
    ubicacion,
    descripcion,
    url_img,
    tipo,
    agua,
    luz,
    metros,
    precio,
  } = req.body;
  const registradoID = await terreno.findById(_id).exec();
  if (!registradoID) return res.status(409).send({ errors: ["no existe"] });
  registradoID.titulo = titulo;
  registradoID.ubicacion = ubicacion;
  registradoID.descripcion = descripcion;
  registradoID.url_img = url_img;
  registradoID.tipo = tipo;
  registradoID.agua = agua;
  registradoID.luz = luz;
  registradoID.metros = metros;
  registradoID.precio = precio;
  //guarda el nuevo usuario con save y envia un mensaje exitoso
  await registradoID.save();
  return res.send("terreno Actualizada");
};
export default terrenoUpdateController;
