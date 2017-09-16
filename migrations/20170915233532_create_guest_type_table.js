exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Guest_Type', function(table){
   		table.increments('id'); // id serial primary key
   		table.integer('uuid').unsigned(); // guest reference
      table.string('type').nullable(); // guest type
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Guest_Type');
}; 
