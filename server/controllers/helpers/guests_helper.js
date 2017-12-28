import { Guests, Significant_Others, Kids } from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import knex from '../../knex';

export function get_all_guests() {
  return Guests;
}

export function get_guest(req, res) {
  Guests.distinct('id')
    .select()
    .then(ids => {
      ids.forEach(id => {
        bcrypt.compare(id, req.params.guest_code_hash, (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                id,
                guest_hash: req.params.guest_code_hash
              },
              config.jwt_secret
            );

            const guest_party = {};
            Guests.where({ id })
              .first()
              .then(guest => {
                guest_party.guest = guest;
              });
            Significant_Others.where({ g_id: id })
              .first()
              .then(so => {
                guest_party.significant_other = so;
              });
            Kids.where({ g_id: id }).then(kids => {
              guest_party.kids = kids;
            });

            res.json({ jwt: token, guest_party });
          }
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: JSON.stringify(err),
        message: 'Error connecting to Database'
      });
    });
}

export function add_guest(req, res) {
  Guests.where({ email: req.body.email })
    .first()
    .then(resp_guest => {
      if (resp_guest) {
        return res.json({
          message: 'guest already invited'
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
              address: req.body.address
            })
              .returning('id')
              .then(id => {
                const token = jwt.sign(
                  {
                    id,
                    email: req.body.email
                  },
                  config.jwt_secret
                );
                return res.json({ jwt: token, email: req.body.email, id });
              });
          });
        });
      }
    })
    .catch(error => {
      return res.json({
        error,
        message: 'Error connecting to Database'
      });
    });
}

export function update_guest(req, res) {
  return Guests.where({
    email: req.body.email
  })
    .first()
    .update(guest)
    .then(updated_guest => {
      return res.json({ guest: updated_guest, code: 200 });
    });
}

export function remove_guest(req, res) {
  Guests.where({
    email: req.body.email
  })
    .first()
    .del();
}
