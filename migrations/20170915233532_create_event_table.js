exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Events', function(table){
   		table.increments('id'); // id serial primary key
   		table.string('event_name').nullable(); // event name 
      table.integer('num_attending').unsigned(); // number of guests 
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Events');
}; 
