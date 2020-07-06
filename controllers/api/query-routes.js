const router = require('express').Router();
const chinook = require('../../config/chinook');
const { Query } = require('../../models');

router.get('/', (req, res) => {
	console.log('got')
	Query.findAll({
		where: {
			user_id: req.session.user_id
		}
	})
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

		// add query to db
		await Query.create({
			query: req.body.query,
			name: req.body.name,
			user_id: req.session.user_id
		});

		res.send(req.body);
	}
	catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;