const app = require('fastify')();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

const pokemons = require('./routes/pokemons');

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/api/pokemons', pokemons);




app.use(errorHandler);


module.exports = app;