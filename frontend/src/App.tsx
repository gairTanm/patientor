import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { Button, Divider, Header, Container } from 'semantic-ui-react';

import { apiBaseUrl } from './constants';
import { useStateValue } from './state';
import { Diagnosis, Patient } from './types';

import PatientListPage from './PatientListPage';
import PatientDisp from './components/PatientDisp';

const App: React.FC = () => {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
          
        );
        const {data: diagnosesList} = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`)
        dispatch({ type: 'SET_PATIENT_LIST', payload: patientListFromApi });
        dispatch({type: 'SET_DIAGNOSES', payload: diagnosesList})
      } catch (e) {
        console.error(e);
      }
    };
    fetchPatientList();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Container textAlign='center'>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/patients/:id">
              <PatientDisp />
            </Route>
            <Route path="/" render={() => <PatientListPage />} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
