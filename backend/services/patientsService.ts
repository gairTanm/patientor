import patientsData from '../data/patients';
import { PatientType, NonSensitivePatientType } from '../types';
import toNewPatient from '../utils';

const patients: Array<PatientType> = patientsData as Array<PatientType>;

const getPatients = (): PatientType[] => {
  return patients;
};

const getNonSensitivePatients = (): NonSensitivePatientType[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (object: any): PatientType => {
  try {
    const newPatient = toNewPatient(object);
    /*patientsData.push(newPatient);*/
    return newPatient;
  } catch (e) {
    throw new Error('error in conversion');
  }
};

const findPatientById = (id: string): PatientType|undefined => {
  try{
    const patient = patients.find(p => p.id === id);
    return patient;
  }catch(e){
    throw new Error(e);
  }
}

export default {
  getPatients,
  addPatient,
  getNonSensitivePatients,
  findPatientById
};
