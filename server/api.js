import express from 'express';
import methodOverride from 'method-override';
import bodyParser from 'body-parser'
import { Pool, Client } from 'pg';
import router from './controllers/router';
import config from './config'

// load dotenv
require('dotenv').load();

const pool = new Pool(config.db);
const client = new Client(config.db);

// connection using created pool
pool.connect(function(err, client, release) {
  if (err) throw err;
  console.log('Postgres Connected!');
  client.query('SELECT * from "Guests"', (err, result) => {
  release()
  if (err) {
    return console.error('Error executing query', err.stack)
  }
  console.log(result.rows)
})
})

// pool shutdown
pool.end()

//create server instance
const server = express();

// set bodyParser configurations
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

/***************************
API ROUTES HERE
*****************************/
server.use('/guests', router.guests);


//set a port to listen to
const port = config.port || 8080;

//tune in to that port
server.listen(port, () => {
  console.log('Server listening on port: ' + port);
});
