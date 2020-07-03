const express = require('express');
const routes = require('./controllers');
const sequelize = require("./config/connection");

const exphbs = require('express-handlebars');
const session = require('express-session');
const hbs = exphbs.create({})

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'beans',
  cookie: { maxAge: 600000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;


app.use(session(sess));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
      console.log('Now listening!');
  });
});



// const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database('./chinook.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the chinook database');
// });

// db.serialize(() => {
//   db.each(`SELECT DISTINCT Name name FROM playlists
//     ORDER BY name`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log(row);
//   });
// });

// db.close((err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });