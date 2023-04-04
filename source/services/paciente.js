const {controller} = require('../controller/basicOperations')

const basicController = new controller("paciente")

const createpaciente = (req, res) => basicController.create(req, res)
const readpaciente   = (req, res) => basicController.read(req, res)
const updatepaciente = (req, res) => basicController.update(req, res)
const detelepaciente = (req, res) => basicController.delete(req, res)

module.exports = {
    createpaciente, readpaciente, 
    updatepaciente, detelepaciente
}