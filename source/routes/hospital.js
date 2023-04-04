var   services =  require('../services/hospital')
var   indexer = require('../indexers/hospital')
const middleware = require('../controller/login')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router