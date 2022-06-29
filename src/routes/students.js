const express = require('express');
const students = require('../conttrollers/ControllerStudents');

const router = express.Router();

router.post('/', (req, res) => {
  const student = {
    registration: req.body.registration,
    name: req.body.name,
    email: req.body.email,
    birth_date: req.body.birth_date,
  };
  students.addStudent(student);
  res.status(201).json(student);
});

router.get('/', (req, res) => {
  res.status(200).json(students.getStudents());
});

router.get('/:studentId', (req, res) => {
  res.status(200).json(students.getStudent(req.params.studentId));
});

router.delete('/:studentId', (req, res) => {
  res.status(200).json(students.deleteStudent(req.params.studentId));
});

router.put('/:studentId', (req, res) => {
  const id = req.params.studentId;
  const student = req.body;
  const newStudent = students.changeStudent(id, student);
  res.status(200).json(newStudent);
});

module.exports = router;
