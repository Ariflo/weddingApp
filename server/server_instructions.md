# Server Instructions
To start the server you will first need to be sure that you `npm install` all the packages, including the cmd line for knex `npm install knex -g --save` and that your `bashrc` or `.env` contain the following varibles:

```
export SERVER_PORT=Your_server_number_here
export DB_USER=Your_DB_name_here
export DB_HOST=localhost
export DB=Your_db_name_here
export DB_PASSWORD=''
export DB_PORT=5432
export JWT_SECRET=Your_secret
export API_URL=local_pointer to your API
```
Once that is all squared away you'll need to run migrations with:

```
knex migrate:latest

```

Then simply run `npm run serve` to start up the nodemon server. 

