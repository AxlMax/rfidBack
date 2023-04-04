const {controller} = require('../controller/basicOperations')

const basicController = new controller("servicio")

/* {CRUD} */
const createservicio = (req, res) => basicController.create(req, res)
const readservicio   = (req, res) => basicController.read(req, res)
const updateservicio = (req, res) => basicController.update(req, res)
const deteleservicio = (req, res) => basicController.delete(req, res)

/* {relacion tag} */
const linkTagtoService =  (req, res) => basicController.linkToArray(req, res, "tags")
const getTagByService =   (req, res) => basicController.readLink(req, res, "tags")

module.exports = {
    createservicio, readservicio, 
    updateservicio, deteleservicio,
    linkTagtoService, getTagByService
}