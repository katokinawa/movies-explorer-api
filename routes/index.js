const router = require('express').Router();
const { celebrate, Joi, errors } = require('celebrate');
const { login, createUser, deleteToken } = require('../controllers/users');
const auth = require('../middlewares/auth');
const NotFound = require('../errors/NotFound');

router.use(errors()); // обработчик ошибок celebrate

// проверяет переданные в теле почту и пароль и возвращает JWT
router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

// создаёт пользователя с переданными в теле email, password и name
router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }),
  createUser,
);
router.post('/signout', deleteToken);

router.use('/users', auth, require('./user'));
router.use('/movies', auth, require('./movie'));

// обработчик неизвестных путей
router.use('*', (req, res, next) => {
  next(new NotFound('Неправильный путь.'));
});

module.exports = router;
