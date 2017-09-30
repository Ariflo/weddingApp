exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Guests', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('attendee_id').unsigned(); // attendee reference
        table.foreign('attendee_id').references('Attendees.id'); 
   		table.string('pwd').nullable(); // hashed password
   		table.string('first_name').nullable(); // guest first_name 
   		table.string('last_name').nullable(); // guest last_name
      table.string('email').nullable(); // guest email
      table.string('phone').nullable(); // guest phone number
   		table.string('address').nullable(); // guest mailing address
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Guests');
}; 