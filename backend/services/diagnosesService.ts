import diagnosesData from '../data/diagnoses.json';
import { DiagnoseType } from '../types';

const diagnoses: Array<DiagnoseType> = diagnosesData;

const getDiagnoses = ():Array<DiagnoseType> => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
