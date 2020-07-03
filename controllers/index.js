const router = require('express').Router();
const apiRoutes = require('./api');
const webpage = require('./webpage');

router.use('/api', apiRoutes);
router.use('/', webpage);
module.exports = router;