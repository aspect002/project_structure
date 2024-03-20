const express = require("express");
const app = express();
require('dotenv').config();


const usersHelpers = require('./helpers/usersHelpers');
const router = require('./routes');
const UsersControllers = require('./controllers/usersControllers');
const usersRoutes = require('./routes/usersRoutes');
const echoRoutes = require('./routes/echoRoutes');
app.use('/api/echo', echoRoutes);

app.use(express.json());
app.use('/api', router);
app.use(usersHelpers.logRequest);


app.put('/api/users/:id', UsersControllers.updateUser);
app.use('/api/users', usersRoutes);
app.delete('/api/users/:id', UsersControllers.deleteUser);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
