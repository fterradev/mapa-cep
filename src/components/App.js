import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import AddressLookup from './AddressLookup';
import LocationMap from './LocationMap';

const App = props => (
  <Container>
    <Header as="h1">Consulta de endereço</Header>
    <AddressLookup
      renderResult={address => <LocationMap address={address} />}
    />
  </Container>
);

export default App;
