const formModel = require("../models/form");
const bcrypt = require("bcrypt");

const sendForm = async (req, res) => {
  const { nombre, correo, telefono, comentario } = req.body;

  if (!nombre || !correo || !telefono || !comentario)
    return res.status(400).json({ msg: "Todos los campos son obligatorios" });

  try {
    const email = await formModel.findOne({ where: { email: correo } });
    const salt = bcrypt.genSaltSync();

    if (!email) {
      const usuario = {
        name: nombre,
        email: correo,
        phone: telefono,
        comment: comentario,
      };
      await formModel.create(usuario);
      res.status(200).json({ msg: "Usuario registrado" });
    } else {
      res.status(400).json({ msg: "El correo ya esta registrado" });
    }
  } catch (error) {
    res.status(400).json({ msg: "Algo salió mal", error });
    console.log("error", { msg: error });
  }
};

module.exports = { sendForm };
