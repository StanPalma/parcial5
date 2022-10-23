const AduanaG = require("../models/aduanaG");
const AduanaCR = require("../models/aduanaCR");

//TODO: ADUANA G
const codigoExiste = async (codigo = "") => {
  // Verificar si codigo existe
  const codigoExiste = await AduanaG.findOne({ codigo });
  if (codigoExiste) {
    throw new Error(`El código ${codigo}, ya está registrado`);
  }
};

const existeAduanaPorId = async (id) => {
  // Verificar si id aduana existe
  const existeAduanaPorId = await AduanaG.findById(id);
  if (!existeAduanaPorId) {
    throw new Error(`El id no existe ${id}`);
  }
};

//TODO: ADUANA CR
const codigoCRExiste = async (codigo = "") => {
  // Verificar si codigo existe
  const codigoCRExiste = await AduanaCR.findOne({ codigo });
  if (codigoCRExiste) {
    throw new Error(`El código ${codigo}, ya está registrado`);
  }
};

const existeCRAduanaPorId = async (id) => {
  // Verificar si id aduana existe
  const existeCRAduanaPorId = await AduanaCR.findById(id);
  if (!existeCRAduanaPorId) {
    throw new Error(`El id no existe ${id}`);
  }
};

module.exports = {
  codigoExiste,
  existeAduanaPorId,
  codigoCRExiste,
  existeCRAduanaPorId,
};
