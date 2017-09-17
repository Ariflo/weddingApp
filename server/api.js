// require all necessary modules
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const pg = require('pg');

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, (err, client) => {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', (row) => {
      console.log(JSON.stringify(row));
    });
});

// load dotenv
require('dotenv').load();

//create app instance
const server = express();

// set bodyParser configurations
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));\

/***************************

APPLY API ROUTES HERE

*****************************/

//set a port to listen to
const port = process.env.PORT || 8080;

//tune in to that port
server.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
