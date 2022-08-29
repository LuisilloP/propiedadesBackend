import bcrypt from "bcrypt";
import Usuario from "#models/usuario.js";
const userRegisterController = async (req, res) => {
  const { _id, nombre, correo, password } = req.body; //toma los atributos de la peticion

  const registradoID = await Usuario.findById(_id).exec();
  if (registradoID)
    return res
      .status(409)
      .send({ errors: ["usuario ya se encuentra registrado"] });
  const registradoCorreo = await Usuario.findOne({ correo: correo }).exec();
  if (registradoCorreo)
    return res
      .status(409)
      .send({ errors: ["correo ya se encuentra registrado"] });

  const passwordHash = await bcrypt.hash(
    password,
    parseInt(process.env.SALTOS_HASH)
  );
  const nuevoUsuario = new Usuario({
    _id,
    nombre,
    correo,
    password: passwordHash,
  });
  //guarda el nuevo usuario con save y envia un mensaje exitoso
  await nuevoUsuario.save();
  return res.send("usuario creado correctamente");
};
export default userRegisterController;
