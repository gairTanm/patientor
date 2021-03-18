import express from 'express';
import patientsService from '../services/patientsService';
const router = express.Router();

router.get('/', (_req, res) => {
  const data = patientsService.getPatients();
  res.json(data);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const data = patientsService.addPatient(req.body);
  res.json(data);
});

router.get('/:id', (req, res)=> {
  const id = req.params.id;
  const patient = patientsService.findPatientById(id);
  res.json(patient);
})

export default router;
