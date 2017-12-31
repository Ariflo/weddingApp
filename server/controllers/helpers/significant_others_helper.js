import { Attendees, Significant_Others } from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import knex from '../../knex';
import _ from 'lodash';


export function add_significant_other(req, res) {
  Significant_Others.where({ email: req.body.email })
    .first()
    .then(so => {
      if (so) {
        return res.json({
          message: 'Significant Other already invited'
        });
      }

      Attendees.insert({
        significant_other: true
      })
        .returning('id')
        .then(attendee_ids => {
          Significant_Others.insert({
            attendee_id: attendee_ids[0],
            g_id: req.body.guest_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone
          }).return(res.json({ 'success': true }))
        });
    })
    .catch(error => {
      return res.json({
        error,
        message: 'Error connecting to Database'
      });
    });
}
