# Проект: Обозреватель фильмов API

Серверная часть приложения для проекта ["Обозреватель фильмов"](https://github.com/katokinawa/movies-explorer-frontend), описана основная функциональность проекта, такая как:
- Регистрация.
- Логин.
- Редактирование пользователя.
- Постановка и снятие лайка.
- Парсинг куки.

Схема валидируется с помощью Joi. Проект подключается к MongoDB базе с помощью mongoose. Настроен cors для разрешения кросс-доменных запросов. Добавлен миддлвейр apiLimiter для контролирования количества запросов к API, также есть логирование реализованное на библиотеке winston.

Для того чтобы развернуть API, следуйте этих шагам:

1. Перейдите в репозиторий проекта, после нажмите "Code" и загрузите к себе локальный архив с проектом.
2. Распакуйте папку из архива в удобное местоположение.
3. Откройте терминал Bash или PowerShell.
4. Перейдите в директорию проекта с помощью команды `cd <директория>`.
5. Загрузите все зависимости с помощью команды `npm install`.
6. Откройте MongoDB Compass и нажмите кнопку "Connect".
7. Запустите проект с помощью команды `npm start`.
8. Окно должно оповестить о том, что приложение успешно подключилось, API запущён.

Для развёртывания проекта необходимо:
- Node.js (18.16.0 LTS-версия).
- MongoDB Community Server (6.0.6).

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Inter&weight=500&duration=10000&pause=1000&repeat=false&width=435&lines=%D0%A1%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE+%D0%B7%D0%B0+%D0%B2%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5!)](https://git.io/typing-svg)
