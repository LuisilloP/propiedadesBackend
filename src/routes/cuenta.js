import express from "express";
import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";
import validateLoginDTO from "../validators/validateLoginDTO.js";
import { SignJWT, jwtVerify } from "jose";
const cuentaRuter = express.Router();

cuentaRuter.use(express.json());
cuentaRuter.post("/login", validateLoginDTO, (req, res) => {
  const { correo, pass } = req.body;
  Usuario.findOne({ correo: correo }, (err, user) => {
    if (err) res.send(401);
    if (user) {
      bcrypt.compare(pass, user.password, async (err, result) => {
        if (err) res.send(401);
        if (result) {
          const ide = user._id;
          const encoder = new TextEncoder();
          const contructorJwt = new SignJWT({ ide }); //TOKEN ID
          const jwt = await contructorJwt //GENERA TOKEN CON PROMESA
            .setProtectedHeader({ alg: "HS256", typ: "JWT" }) //CABECERA
            .setIssuedAt() //CREACION
            .setExpirationTime("1h") //TIEMPO DE EXPIRACION
            .sign(encoder.encode(process.env.LLAVE_JWT)); //LLAVE

          return res.send(jwt);
        } else res.send(401); //mensaje: "Contraseña invalida"
      });
    } else res.send(401); //mensaje: "No existe Usuario"
  });
});

cuentaRuter.get("/configpropiedad", async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401);
  try {
    const encoder = new TextEncoder();
    const dataJwt = await jwtVerify(
      authorization,
      encoder.encode(process.env.LLAVE_JWT)
    );
    console.log(dataJwt);

    return res.json({ message: "ok" });
  } catch (error) {}
});

cuentaRuter.post("/createuser", async (req, res) => {
  const { nombre, correo, password } = req.body; //toma los atributos de la peticion

  const registrado = await Usuario.findOne({ correo: correo }).exec();
  if (registrado)
    return res.status(409).send("usuario se encuentra registrado");
  bcrypt.hash(password, 10, (error, passwordHash) => {
    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      password: passwordHash,
    });
    //guarda el nuevo usuario con save y envia un mensaje exitoso
    nuevoUsuario
      .save()
      .then((usuario) => {
        res.json({ mensaje: "usuario creado exitantemente", usuario });
      })
      .catch((err) => console.error(err));
  });
});

export default cuentaRuter;
