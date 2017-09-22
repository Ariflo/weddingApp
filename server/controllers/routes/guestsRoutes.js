import express from 'express';
import { get_all_guests, add_guest } from '../helpers/guests_helper';

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(get_all_guests());
});

router.post('/', (req, res) => {
  return res.json(add_guest(req.body));
});

module.exports = router;
