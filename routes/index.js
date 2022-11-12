const express = require("express");
const router = express.Router();

const indexController = require("../controllers/index");

router.get("/", indexController.index);

router.get("/Productos", indexController.listaDeProductos);

router.post("/nuevo-producto", indexController.nuevoProducto);

module.exports = router;
