const {controller} = require('../controller/basicOperations')

const basicController = new controller("rol")

/* {CRUD} */
const createrol = (req, res) => basicController.create(req, res)
const readrol   = (req, res) => basicController.read(req, res)
const updaterol = (req, res) => basicController.update(req, res)
const detelerol = (req, res) => basicController.delete(req, res)
const readByrol = (req, res) => basicController.readBy(req, res)

module.exports = {
    createrol, readrol, updaterol, detelerol, readByrol
}