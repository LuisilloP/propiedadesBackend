import { jwtVerify } from "jose";

const userJWTDTO = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).send({ errors: ["usuario no autorizado"] });
  const jwt = authorization.split(" ")[1];
  if (!jwt) return res.status(401).send({ errors: ["usuario no autorizado"] });
  try {
    const encoder = new TextEncoder();
    const { payload } = await jwtVerify(
      jwt,
      encoder.encode(process.env.LLAVE_JWT)
    );
    req.id = payload.id;

    next();
  } catch (error) {
    return res.status(401).send({ errors: ["usuario no autorizado"] });
  }
};
export default userJWTDTO;
