exports.up = function(knex, Promise) {
  return knex.schema.createTable('Attendees', function(table){
   		table.increments('id'); // id serial primary key
   		table.boolean('guest'); // guest attendee
   		table.boolean('significant_other'); // SO status
   		table.boolean('kid'); // kid status
   });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Attendees');
};
