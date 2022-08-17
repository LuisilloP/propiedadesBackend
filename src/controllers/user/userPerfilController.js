import usuario from "#models/usuario.js";

const userPerfilController = async (req, res) => {
  const { id } = req;
  const ExisteID = await usuario.findById(id).exec();
  if (!ExisteID) res.status(401).send("credenciales incorrectas");
  const { _id, nombre, correo } = ExisteID;
  return res.send({ _id, nombre, correo });
};

export default userPerfilController;
