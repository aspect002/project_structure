require('dotenv').config();

const PORT = process.env.PORT;
const express = require("express");
const app = express();

const usersHelpers = require('./helpers/usersHelpers');
const router = require('./routes');

app.use(express.json());
app.use(usersHelpers.logRequest);

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
