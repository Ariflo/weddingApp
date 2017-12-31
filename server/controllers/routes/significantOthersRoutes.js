import express from 'express';
import { add_significant_other } from '../helpers/significant_others_helper';

const router = express.Router();

router.post('/', (req, res) => {
  return add_significant_other(req, res);
});

module.exports = router;