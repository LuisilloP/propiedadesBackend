import fs from "fs";

const eliminateImg = (filearray) => {
  if (filearray == undefined) {
    console.log("no se enviaron imagenes");
    return "";
  }
  filearray.forEach((file) => {
    fs.unlinkSync(`./database/images/${file.filename}`);
  });
};
export default eliminateImg;
