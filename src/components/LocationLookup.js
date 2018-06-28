import React, { PureComponent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class LocationLookup extends PureComponent {
  render() {
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
      </div>
    );
  }
}

export default LocationLookup;
