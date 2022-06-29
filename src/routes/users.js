const express = require('express');
const users = require('../conttrollers/ControllerUser');

const router = express.Router();

router.post('/', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  users.addUser(user);
  res.status(201).json(user);
});

router.get('/', (req, res) => {
  res.status(200).json(users.getUsers());
});

router.get('/:userId', (req, res) => {
  res.status(200).json(users.getUser(req.params.userId));
});

router.delete('/:userId', (req, res) => {
  res.status(200).json(users.deleteUser(req.params.userId));
});

router.put('/:userId', (req, res) => {
  const id = req.params.userId;
  const { oldPassword } = req.body;
  const { newPassword } = req.body;
  if (users.changePassword(id, oldPassword, newPassword)) {
    res.status(200).json({ message: 'Senha alterada com sucesso.' });
  } else {
    res.status(400).json({ message: 'Erro: Senha não alterada.' });
  }
});

module.exports = router;
