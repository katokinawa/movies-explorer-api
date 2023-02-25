require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const routes = require('./routes/index');
const apiLimiter = require('./utils/rateLimiter');
const mongoServer = require('./middlewares/mongoServer');
const internalError = require('./middlewares/internalError');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

const { PORT = 3000 } = process.env;

app.use('*', apiLimiter);
mongoServer();
app.use(helmet());
app.use(cookieParser()); // парсинг куков
app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса
app.use(requestLogger); // логгер событий
app.use(routes); // роуты приложения
app.use(errorLogger); // логгер ошибок
app.use(internalError); // ошибка сервера
app.use(cors); // кросс-доменные запросы

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
