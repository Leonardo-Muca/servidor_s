const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let correosSchema = new Schema({
    email:{
        type:String,
        required: [true,'El correo es necesario'],
        unique: true
    }
});

module.exports = mongoose.model('Correos',correosSchema);