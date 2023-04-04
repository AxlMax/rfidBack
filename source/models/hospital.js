const mongoose = require('mongoose');

const hospitalSchemma =  new mongoose.Schema({
    name : {
        type  : String,
    },
    nickname :{
        type : String,
    },
    servicios : {
        type : [{
            type : mongoose.Types.ObjectId,
            ref  : "servicio"
            }]
    }
},{ versionKey: false });

module.exports = mongoose.model('hospital', hospitalSchemma)