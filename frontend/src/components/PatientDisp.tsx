import Axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../constants';
import { useStateValue } from '../state';
import { Patient } from '../types';
import EntryComp from './Entry';

const PatientDisp: React.FC = () => {
  const [patient, setPatient] = useState<Patient>();
  const { id } = useParams<{ id: string }>();
  React.useEffect(() => {
    const getPatient = async () => {
      const { data: p } = await Axios.get<Patient>(
        `${apiBaseUrl}/patients/${id}`
      );
      setPatient(p);
    };
    getPatient();
  }, [id]);

  if (patient) {
    return (
      <div key={patient.name}>
        <h1>{patient.name}</h1>

        <p>ssn: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        <h2>entries:</h2>
        {patient.entries.map(e => (
          <EntryComp entry={e}/>
        ))}
      </div>
    );
  } else {
    return <div>fetching</div>;
  }
};

export default PatientDisp;
