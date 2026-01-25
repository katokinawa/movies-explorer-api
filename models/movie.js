const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');
const bcrypt = require('bcryptjs');
const Unauthorized = require('../errors/Unauthorized');

const userSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isURL(url),
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (url) => isURL(url),
    },
  },
  thumbnail: {
    type: String,
    default: 'Киноман Неизвестович',
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  owner: {
    type: String,
    default: 'Киноман Неизвестович',
    required: true,
  },
  movieId: {
    type: String,
    default: 'Киноман Неизвестович',
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  nameRU: {
    type: String,
    default: 'Киноман Неизвестович',
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  nameEN: {
    type: String,
    default: 'Киноман Неизвестович',
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((userData) => {
      if (!userData) {
        return Promise.reject(
          new Unauthorized('Неправильные почта или пароль'),
        );
      }
      return bcrypt.compare(password, userData.password).then((matched) => {
        if (!matched) {
          return Promise.reject(
            new Unauthorized('Неправильные почта или пароль'),
          );
        }
        return userData;
      });
    });
};

module.exports = mongoose.model('user', userSchema);
