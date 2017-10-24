const app = require('fastify')();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(bodyParser.json());



app.use(errorHandler);


module.exports = app;