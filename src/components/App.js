import React, { PureComponent } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import LocationLookup from './LocationLookup';
import { lookupLocation } from '../helper';

class App extends PureComponent {
  componentDidMount() {
    lookupLocation('02050010')
    .then(x => console.log(x))
    .catch(x => console.log(x));
  }
  
  render() {
    return (
      <Container>
        <Header as='h1'>Consulta de endereço</Header>
        <LocationLookup render={location => (
          <Segment>
            {location}
          </Segment>
        )} />
      </Container>
    );
  }
}

export default App;
