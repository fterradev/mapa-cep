import React, { PureComponent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class LocationLookup extends PureComponent {
  state = {
    location: null
  };

  render() {
    const { location } = this.state;
    const { render } = this.props;
    return (
      <div>
        <Segment>
          <Form>
            <Form.Group>
              <Form.Input
                inline
                label="CEP"
                type="text"
              />
              <Button>
                Buscar
              </Button>
            </Form.Group>
          </Form>
        </Segment>
        {location && render(location)}
      </div>
    );
  }
}

export default LocationLookup;
