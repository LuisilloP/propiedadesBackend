const eliminateImg = (filearray) => {
  let arr_img = [];
  for (const file of filearray) {
    arr_img.push(file.filename);
  }
  return arr_img;
};
export default eliminateImg;
