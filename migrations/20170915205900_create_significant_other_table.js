exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Significant_Others', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('attendee_id').unsigned(); // attendee reference
        table.foreign('attendee_id').references('Attendees.id'); 
      table.integer('g_id').unsigned(); // guest reference
        table.foreign('g_id').references('Guests.id'); 
   		table.string('first_name').nullable(); // S.O. first_name 
   		table.string('last_name').nullable(); // S.O. last_name
      table.string('email').nullable(); // S.O. email
      table.string('phone').nullable(); // S.O. phone number
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Significant_Others');
}; 
