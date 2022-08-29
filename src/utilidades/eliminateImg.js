import fs from "fs";

const eliminateImg = (filearray) => {
  filearray.forEach((file) => {
    fs.unlinkSync(`./src/database/images/${file.filename}`);
  });
};
export default eliminateImg;
