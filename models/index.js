const User = require('./User');
const Query = require('./Query');

User.hasMany(Query, {
    foreignKey: 'user_id'
});

Query.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Query};