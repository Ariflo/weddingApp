var  knex = require('./knex');

var Guests = function(){
  return knex('Guests');
}
var Significant_Others = function(){
  return knex('Significant_Others');
}
var Kids = function(){
  return knex('Kids');
}
var Events = function(){
  return knex('Events');
}

module.exports = {
  Guests: Guests,
  Significant_Others: Significant_Others,
  Kids: Kids,
  Events: Events
}