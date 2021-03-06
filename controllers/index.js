const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.render('homepage', { loggedIn: true });
    } else {
       res.render('login'); 
    }
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('signup');
    }
})

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;