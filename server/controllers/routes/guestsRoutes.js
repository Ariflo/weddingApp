import { router } from 'express';
import { get_all_guests, add_guest } from '../helpers/guests_helper';

router.get('/', (req, res) => {
  return get_all_guests();
});

router.post('/', (req, res) => {
  return add_guest(req.body);
});

module.exports = router;
