const auto      = require('../utils/auto/Querymongo')
const request   = require('../utils/request/service')

class controller {
    constructor(model){
        this.model =  model
        this.relations =  require(`../model-relations/${model}`)
    }

    create(req, res){
        const body = req.body

        return auto.create(this.model, body, res, this.model)
    }

    read(req, res){
        const id = request.Query(req, "id")

        return auto.find(this.model, id, res)
    }

    readBy(req, res){
        const object = req.body

        return auto.findBy(this.model, object, res)
    }

    update(req, res){
        const body = req.body
        const id = request.Query(req, "id")

        return auto.Update(this.model, body, id, res, `${this.model} actualizado`)
    }

    delete(req, res){
        const id = request.Query(req, "id")
        
        return auto.Delete(this.model, id, res)
    }

    link(req, res, space){
        const id = request.Query(req, "id")
        const idi = request.Query(req, "idi")

        return auto.Link(this.model, id, idi, space, res)
    }

    linkToArray(req, res, space){
        const id = request.Query(req, "id")
        const idi = request.Query(req, "idi")

        return auto.LinkA(this.model, id, idi, space, res)

    }

    readLink(req, res , key){
        const id = request.Query(req, "id")

        return auto.Rlink(this.model, id, key, res)
    }
}

module.exports = {
    controller
}
