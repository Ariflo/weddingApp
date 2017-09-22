import { Guests } from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config'
import knex from '../../knex'

function get_all_guests() {
  return Guests;
}

function get_guest(req) {
  Guests.where({
    id: req.guest.id,
  })
    .first()
    .then((guest) => {
      return { guest };
    })
    .catch((err) => {
      console.log(err);
      return { err };
    });
}

function add_guest(guest, res) {
  Guests.where({ email: guest.email })
    .first()
    .then((resp_guest) => {
      if (resp_guest) {
        return res.json({
          message: 'guest already invited',
        });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(guest.password, salt, (err, hash) => {
            Guests.insert({
              pwd: hash,
              first_name: guest.first_name,
              last_name: guest.last_name,
              email: guest.email,
              phone: guest.phone,
              address: guest.address,
            })
              .returning('id')
              .then((id) => {
                const token = jwt.sign(
                  {
                    id,
                    email: guest.email,
                  },
                  config.jwt_secret,
                );
      
                return res.json({ jwt: token, email: guest.email, id });
              });
          });
        });
      }
    })
    .catch((error) => {
      return {
        error,
        message: 'Error connecting to Database',
      };
    });
}

function update_guest(guest) {
  return Guests.where({
    id: guest.id,
  })
    .first()
    .update(guest)
    .then((updated_guest) => {
      return { guest: updated_guest, code: 200 };
    });
}

function remove_guest(guest) {
  Guests.where({
    id: guest.id,
  })
    .first()
    .del();
}

module.exports = {
  get_all_guests,
  get_guest,
  add_guest,
  update_guest,
  remove_guest,
};
