import React, { PureComponent } from 'react';
import { Container, Header } from 'semantic-ui-react';
import LocationLookup from './LocationLookup';
import LocationMap from './LocationMap';

class App extends PureComponent {
  render() {
    return (
      <Container>
        <Header as="h1">Consulta de endereço</Header>
        <LocationLookup
          renderResult={location => (
            <LocationMap
              location={location}
              description={JSON.stringify(location)}
            />
          )}
        />
      </Container>
    );
  }
}

export default App;
