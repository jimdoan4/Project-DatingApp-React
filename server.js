// require('rootpath')();
const express = require('express');
const logger = require('morgan');
const app = express();
const routes = require('./routes/index');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('_helpers/jwt');
// const errorHandler = require('_helpers/error-handler');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());
// // use JWT auth to secure the api
// app.use(jwt());
// // global error handler
// app.use(errorHandler);

app.use(express.static(__dirname + '/client/build'));

app.use('/api/', routes);

app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/client/build/index.html');
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log('App is up and running on port ' + PORT);
});
