exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Kids', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('g_id').unsigned(); // guest reference
        table.foreign('g_id').references('Guests.id'); 
   		table.string('first_name').nullable(); // Kid first_name 
   		table.string('last_name').nullable(); // Kid last_name
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Kids');
}; 
