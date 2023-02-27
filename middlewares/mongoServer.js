const mongoose = require('mongoose');

module.exports = () => {
  mongoose.set('strictQuery', false);

  mongoose
    .connect('mongodb://127.0.0.1:27017/bitfilmsdb')
    .then(() => console.log('Mongo connected!'));
};
