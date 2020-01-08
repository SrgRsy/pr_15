require('dotenv').config();
const express = require('express');
const app = express();
const { PORT = 3001 } = process.env;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./middlewares/auth');
const cards = require('./routes/cards');
const users = require('./routes/users');
const authoriz = require('./routes/authoriz');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//подключаемся к серверу монго
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});




app.use('/', authoriz);
app.use('/users', auth, users);
app.use('/cards', auth, cards);
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({ message: statusCode === 500 ? 'На сервере произошла ошибка' : message });
});





app.listen(PORT, () => {
  console.log(`Используется порт ${PORT}`);
})


