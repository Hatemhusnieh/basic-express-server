'use strict';
const express = require('express');
const app = express();
const notFound = require('./error_hadlers/404');
const errorHandler = require('./error_hadlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) =>{
  res.status(200).send('my life SUCKS  !!!');
});
app.get('/person', validator, (req, res) =>{
  const {name}= req.query;
  res.status(200).send({ name: name });
});

app.use('*', notFound);
app.use(errorHandler);

const start = (port) =>{
  app.listen(port, () => console.log(`server starts on ${port}`));
};

module.exports = {
  app,
  start,
};
