const indexpaciente = [
    {
        method  : "post",
        service : "createpaciente",
        path    : "createpaciente"
    },
    {
        method  : "get",
        service : "readpaciente",
        path    : "readpaciente"
    },
    {
        method  : "put",
        service : "updatepaciente",
        path    : "updatepaciente"
    },
    {
        method  : "delete",
        service : "deletepaciente",
        path    : "deletepaciente"
    }
]

module.exports = {indexer:indexpaciente, path:"paciente"}