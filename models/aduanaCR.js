
const { Schema, model } = require('mongoose');

const AduanaCRSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El código es obligatorio'],
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El nombre del proyecto es obligatorio'],
    },
    paisqueejecuta: {
        type: Number,
        required: [true, 'El pais es obligatorio']
    },
    fechacierre: {
        type: String,
        required: [true, 'La fecha es obligatoria']
    }
});



AduanaCRSchema.methods.toJSON = function() {
    const { __v, ...aduana  } = this.toObject();
    return aduana;
}

module.exports = model( 'AduanaCR', AduanaCRSchema );
