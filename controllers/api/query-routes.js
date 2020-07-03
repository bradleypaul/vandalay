const router = require('express').Router();
const chinook = require('../../config/chinook');
const { Query } = require('../../models');

router.get('/', (req, res) => {
    Query.findAll()
        .then(dbMaintenanceData => {
            if (!dbMaintenanceData) {
                res.status(404).json({ message: 'Data not found' });
                return;
            }
            res.json(dbMaintenanceData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', async (req, res) => {
    console.log("hit")
    // do this with chinook
    try {
        console.log(chinook)

        // add query to db
        await Query.create({
            query: req.body.query,
            name: req.body.name,
            user_id: 1
        });

        res.send(req.body);
    }
    catch (err) {
       console.log(err);
    }
});

module.exports = router;