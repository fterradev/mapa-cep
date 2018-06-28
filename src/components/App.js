import React, { PureComponent } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';

class App extends PureComponent {
  render() {
    return (
      <Container>
        <Header as='h1'>Consulta de endereço</Header>
        <Segment>
          Lookup form
        </Segment>
        <Segment>
          Map
        </Segment>
      </Container>
    );
  }
}

export default App;
