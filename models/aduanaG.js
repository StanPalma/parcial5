
const { Schema, model } = require('mongoose');

const AduanaGSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El código es obligatorio'],
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El nombre del proyecto es obligatorio'],
    },
    monto: {
        type: Number,
        required: [true, 'El monto es obligatorio']
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria']
    }
});



AduanaGSchema.methods.toJSON = function() {
    const { __v, ...aduana  } = this.toObject();
    return aduana;
}

module.exports = model( 'AduanaG', AduanaGSchema );
