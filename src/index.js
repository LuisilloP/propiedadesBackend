//dependencias
import "#config/dotenv.js";
import httpServer from "#config/http.js";

//conecion bd
import dbConect from "./config/conect.js";
//inicializar
const PUERTO = process.env.PUERTO || 2000;
const IniciaApp = () => {
  try {
    httpServer.listen(PUERTO, async () => {
      await dbConect();
      console.log(`servidor escuchando en puerto ${PUERTO}`);
    });
  } catch (err) {
    console.log(err);
  }
};

IniciaApp();
