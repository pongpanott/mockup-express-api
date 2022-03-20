const express = require('express');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// NOTE: try to say hello world
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const userRouter = require('./router/user.router');

app.use('/api/user', userRouter);

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
