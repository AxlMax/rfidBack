const indexhospital = [
    {
        method  : "post",
        service : "createhospital",
        path    : "createhospital"
    },
    {
        method  : "get",
        service : "readhospital",
        path    : "readhospital"
    },
    {
        method  : "put",
        service : "updatehospital",
        path    : "updatehospital"
    },
    {
        method  : "delete",
        service : "deletehospital",
        path    : "deletehospital"
    },
    {
        method  : "patch",
        service : "linkServicetoHospital",
        path    : "servicio/link"
    }, 
    {
        method  : "get",
        service : "getServiceByHospital",
        path    : "servicio/get"
    }
]

module.exports = {indexer:indexhospital, path:"hospital"}