const indextag = [
    {
        method  : "post",
        service : "createtag",
        path    : "createtag"
    },
    {
        method  : "get",
        service : "readtag",
        path    : "readtag"
    },
    {
        method  : "put",
        service : "updatetag",
        path    : "updatetag"
    },
    {
        method  : "delete",
        service : "deletetag",
        path    : "deletetag"
    },
    {
        method  : "patch",
        service : "linkPacientetoTag",
        path    : "paciente/link"
    },
    {
        method  : "get",
        service : "getPacienteByTag",
        path    : "paciente/get"
    }
]

module.exports = {indexer:indextag, path:"tag"}