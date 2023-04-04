const mongoose = require('mongoose')
const colors = require("colors")
const Error = require('../error/errorHandler')
const models = require('../../models/index')


/**
 * 
 * @param {string} model nombre del modelo a buscar
 * @param {object} object el objecto a buscar ejemplo {"nombre":"diego"}
 * 
 */
const findBy = (model, object) => {

    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[WEBSOCKETQUERY] Find ${model}`))
    }

    return models[model].find(object)
}

/**
 * 
 * @param {string} model nombre del modelo 
 * @param {string} space nombre del espacio en base de datos
 * @param {string} id    id del regsitro que se quiere cambiar
 * @param {string} idi   id que se eliminara del registro
 */

const deleteLinkA = (model,space,id, idi) => {
    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[WEBSOCKETQUERY] deleteLinkA ${model}`))
    }

    const update = {}
    update["$pull"] = {}
    update["$pull"][`${space}`] = {"$in":idi}

    models[model].findByIdAndUpdate(id, update, (error, doc) => {
       
    })
}

/**
 * 
 * @param {string} model 
 * @param {string} space 
 * @param {string} id 
 * @param {string} idi 
 */
const linkA = (model, space, id, idi) => {
    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[WEBSOCKETQUERY] LinkA ${model}`))
    }

    let body = {}
    body[space] = mongoose.Types.ObjectId(idi)

    if(id != null && idi != null){
        models[model].findByIdAndUpdate(id, {$addToSet : body},(error, doc) => {
        })
    }
}

module.exports  = {findBy, deleteLinkA, linkA}