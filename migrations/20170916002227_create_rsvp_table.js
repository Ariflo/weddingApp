exports.up = function(knex, Promise) {
 	return knex.schema.createTable('RSVP', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('attendee_id').unsigned(); // attendee reference
        table.foreign('attendee_id').references('Attendees.id'); 
      table.integer('event_id').unsigned(); // event reference
        table.foreign('event_id').references('Events.id');
      table.boolean('rsvp'); // guest attendance status
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('RSVP');
}; 
