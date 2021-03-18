import React from 'react';
import { useStateValue } from '../state';
import { Entry } from '../types';
import { Card, Icon } from 'semantic-ui-react';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const HospitalEntry: React.FC<{ entry: any }> = ({ entry }) => {
  const [{ diagnoses }, dispatch] = useStateValue();
  return (
    <Card centered fluid raised color="pink">
      <Card.Content>
        <Card.Header>
          {entry.date}
          <Icon size="big" name="hospital" color="pink" />
        </Card.Header>
        <Card.Meta>{entry.discharge.criteria}</Card.Meta>
        <Card.Description>
          <i>{entry.description}</i>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

const OccupationalHealthcareEntry: React.FC<{ entry: any }> = ({ entry }) => {
  const [{ diagnoses }, dispatch] = useStateValue();
  return (
    <Card centered fluid raised color="teal">
      <Card.Content>
        <Card.Header>
          {entry.date}
          <Icon size="big" name="stethoscope" color="teal" />
        </Card.Header>
        <Card.Meta>{entry.employerName}</Card.Meta>
        <Card.Description>
          <i>{entry.description}</i>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

const HealthCheckEntry: React.FC<{ entry: any }> = ({ entry }) => {
  const [{ diagnoses }, dispatch] = useStateValue();
  return (
    <Card centered fluid raised color="orange">
      <Card.Content>
        <Card.Header>
          {entry.date}
          <Icon size="big" name="doctor" color="orange" />
        </Card.Header>
        <Card.Meta>{entry.healthCheckRating}</Card.Meta>
        <Card.Description>
          <i>{entry.description}</i>
        </Card.Description>
        <Card.Meta>
          <Icon name="heart" color='red'/>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

const EntryComp: React.FC<{ entry: Entry }> = ({ entry }) => {
  switch (entry.type) {
    case 'Hospital':
      return <HospitalEntry entry={entry} />;
    case 'HealthCheck':
      return <HealthCheckEntry entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcareEntry entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryComp;
