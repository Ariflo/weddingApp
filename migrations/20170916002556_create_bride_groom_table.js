exports.up = function(knex, Promise) {
 	return knex.schema.createTable('Bride_Groom', function(table){
   		table.increments('id'); // id serial primary key
      table.integer('uuid').unsigned(); // guest reference 
      table.boolean('bride'); // associated with bride (false if on groom side)
   });
};
exports.down = function(knex, Promise) {
   return knex.schema.dropTable('Bride_Groom');
}; 
