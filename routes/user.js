const router = require('express').Router();

const {
  getUsers,
  updateProfile,
} = require('../controllers/users');

router.get('/me', getUsers); // возвращает информацию о пользователе (email и имя)
router.patch('/me', updateProfile); // обновляет информацию о пользователе (email и имя)

module.exports = router;
