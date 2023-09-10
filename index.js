
// for environment variables
require('dotenv').config();

// connect to database
require('./config/mongoose').connect();

// import expressjs
const express = require('express');

// define the PORT from env variables
const {PORT} = process.env;

// create app
const app = express();

// for swagger api documentations
const swaggerUi = require('swagger-ui-express');
// import YAML for writing swagger docs
const YAML = require('yamljs')
// swagger file
const swaggerDocument = YAML.load('./swagger.yaml')


// middleware for reading json data
app.use(express.json());
// middleware for url data
app.use(express.urlencoded({
    extended:true
}));

// middleware to render the swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// setting up routes
app.use('/',require('./routes'));


// start server
app.listen(PORT, () => {
    console.log(`Server is running or Port: ${PORT}`);
})