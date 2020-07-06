const router = require('express').Router();
const userRoutes = require('./user-routes');
const queryRoutes = require('./query-routes');

router.use('/users', userRoutes);
router.use('/query', queryRoutes);

module.exports = router;