const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const datosAnalogicosRoutes = require("../routes/datosAnalogicos.routes");

const app = express();

// framework de seguridad
app.use(helmet());

app.use(cors());

app.use(express.json());

// rutas
app.use("/api/datos", datosAnalogicosRoutes);

// ruta principal
app.get("/", (req, res) => {
  res.json({
    proyecto: "OBD VANET",
    estado: "Activo"
  });
});

module.exports = app;