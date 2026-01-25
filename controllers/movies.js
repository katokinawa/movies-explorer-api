const Movie = require('../models/movie');

const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFound');
const Forbidden = require('../errors/Forbidden');

module.exports.getUserMovies = (req, res, next) => {
  Movie.findById(req.owner._id, req.movieId._id)
    .then((movie) => {
      if (movie) {
        return res.send(movie);
      }
      return next(new NotFound('Пользователь по указанному _id не найден.'));
    })
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(
          new BadRequest('Переданы некорректные данные при создании фильма.'),
        );
      }
      return next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      console.log(movie);
      if (!movie) {
        return next(new NotFound('Фильм с указанным _id не найден.'));
      }
      return movie
        .remove()
        .then(() => res.status(200).send({ data: movie }))
        .catch(next);
    })
    .catch(next);
};
