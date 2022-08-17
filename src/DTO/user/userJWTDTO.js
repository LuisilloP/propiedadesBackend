import { jwtVerify } from "jose";

const userJWTDTO = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) res.status(401).send("usuario no autenticado");
  const jwt = authorization.split(" ")[1];
  if (!jwt) res.status(401).send("usuario no autenticado");
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
      jwt,
      encoder.encode(process.env.LLAVE_JWT)
    );
    req.id = payload.id;
    next();
  } catch (error) {
    return res.status(401).send("usuario no autorizado");
  }
};
export default userJWTDTO;
