exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Dietary', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('attendee_id').unsigned(); // attendee reference
        table.foreign('attendee_id').references('Attendees.id');  
      table.string('diet').nullable(); // guest dietary restriction
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Dietary');
}; 
