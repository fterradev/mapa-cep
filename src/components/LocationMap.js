import React, { PureComponent } from 'react';
import { Header, List } from 'semantic-ui-react';

const ListItem = ({ children }) => (
  <List.Item style={{ fontSize: '1.1em' }}>{children}</List.Item>
);

class LocationMap extends PureComponent {
  render() {
    const { address } = this.props;
    return (
      <div>
        <Header as="h2">{address.logradouro}</Header>
        <List>
          <ListItem>{address.bairro}</ListItem>
          <ListItem>{address.localidade} - {address.uf}</ListItem>
          <ListItem>{address.cep}</ListItem>
        </List>
      </div>
    );
  }
}

export default LocationMap;
