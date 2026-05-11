const mongoose = require("mongoose");

const logger = require("../utils/logger");

const connectDB = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    logger.info("MongoDB conectado");

  } catch (error) {

    logger.error(error);

    process.exit(1);

  }

};

module.exports = connectDB;