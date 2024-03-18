const express = require("express");
const app = express();
require('dotenv').config();

let users = [];
const router = require('./routes')

app.use(express.json());

app.use('/api',router)

// app.use((req, res, next) => {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, '0');
//   const minutes = now.getMinutes().toString().padStart(2, '0');
//   const seconds = now.getSeconds().toString().padStart(2, '0');
//   const timestamp = `${hours}:${minutes}:${seconds}`;
//   const ip = req.ip;
//   console.log(`Request time[${timestamp}] Request from ${ip}: ${req.method} ${req.url}`);
//   next();
// });

app.get('/api/echo',(req,res) => {
    res.send('Привет,Redev!')
})

// app.post('/api/echo', (req, res) => {
//   const { message } = req.body;
//   res.json({ message });
// });

// app.post('/api/users', (req, res) => {//создание пользователя
// users.push(req.body);
// res.json(users)
// });

// app.get('/api/users',(req,res)=>{ //вернуть список пользователей
//   res.json(users)
// })

// app.get('/api/users/:id',(req,res) =>{//получение информации конкретного пользователя по id
//   res.json(users)
// })

// app.put('/api/users/:id',(req,res) =>{//изменение конкретного пользователя
//   const userId = parseInt(req.params.id);

// const user = users.find(user => user.id === userId);

// if (user) {
//   user.username = req.body.username;
//   user.email = req.body.email;
//   user.password = req.body.password;
//   res.json(user);
// }
// })


// app.patch("/api/users/:id", (req, res) => {//изменение пароля
//   const userId = parseInt(req.params.id);
//   const { password } = req.body;

//   const user = users.find(user => user.id === userId);

//   if (user) {
//     user.password = password;
//     res.json({ message: "Пароль пользователя обновлен", user });
//   }
// })

// app.delete("/api/users/:id", (req, res) => {//удаление пользователя из массива
//   const userId = parseInt(req.params.id);

//   const userIndex = users.findIndex(user => user.id === userId);

//   if (userIndex !== -1) {
//     users.splice(userIndex, 1);

//     res.json({ message: "Пользователь удален" });
//   }
// })

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
