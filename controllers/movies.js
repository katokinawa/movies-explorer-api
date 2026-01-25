const Movie = require('../models/movie');

const BadRequest = require('../errors/BadRequest');
const NotFound = require('../errors/NotFound');
const Forbidden = require('../errors/Forbidden');

module.exports.getUserMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      res.send(movies);
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
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
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
        next(new NotFound('Фильм с указанным _id не найден.'));
      } else if (String(movie.owner) !== req.user._id) {
        next(new Forbidden('Вы не можете удалять фильмы других пользователей.'));
      } else {
        movie
          .remove()
          .then(() => res.status(200).send({ data: movie }))
          .catch(next);
      }
    })
    .catch(next);
};
