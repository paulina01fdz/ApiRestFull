const mongoose = require('../config/connection');

const schemaCliente = new mongoose.Schema({

    documento:{
        type: String,
        required: [true, 'El documento es obligatorio'],
        minLength: [7,'El documento no tiene el tamaño minimo'],
        maxlength: [10, 'El documento sobre pasa el maximo de caracteres']
    },

    nombreCompleto:{
        type: String,
        minLength: [3, 'El nombre debe contener como minimo 3 caracteres'],
        maxLength: [150, 'El nombre debe contener como maximo 150 caracteres'],
    },

    fechaNacimiento: {
        type: Date,
        max: Date.now
    }
});

const cliente = mongoose.model('Clientes', schemaCliente);

module.exports = cliente;
