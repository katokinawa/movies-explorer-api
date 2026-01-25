# Movies Explorer API

Backend API для проекта "Обозреватель фильмов" с поддержкой авторизации, регистрации и управления избранными фильмами.

## Технологии

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Celebrate (Joi)
- Winston
- Bcrypt
- Helmet
- Express Rate Limit

## Функциональность

- Регистрация и авторизация пользователей
- Сохранение и удаление избранных фильмов
- Обновление профиля пользователя
- Валидация данных
- Логирование запросов
- Защита от DDoS атак
- Безопасность заголовков

## Установка и запуск

### Требования

- Node.js 18.x или выше
- MongoDB 6.0 или выше
- npm или yarn

### Шаги установки

1. Клонировать репозиторий:
```bash
git clone https://github.com/katokinawa/movies-explorer-api.git
```

2. Перейти в директорию проекта:
```bash
cd movies-explorer-api
```

3. Установить зависимости:
```bash
npm install
```

4. Создать файл `.env` в корне проекта:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/moviesdb
JWT_SECRET=your-secret-key
NODE_ENV=production
```

5. Запустить MongoDB (через MongoDB Compass или командную строку)

6. Запустить проект:
```bash
npm start
```

Для режима разработки с автоперезагрузкой:
```bash
npm run dev
```

## API Endpoints

- `POST /signup` - Регистрация пользователя
- `POST /signin` - Авторизация пользователя
- `GET /users/me` - Получить текущего пользователя
- `PATCH /users/me` - Обновить профиль
- `GET /movies` - Получить все сохраненные фильмы
- `POST /movies` - Сохранить фильм
- `DELETE /movies/:movieId` - Удалить фильм

## Автор

Daniil Belogur
