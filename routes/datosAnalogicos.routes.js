const { Router } = require("express");

const router = Router();

const {
  obtenerLecturas,
  registrarLectura
} = require("../controllers/datosAnalogicos.controllers");

router.get("/", obtenerLecturas);

router.post("/", registrarLectura);

module.exports = router;