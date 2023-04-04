const { date, string } = require('joi');
const mongoose = require('mongoose');

const pacienteSchemma =  new mongoose.Schema({
    name : {
        type  : String,
    },
    age : {
        type : Number
    },
    CC : {
        type : Number,
        unique : true
    },
    dateOfEntry : {
        type : String
    },
    reasonForIncome : {
        type : String
    },
    s3ImageUrl : {
        type : String
    }
},{ versionKey: false });

module.exports = mongoose.model('paciente', pacienteSchemma)