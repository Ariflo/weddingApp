import express from 'express';
import { get_all_guests, add_guest } from '../helpers/guests_helper';

const router = express.Router();

router.get('/', (req, res) => {
  return get_all_guests(req, res);
});

router.post('/', (req, res) => {
  return add_guest(req, res);
});

module.exports = router;
