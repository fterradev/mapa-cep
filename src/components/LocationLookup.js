import React, { PureComponent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { lookupLocation } from '../helper';

class LocationLookup extends PureComponent {
  state = {
    location: null,
    inputCep: null
  };

  findLocation = () => {
    lookupLocation(this.state.inputCep).then(location =>
      this.setState({ location })
    );
  };

  render() {
    const { location } = this.state;
    const { render } = this.props;
    return (
      <div>
        <Segment>
          <Form onSubmit={this.findLocation}>
            <Form.Group>
              <Form.Input
                inline
                label="CEP"
                type="text"
                onChange={e =>
                  this.setState({
                    inputCep: e.target.value
                  })
                }
              />
              <Button type="submit">Buscar</Button>
            </Form.Group>
          </Form>
        </Segment>
        {location && render(JSON.stringify(location))}
      </div>
    );
  }
}

export default LocationLookup;
