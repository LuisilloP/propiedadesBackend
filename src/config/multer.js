import multer from "multer";
const storage = multer.diskStorage({
  filename: function (res, file, cb) {
    const extencion = file.originalname.split(".").pop(); //obtine el ultimo tipo de formato
    const filename = Date.now();

    cb(null, `${filename}.${extencion}`);
  },
  destination: function (req, res, cb) {
    cb(null, "./src/database/images");
  },
});
export default storage;
