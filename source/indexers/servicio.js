const indexerservicio = [
    {
        method  : "post",
        service : "createservicio",
        path    : "createservicio"
    },
    {
        method  : "get",
        service : "readservicio",
        path    : "readservicio"
    },
    {
        method  : "put",
        service : "updateservicio",
        path    : "updateservicio"
    },
    {
        method  : "delete",
        service : "deleteservicio",
        path    : "deleteservicio"
    },
    ,
    {
        method  : "patch",
        service : "linkTagtoService",
        path    : "tag/link"
    },
    ,
    {
        method  : "get",
        service : "getTagByService",
        path    : "tag/get"
    }
]

module.exports = {indexer:indexerservicio, path:"servicio"}