const controllerUser = require('../controller/user')
const request = require('../utils/request/service')

const {controller} = require('../controller/basicOperations')

url = require("url")

const basicController = new controller("user")

const Cuser = (req, res, next) => {
    controllerUser.Cuser(req.body, res)
}

const Ruser = (req, res) => {
    controllerUser.Ruser(res)
}

const Uuser = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerUser.Uuser(query.id, req.body, res)
}

const Duser = (req, res) => {
    const query = url.parse(req.url, true).query
    controllerUser.Duser(query.id, res)
}

const findByUser = (req, res) => basicController.readBy(req, res)

const LinkHospitaltoUser = (req, res) => controllerUser.
                                            LinkHospitaltoUser(
                                                request.Query(req, "id"),
                                                request.Query(req, "idi"),
                                                res
                                            )

const GetHospitalByUser = (req, res) => controllerUser.
                                            GetHospitalByUser(
                                                request.Query(req, "id"),
                                                res
                                            )
/* {relacion rol}*/
const linkRoltoUser     = (req, res) => basicController.link(req, res, "rol")
const getRolByUser  = (req, res) => basicController.readLink(req, res, "rol")

module.exports = {
    Cuser, Ruser, Uuser, Duser, LinkHospitaltoUser, GetHospitalByUser,
    linkRoltoUser, getRolByUser, findByUser 
}
