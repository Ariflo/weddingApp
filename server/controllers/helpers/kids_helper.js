import { Attendees, Kids } from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import knex from '../../knex';
import _ from 'lodash';

export function add_child(req, res) {
  Kids.where({ first_name: req.body.first_name, last_name: req.body.last_name })
    .first()
    .then(child => {
      if (child) {
        return res.json({
          message: 'Child already invited'
        });
      }

      Attendees.insert({
        kid: true
      })
        .returning('id')
        .then(attendee_ids => {
          Kids.insert({
            attendee_id: attendee_ids[0],
            g_id: req.body.guest_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
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