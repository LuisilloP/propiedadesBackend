import fs from "fs";

const eliminateImg = (filearray) => {
  if (filearray == undefined) {
    console.log("no se enviaron imagenes");
  }
  filearray.forEach((file) => {
    fs.unlinkSync(
      `./database/images/${file.filename == undefined ? file : file.filename}`
    );
  });
};

export default eliminateImg;
