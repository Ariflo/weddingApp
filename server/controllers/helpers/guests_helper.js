import { Attendees, Guests, Significant_Others, Kids } from '../../models';
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
      let err_msg;
      ids.forEach(id => {
        bcrypt.compare(id.toString(), req.params.guest_code, (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                id,
                guest_code: req.params.guest_code
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
          } else {
            err_msg = res.json({
              error: JSON.stringify(err),
              message: 'no matching user/password combo'
            });
          }
        });
      });
      if (err_msg) {
        return err_msg;
      }
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
                  .then(() => {
                    return res.json({
                      message: 'Guest invited Successfully'
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
