const { route } = require('./api');

const router = require('express').Router();

router.get('/', (req, res) => {
    // if(req.session.loggedIn) {
    //     res.render('homepage');
    // } else {
        res.render('homepage');
    // }
});


module.exports = router;