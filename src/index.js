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
// app.use(cors());
// app.use(express.json());
// app.set("port", process.env.PUERTO || 2000);
// app.use("/cuenta", cuentaRuter);
// app.use("/propiedad", propiedadeRouter);
//inicia server

//pruebaBD

// app.listen(app.get("port"), () => {
//   console.log(`puerto en ${app.get("port")}`);
//   dbConect();
// });
