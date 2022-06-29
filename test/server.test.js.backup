const supertest = require('supertest');

const request = supertest('http://localhost:3000');

test('Deve responder na porta 3000', () => {
  // acessar a url http://localhost:3000
  // verificar o status code de resposta
  return request.get('/').then((res) => {
    return expect(res.status).toBe(200);
  });
});
