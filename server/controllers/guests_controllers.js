import { guests } from '../models'

function get_all_guests() {
  return knex('Guests');
}

function add_guest(guest) {
  knex('Guests')
  .insert(guest)
  .catch((err) => {
    console.log(err);
  });
}

function remove_guest(guest) {
  
}

module.exports = {
  
};