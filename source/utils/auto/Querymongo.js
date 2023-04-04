const mongoose = require('mongoose')
const colors = require("colors")
const Error = require('../error/errorHandler')
const models = require('../../models/index')

const ERRORMSG = "error CONTROLADOR"

colors.enable()
/**
 * 
 * @param {string} model modelo con el que se crea el registro
 * @param {object} body informacion que se ingresa
 * @param {string} res respuesta
 * @param {string} logInfo informacion de mas para el log
 */

const create = (model, body, res, logInfo) => {

    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[QUERY] Create ${model}`))
    }

    const document = new models[model](body)
    Error.errorSaving(document, res)

}
/**
 * 
 * @param {string} model modelo con que se busca el registro
 * @param {string} id id con el que se registro en la db 
 * @param {*} res respuesta
 */
const find = (model, id, res) => {

    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[QUERY] Find ${model}`))
    }

    models[model].findById(id,(err, doc) => {Error.errorHandler(err, res, ERRORMSG, doc)})
}

/**
 * 
 * @param {string} model nombre del modelo a buscar
 * @param {object} object el objecto a buscar ejemplo {"nombre":"diego"}
 * @param {*} res respuesta
 * 
 */
const findBy = (model, object, res) => {

    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[QUERY] FindBy ${JSON.stringify(object)} ${model}`))
    }

    models[model].find(object, (err, doc) => {Error.errorHandler(err, res, ERRORMSG, doc)})
}

/**
 * @param {string} model modelo con que se busca el registro
 * @param {string} id id con el que se registro en la db 
 * @param {*} res respuesta
 * @param {object} body informacion que se ingresa
 * @param {*} msg mensaje de actuliazacion en la respuesta
 */

const Update = (model, body, id, res , msg) => {
    
    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[QUERY] update ${model}`))
    }
    
    models[model].findByIdAndUpdate(id, {$set : body}, (error, doc) => {
        
        if(res){
            Error.errorHandler(error, res, ERRORMSG, msg)
        }
        if(doc ==  null){
            res.status(400).send("No found id")
        }
    })
}
/**
 * 
 * @param {*} model es el modelo que realizara las operaciones a la base de datos
 * @param {string} id es el id del registro dentro de la base de datos    
 */

const Delete = (model, id, res) => {

    if(typeof(model) == 'string'){

        if(process.env.LOG == 'true'){
            console.log(colors.yellow(`[QUERY] Delete ${model}`))
        }

        models[model].findByIdAndDelete(id, (err, doc) => Error.errorHandler(err, res, ERRORMSG, "delete ok"))
    }else{

        const {modelR, modelO} = model

        if(process.env.LOG == 'true'){
            console.log(colors.yellow(`[QUERY] Delete ${modelR}`))
        }

        modelO.forEach(modeli => {
            const filter = {}
            filter[modeli.key] = id

            models[modeli.model].find(filter, (err, doc) => {
                
                doc.forEach(doci => {
                    const body = {}

                    if(Array.isArray(doci?.[modeli.key]) ==  true){
                        const filterArray = doci?.[modeli.key].filter(ids => ids != id)
                        body[modeli.key] = filterArray
                    }else{
                        body[modeli.key] = null
                    }

                    Update(modeli.model, body, doci["_id"])
                })
            })
        });

        models[modelR].findByIdAndDelete(id, (err, doc) => Error.errorHandler(err, res, ERRORMSG, "delete ok"))
    }
}

/**
 * @param {string} model modelo con que se busca el registro
 * @param {string} id  id con el que se registro en la db 
 * @param {string} idi id a ser ingresado en la relacion
 * @param {string} space nombre del espacio en base de datos donde se ingresara el id 
 * @param {*} res respuesta
 * @description funcion para ingresar id dentro de un documento
 */

const Link = (model, id, idi, space ,res) => {

    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[QUERY] Link ${model}`))
    }

    let body = {}
    body[space] = mongoose.Types.ObjectId(idi)
    
    models[model].findByIdAndUpdate(id, {$set : body}, (error, doc) => {
        if(res){
            Error.errorHandler(error, res, ERRORMSG, "LINK OK")
        }

        if(doc ==  null){
            res.status(400).send("No found id")
        }
    })
}


/**
 * @param {string} model modelo con que se busca el registro
 * @param {string} id  id con el que se registro en la db 
 * @param {string} idi id a ser ingresado en la relacion
 * @param {string} space nombre del espacio en base de datos donde se ingresara el id 
 * @param {*} res respuesta
 * @description funcion para ingresar id a un array de ids dentro de un documento
 */

const LinkA = (model, id, idi, space ,res) => {

    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[QUERY] LinkA ${model}`))
    }

    let body = {}
    body[space] = mongoose.Types.ObjectId(idi)

    if(id != null && idi != null){
        models[model].findByIdAndUpdate(id, {$addToSet : body}, (error, doc) => {
            if(res){
                Error.errorHandler(error, res, ERRORMSG, "LINK OK")
            }
    
            if(doc ==  null){
                res.status(400).send("No found id")
            }
        })
    }else{
        res.status(400).send("id o idi no presentados")
    }
}

/**
 * esta funcion es para obtener la informacion que se encuentre linkiada a un registro
 * 
 * @param  id   este es el id que se va ha consultar
 * @param  model este es el modelo que se utiliza para buscar la id
 * @param  key   la llave del array de ids
 * @param  res    response
 */

const Rlink = (model,id, key, res) => {

    if(process.env.LOG == 'true'){
        console.log(colors.yellow(`[QUERY] Rlink ${model}`))
    }

    if(id != null) {
        models[model].findById(id).
        populate(key).
        exec(function(err, doc){
    
            if(doc !== null){
                if(doc[key] !== null){
                    res.status(200).send(doc[key])
                }else{
                    res.status(500).send("no tiene registro")
                }
            }else{
                res.status(400).send("documento no encontrado")
            }
        })
    }else{
        res.status(400).send("id no presentado")
    }
}

module.exports = {create, find, findBy, Update, Delete, Link, LinkA, Rlink}