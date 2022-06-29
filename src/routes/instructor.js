const express = require('express');
const instructors = require('../conttrollers/ControllerInstructor');

const router = express.Router();

router.post('/', (req, res) => {
  const instructor = {
    registration: req.body.registration,
    name: req.body.name,
    email: req.body.email,
    birth_date: req.body.birth_date,
  };
  instructors.addInstructor(instructor);
  res.status(201).json(instructor);
});

router.get('/', (req, res) => {
  res.status(200).json(instructors.getInstructors());
});

router.get('/:instructorId', (req, res) => {
  res.status(200).json(instructors.getInstructor(req.params.instructorId));
});

router.delete('/:instructorId', (req, res) => {
  res.status(200).json(instructors.deleteInstructor(req.params.instructorId));
});

router.put('/:instructorId', (req, res) => {
  const id = req.params.instructorId;
  const instructor = req.body;
  const newInstructor = instructors.changeInstructor(id, instructor);
  res.status(200).json(newInstructor);
});

module.exports = router;
