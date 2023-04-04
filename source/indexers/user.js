indexUser = [
    {
        method  : "post",
        service : "Cuser",
        path    : ""
    },
    {
        method  : "get",
        service : "Ruser",
        path    : ""
    },
    {
        method  : "put",
        service : "Uuser",
        path    : ""
    },
    {
        method  : "delete",
        service : "Duser",
        path    : ""
    },
    {
        method  : "post",
        service : "findByUser",
        path    : "readBy"
    },
    {
        method  : "patch",
        service : "LinkHospitaltoUser",
        path    : "hospital/link"
    },
    {
        method  : "get",
        service : "GetHospitalByUser",
        path    : "hospital/get"
    },
    {
        method  : "patch",
        service : "linkRoltoUser",
        path    : "rol/link"
    },
    {
        method  : "get",
        service : "getRolByUser",
        path    : "rol/get"
    }
]

module.exports = {indexer:indexUser, path:"user"}