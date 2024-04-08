
const express = require('express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const gameRouter = require('./routes/gameRouter')
const app = express();
const bodyParser = require('body-parser')

// Middleware for parsing JSON
const jsonParser = bodyParser.json()

const port = 3001
const cors = require('cors')

app.use(jsonParser);
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Set up CORS
app.use(cors())

// Use the indexRouter for the root route
app.use('/', indexRouter);
// Use the usersRouter for the '/users' route
app.use('/users', usersRouter);
// Use the gameRouter for the '/game' route
app.use('/game', gameRouter);
// Start the server
app.listen(port, () => console.log('Example app is listening on port ' + port +'.' ));

/**
 * Express application for handling routes and middleware.
 * @module app
 */