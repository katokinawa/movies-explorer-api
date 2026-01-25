const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers,
  updateProfile,
} = require('../controllers/users');

router.get('/me', getUsers); // возвращает информацию о пользователе (email и имя)
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
}), updateProfile); // обновляет информацию о пользователе (email и имя)

module.exports = router;
