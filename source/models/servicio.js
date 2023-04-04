const mongoose = require('mongoose');

const servicioSchemma =  new mongoose.Schema({
    name : {
        type  : String,
    },
    tags : {
        type : [{
            type : mongoose.Types.ObjectId,
            ref  : "tag"
            }],
        default : mongoose.Types.ObjectId()
    }
},{ versionKey: false });

servicioSchemma.pre('save',function(next){
    const servicio = this
    
    servicio.layout = "/home"
    servicio.icon = "ni ni-tablet-button"

    return next()
})


module.exports = mongoose.model('servicio', servicioSchemma)