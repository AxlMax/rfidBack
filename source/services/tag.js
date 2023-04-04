const {controller} = require('../controller/basicOperations')

const basicController = new controller("tag")

/* {CRUD} */
const createtag = (req, res) => basicController.create(req, res)
const readtag   = (req, res) => basicController.read(req, res)
const updatetag = (req, res) => basicController.update(req, res)
const deteletag = (req, res) => basicController.delete(req, res)

/* {relacion paciente}*/
const linkPacientetoTag = (req, res) => basicController.link(req, res, "paciente")
const getPacienteByTag  = (req, res) => basicController.readLink(req, res, "paciente")

module.exports = {
    createtag, readtag, 
    updatetag, deteletag,
    linkPacientetoTag, getPacienteByTag
}