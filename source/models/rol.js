const mongoose = require('mongoose');

const rolSchemma =  new mongoose.Schema({
    name : {
        type  : String,
    },
    actionList : {
        type :[{
            type: String
        }]
    }
},{ versionKey: false });

module.exports = mongoose.model("rol", rolSchemma)