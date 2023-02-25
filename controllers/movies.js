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
    trailer,
    nameRU,
    nameEN,
    thumbnail,
  } = req.body;

  const MoviesExplorerAPI = {
    _id: '200200202020',
  };

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId: MoviesExplorerAPI._id,
    owner: req.user._id,
  })
    .then((card) => res.send(card))
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
  Movie.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        next(new NotFound('Фильм с указанным _id не найден.'));
      } else if (String(card.owner) !== req.user._id) {
        next(new Forbidden('Вы не можете удалять чужие фильмы'));
      } else {
        card
          .remove()
          .then(() => res.status(200).send({ data: card }))
          .catch(next);
      }
    })
    .catch(next);
};
