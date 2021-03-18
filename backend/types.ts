export interface DiagnoseType {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BaseEntry {
  id: string;
  description: string;
  date: string;
  type: string;
  specialist: string;
  diagnosisCodes?: Array<DiagnoseType['code']>;
}

interface Discharge{
  date: string,
  criteria: string
}

export enum HealthCheckRating {
  'Healthy' = 0,
  'LowRisk' = 1,
  'HighRisk' = 2,
  'CriticalRisk' = 3,
}

interface HealthCheckEntry extends BaseEntry {
  type: 'HealthCheck';
  healthCheckRating: HealthCheckRating;
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: 'OccupationalHealthcare',
  employerName: string,
  sickLeave?: any
}

interface HospitalEntry extends BaseEntry{
  type: 'Hospital',
  discharge: Discharge
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export type NewPatient = Omit<PatientType, 'id'>;

export interface PatientType {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Array<Entry>;
}

export type NonSensitivePatientType = Omit<PatientType, 'ssn' | 'entries'>;
