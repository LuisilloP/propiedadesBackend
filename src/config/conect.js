import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const urlMongo = process.env.DB_URL;
const db = async () => {
  await mongoose
    .connect(urlMongo)
    .then(() => console.log("todo bien en BD"))
    .catch((error) => console.error(error));
};

export default db;
