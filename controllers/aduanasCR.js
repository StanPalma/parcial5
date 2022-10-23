const { response, request } = require("express");
// const sms = require("../database/sms");

const AduanaCR = require("../models/aduanaCR");
const alumno = "Bladimir Stanley Palma Portillo";

//TODO: ADUANA COSTARICA
const aduanaCRGet = async (req = request, res = response) => {
  const { limite = 20, desde = 0 } = req.query;

  // const [total, productos] = await Promise.all([
  //   Usuario.countDocuments(),
  //   Usuario.find().skip(Number(desde)).limit(Number(limite)),
  // ]);
  const aduanas = await Promise.all([AduanaCR.find()]);
  res.json({
    alumno,
    aduanas,
  });
};

const aduanaCRPost = async (req, res = response) => {
  const { codigo, nombreproyecto, paisqueejecuta, fechacierre } = req.body;
  const aduanas = new AduanaCR({
    codigo,
    nombreproyecto,
    paisqueejecuta,
    fechacierre,
  });

  // Guardar en BD
  await aduanas.save();

  res.json({
    alumno,
    aduanas,
  });
};

const aduanaCRPut = async (req, res = response) => {
  const { id } = req.params;
  const { nombreproyecto, ...resto } = req.body; // solo se coloca usuario antes de ...resto para que busque por el usuario

  const aduanas = await AduanaCR.findByIdAndUpdate(id, resto);

  res.json({ alumno, aduanas });
};

const aduanaCRPatch = (req, res = response) => {
  res.json({
    alumno,
    msg: "patch API - aduanaPatch",
  });
};

const aduanaCRDelete = async (req, res = response) => {
  const { id } = req.params;

  // Fisicamente lo borramos
  const aduana = await AduanaCR.findByIdAndDelete(id);

  // const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json({ alumno, aduana });
};
module.exports = {
  aduanaCRGet,
  aduanaCRPost,
  aduanaCRPut,
  aduanaCRPatch,
  aduanaCRDelete,
};
