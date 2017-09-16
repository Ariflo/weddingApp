Run the following commands in the terminal to update server/migrations  

```
$ knex --knexfile=./config/knex/knexfile.js migrate:latest
$ knex --knexfile=./config/knex/knexfile.js migrate:rollback

```