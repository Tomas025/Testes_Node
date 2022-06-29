const students = require('../database/students');

const sequenceId = Object.values(students).length + 1;

const sequence = {
  _id: sequenceId,
  get id() { return this._id++; },
};

function addStudent(student) {
  const newStudents = student;
  if (!newStudents.id) newStudents.id = sequence.id;
  students[newStudents.id] = newStudents;
  return student;
}

function getStudent(id) {
  return students[id] || {};
}

function getStudents() {
  return Object.values(students);
}

function deleteStudent(id) {
  const student = students[id] || {};
  if (students.hasOwnProperty(id)) {
    delete students[id];
  }
  return student;
}

function changeStudent(id, student) {
  const newStudent = students[id] || {};
  newStudent.registration = student.registration;
  newStudent.name = student.name;
  newStudent.email = student.email;
  newStudent.birth_date = student.birth_date;
  return newStudent;
}

module.exports = {
  addStudent, getStudent, getStudents, deleteStudent, changeStudent,
};
