const User = require('./User');
const Query = require('./Query');


// set up relationships
User.hasMany(Query, {
    foreignKey: 'user_id'
});

Query.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Query };