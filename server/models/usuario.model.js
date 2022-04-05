const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    tipo: {
        type: String,
        default: 'USER_ROLE'
    },
    sueldo: {
        type: Number,
        required: [true, 'El sueldo es necesario'],
    },
    estado: {
        type: Boolean,
        default: true
    },
    correo: {
        type: Schema.Types.ObjectId,
        ref: 'Correos'
    },
});

module.exports = mongoose.model('Usuario', usuarioSchema);