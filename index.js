// Importação CommonJS modules
const express = require('express');
const users = require('./src/models/User');

// Criar aplicação WEB express
const app = express();
// Midlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Rotas (End Points)
app.get('/', (req, res) => {
  const u = users.getUsers();
  const qtde = u.length;
  res.send(`Usuários cadastrados: ${qtde}`);
});

app.get('/users', (req, res) => {
  res.send(users.getUsers());
});

app.get('/users/:id', (req, res) => {
  res.send(users.getUser(req.params.id));
});

app.post('/:users', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  users.addUser(user);
  res.status(201).json(user);
});

app.delete('/users/:id', (req, res) => {
  res.status(200).json(users.deleteUser(req.params.id));
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  if (users.changePassword(id, oldPassword, newPassword)) {
    res.status(200).json({ message: 'Senha alterada com sucesso.' });
  } else {
    res.status(400).json({ message: 'Erro: Senha não alterada.' });
  }
});

// Rodar a aplicação express na porta 3000
app.listen(3000, () => {
  console.log('A Aplicação está rodando na porta 3000.');
});
