const router = require('express').Router();
const queryRouter = require('./query-routes');

router.use('/query', queryRouter);

module.exports = router;