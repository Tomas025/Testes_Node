test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos no jest', () => {
  const obj = { name: 'Jobson', email: 'jobsontenorio@gmail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('email');
  expect(obj).toHaveProperty('name', 'Jobson');
  expect(obj).toHaveProperty('email', 'jobsontenorio@gmail.com');
  expect(obj.name).toBe('Jobson');
  expect(obj.email).toEqual('jobsontenorio@gmail.com');

  const obj2 = { name: 'Jobson', email: 'jobsontenorio@gmail.com' };
  expect(obj2).toBe(obj2);
  expect(obj2).toEqual(obj);
});
