const sqlite3 = require('sqlite3');

const chinook =  new sqlite3.Database('chinook.db', (err) => {
    if(err) {
        console.log(err)
    }
    console.log('connected')
});

module.exports = chinook;