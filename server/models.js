import knex from './knex'

const Guests = function () {
  return knex('Guests');
};
const Significant_Others = function () {
  return knex('Significant_Others');
};
const Kids = function () {
  return knex('Kids');
};
const Events = function () {
  return knex('Events');
};

module.exports = {
  Guests,
  Significant_Others,
  Kids,
  Events,
};
