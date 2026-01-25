const express = require('express');
const mongoose = require('mongoose');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.set('strictQuery', false);

mongoose
  .connect('mongodb://127.0.0.1:27017/bitfilmsdb')
  .then(() => console.log('Mongo connected!'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
