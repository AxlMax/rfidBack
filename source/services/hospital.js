const {controller} = require('../controller/basicOperations')

const basicController = new controller("hospital")
/* {CRUD} */

const createhospital = (req, res) => basicController.create(req,res)
const readhospital   = (req, res) => basicController.read(req, res)
const updatehospital = (req, res) => basicController.update(req, res)
const detelehospital = (req, res) => basicController.delete(req, res)

/* {relaciones servicio} */
const linkServicetoHospital = (req, res) => basicController.linkToArray(req, res, "servicios")             
const getServiceByHospital  = (req, res) => basicController.readLink(req, res, "servicios")                                         

module.exports = {
    createhospital, readhospital, 
    updatehospital, detelehospital,
    linkServicetoHospital, getServiceByHospital
}