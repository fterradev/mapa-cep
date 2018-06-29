import React, { PureComponent } from 'react';
import { Segment, Button } from 'semantic-ui-react';

class LocationMap extends PureComponent {
  render() {
    const { isOpen, onClose, description } = this.props;
    return (
      (isOpen && (
        <Segment>
          <Button icon="close" floated="right" onClick={onClose} />
          {description}
          />
        </Segment>
      )) ||
      null
    );
  }
}

export default LocationMap;
