import React from 'react';
import { Header, List, Loader } from 'semantic-ui-react';
import LoadingImage from './LoadingImage';
import PropTypes from 'prop-types';

const ListItem = ({ children }) => (
  <List.Item style={{ fontSize: '1.1em' }}>{children}</List.Item>
);

const loadingElement = <Loader active inline />;

const LocationMap = ({ address }) => (
  <div>
    <Header as="h2">{address.logradouro}</Header>
    <List>
      <ListItem>{address.bairro}</ListItem>
      <ListItem>
        {address.localidade} - {address.uf}
      </ListItem>
      <ListItem>{address.cep}</ListItem>
    </List>
    <LoadingImage
      src={`https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&markers=${
        address.cep
      }&key=AIzaSyDchVfbHFmTd_XgIAb3E1GM5SWT1u7cvnU`}
      loadingElement={loadingElement}
    />
  </div>
);

LocationMap.propTypes = {
  address: PropTypes.object.isRequired
};

export default LocationMap;
