const { response, request } = require("express");
// const sms = require("../database/sms");

const AduanaG = require("../models/aduanaG");
const AduanaCR = require("../models/aduanaCR");
const alumno = "Bladimir Stanley Palma Portillo";

//TODO: ADUANGA GUATEMALA
const aduanaGGet = async (req = request, res = response) => {
  const { limite = 20, desde = 0 } = req.query;

  // const [total, productos] = await Promise.all([
  //   Usuario.countDocuments(),
  //   Usuario.find().skip(Number(desde)).limit(Number(limite)),
  // ]);
  const aduanas = await Promise.all([AduanaG.find()]);
  const alumno = "Bladimir Stanley Palma Portillo";
  res.json({
    alumno,
    aduanas,
  });
};

const aduanaGPost = async (req, res = response) => {
  let fecha = new Date();
  const { codigo, nombreproyecto, monto } = req.body;
  const aduanas = new AduanaG({ codigo, nombreproyecto, monto, fecha });

  // Guardar en BD
  await aduanas.save();
  // sms.sendSMS(productos.usuario); // Envia el mensaje que se registró

  res.json({
    alumno,
    aduanas,
  });
};

const aduanaGPut = async (req, res = response) => {
  const { id } = req.params;
  const { nombreproyecto, ...resto } = req.body; // solo se coloca usuario antes de ...resto para que busque por el usuario

  const aduanas = await AduanaG.findByIdAndUpdate(id, resto);

  res.json(alumno, aduanas);
};

const aduanaGPatch = (req, res = response) => {
  res.json({
    alumno,
    msg: "patch API - aduanaPatch",
  });
};

const aduanaGDelete = async (req, res = response) => {
  const { id } = req.params;

  // Fisicamente lo borramos
  const aduana = await AduanaG.findByIdAndDelete(id);

  // const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json(alumno, aduana);
};

module.exports = {
  aduanaGGet,
  aduanaGPost,
  aduanaGPut,
  aduanaGPatch,
  aduanaGDelete,
};
