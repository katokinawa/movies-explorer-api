const mongoose = require('mongoose');

const { MONGO_BASE } = process.env;
module.exports = () => {
  mongoose.set('strictQuery', false);

  mongoose
    .connect(`mongodb://127.0.0.1:27017/${MONGO_BASE}`)
    .then(() => console.log('Mongo connected!'));
};
