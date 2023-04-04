var   services =  require('../services/paciente')
var   indexer = require('../indexers/paciente')
const middleware = require('../controller/login')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router