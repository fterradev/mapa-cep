import React, { PureComponent } from 'react';
import { Container, Header } from 'semantic-ui-react';
import LocationLookup from './LocationLookup';
import LocationMap from './LocationMap';

class App extends PureComponent {
  state = {
    mapIsOpen: true
  };

  render() {
    return (
      <Container>
        <Header as="h1">Consulta de endereço</Header>
        <LocationLookup
          render={location => (
            <LocationMap
              isOpen={this.state.mapIsOpen}
              location={location}
              description={JSON.stringify(location)}
              mapElement={<div style={{ height: `100%` }} />}
              onClose={() =>
                this.setState({
                  mapIsOpen: false
                })
              }
            />
          )}
        />
      </Container>
    );
  }
}

export default App;
