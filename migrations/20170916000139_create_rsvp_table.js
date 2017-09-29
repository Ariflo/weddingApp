exports.up = function(knex, Promise) {
 	return knex.schema.createTable('RSVP', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('event_id').unsigned(); // event reference
        table.foreign('event_id').references('Events.id');
      table.integer('uuid').unsigned(); // guest reference 
      table.boolean('rsvp'); // guest attendance status
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('RSVP');
}; 
