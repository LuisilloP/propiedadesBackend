import Usuario from "#models/usuario.js";
import { compare } from "bcrypt";
import { SignJWT } from "jose";
const userLoginController = async (req, res) => {
  const { mail, password } = req.body;
  const correoExiste = await Usuario.findOne({ mail }).exec();
  if (!correoExiste) return res.status(401).send({ errors: ["Incorrecto"] });
  const checkPassword = await compare(password, correoExiste.password);
  if (!checkPassword) return res.status(401).send({ errors: ["Incorrecto"] });

  const encoder = new TextEncoder();
  const JWTContructor = new SignJWT({ id: correoExiste._id });
  const jwt = await JWTContructor.setProtectedHeader({
    alg: "HS256",
    typ: "JWT",
  })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encoder.encode(process.env.LLAVE_JWT));
  return res.send({ jwt });
};
export default userLoginController;
