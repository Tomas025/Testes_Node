const supertest = require('supertest');

const app = require('../src/app');

test('Deve responder na raiz da aplicação', () => {
  return supertest(app).get('/').then((res) => {
    return expect(res.status).toBe(200);
  });
});
