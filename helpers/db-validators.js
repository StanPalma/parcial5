const AduanaG = require('../models/aduanaG');

/* const emailExiste = async( correo = '' ) => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
} */

const codigoExiste = async( codigo = '' ) => {

    // Verificar si el correo existe
    const codigoExiste = await AduanaG.findOne({codigo});
    if ( codigoExiste ) {
        throw new Error(`El código ${ codigo }, ya está registrado`);
    }
}

module.exports = {
    // emailExiste,
    codigoExiste
}

