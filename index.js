'use strict';

const fs = require('fs'),
    path = require('path'),
    http = require('http');

require('dotenv').config()
const app = require('express')();
const oas3Tools = require('oas3-tools');
const jsyaml = require('js-yaml');
const morgan = require('morgan');
const serverPort = process.env.HOST_PORT || 8090;

// swaggerRouter configuration
let options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// use combined preset, see https://github.com/expressjs/morgan#combined
app.use(morgan('combined'));

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
let spec = fs.readFileSync(path.join(__dirname,'api/swagger.yaml'), 'utf8');
let swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
oas3Tools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log(`Your server is listening on port ${serverPort} (http://localhost:${serverPort})`);
    console.log(`Swagger-ui is available on http://localhost:${serverPort}/docs`);
  });

});
