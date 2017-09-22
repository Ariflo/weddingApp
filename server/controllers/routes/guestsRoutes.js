import express from 'express';
import { get_all_guests, add_guest } from '../helpers/guests_helper';

const router = express.Router();

router.get('/', (req, res) => {
  return res.send(get_all_guests());
});

router.post('/', (req, res) => {
  const tmp = add_guest(req.body, res);
  console.log("TMP =", tmp);
  return res.send(add_guest(req.body));
});

module.exports = router;
