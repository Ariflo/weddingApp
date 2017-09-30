exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Guest_Type', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('attendee_id').unsigned(); // attendee reference
        table.foreign('attendee_id').references('Attendees.id'); 
      table.string('type').nullable(); // guest type
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Guest_Type');
}; 
