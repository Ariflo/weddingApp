/*
  example use case  -> Tim goes to app see's list of his family
*/
exports.up = function(knex, Promise) {
 	return knex.schema.createTable('users', function(table){
   		table.increments(); // id serial primary key
   		table.string('first_name'); // guest first_name 
   		table.string('last_name'); // guest last_name
      table.string('email'); // guest email
      // guest phone number
      table.string('S_O_first_name'); // S.O first_name 
      table.string('S_O_last_name'); // S.O last_name
      table.string('S_O_email'); // guest email
      // +1 phone number
   		table.string('address'); // guest mailing address
      // kids (Array)
      // Dietary restrictions (every guest)
      table.string('RSVP');// For the number of party 
      // associated side Bride or Groom 
      // Guest, Wedding Party, Family 
      // Number of party 
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('users');
};
