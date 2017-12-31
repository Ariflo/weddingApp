import { Attendees, Guests, Significant_Others, Kids } from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import knex from '../../knex';
import _ from 'lodash';

export function get_all_guests(req, res) {
  Guests.then(guests => {
    Significant_Others.then(sig_os => {
      Kids.then(kids => {
        const all_guests = [...guests, ...sig_os, ...kids];
        return res.json({ all_guests });
      });
    });
  });
}

export function get_guest(req, res) {
  Guests.then(guests => {
    guests.forEach(guest => {
      if (_.includes(guest.guest_code, req.params.guest_code)) {
        bcrypt.compare(guest.id.toString(), guest.guest_code, (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                id: guest.id,
                guest_code: req.params.guest_code
              },
              config.jwt_secret
            );

            const guest_party = { guest };
            Significant_Others.where({ g_id: guest.id })
              .first()
              .then(so => {
                if (!_.isNil(so)) guest_party.significant_other = so;

                Kids.where({ g_id: guest.id }).then(kids => {
                  if (!_.isEmpty(kids)) guest_party.kids = kids;

                  return res.json({ jwt: token, guest_party });
                });
              });
          }
        });
      }
    });
  }).catch(err => {
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
    .then(guest => {
      if (guest) {
        return res.json({
          message: 'Guest already invited'
        });
      }

      Attendees.insert({
        guest: true
      })
        .returning('id')
        .then(attendee_ids => {
          Guests.insert({
            attendee_id: attendee_ids[0],
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
          })
            .returning('id')
            .then(ids => {
              bcrypt.hash(ids[0].toString(), 10, (err, hash) => {
                if (err) {
                  console.log(err);
                  return res.json({
                    error: JSON.stringify(err),
                    message: 'Error creating Guest Code'
                  });
                }

                Guests.where({ id: ids[0] })
                  .first()
                  .update({ guest_code: hash })
                  .then(guest_id => {
                    return res.json({
                      guest_id: guest_id[0]
                    });
                  });
              });
            });
        });
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
