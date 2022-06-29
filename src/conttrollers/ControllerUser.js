const sequence = {
  _id: 2,
  get id() { return this._id++; },
};

const users = {
  1: { email: 'jobsontenorio@gmail.com', password: 'HF9IL4Sb5y1Z', id: 1 },
};

function addUser(user) {
  const newUser = user;
  if (!newUser.id) newUser.id = sequence.id;
  users[newUser.id] = newUser;
  return user;
}

function getUser(id) {
  return users[id] || {};
}

function getUsers() {
  return Object.values(users);
}

function deleteUser(id) {
  const user = users[id] || {};
  if (users.hasOwnProperty(id)) {
    delete users[id];
  }
  return user;
}

function changePassword(id, oldPassword, newPassword) {
  const user = users[id] || {};
  let retorno = false;
  if (users.hasOwnProperty(id)) {
    if (user.password === oldPassword) {
      user.password = newPassword;
      retorno = true;
    }
  }
  return retorno;
}

module.exports = {
  addUser, getUser, getUsers, deleteUser, changePassword,
};
