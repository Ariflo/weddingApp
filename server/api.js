import express from 'express';
import methodOverride from 'method-override';
import path from 'path';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser'
import pg from 'pg';
import { router } from './controllers/router';

// load dotenv
require('dotenv').load();

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


//create server instance
const server = express();

// set bodyParser configurations
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));\

/***************************
API ROUTES HERE
*****************************/
server.use('/guests', router.guests);


//set a port to listen to
const port = process.env.PORT || 8080;

//tune in to that port
server.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
