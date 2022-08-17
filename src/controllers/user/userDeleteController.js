import { compare } from "bcrypt";
import usuario from "#models/usuario.js";

const userDeleteController = async (req, res) => {
  const { id } = req;
  const { password } = req.body;
  const existeUsuario = await usuario.findById(id).exec();
  if (!existeUsuario)
    return res.status(401).send({ errors: ["no existe usuario"] });
  const checkPassword = await compare(password, existeUsuario.password);
  if (!checkPassword)
    return res.status(401).send({ errors: ["credenciales incorrectas"] });
  await existeUsuario.delete();
  return res.send("usuarioEliminado");
};
export default userDeleteController;
