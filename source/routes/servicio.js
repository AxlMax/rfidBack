var   services =  require('../services/servicio')
var   indexer = require('../indexers/servicio')
const middleware = require('../controller/login')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router