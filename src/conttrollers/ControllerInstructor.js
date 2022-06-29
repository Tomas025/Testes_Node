const instructors = require('../database/instructors');

const sequenceId = Object.values(instructors).length + 1;

const sequence = {
  _id: sequenceId,
  get id() { return this._id++; },
};

function addInstructor(instructor) {
  const newInstructors = instructor;
  if (!newInstructors.id) newInstructors.id = sequence.id;
  instructors[newInstructors.id] = newInstructors;
  return instructor;
}

function getInstructor(id) {
  return instructors[id] || {};
}

function getInstructors() {
  return Object.values(instructors);
}

function deleteInstructor(id) {
  const student = instructors[id] || {};
  if (instructors.hasOwnProperty(id)) {
    delete instructors[id];
  }
  return student;
}

function changeInstructor(id, instructor) {
  const newInstructor = instructors[id] || {};
  newInstructor.registration = instructor.registration;
  newInstructor.name = instructor.name;
  newInstructor.email = instructor.email;
  newInstructor.birth_date = instructor.birth_date;
  return newInstructor;
}

module.exports = {
  addInstructor, getInstructor, getInstructors, deleteInstructor, changeInstructor,
};