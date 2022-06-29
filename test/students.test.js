const supertest = require('supertest');

const app = require('../src/app');

test('Deve inserir um estudante com sucesso', () => {
  return supertest(app).post('/students')
    .send({
      registration: '20221ewbj0289',
      name: 'Guilherme Grande Homem',
      email: 'guilherme@pesqueira.ifpe.edu.br',
      birth_date: '03/05/1981',
    }).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.registration).toBe('20221ewbj0289');
      expect(res.body.name).toBe('Guilherme Grande Homem');
      expect(res.body.email).toBe('guilherme@pesqueira.ifpe.edu.br');
      expect(res.body.birth_date).toBe('03/05/1981');
    });
});

test('Deve inserir outro estudante com sucesso', () => {
  return supertest(app).post('/students')
    .send({
      registration: '20221ewbj0288',
      name: 'Guilherme Grande Homem 2',
      email: 'guilherme2@pesqueira.ifpe.edu.br',
      birth_date: '15/06/1999',
    }).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.registration).toBe('20221ewbj0288');
      expect(res.body.name).toBe('Guilherme Grande Homem 2');
      expect(res.body.email).toBe('guilherme2@pesqueira.ifpe.edu.br');
      expect(res.body.birth_date).toBe('15/06/1999');
    });
});

test('Deve listar todos os instrutores', () => {
    return supertest(app).get('/students').then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(22);
      expect(res.body[0].name).toEqual('ants@discente.ifpe.edu.br');
      expect(res.body[1].registration).toEqual('20192EWBJ0191');
      expect(res.body[2].email).toEqual('Ana Thamyres Santana Santos ');
      expect(res.body[3].birth_date).toEqual('28/06/2000')
    });
  });

test('Deve listar um estudante', () => {
  return supertest(app).get('/students/22').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20221ewbj0288');
    expect(res.body.name).toBe('Guilherme Grande Homem 2');
    expect(res.body.email).toBe('guilherme2@pesqueira.ifpe.edu.br');
    expect(res.body.birth_date).toBe('15/06/1999');
  });
});

test('Deve apagar um estudante', () => {
  return supertest(app).delete('/students/21').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20221ewbj0289');
    expect(res.body.registration.length).toBeGreaterThan(5);
    expect(res.body.name).toBe('Guilherme Grande Homem');
    expect(res.body.email).toBe('guilherme@pesqueira.ifpe.edu.br');
    expect(res.body.birth_date).toBe('03/05/1981');
  });
});

test('Deve alterar um estudante', () => {
  return supertest(app).put('/students/22')
    .send({
        registration: '20221ewbj0288',
        name: 'Guilherme Grande Homem 2',
        email: 'guilherme2@pesqueira.ifpe.edu.br',
        birth_date: '16/06/1999',
    }).then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        registration: '20221ewbj0288',
        name: 'Guilherme Grande Homem 2',
        email: 'guilherme2@pesqueira.ifpe.edu.br',
        birth_date: '16/06/1999',
        id: 22,
      });
    });
});

test('Deve listar o estudante com os dados alterados', () => {
  return supertest(app).get('/students/22').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20221ewbj0288');
    expect(res.body.name).toBe('Guilherme Grande Homem 2');
    expect(res.body.email).toBe('guilherme2@pesqueira.ifpe.edu.br');
    expect(res.body.birth_date).toBe('16/06/1999');
  });
});

test('Deve apagar outro estudante', () => {
  return supertest(app).delete('/students/22').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('20221ewbj0288');
    expect(res.body.name).toBe('Guilherme Grande Homem 2');
    expect(res.body.email).toBe('guilherme2@pesqueira.ifpe.edu.br');
    expect(res.body.birth_date).toBe('16/06/1999');
  });
});
