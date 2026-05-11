const mqtt = require("mqtt");

const logger = require("../utils/logger");

const client = mqtt.connect({
  host: process.env.MQTT_HOST,
  port: process.env.MQTT_PORT,
  protocol: "mqtt"
});

client.on("connect", () => {

  logger.info("Conectado al broker MQTT");

  client.subscribe(process.env.MQTT_TOPIC, (err) => {

    if (err) {
      logger.error(err);
      return;
    }

    logger.info(`Suscrito a ${process.env.MQTT_TOPIC}`);

  });

});

client.on("message", (topic, message) => {

  try {

    const data = JSON.parse(message.toString());

    logger.info({
      topic,
      data
    });

  } catch (error) {

    logger.error("Error parseando JSON MQTT");

  }

});

module.exports = client;