const supertest = require('supertest');

const app = require('../src/app');

test('Deve inserir um instrutor com sucesso', () => {
  return supertest(app).post('/instructors')
    .send({
      registration: '1804315',
      name: 'Jobson Tenório do Nascimento',
      email: 'jobson.nascimento@pesqueira.ifpe.edu.br',
      birth_date: '03/05/1981',
    }).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.registration).toBe('1804315');
      expect(res.body.name).toBe('Jobson Tenório do Nascimento');
      expect(res.body.email).toBe('jobson.nascimento@pesqueira.ifpe.edu.br');
      expect(res.body.birth_date).toBe('03/05/1981');
    });
});

test('Deve inserir outro instrutor com sucesso', () => {
  return supertest(app).post('/instructors')
    .send({
      registration: '1643697',
      name: 'Jailson Tenório do Nascimento',
      email: 'jailson.nascimento@pesqueira.ifpe.edu.br',
      birth_date: '16/10/1983',
    }).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.registration).toBe('1643697');
      expect(res.body.name).toBe('Jailson Tenório do Nascimento');
      expect(res.body.email).toBe('jailson.nascimento@pesqueira.ifpe.edu.br');
      expect(res.body.birth_date).toBe('16/10/1983');
    });
});

test('Deve listar todos os instrutores', () => {
  return supertest(app).get('/instructors').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0]).toEqual({
      registration: '1804315',
      name: 'Jobson Tenório do Nascimento',
      email: 'jobson.nascimento@pesqueira.ifpe.edu.br',
      birth_date: '03/05/1981',
      id: 1,
    });
    expect(res.body[1]).toEqual({
      registration: '1643697',
      name: 'Jailson Tenório do Nascimento',
      email: 'jailson.nascimento@pesqueira.ifpe.edu.br',
      birth_date: '16/10/1983',
      id: 2,
    });
  });
});

test('Deve listar um instrutor', () => {
  return supertest(app).get('/instructors/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('1643697');
    expect(res.body.name).toBe('Jailson Tenório do Nascimento');
    expect(res.body.email).toBe('jailson.nascimento@pesqueira.ifpe.edu.br');
    expect(res.body.birth_date).toBe('16/10/1983');
  });
});

test('Deve apagar um instrutor', () => {
  return supertest(app).delete('/instructors/1').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('1804315');
    expect(res.body.registration.length).toBeGreaterThan(5);
    expect(res.body.name).toBe('Jobson Tenório do Nascimento');
    expect(res.body.email).toBe('jobson.nascimento@pesqueira.ifpe.edu.br');
    expect(res.body.birth_date).toBe('03/05/1981');
  });
});

test('Deve alterar um instrutor', () => {
  return supertest(app).put('/instructors/2')
    .send({
      registration: '1643697',
      name: 'Jailson Tenório do Nascimento',
      email: 'jailson.tenorio@belojardim.ifpe.edu.br',
      birth_date: '16/10/1983',
    }).then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        registration: '1643697',
        name: 'Jailson Tenório do Nascimento',
        email: 'jailson.tenorio@belojardim.ifpe.edu.br',
        birth_date: '16/10/1983',
        id: 2,
      });
    });
});

test('Deve listar o instrutor com os dados alterados', () => {
  return supertest(app).get('/instructors/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('1643697');
    expect(res.body.name).toBe('Jailson Tenório do Nascimento');
    expect(res.body.email).toBe('jailson.tenorio@belojardim.ifpe.edu.br');
    expect(res.body.birth_date).toBe('16/10/1983');
  });
});

test('Deve apagar outro instrutor', () => {
  return supertest(app).delete('/instructors/2').then((res) => {
    expect(res.status).toBe(200);
    expect(res.body.registration).toBe('1643697');
    expect(res.body.name).toBe('Jailson Tenório do Nascimento');
    expect(res.body.email).toBe('jailson.tenorio@belojardim.ifpe.edu.br');
    expect(res.body.birth_date).toBe('16/10/1983');
  });
});
