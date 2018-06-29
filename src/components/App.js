import React, { PureComponent } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import LocationLookup from './LocationLookup';

class App extends PureComponent {
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
