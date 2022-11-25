import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const propiedadesGetImagesController = async (req, res) => {
  const imageUrl = req.params.image;
  const pathImage = path.resolve(
    __dirname,
    `../../../database/images/${imageUrl}`
  );
  if (await fs.existsSync(pathImage)) {
    res.sendFile(pathImage);
  } else {
    res.sendFile(
      path.resolve(__dirname, `../../../database/images/noImage.png`)
    );
  }
};
export default propiedadesGetImagesController;
