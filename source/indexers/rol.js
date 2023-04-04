const indexerrol = [
    {
        method  : "post",
        service : "createrol",
        path    : "createrol"
    },
    {
        method  : "get",
        service : "readrol",
        path    : "readrol"
    },
    {
        method : "post",
        service : "readByrol",
        path    : "readByrol"
    },
    {
        method  : "put",
        service : "updaterol",
        path    : "updaterol"
    },
    {
        method  : "delete",
        service : "deleterol",
        path    : "deleterol"
    }
]

module.exports = {indexer:indexerrol, path:"rol"}