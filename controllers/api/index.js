const router = require('express').Router();
const queryRouter = require('./query-routes');
const userRouter = require('./user-routes');

router.use('/query', queryRouter);
router.use('/users', userRouter);
module.exports = router;