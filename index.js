
require('dotenv').config();
const express = require('express');

const {PORT} = process.env;

const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// setting up routes
app.use('/',require('./routes'));

app.listen(PORT, () => {
    console.log(`Server is running or Port: ${PORT}`);
})