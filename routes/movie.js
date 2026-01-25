const router = require('express').Router();

const {
  getUserMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getUserMovies); // возвращает все сохранённые текущим пользователем фильмы
router.post('/', createMovie); // создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
router.delete('/:movieId', deleteMovie); // удаляет сохранённый фильм по id

module.exports = router;
