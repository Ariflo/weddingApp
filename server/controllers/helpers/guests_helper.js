import Guests from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config'

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

function add_guest(guest) {
  Guests.where({ id: req.body.id })
    .first()
    .then((guest) => {
      if (guest || req.body.password !== req.body.passwordconfirm) {
        res.json({
          message: 'guest already invited or passwords do not match',
        });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            Guests.insert({
              pwd: hash,
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              email: req.body.email,
              phone: req.body.phone,
              address: req.body.address,
            })
              .returning('id')
              .then((id) => {
                const token = jwt.sign(
                  {
                    id,
                    email: req.body.email,
                  },
                  config.jwt_secret,
                );
      
                res.json({ jwt: token, email: req.body.email, id });
              });
          });
        });
      }
    })
    .catch((err) => {
      res.json({
        error: JSON.stringify(err),
        message: 'Error connecting to Database',
      });
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
