import path = require('path');

const fs = require('fs');
const swaggerJSDoc = require('swagger-jsdoc');

const home = path.join(__dirname, '../routes/index.js');
const user = path.join(__dirname, '../routes/user.js');

// const definitions = path.join(__dirname, '../swagger/definitions.yaml');
// swagger specifications
const swaggerDefinition = {
    info: {
        // API informations (required)
        title: 'Auth-User API',
        version: '1.0.0',
        description: 'Auth API' // Description (optional)
    },
    host: 'localhost:3000',
    basePath: '/auth' // Base path (optional)
};
// Options for the swagger docs
const options = {
    swaggerDefinition: swaggerDefinition,
    apis: [home, user]
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);
const swaggerSpecjson = JSON.stringify(swaggerSpec);

// writing produced swaggerSpecjson to a file to serve it to swagger-ui
fs.writeFile('./dist/swagger/swagger.json', swaggerSpecjson, 'utf8');
