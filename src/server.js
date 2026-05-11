require("dotenv").config({
  path: "./src/credentials.env"
});

const app = require("./app");

const logger = require("../utils/logger");

const connectDB = require("../config/database");

// MQTT
require("../services/mqtt.service");

// Conectar MongoDB
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  logger.info(`Servidor iniciado en puerto ${PORT}`);

});