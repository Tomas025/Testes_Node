const supertest = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuários', () => {
  return supertest(app).get('/users').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toHaveProperty('email', 'jobsontenorio@gmail.com');
    expect(res.body[0]).toHaveProperty('password');
  });
});

test('Deve inserir um usuário com sucesso', () => {
  return supertest(app).post('/users')
    .send({ email: 'jailsontenorio@gmail.com', password: 'JksrMDYngSPS' })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.email).toBe('jailsontenorio@gmail.com');
    });
});

test('Deve listar um usuário', () => {
  return supertest(app).get('/users/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('email', 'jailsontenorio@gmail.com');
    expect(res.body).toHaveProperty('password');
  });
});

test('Deve apagar um usuário', () => {
  return supertest(app).delete('/users/1').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('email', 'jobsontenorio@gmail.com');
    expect(res.body).toHaveProperty('password');
  });
});

test('Deve alterar a senha de um usuário', () => {
  return supertest(app).put('/users/2')
    .send({ oldPassword: 'JksrMDYngSPS', newPassword: 'r4geFwshnaa5' })
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('message', 'Senha alterada com sucesso.');
    });
});
