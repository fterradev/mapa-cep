import React, { PureComponent } from 'react';
import { Header, List } from 'semantic-ui-react';

const ListItem = ({ children }) => (
  <List.Item style={{ fontSize: '1.1em' }}>{children}</List.Item>
);

class LocationMap extends PureComponent {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Header as="h2">{location.logradouro}</Header>
        <List>
          <ListItem>{location.bairro}</ListItem>
          <ListItem>{location.localidade} - {location.uf}</ListItem>
          <ListItem>{location.cep}</ListItem>
        </List>
      </div>
    );
  }
}

export default LocationMap;
