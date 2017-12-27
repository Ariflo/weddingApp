# Server Instructions
To start the server you will first need to be sure that you `npm install` all the packages, including the cmd line for knex `npm install knex -g --save` and that your `bashrc` or `.env` contain the following varibles:

```
SERVER_PORT=Your_server_number_here
DB_USER=Your_DB_name_here
DB_HOST=localhost
DB=Your_db_name_here
DB_PASSWORD=''
DB_PORT=5432
JWT_SECRET=Your_secret
API_URL=local_pointer to your API
```
Once that is all squared away you'll need to run migrations with:

```
knex migrate:latest

```

Then simply run `npm run serve` to start up the nodemon server. 

