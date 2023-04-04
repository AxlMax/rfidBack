const mongoose = require('mongoose');

const tagSchemma =  new mongoose.Schema({
    HEX : {
        type  : String
    },
    paciente : {
        type : mongoose.Types.ObjectId,
        ref  : "paciente"
    }
    
},{ versionKey: false });

module.exports = mongoose.model('tag', tagSchemma)