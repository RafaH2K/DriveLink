const Lectura = require("../models/lectura");

const obtenerLecturas = async (req, res) => {

  try {

    const lecturas = await Lectura.find()
      .sort({ timestamp: -1 });

    res.json({
      ok: true,
      total: lecturas.length,
      datos: lecturas
    });

  } catch (error) {

    res.status(500).json({
      ok: false,
      error: error.message
    });

  }

};

const registrarLectura = async (req, res) => {

  try {

    const nuevaLectura = new Lectura(req.body);

    await nuevaLectura.save();

    res.status(201).json({
      ok: true,
      mensaje: "Lectura guardada",
      data: nuevaLectura
    });

  } catch (error) {

    res.status(500).json({
      ok: false,
      error: error.message
    });

  }

};

module.exports = {
  obtenerLecturas,
  registrarLectura
};