import express from "express";
import Propiedad from "../models/propiedad.js";

const propiedadRouter = express.Router();

propiedadRouter.use(express.json());

propiedadRouter.get("/", (req, res) => {
  console.log(Propiedad.find({}));
  res.json("ola");
});

propiedadRouter.post("/", (req, res) => {
  const { id, titulo, direccion, urlimg, habitacion, banio, metros, precio } =
    req.body;
  const nuevaPropiedad = new Propiedad({
    id,
    titulo,
    direccion,
    urlimg,
    habitacion,
    banio,
    metros,
    precio,
  });
  nuevaPropiedad
    .save()
    .then((propiedad) => {
      res.json({ mensaje: "propiedad creada exitantemente", propiedad });
    })
    .catch((err) => console.log(err));
});

export default propiedadRouter;
