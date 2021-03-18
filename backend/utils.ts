import {Gender, PatientType} from './types'
import {v4 as uuid} from 'uuid'

const toNewPatient = (object: any): PatientType =>  {/* eslint-disable @typescript-eslint/no-explicit-any */
  const newPatient:PatientType = {
    id: uuid(),
    name: parseString(object.name),
    dateOfBirth: parseString(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
    entries: [],
  }
  return newPatient
}
const parseGender = (str: any): Gender =>{
  if(!str || !isGender(str)){
    throw new Error ('not a gender boi')
  }
  return str
}


const parseString = (str: any): string => {
  if(!str || !isString(str)){
    throw new Error ('this value is not a string' + str)
  }
  return str
}

const isGender = (value: any): value is Gender => {
  return Object.values(Gender).includes(value)
}

const isString = (value: any): value is string => {
  return typeof value === 'string' || value instanceof String
}

export default toNewPatient