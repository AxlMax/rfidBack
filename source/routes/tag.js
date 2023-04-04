var   services =  require('../services/tag')
var   indexer = require('../indexers/tag')
const middleware = require('../controller/login')
const autoRouter = require('../utils/autoRouter/autoRouter')

router = autoRouter(indexer, services, middleware)

module.exports = router