import express from 'express';
import { add_child } from '../helpers/kids_helper';

const router = express.Router();

router.post('/', (req, res) => {
  return add_child(req, res);
});

module.exports = router;