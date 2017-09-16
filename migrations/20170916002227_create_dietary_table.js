exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Dietary', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('uuid').unsigned(); // guest reference 
      table.string('diet').nullable(); // guest dietary restriction
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Dietary');
}; 
