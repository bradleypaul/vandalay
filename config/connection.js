const Sequelize = require('sequelize');


// Connect to chinook.db
module.exports = new Sequelize('sqlite:chinnook.db');