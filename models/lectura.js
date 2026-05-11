const mongoose = require("mongoose");

const lecturaSchema = new mongoose.Schema({

  vehiculoId: {
    type: String,
    required: true
  },

  velocidad: {
    type: Number,
    required: true
  },

  rpm: {
    type: Number,
    required: true
  },

  temperatura: {
    type: Number,
    required: true
  },

  voltaje: {
    type: Number,
    required: true
  },

  timestamp: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Lectura", lecturaSchema);